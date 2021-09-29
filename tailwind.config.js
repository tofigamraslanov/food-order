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
        brand: '#8a2b06',
        icon: '#4d1601',
        hover: '#2c0d00;',
        badge: '#b94517;',
        'badge-hover': '#92320c',
      },
      spacing: {
        25: '25rem',
      },
      padding: {
        '10%': '10%',
      },
      fontSize: {
        '3.5xl': '2rem',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
