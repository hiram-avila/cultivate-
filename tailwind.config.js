/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': '#2B5D34',
        'leaf': '#5C9E6E',
        'cream': '#F9F6EF',
        'coffee': '#6F4E37',
        'lemon': '#F5D553',
        'avocado': '#87A96B',
      },
    },
  },
  plugins: [],
};