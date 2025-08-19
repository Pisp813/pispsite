"# Portfolio Website

A professional portfolio website built with React, featuring multiple pages and smooth navigation.

## Features

- **Multi-page Navigation**: Home, About, Projects, and Contact pages
- **Responsive Design**: Mobile-friendly layout that works on all devices
- **Modern UI**: Clean, professional design with smooth transitions
- **React Router**: Seamless client-side routing

## Pages

### Home
- Hero section with introduction
- About section overview
- Projects showcase
- Contact information

### About
- Detailed professional background
- Skills and expertise
- Professional experience

### Projects
- Showcase of key projects
- Project descriptions and technologies used
- Interactive project cards

### Contact
- Contact information
- Professional email address

## Technologies Used

- **React 19**: Frontend framework
- **React Router**: Client-side routing
- **Vite**: Build tool and development server
- **CSS3**: Modern styling with responsive design

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Deployment

This project is deployed on Vercel for easy access and automatic deployments.

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your GitHub repository to Vercel
3. Vercel will automatically build and deploy your site

## Project Structure

```
src/
├── components/
│   ├── header.jsx      # Navigation header
│   ├── hero.jsx        # Hero section
│   ├── about.jsx       # About page
│   ├── projects.jsx    # Projects page
│   ├── contact.jsx     # Contact page
│   └── footer.jsx      # Footer component
├── App.jsx            # Main app with routing
├── App.css            # Global styles
└── main.jsx           # React entry point
```

## Customization

### Adding New Pages

1. Create a new component in `src/components/`
2. Add the route in `App.jsx`
3. Add navigation link in `header.jsx`

### Styling

All styles are contained in `App.css`. You can modify the color scheme, layout, and responsive breakpoints as needed.

## License

This project is open source and available under the [MIT License](LICENSE)."
