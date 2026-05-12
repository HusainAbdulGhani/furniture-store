/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      colors: {
        brand: {
          dark: '#1a1208',
          gold: '#c8a96e',
          cream: '#fffdf9',
          muted: '#7a6e60',
        },
      },
    },
  },
  plugins: [],
};
