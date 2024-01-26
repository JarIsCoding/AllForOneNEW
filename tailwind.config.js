/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    './pages/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'one': '#CCFFDD',
        'two': '#CCDDFF',
        'three': '#DCCCFF',
        'four': '#FECCFF',
        'five': '#FFCCCF',
        'six': '#FFEECC',
        'seven': '#FFD8F6',
        'eight': '#FFFDCC',
        'nine': '#CCFFFC',
        'ten': '#DFFFCC',
        'eleven': '#CCFFDD',

        'onel': '#DCFFE7',
        'twol': '#DCE8FF',
        'threel': '#E7DCFF',
        'fourl': '#FEDCFF',
        'fivel': '#FFDCDE',
        'sixl': '#FFF3DC',
        'sevenl': '#FFE4F9',
        'eightl': '#FFFEDC',
        'ninel': '#DCFFFD',
        'tenl': '#E9FFDC',
        'elevenl': '#DCFFE7',

        'twob': '#A3C1FF',
        'threeb': '#CBB3FF',
        'fourb': '#FDADFF',
        'fiveb': '#FFA8AD',
        'sixb': '#FFE5B0',
        'sevenb': '#FFB6EE',
        'eightb': '#FFFBA0',
        'nineb': '#A4FFFA',
        'tenb': '#CDFFAF',
        'elevenb': '#A2FFC1',
      },
    },
  },
  plugins: [],
}

