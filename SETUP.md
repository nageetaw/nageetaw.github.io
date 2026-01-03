# Setup Instructions

## Asset Files

For Vite to serve static assets correctly, you need to ensure your assets are in the `public` folder. The current project structure has assets in the root directory. You have two options:

### Option 1: Move assets to public folder (Recommended)
1. Create a `public` folder in the root directory
2. Move the `assets`, `images`, `fonts`, `css`, and `js` folders into the `public` folder
3. The paths in the React components will work as-is (they reference `/assets/...`)

### Option 2: Keep assets in root (for GitHub Pages)
If you're deploying to GitHub Pages and want to keep the current structure:
- The assets will be accessible, but you may need to adjust paths
- Consider using relative paths or updating the vite config

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

The built files will be in the `dist` folder, ready for deployment.

## Deployment to GitHub Pages

After building, you can deploy the `dist` folder to GitHub Pages. The `base: './'` configuration in `vite.config.js` ensures relative paths work correctly.

