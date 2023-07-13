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
      },
      fontSize: {
        "h1": "64px",
        "h2": "44px",
        "h3": "21px",
        "h4": "20px",
        "h5": "19px",
        "h6": "14px",
        "btn-text": "16px",
        "nav-items": "30px",
        "parrafo": "16px",
        "lista": "20px"
      }
    },
  },
  plugins: [],
}