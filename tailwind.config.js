/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'ral': 'var(--ral)',
        'pop': 'var(--pop)',
        'pop-light': 'var(--pop-light)'
      }
    },
  },
  plugins: [],
}

