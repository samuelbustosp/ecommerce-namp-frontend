/** @type {import('tailwindcss').Config} */
const flowbite = require("flowbite-react/tailwind");
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors: {
        'side': '#171717', 
        'customColorHover':'#0b1c4f',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

