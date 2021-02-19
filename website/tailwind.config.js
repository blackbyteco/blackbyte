module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  // Define user theme below
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#80bdff',
          default: '#007bff',
          dark: '#003d80',
        },
        white: '#fafafa',
        gray: {
          light: '#d9d9d9',
          default: '#a6a6a6',
          dark: '#595959',
        },
        black: {
          light: '#394046',
          default: '#22262a',
          dark: '#090a0b',
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
