/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        colors: {
          sp_purple: '#755CDE',
          sp_orange: '#F6A560',
          sp_green: '#61c4b7',
          sp_red: '#EB7565',
          sp_pink: '#552049',
          sp_yellow: '#F39E9E',
          sp_black: '#030303',
          sp_grey: '#7A746E',
          sp_white: '#FFF7F0',
        },
        fontSize: {
          sp_bold: ['56px', '71px'],
        },
        width: {
          sp_sub_width: '730px'
        }
      },
    },
    plugins: [],
};
