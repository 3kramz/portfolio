module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'cormor': [ 'Cormorant Garamond', ],
      },
    }
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#570DF8",
        
"secondary": "#F000B8",
        
"accent": "#252734",
        
"neutral": "#858792",
        
"base-100": "#2a2c39",
        
"info": "#3ABFF8",
        
"success": "#36D399",
        
"warning": "#FBBD23",
        
"error": "#F87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],

}
