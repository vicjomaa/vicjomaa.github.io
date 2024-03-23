/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts,css}'],
  theme: {
    extend: {
      fontFamily: {
        newsreader: ["Newsreader", "serif"],
        mulish: ["Mulish", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'whiteP': '#f1ede8',
      'blackP': '#150c0f',
      'light-gray':'#EBEBEB',
      'orangeP':'#ED965B',
      'blueP':'#1c8fe6',
      'pinkP':'#DF8C82',
    },
  },
  plugins: [],
}


