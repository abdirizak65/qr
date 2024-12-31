/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
  ],
  theme: {
    fontFamily : {
      outfit : ['Outfit', 'serif'],

    },
    fontSize :{
    'preset-1' : ['22px',{
      lineHeight : '120%',
      letterSpacing : '0px',
      fontWeight : '700',

    }],
    'preset-2' : ['15x',{
      lineHeight : '140%',
      letterSpacing : '0.2px',
      fontWeight : '400',

    }],
    },
    spacing :{
      200 : '16px',
      300 : '24px',
      400 : '40px',

    },
    colors : {
      White: 'hsl(0, 0%, 100%)',
      slate : {
        300: 'hsl(212, 45%, 89%)',
        500: 'hsl(216, 15%, 48%)',
        900: 'hsl(218, 44%, 22%)',
      },
    },
    extend: {},
  },
  plugins: [],
}

