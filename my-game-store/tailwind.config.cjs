/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-yellow': '#FFC815',
        'dark-gray': '#292929',
        'medium-gray': '#585858',
      },
    },
  },
  plugins: [],
};