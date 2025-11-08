import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'data', 'content.json');

// Check if we're in a serverless environment (Vercel)
const isServerless = process.env.VERCEL === '1';

export async function GET() {
  try {
    // In serverless, try to read from KV first, fallback to file
    if (isServerless) {
      // Try Vercel KV if available
      if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        try {
          const { kv } = await import('@vercel/kv');
          const content = await kv.get('site-content');
          if (content) {
            return NextResponse.json(content);
          }
        } catch (kvError) {
          console.log('KV not available, falling back to file');
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
      if (process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
        try {
          const { kv } = await import('@vercel/kv');
          await kv.set('site-content', body.content);
          return NextResponse.json({ success: true });
        } catch (kvError) {
          console.error('KV storage error:', kvError);
          return NextResponse.json(
            { 
              error: 'Storage not configured. Please set up Vercel KV in your project settings.',
              details: 'In production, content storage requires Vercel KV. See ADMIN_README.md for setup instructions.'
            },
            { status: 500 }
          );
        }
      } else {
        // No KV configured - return error with instructions
        return NextResponse.json(
          { 
            error: 'Storage not configured for production',
            details: 'To enable content saving in production, set up Vercel KV:\n1. Go to Vercel Dashboard > Your Project > Storage\n2. Create a KV database\n3. Add KV_REST_API_URL and KV_REST_API_TOKEN to environment variables\n\nFor now, content changes will only work in local development.'
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
