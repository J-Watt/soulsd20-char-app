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
        'coal': '#333333',
        'blackish': '#191919',
        'concrete': '#ffffffcf',
      }
    },
  },
  plugins: [],
}
