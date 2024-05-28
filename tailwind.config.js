/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './components/*.{js,vue,ts}',
    './layouts/**/*.{js,vue,ts}',
    './layouts/*.{js,vue,ts}',
    './pages/**/*.{js,vue,ts}',
    './pages/*.{js,vue,ts}',
    './nuxt.config.ts',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#333333',
        blackish: '#191919',
        deepblue: '#292c33',
        teal: '#2d82a0',
        concrete: '#ffffffcf',
        borderlight: '#616161',
        disdark: '#202225',
        dismid: '#292b2f',
        dislight: '#2f3136',
        dispale: '#40444b',
      }
    },
  },
  plugins: [],
}
