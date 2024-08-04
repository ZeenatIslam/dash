/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*/.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#fe8886', // You can define multiple shades
          DEFAULT: '#f74846', // This will be your primary color
          dark: '#cc0300', // Optionally define a dark shade
        },
      },
    },
  },
  plugins: [],
}