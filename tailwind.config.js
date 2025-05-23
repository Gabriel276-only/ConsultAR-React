import flowbite from 'flowbite/plugin'; 

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ou 'media'
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbite],
};
