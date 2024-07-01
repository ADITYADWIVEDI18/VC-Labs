/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        grotesk : ["Space Grotesk", 'sans-serif'],
        bricol: ['Bricolage Grotesque', 'sans-serif'],
      },
      wordSpacing: {
        'extra-tight': '-0.1em',
        tight: '-0.05em',
        normal: '0em',
        wide: '0.05em',
        'extra-wide': '0.1em',
      },
    },
  },
  plugins: [],
}
