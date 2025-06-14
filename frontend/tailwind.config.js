// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      blush: '#fcd6d5',      // softer but more visible
      rose: '#f43f5e',       // Tailwind’s default rose
      petal: '#fecdd3',      // pastel pink
      ivory: '#fef6f9',
      plum: '#d8b4fe',
    },
    fontFamily: {
      fancy: ['Georgia', 'serif'],
    }
  },
},
  plugins: [],
}
