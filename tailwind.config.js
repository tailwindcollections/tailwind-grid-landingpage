module.exports = {
  mode : 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily : {
        sans : ['Poppins', 'sans-serif']
      },
      colors : {
        gray : {
          900 : '#1A1A1A'
        }
      },
      letterSpacing : {
        widest : '0.125rem'
      },
      lineHeight : {
        'extra-loose' : '2.5'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
