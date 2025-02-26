/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary-bg' : '#138ff4',
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#111827', // Dark gray
            'h1, h2, h3, h4, strong, bold': {
              color: '#000000', // Black for headings
            },
            'a': {
              color: '#1d4ed8', // Blue links
              textDecoration: 'none',
            },
            h1: { margin:0 }, 
            p: { margin:0 },
            ul: { marginBottom: '0.0rem' },
            li: { marginBottom: '0rem' },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography"),],
}