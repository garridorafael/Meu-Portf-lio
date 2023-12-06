/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'mobile': {'max': '470px'},
    },
    extend: {
      backgroundColor: {
        'gray-100': '#EEEEEE',
      },
      fontFamily:{
        'body':['Roboto'],
        'heading': ['Oswald']
      },
      width: {
        '21-375': '21.375rem',
      },
      height: {
        '18-875': '18.875rem',
      },
      spacing: {
        '2-375': '2.375rem',
      },
      colors: {
        'custom-gray': 'rgba(217, 217, 217, 0.4)',
      },

    },
  },
  plugins: [],
};
