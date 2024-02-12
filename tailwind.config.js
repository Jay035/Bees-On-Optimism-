/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "bodyImg": "url('./assets/close-up-yellow-glitter-textured-background.png')"
      }
    },
  },
  plugins: [],
}