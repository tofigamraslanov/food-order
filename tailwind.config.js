module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      width: {
        '8/7': '110%',
      },
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
        },
        gray: {
          350: '#ccc',
          650: '#383838',
        },
      },
      spacing: {
        25: '25rem',
      },
      padding: {
        '10%': '10%',
      },
      boxShadow: {
        md: '0 2px 8px rgb(0 0 0 / 25%)',
        '0.5xl': '0 1px 18px 10px rgb(0 0 0 / 25%)',
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
