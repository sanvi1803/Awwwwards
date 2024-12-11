/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        zentry: ['zentry', 'sans-serif'],
        general: ['general', 'sans-serif'],
        regular: ['regular', 'sans-serif'],
        'circular-web': ['circular-web', 'sans-serif'],
        'robert-medium': ['robert-medium', 'sans-serif'],
        'robert-regular': ['robert-regular', 'sans-serif'],
      },
      colors: {
        blue: {
          50: '#DFDFF0',
          75: '#D4DFF2',
          100: '#F0F2FA',
          200:'#010101',
          300:'#4FB7DD'
        },
        violet:{
          300:'#5724ff'
        },
        yellow:{
          100:'#BE983F',
          300:'#edff66'
        }
      }
    },
  },
  plugins: [],
}