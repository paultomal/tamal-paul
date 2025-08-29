# Tamal Paul - Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Responsive**: Mobile-first approach, works on all devices
- **Performance Optimized**: Fast loading with code splitting and lazy loading
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Smooth Animations**: Framer Motion powered animations with reduced motion support
- **Interactive**: Hover effects, scroll-triggered animations, and micro-interactions

## 🛠️ Tech Stack

- **Framework**: React 18+ with Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Deployment**: Vercel Ready

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/paultomal/portfolio.git
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Hero.jsx        # Hero section
│   ├── About.jsx       # About section
│   ├── Projects.jsx    # Projects showcase
│   ├── Contact.jsx     # Contact form
│   └── Layout.jsx      # Main layout wrapper
├── hooks/              # Custom React hooks
│   └── useScrollAnimation.js
├── utils/              # Utility functions
│   └── animations.js   # Animation variants
├── App.jsx            # Main App component
├── main.jsx           # Entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Content
Update the content in each component:
- **Hero.jsx**: Name, role, description
- **About.jsx**: Bio, skills, experience
- **Projects.jsx**: Project details and links
- **Contact.jsx**: Contact information

### Animations
Animation variants are defined in `src/utils/animations.js` and can be customized as needed.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Upload the `dist/` folder to your hosting provider

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: > 1024px (xl/2xl)

## ♿ Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Screen reader compatibility
- Proper focus management
- Reduced motion support

## 🎯 Performance Features

- Code splitting with React.lazy()
- Image optimization and lazy loading
- Minimal bundle size
- Fast initial paint
- Smooth 60fps animations

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/paultomal/portfolio/issues).

## 📞 Contact

- **Email**: tamal.paul.42123@gmail.com
- **LinkedIn**: [linkedin.com/in/paultamal1](https://www.linkedin.com/in/paultamal1/)
- **GitHub**: [github.com/paultomal](https://github.com/paultomal)
- **Twitter**: [x.com/TomalPaul4](https://x.com/TomalPaul4)

---

Made with ❤️ by Tamal Paul