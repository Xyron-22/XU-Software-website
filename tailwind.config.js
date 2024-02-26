/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerBackground': "url('./../src/assets/header-bg.jpg')",
        'projectsBackground': "url('./../src/assets/projectsBackground.jpg')"
      }
    },
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      'blue': "#535bf2",
      'white': "#FFFFFF",
      'black': "#000000"
    }
  },
  plugins: [],
}