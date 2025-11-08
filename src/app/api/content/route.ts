import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'data', 'content.json');

// Check if we're in a serverless environment (Vercel)
const isServerless = process.env.VERCEL === '1';

// Helper to get KV client - supports both Vercel KV and Upstash Redis
async function getKVClient() {
  // Try Vercel KV first (uses KV_REST_API_URL and KV_REST_API_TOKEN)
  // Vercel KV automatically uses environment variables, no initialization needed
  if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
    try {
      const { kv } = await import('@vercel/kv');
      // Vercel KV is already initialized with env vars
      return kv;
    } catch (error) {
      console.error('Failed to initialize Vercel KV:', error);
    }
  }
  
  // Try Upstash Redis (uses UPSTASH_REDIS_REST_URL and UPSTASH_REDIS_REST_TOKEN)
  if (process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN) {
    try {
      const { Redis } = await import('@upstash/redis');
      return new Redis({
        url: process.env.UPSTASH_REDIS_REST_URL,
        token: process.env.UPSTASH_REDIS_REST_TOKEN,
      });
    } catch (error) {
      console.error('Failed to initialize Upstash Redis:', error);
    }
  }
  
  return null;
}

export async function GET() {
  try {
    // In serverless, try to read from KV first, fallback to file
    if (isServerless) {
      const kvClient = await getKVClient();
      if (kvClient) {
        try {
          const content = await kvClient.get('site-content');
          if (content) {
            // If content is a string, parse it; otherwise return as-is
            return NextResponse.json(typeof content === 'string' ? JSON.parse(content) : content);
          }
        } catch (kvError) {
          console.log('KV read error, falling back to file:', kvError);
        }
      }
      
      // Fallback: read from bundled file (read-only, works in Vercel)
      try {
        const fileContents = await fs.readFile(CONTENT_FILE_PATH, 'utf8');
        return NextResponse.json(JSON.parse(fileContents));
      } catch (fileError) {
        console.error('Error reading content file:', fileError);
        return NextResponse.json(
          { error: 'Failed to read content' },
          { status: 500 }
        );
      }
    } else {
      // Local development: read from file
      const fileContents = await fs.readFile(CONTENT_FILE_PATH, 'utf8');
      const content = JSON.parse(fileContents);
      return NextResponse.json(content);
    }
  } catch (error) {
    console.error('Error reading content:', error);
    return NextResponse.json(
      { error: 'Failed to read content' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate that we have content to save
    if (!body.content) {
      return NextResponse.json(
        { error: 'Content is required' },
        { status: 400 }
      );
    }

    if (isServerless) {
      // In serverless (Vercel), use KV storage
      const kvClient = await getKVClient();
      
      if (kvClient) {
        try {
          await kvClient.set('site-content', JSON.stringify(body.content));
          return NextResponse.json({ success: true });
        } catch (kvError: any) {
          console.error('KV storage error:', kvError);
          return NextResponse.json(
            { 
              error: 'Failed to save to KV storage',
              details: kvError?.message || 'Unknown KV error. Please check your KV configuration and redeploy.',
            },
            { status: 500 }
          );
        }
      } else {
        // No KV configured - return error with instructions
        const hasVercelKV = !!(process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN);
        const hasUpstash = !!(process.env.UPSTASH_REDIS_REST_URL && process.env.UPSTASH_REDIS_REST_TOKEN);
        
        console.log('KV env vars check:', { 
          hasVercelKV,
          hasUpstash,
          vercel: process.env.VERCEL 
        });
        
        return NextResponse.json(
          { 
            error: 'Storage not configured for production',
            details: 'To enable content saving in production, set up storage:\n\nOption 1 - Vercel KV:\n1. Go to Vercel Dashboard > Your Project > Storage\n2. Create a KV database\n3. Environment variables will be added automatically\n4. Redeploy your project\n\nOption 2 - Upstash Redis:\n1. Go to Vercel Dashboard > Your Project > Integrations\n2. Add Upstash integration\n3. Create a Redis database\n4. Redeploy your project\n\nAfter setup, content changes will work in production.'
          },
          { status: 500 }
        );
      }
    } else {
      // Local development: write to file
      await fs.writeFile(
        CONTENT_FILE_PATH,
        JSON.stringify(body.content, null, 2),
        'utf8'
      );
      return NextResponse.json({ success: true });
    }
  } catch (error) {
    console.error('Error saving content:', error);
    return NextResponse.json(
      { error: 'Failed to save content', details: error instanceof Error ? error.message : 'Unknown error' },
      { status: 500 }
    );
  }
}
