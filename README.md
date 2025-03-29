# Shopify Developer Portfolio

A professional portfolio website for a freelance Shopify developer showcasing skills, services, and expertise in e-commerce development.

## Deployment Instructions for Netlify

### Troubleshooting Deployment Issues

If you're experiencing the "Could not resolve entry module 'index.html'" error during Netlify deployment, try one of these solutions:

### Option 1: Deploy from the Netlify UI (Recommended)

1. Push your code to a GitHub repository
2. Log in to Netlify and click "Add new site" > "Import an existing project"
3. Select GitHub and authorize Netlify
4. Choose your repository
5. **Important**: In the build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Set Node.js version to 20.x in the environment variables section
6. Click "Deploy site"

### Option 2: Direct Upload to Netlify

1. Run the build script locally:
   ```
   node build.js
   ```
2. This creates a minimal `dist` folder with the necessary files
3. Log in to Netlify and go to Sites
4. Drag and drop the `dist` folder directly onto the Netlify UI
5. Your site will be deployed immediately

### Option 3: Use Create React App or Next.js

If the above options don't work, consider migrating the project to Create React App or Next.js, which have simpler deployment processes with Netlify.

## Features

- Modern, responsive design
- Contact form (powered by Netlify Forms)
- Services showcase
- About section highlighting expertise
- Ideal clients section

## Technology Stack

- React
- TypeScript
- Tailwind CSS
- Shadcn UI Components
- Framer Motion
- Netlify for hosting

## Need Help?

If you continue to have deployment issues, you can:
1. Check the Netlify build logs for specific errors
2. Enable verbose build output in Netlify settings
3. Contact Netlify support with the build log details