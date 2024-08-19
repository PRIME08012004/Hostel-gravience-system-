/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation:{
        'scale-pulse' : 'scalepulse 2s infinite'
      },
      keyframes : {
        scalepulse : {
          '0% , 100%' : { transfrom : 'scale(1)'},
          '50%' : { transform : 'scale(1.2)'}
        }
      }
    },
  },
  plugins: [],
}

