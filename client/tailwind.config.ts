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
        "primary-color-light": "#FFF2ED",
        "secondary-color": "#0D5C63",
        "tertiary-color": "#17213C",
        "dark-color": "#121312",
        "white-color": "#F9FAFC"
      }
    },
    fontSize: {
      "3xl": "64px",
      "2xl": "44px",
      "xg": "24px",
      "lg": "20px",
      "base": "19px",
      "sm": "14px",
      "btn-text": "16px",
      "nav-items": "30px",
      "lista": "20px", 
      "parrafo": "18px",
      "h1": "64px",
      "h2": "44px",
      "h3": "24px",
      "h4": "20px"
    }
  },
  plugins: [],
}