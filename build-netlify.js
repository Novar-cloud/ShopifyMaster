import { execSync } from 'child_process';
import { createRequire } from 'module';
import { readFileSync, writeFileSync, copyFileSync, existsSync, mkdirSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ensure dist directory exists
if (!existsSync(join(__dirname, 'dist'))) {
  mkdirSync(join(__dirname, 'dist'));
}

// Copy the Netlify package.json to the root for building
const packageJson = JSON.parse(readFileSync(join(__dirname, 'package.netlify.json'), 'utf8'));
writeFileSync(join(__dirname, 'package.json.bak'), readFileSync(join(__dirname, 'package.json'), 'utf8'));
writeFileSync(join(__dirname, 'package.json'), JSON.stringify(packageJson, null, 2));

try {
  // Run Vite build with the Netlify config
  console.log('Building frontend...');
  execSync('npx vite build --config client/vite.config.netlify.ts', { stdio: 'inherit' });
  
  // Copy index.html to dist
  console.log('Copying files...');
  copyFileSync(join(__dirname, 'client/index.html'), join(__dirname, 'dist/index.html'));
  
  console.log('Build completed successfully!');
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
} finally {
  // Restore original package.json
  writeFileSync(join(__dirname, 'package.json'), readFileSync(join(__dirname, 'package.json.bak'), 'utf8'));
  
  // Clean up
  try {
    execSync('rm package.json.bak', { stdio: 'inherit' });
  } catch (error) {
    console.error('Error cleaning up:', error);
  }
}