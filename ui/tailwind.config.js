/** @type {import('tailwindcss').Config} */
// module.exports = {
//   theme: {
//     screens: {
//       'xxs': '2px',
//       // => @media (min-width: 640px) { ... }
//     }}}
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif,', 'Circular-std'],
      },
      
    },
    
  },
  plugins: [],
}

