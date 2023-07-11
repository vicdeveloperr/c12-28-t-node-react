/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FF7B47",
        "secondary-color": "#0D5C63",
        "tertiary color": "#17213C",
        "dark-color": "#17213C",
        "white-color": "#f9f9f9"
      }
    },
  },
  plugins: [],
}

