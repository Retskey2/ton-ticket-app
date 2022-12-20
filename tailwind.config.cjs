module.exports = {
  content:["./src/**/*.{js,jsx,tsx}"],
  theme: {
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
      }
    },
  },
  plugins: [],
}
