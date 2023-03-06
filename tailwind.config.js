/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: {
      colors: {
        'my-gray': '#31393C',
        'my-yellow': '#FFBA08',
        'my-white': '#CECCCC',
        'my-lightGray': '#D9D9D9',
      },
    },
  },
  plugins: [],
}
