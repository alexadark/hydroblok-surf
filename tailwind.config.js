/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Oswald, sans-serif',
      },
      fontWeight: {
        heading: 'bold',
      },
      colors: {
        primary: '#E3FC02',
        dark: '#1F1F21',
      },
    },
  },
  plugins: [],
};
