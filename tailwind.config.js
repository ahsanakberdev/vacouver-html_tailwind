/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    container: {
      center: true,
    },
    borderColor: theme => ({
       ...theme('colors'), 
       'lightColor222' : "#152A50",
      }),
    placeholderColor: {
      'lightColor' : "#152A50",
    },
    extend: {
      colors: {
        'primary': '#152A50',
        'darkColor' : "#222222",
        'secondary' : "#FEDA5D",
        'lightcolorr' : "#E5F4F5",
      },
      fontFamily : {
        Monsterrat : ['Montserrat'],
        Bebas : ['Bebas Neue'],
       
      },
      backgroundImage: {
        'banner': "url('../src/img/banner.png')",
        'footer-bg': "url('../src/img/footer_bg.png')",
        'footer-mob-bg' : "url('../src/img/footer_bg_mob.png')"
      }
    },
  },
  plugins: [],
}
