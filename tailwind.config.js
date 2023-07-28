/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#191919',
        'text-primary': '#FAFAFA',
        'nav-primary': '#E3350D',
        'pokemon-types': {
          normal: '#9fa39d',
          fighting: '#ff215b',
          flying: '#89bdff',
          poison: '#f149ff',
          ground: '#ff6b0d',
          rock: '#d8bc5a',
          bug: '#7bcf00',
          ghost: '#4e6aff',
          steel: '#23a1bd',
          fire: '#ff9900',
          water: '#14a8ff',
          grass: '#1cd80e',
          electric: '#ffde00',
          psychic: '#ff6c64',
          ice: '#2ee4c6',
          dragon: '#0076ff',
          dark: '#5a566a',
          fairy: '#ff76ff'
        }
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }
  },
  plugins: []
};
