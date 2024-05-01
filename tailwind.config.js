/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      backgroundImage:{
        "image":"url('/src/Media/bg-image.png')",
        "left":"url('/src/Media/left.png')"
      }
    },
  },
  plugins: [],
}

