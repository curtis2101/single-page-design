/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        jakartaL:['Plus Jakarta Sans', 'sans-serif'],
        jakartaM:['Plus Jakarta Sans', 'sans-serif']
      },
      colors: {
        black:'#030303',
        blue:'#755CDE',
        orange:'#F6A560',
        pink:'#F39E9E',
        red:'#EB7565',
        green:'#61C4B7',
        purple:'#552049',
        grey:'#7A746E',
        beige:'#FFF7F0'

    },
  },
  plugins: [],
}}
