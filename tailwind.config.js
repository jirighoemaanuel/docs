/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-100': 'rgb(28, 28, 28)',
        'dark-75': 'rgba(28, 28, 28, .75)',
        'dark-50': 'rgba(28, 28, 28, .5)',
        'dark-0': 'rgba(28, 28, 28, 0)',
        'light-100': 'rgb(255, 255, 255)',
        'light-75': 'rgba(255, 255, 255, .75)',
        'light-50': 'rgba(255, 255, 255, .5)',
        'light-30': 'rgba(255, 255, 255, .3)',
        'light-10': 'rgba(255, 255, 255, .1)',
        'light-5': 'hsla(0, 0%, 100%, .05)',
        'light-0': 'rgba(255, 255, 255, 0)',
        'gray-dark': 'rgb(23, 23, 23)',
        'gray-darker': 'rgb(46, 46, 46)',
        'gray-light': 'rgb(212, 212, 212)',
        gray: 'rgb(44, 44, 44)',
        'gray-0': 'rgba(44, 44, 44, 0)',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        xxs: '0.6rem',
        xxxs: '0.5rem',
      },
      width: {
        75: '18.0rem',
      },
      animation: {
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        2000: '2000ms',
      },
      keyframes: {
        pulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      textColor: ['placeholder'],
    },
  },
  plugins: [],
};
