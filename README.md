# Portfolio Website with Decap CMS

A static portfolio website with content management capabilities using Decap CMS.

## Features

- Blog posts management
- Projects showcase
- Certifications display
- About page
- Responsive design
- Git-based content management

## Setup

### 1. Deploy to Netlify (Recommended)

1. Push this repository to GitHub
2. Go to [Netlify](https://netlify.com) and sign up/login
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repository
5. Deploy settings:
   - Build command: (leave empty)
   - Publish directory: `/`
6. Click "Deploy site"

### 2. Enable Decap CMS

After deploying to Netlify:

1. Go to your site settings in Netlify
2. Navigate to "Identity" and click "Enable Identity"
3. Under "Registration preferences", select "Invite only"
4. Go to "Services" → "Git Gateway" and enable it
5. Invite yourself: Identity tab → "Invite users"
6. Access your CMS at: `https://your-site.netlify.app/admin`

### 3. Local Development

For local development, you can use any static server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000`

## Content Management

Access the CMS at `/admin` after deployment. You can:

- Create and edit blog posts
- Add/update projects
- Manage certifications
- Update your about page

## Customization

- Edit `css/style.css` for styling
- Modify `index.html` for structure
- Update `js/main.js` for functionality
- Configure `admin/config.yml` for CMS settings

## Alternative Deployment Options

### GitHub Pages
1. Go to repository Settings → Pages
2. Select branch: `main`, folder: `/ (root)`
3. Save and wait for deployment

### Vercel
1. Import your GitHub repository
2. Deploy with default settings

## License

MIT
