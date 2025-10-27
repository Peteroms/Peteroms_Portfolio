# AI Agent Instructions for Prologue Portfolio Template

This is a single-page responsive portfolio website template based on HTML5 UP's Prologue design. Here's what you need to know to work effectively with this codebase:

## Architecture Overview

- **Single Page Structure**: The entire site content is in `index.html`, organized into sections with IDs (`#top`, `#portfolio`, `#about`, `#contact`)
- **Sticky Sidebar**: Contains navigation and social links (`#header` div)
- **Section Navigation**: Uses jQuery scrollex/scrolly for smooth section transitions

## Key Components

### CSS/SASS Structure
- Main styles: `assets/sass/main.scss`
- Modular SASS components in `assets/sass/libs/`:
  - `_breakpoints.scss`: Responsive breakpoints (mobile: <736px, narrower: 737-960px, etc.)
  - `_vars.scss`: Global variables and theme settings
  - `_functions.scss`: Utility functions for SASS processing

### JavaScript
- `assets/js/main.js`: Core functionality
  - Page load animations
  - Navigation handling
  - Breakpoint management
- Dependencies in `assets/js/`:
  - jQuery for DOM manipulation
  - jquery.scrollex/scrolly for smooth scrolling
  - breakpoints.min.js for responsive design
  - util.js for utility functions

## Common Tasks

### Adding a New Section
1. Create section in `index.html` following existing pattern:
   ```html
   <section id="newsection" class="one">
     <div class="container">
       <!-- Content here -->
     </div>
   </section>
   ```
2. Add nav link in `#nav` section:
   ```html
   <li><a href="#newsection" id="newsection-link">
     <span class="icon solid fa-whatever">Section Name</span>
   </a></li>
   ```

### Styling Guidelines
- Use SASS mixins from `_mixins.scss` for consistency
- Follow existing breakpoint patterns for responsive design
- Icons use Font Awesome (classes like `fa-solid`, `fa-brands`)

### Contact Form Integration
- Form submission handled through formspree.io
- Update form action attribute with your formspree endpoint

## External Dependencies
- Font Awesome for icons (`fontawesome-all.min.css`)
- Google Fonts: Source Sans Pro (300, 300italic, 400, 600)
- jQuery + plugins (scrollex, scrolly)

## File Organization
```
assets/
├── css/          # Compiled CSS
├── sass/         # Source SASS files
├── js/           # JavaScript files
└── webfonts/     # Font Awesome files
images/           # Content images
```

Note: When modifying styles, edit SASS files in `assets/sass/` rather than the compiled CSS.