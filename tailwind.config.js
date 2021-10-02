module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        red: {
          750: '#641e03',
          850: '#4d1601',
          950: '#2c0d00',
        },
        yellow: {
          550: '#ad5502',
          650: '#b94517',
          750: '#8a2b06',
          850: '#92320c',
          950: '#641e03',
          980: '#5a1a01',
        },
        gray: {
          350: '#ccc',
          650: '#383838',
          750: '#363636',
          950: ' rgba(0, 0, 0, 0.75)',
        },
      },
      spacing: {
        25: '25rem',
        '5%': '5%',
        '10%': '10%',
        '8/7': '110%',
      },
      boxShadow: {
        md: '0 2px 8px rgb(0 0 0 / 25%)',
        '0.5xl': '0 1px 18px 10px rgb(0 0 0 / 25%)',
      },
      keyframes: {
        'slide-down': {
          from: { opacity: 0, transform: 'translateY(-3rem)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        'meals-appear': {
          from: { opacity: 0, transform: 'translateY(3rem)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        bump: {
          '0%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(0.9)' },
          '30%': { transform: 'scale(1.1)' },
          '50%': { transform: 'scale(1.15)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      animation: {
        'slide-down': 'slide-down 300ms ease-out forwards',
        'meals-appear': 'meals-appear 1s ease-out forwards',
        bump: 'bump 300ms ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
