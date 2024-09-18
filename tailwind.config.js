/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
    extend: {
      colors: {
        'primaryFont': '#D91656',
        'secondaryColor': '#227B94'
      },
      fontFamily: {
        'primaryFont': ['Figtree', 'sans-serif'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}