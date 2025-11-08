import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const ADMIN_FILE_PATH = path.join(process.cwd(), 'data', 'admin.json');

// Simple password-based authentication
export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Default password if file doesn't exist
    let adminData;
    try {
      const fileContents = await fs.readFile(ADMIN_FILE_PATH, 'utf8');
      adminData = JSON.parse(fileContents);
    } catch {
      // Create default admin file
      adminData = { password: 'admin123' }; // Change this default password!
      await fs.writeFile(
        ADMIN_FILE_PATH,
        JSON.stringify(adminData, null, 2),
        'utf8'
      );
    }

    if (password === adminData.password) {
      // In a real app, you'd use proper session management
      // For simplicity, we'll just return success
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

