# SwipeToTip Templates Landing Page

A modern, responsive landing page for SwipeToTip's template download feature. Built with React, Vite, and Tailwind CSS.

![SwipeToTip Templates](https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=400&fit=crop&q=80)

## 🚀 Features

- **Modern Design**: Dark theme with vibrant accent colors and smooth animations
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Interactive Templates**: Browse and download professional tipping templates
- **Smooth Scrolling**: Parallax effects and scroll-triggered animations
- **Template Showcase**: 6+ pre-built templates for different business types
- **Step-by-Step Guide**: Clear instructions on how to use the templates
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

## 🛠️ Installation

1. **Clone or download this project**

2. **Navigate to the project directory**
   ```bash
   cd swipetotip-templates
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

## 🏃 Running the Project

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```
or
```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### Build for Production

Create an optimized production build:

```bash
npm run build
```
or
```bash
yarn build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```
or
```bash
yarn preview
```

## 📁 Project Structure

```
swipetotip-templates/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation bar with scroll effect
│   │   ├── Hero.jsx             # Hero section with animated background
│   │   ├── TemplateGrid.jsx    # Template showcase grid
│   │   ├── Features.jsx         # Features section
│   │   ├── HowToUse.jsx         # Step-by-step guide
│   │   └── Footer.jsx           # Footer with links
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles and Tailwind
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
├── postcss.config.js
└── README.md
```

## 🎨 Customization

### Colors

Edit the color scheme in `tailwind.config.js`:

```javascript
colors: {
  primary: '#0A0E27',      // Background
  accent1: '#FF6B35',      // Orange
  accent2: '#4ECDC4',      // Turquoise
  accent3: '#F7B731',      // Gold
  accent4: '#C44569',      // Pink
}
```

### Fonts

The project uses Google Fonts (Outfit & Space Mono). To change fonts, edit the import in `index.html` and update `tailwind.config.js`.

### Templates

Add or modify templates in `src/components/TemplateGrid.jsx`:

```javascript
const templates = [
  {
    id: 1,
    name: 'Your Template Name',
    category: 'Category',
    image: 'image-url',
    downloads: '1.5k',
    color: '#FF6B35',
    description: 'Description',
    features: ['Feature 1', 'Feature 2', 'Feature 3']
  },
  // Add more templates...
];
```

## 🌐 Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

### Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install -D gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Update `vite.config.js`:
   ```javascript
   export default defineConfig({
     base: '/your-repo-name/',
     plugins: [react()],
   })
   ```

4. Deploy:
   ```bash
   npm run deploy
   ```

## 🔧 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Google Fonts** - Typography (Outfit & Space Mono)

## 📱 Responsive Breakpoints

- Mobile: `< 640px`
- Tablet: `640px - 1024px`
- Desktop: `> 1024px`
- Large Desktop: `> 1440px`

## 🎯 Key Sections

1. **Hero Section** - Eye-catching introduction with animated background
2. **Template Grid** - Showcase of downloadable templates
3. **Features** - Key benefits and features
4. **How to Use** - Step-by-step guide
5. **Footer** - Links and contact information

## 🐛 Troubleshooting

### Port Already in Use

If port 5173 is already in use, Vite will automatically try the next available port. You can also specify a different port:

```bash
npm run dev -- --port 3000
```

### Styles Not Loading

Make sure Tailwind CSS is properly configured and `index.css` is imported in `main.jsx`.

### Images Not Showing

The project uses Unsplash images. Ensure you have an internet connection for images to load.

## 📄 License

This project is licensed under the MIT License.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Support

For questions or support, visit [SwipeToTip.com](https://www.swipetotip.com/) or email templates@swipetotip.com

## 🙏 Acknowledgments

- Design inspiration from [Vipps MobilePay Brand](https://brand.vippsmobilepay.com/)
- Images from [Unsplash](https://unsplash.com/)
- Icons from [Lucide](https://lucide.dev/)

---

**Made with ❤️ for SwipeToTip**# ST-SwipeToTip-Templates
