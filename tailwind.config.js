const daisyui = require('daisyui');
/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './app/**/*.{html,js,jsx}',
    './components/**/*.{html,js,jsx,ts,tsx}',
    './sections/**/*.{html,js,jsx}',
    './styles/**/*.{js,jsx}',
  ],
  mode: 'jit',
  theme: {
    fontFamily: {
      afrobeats: ['afrobeats', 'serif'],
    },
    extend: {
      colors: {
        'primary-black': '#1A232E',
        'secondary-white': '#c7c7c7',
      },
      transitionTimingFunction: {
        'out-flex': 'cubic-bezier(0.05, 0.6, 0.4, 0.9)',
      },
    },
  },
  // ...

    plugins: [daisyui],
  daisyui: {
    styled: 'false',
    themes: 'false',
    rtl: 'false',
    utils: 'false',
    logs: 'false',
    base: 'false',
    components: {
      progress: 'true',
    },
  },
});
