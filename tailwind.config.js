/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './app/*.tsx'],
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
      },
    },
  },
  plugins: [],
}
