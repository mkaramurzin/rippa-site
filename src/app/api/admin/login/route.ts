import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const ADMIN_FILE_PATH = path.join(process.cwd(), 'data', 'admin.json');
const isServerless = process.env.VERCEL === '1';

// Simple password-based authentication
export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Default password if file doesn't exist
    let adminData;
    
    if (isServerless && process.env.KV_REST_API_URL && process.env.KV_REST_API_TOKEN) {
      // Try KV first
      try {
        const { kv } = await import('@vercel/kv');
        adminData = await kv.get('admin-data');
        if (!adminData) {
          adminData = { password: process.env.ADMIN_PASSWORD || 'admin123' };
          await kv.set('admin-data', adminData);
        }
      } catch (kvError) {
        // Fallback to env var or default
        adminData = { password: process.env.ADMIN_PASSWORD || 'admin123' };
      }
    } else {
      // Local development: read from file
      try {
        const fileContents = await fs.readFile(ADMIN_FILE_PATH, 'utf8');
        adminData = JSON.parse(fileContents);
      } catch {
        // Create default admin file
        adminData = { password: process.env.ADMIN_PASSWORD || 'admin123' };
        if (!isServerless) {
          await fs.writeFile(
            ADMIN_FILE_PATH,
            JSON.stringify(adminData, null, 2),
            'utf8'
          );
        }
      }
    }

    if (password === adminData.password) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { error: 'Invalid password' },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error('Error during login:', error);
    return NextResponse.json(
      { error: 'Login failed' },
      { status: 500 }
    );
  }
}
