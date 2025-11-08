# Admin Interface Documentation

## Overview

This site includes a comprehensive admin interface that allows non-technical users to manage all site content without needing to edit code.

## Accessing the Admin Panel

1. Navigate to `/admin` on your website
2. Enter your admin password (default: `admin123`)
3. **Important**: Change the default password immediately after first login

## Features

### Homepage Content Management
- **Hero Section**: Edit the main banner text, title, and subtitle
- **Statistics**: Update the numbers and labels displayed in the stats bar
- **Advantages**: Modify the "Why Choose Us" section with titles and descriptions
- **Testimonials**: Add, edit, or remove customer testimonials

### Product Management
- Edit product names, tonnage, and power specifications
- Update product features (one per line)
- Modify technical specifications (dig depth, reach, width)
- Edit product descriptions using Markdown formatting

### Site Settings
- Update contact information (phone, email, address)
- Modify company name and tagline
- Edit footer content and links

## How to Use

1. **Login**: Go to `/admin` and enter your password
2. **Navigate**: Use the sidebar to select which section you want to edit
3. **Edit**: Make changes to any field - changes are saved locally in your browser
4. **Save**: Click "Save All Changes" button in the top right to persist your changes
5. **View**: Click "View Website" to see your changes live

## Important Notes

- **Always click "Save All Changes"** after making edits, otherwise your changes will be lost
- Changes take effect immediately after saving
- The site will fall back to default content if the content file is missing
- Product descriptions support Markdown formatting for rich text

## Security

- The admin password is stored in `data/admin.json`
- Change the default password immediately
- Keep your admin password secure
- The admin interface is accessible to anyone who knows the URL, so use a strong password

## File Structure

- Content is stored in: `data/content.json`
- Admin credentials: `data/admin.json`
- Admin interface: `src/app/admin/page.tsx`
- API routes: `src/app/api/content/route.ts`

## Troubleshooting

**Can't login?**
- Check that `data/admin.json` exists
- Default password is `admin123` if the file doesn't exist yet

**Changes not saving?**
- Make sure you clicked "Save All Changes"
- Check browser console for errors
- Verify `data/content.json` file permissions

**Content not updating on site?**
- Hard refresh your browser (Ctrl+F5 or Cmd+Shift+R)
- Check that the API route is working (`/api/content`)
- Verify the content file exists and is valid JSON

## Production Setup (Vercel)

**Important:** In production on Vercel, file writes don't work. You need to set up Vercel KV for content storage:

1. **Create Vercel KV Database:**
   - Go to your Vercel Dashboard
   - Select your project
   - Go to the "Storage" tab
   - Click "Create Database"
   - Select "KV" (Key-Value)
   - Create the database

2. **Add Environment Variables:**
   - Go to Project Settings > Environment Variables
   - Vercel should automatically add:
     - `KV_REST_API_URL`
     - `KV_REST_API_TOKEN`
   - If not, copy them from the KV database page

3. **Set Admin Password (Optional):**
   - Add `ADMIN_PASSWORD` environment variable with your desired password
   - If not set, defaults to `admin123`

4. **Redeploy:**
   - After adding environment variables, redeploy your project
   - The admin interface will now save content to KV storage

**Note:** Content reading works without KV (reads from bundled files), but saving requires KV in production.

## Support

For technical issues or questions about the admin interface, contact your developer.

