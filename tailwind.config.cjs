/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index","./src/**/*.{js,jsx}"],
  theme: {
    letterSpacing: {
      tightest: '-.06em',
      tighter: '-.05em',
      tight: '-.025em',
      normal: '0',
      wide: '.025em',
      wider: '.05em',
      widest: '.1em',
      widest: '.25em',
    },
    fontSize: {
      sm: ['24px', '20px'],
      base: ['17px', '24px'],
      lg: ['20px', '28px'],
      xl: ['24px', '32px'],
      xl: ['24px', '32px']
    },
    extend: {
      colors: {
        paleblue: {
          1: 'hsl(225, 100%, 94%)'
        },
        brightblue: {
          1: 'hsl(245, 75%, 52%)'
        },
        verypaleblue: {
          1: 'hsl(225, 100%, 98%)'
        },
        desaturatedblue: {
          1: 'hsl(224, 23%, 55%)'
        },
        darkblue: {
          1: 'hsl(223, 47%, 23%)'
        }
      },
      spacing: {
        '70': '32rem',
      }
    },
  },
  plugins: [],
}
