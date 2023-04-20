import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mirage': '#1A1B26',
        'vulcal': '#161421'
      },
    },
  },
  plugins: [
    plugin(function ({addUtilities}) {
      addUtilities({
        '.text-stroke': {
          '-webkit-text-stroke': '1px red',
          '-webkit-text-fill-color': 'transparent',
        },
        '.text-stroke-purple': {
          '-webkit-text-stroke': '1px #6B46C1',
          '-webkit-text-fill-color': 'transparent',
        },
        '.login-linear': {
          'linear-gradient': '(180deg, rgba(0, 0, 0, 0.8) 0%, #11091A 41.15%)'
        }
      })
    })
  ],
}