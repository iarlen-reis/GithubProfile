/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './app/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        title: 'SpaceMono_700Bold',
        body: 'SpaceMono_400Regular',
      },
      colors: {
        primary: '#1E2A47',
        secundary: '#141D2F',
        link: '#0079FF',
        backgroundLight: '#F2F2F2',
        linkLight: '#4B6A9B',
        textLight: '#697C9A',
        inputLight: '#FEFEFE',
        titleLight: '#2B3442',
      },
    },
  },
  plugins: [],
}
