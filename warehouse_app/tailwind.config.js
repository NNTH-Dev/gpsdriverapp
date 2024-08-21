const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './src/screens/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#74D951',
        primary: '#135281',
        silverCloud: '#F5F5F5',
        lightSilver: '#EAEAEA',
        ghostWhite: '#F6F8FA',
        lightGray: '#EEEEEE',
        platinumGray: '#F3F3F3',
        borderGray: '#CCC8C8',
        darkGray: '#353535',
        silverGray: '#d9d9d9',
        tealGreen: '#4A94A5',
        successGreen: '#4DCE21',
        lightSkyBlue: '#accbe3',
        lightBlue: '#EBF4FA',
        softAqua: '#8BBBDE',
        oceanBlue: '#307ab0',
      },
    },
  },
};
