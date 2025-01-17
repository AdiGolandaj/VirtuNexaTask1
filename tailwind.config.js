/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      clipPath: {
        diagonal: 'polygon(0 0, 70% 0, 30% 100%, 0% 100%)',
      },
      colors:{
        'l1':'#EEEEEE',
        'l2':'#D84040',
        'l3':'#8E1616',
        'l4':'#1D1616',
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio')
  ],
}