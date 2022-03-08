module.exports = {
  mode: 'jit',
  darkMode: 'class',
  content: [],
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1240px',
        },
      },
      colors: {
        bg: {
          DEFAULT: '#f8f9ff',
          card: '#f1f3fa',
        },
        darkBg: {
          DEFAULT: '#20222f',
          card: '#252b43',
          dark: '#1d2029',
        },
        facebook: '#1791f0',
        twitter: '#1da1f5',
        mainGreen: '#3fac8e',
      },
    },
  },
  plugins: [],
};
