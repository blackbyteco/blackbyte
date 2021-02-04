module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      secondary: 'var(--color-secondary)',
      negative: 'var(--color-negative)',
      positive: 'var(--color-positive)',
      'bg-light': 'var(--bg-light)',
      'bg-dark': 'var(--bg-dark)',
      'text-light': 'var(--color-text-light)',
      'text-dark': 'var(--color-text-dark)'
    },
    extend: {
      colors: {
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        negative: 'var(--color-negative)',
        positive: 'var(--color-positive)',
        'bg-light': 'var(--bg-light)',
        'bg-dark': 'var(--bg-dark)',
        'text-light': 'var(--color-text-light)',
        'text-dark': 'var(--color-text-dark)'
      }
    },
    backgroundColor: (theme) => ({
      ...theme('colors'),
    }),
  },
  variants: {
    backgroundColor: ['active'],
  },
  plugins: []
}

// :root {
//   --color-primary-100: theme('#e3f0ff');
//   --color-primary-200: theme('#aad3ff');
//   --color-primary-300: theme('#71b6ff');
//   --color-primary-400: theme('#3998ff');
//   --color-primary-500: theme('#007bff');
//   --color-primary-600: theme('#0060c6');
//   --color-primary-700: theme('#00448e');
//   --color-primary-800: theme('#002955');
//   --color-primary-900: theme('#000e1c');

//   --color-neutral-100: theme('#eff1f2');
//   --color-neutral-200: theme('#d0d4d9');
//   --color-neutral-300: theme('#b1b8bf');
//   --color-neutral-400: theme('#929ca6');
//   --color-neutral-500: theme('#737f8c');
//   --color-neutral-600: theme('#59636d');
//   --color-neutral-700: theme('#40474e');
//   --color-neutral-800: theme('#262a2f');
//   --color-neutral-900: theme('#0d0e10');
// }