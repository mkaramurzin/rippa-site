import { promises as fs } from 'fs';
import path from 'path';

const CONTENT_FILE_PATH = path.join(process.cwd(), 'data', 'content.json');

export async function getContent() {
  try {
    const fileContents = await fs.readFile(CONTENT_FILE_PATH, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading content:', error);
    // Return default content if file doesn't exist
    return null;
  }
}

