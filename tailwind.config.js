export const content = [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
];
export const theme = {
  extend: {
    colors: {
      customGreen: 'rgb(75, 158, 34)',
    },
  },

  screens: {

    'tablet': '300px',

    'desktop': '700px',
    
    'laptop': '1200px'
  },
  colors: {
    'blue': '#1fb6ff',
    'purple': '#7e5bef',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#8492a6',
    'gray-light': '#d3dce6',
  },
};
export const plugins = [];
