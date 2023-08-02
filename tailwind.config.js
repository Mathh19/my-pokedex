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
        'card-primary': '#434A54',
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
      },
      keyframes: {
        card: {
          '0%': { opacity: '0', transform: 'translateY(-1.5rem)' },
          '100%': { opacity: '1' }
        },
        pokeball: {
          '0%': {
            transform: 'translateX(-10px) rotate(-20deg)'
          },
          '50%': {
            transform: 'translateX(10px) rotate(20deg)'
          },
          '100%': {
            transform: 'translateX(-10px) rotate(-20deg)'
          }
        }
      },
      animation: {
        card: 'card 1s ease-in-out',
        'pokeball-loading': 'pokeball 1s ease-in-out infinite'
      }
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    }
  },
  plugins: []
};
