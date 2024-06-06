/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-black': '#0d0d0d',
       'my-gray': '#171717',
      },
    },
  },
  plugins: [],
}

