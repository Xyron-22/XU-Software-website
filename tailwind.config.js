/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'headerBackground': "url('./../src/assets/header-bg.jpg')",
        'projectsBackground': "url('./../src/assets/projectsBackground.jpg')",
        'waveBackground': "url('./../src/assets/layered-waves-haikei.svg')",
        'geoBackground': "url('./../src/assets/geometric-background.jpg')",
      }
    },
    screens: {
      xs: '360px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      lg1: '1000px',
      xl: '1440px',
    },
    colors: {
      'blue': "#535bf2",
      'white': "#FFFFFF",
      'black': "#000000",
      'gray': "#222b3c",
      "whiteSmoke": "#f5f5f5",
      "light": "#384256",
      "medium": "#2a3447",
      "lightGray": "#4B5466",
      "lightColor": "#7995A7",
      "mediumColor": "#4F616C",
      "whiteSmoke": "#DCDCDC",
      "limeGreen": "#00ff00",
      "redBrick": "#b22222"
    }
  },
  plugins: [],
})