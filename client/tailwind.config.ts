/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FF7B47",
        "primary-color-light": "#FFF2ED",
        "secondary-color": "#0D5C63",
        "tertiary-color": "#17213C",
        "dark-color": "#121312",
        "white-color": "#F9FAFC",
        "light-blue-color": "#D7FBFE"
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
      "lista": "20px"
    }
  },
  plugins: [
    //require('flowbite/plugin'),
  ],
}