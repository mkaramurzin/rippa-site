import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const ADMIN_FILE_PATH = path.join(process.cwd(), 'data', 'admin.json');

export async function POST(request: NextRequest) {
  try {
    const { currentPassword, newPassword } = await request.json();

    if (!newPassword || newPassword.length < 6) {
      return NextResponse.json(
        { error: 'New password must be at least 6 characters' },
        { status: 400 }
      );
    }

    // Read current admin data
    let adminData;
    try {
      const fileContents = await fs.readFile(ADMIN_FILE_PATH, 'utf8');
      adminData = JSON.parse(fileContents);
    } catch {
      return NextResponse.json(
        { error: 'Admin file not found' },
        { status: 404 }
      );
    }

    // Verify current password
    if (currentPassword !== adminData.password) {
      return NextResponse.json(
        { error: 'Current password is incorrect' },
        { status: 401 }
      );
    }

    // Update password
    adminData.password = newPassword;
    await fs.writeFile(
      ADMIN_FILE_PATH,
      JSON.stringify(adminData, null, 2),
      'utf8'
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error changing password:', error);
    return NextResponse.json(
      { error: 'Failed to change password' },
      { status: 500 }
    );
  }
}

