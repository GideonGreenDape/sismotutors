module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Navbackground': "url('./src/assets/navtemplate.svg')",
      },
      fontFamily: {
        mont: ['Mont', 'sans-serif'],
        ubuntu: ['Ubuntu','serif'] 
      },
      colors:{
        'darkgreen':"#0B4C44",
        'textdark': "#053C35",
        'logogreen' :"#00BC70",
        'textblue': '#274CDC',
     },
    },
  },
  plugins: [],
};
