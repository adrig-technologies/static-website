/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg) translate(-60%,-40%)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 25s ease-in-out infinite',
      }
    }
  },
  content: {
    files: ['./public/*.{html,js}'],
  },
}