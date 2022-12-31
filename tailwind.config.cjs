module.exports = {
  content:["./src/**/*.{js,jsx,tsx}"],
  theme: {
    screens: {
      sm: "280px",
      md: "330px",
      lg: "420px",
      xl: "720px",
    },
    extend: {
      gridTemplateColumns: {
        'item': '80px 1fr 100px',
      },
      keyframes: {
        'pulse': {
            '0%': {
               opacity: '.5',
            },
            '100%': {
                opacity: '1',
            },
          }
        },
      animation: {
        'appearance': 'pulse 0.4s cubic-bezier(0.4, 0, 0.6, 1)',
      },
      gridTemplateRows: {
        'page': '0.25fr 0.25fr 1fr 0.5fr',
      }
    },
  },
  plugins: [],
}
