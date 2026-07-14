import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, '../dist');
const destDir = path.resolve(__dirname, '../docs');

try {
  // Clean destDir if it exists
  if (fs.existsSync(destDir)) {
    fs.rmSync(destDir, { recursive: true, force: true });
  }

  // Copy dist to docs
  if (fs.existsSync(srcDir)) {
    fs.cpSync(srcDir, destDir, { recursive: true });
    console.log('Successfully copied dist to docs directory!');
  } else {
    console.error('Error: dist directory does not exist. Run build first.');
    process.exit(1);
  }
} catch (err) {
  console.error('Error copying dist to docs:', err);
  process.exit(1);
}
