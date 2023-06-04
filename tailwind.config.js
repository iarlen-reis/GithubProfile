/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx', './app/*.tsx'],
  theme: {
    extend: {
      fontFamily: {
        title: 'SpaceMono_700Bold',
        body: 'SpaceMono_400Regular',
      },
    },
  },
  plugins: [],
}
