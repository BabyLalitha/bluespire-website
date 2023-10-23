/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily:{
      poppins : ['Poppins', 'sans-serif'],
      kannit : ['Kannit', 'sans-serif']
    },
    extend: {
      colors: {
        blue: '#065593',
        'sky-blue': '#43D8FC',
        white: '#ffffff',
        primary: "#4A3AFF",
        secondaryGray: "5C5C5D"
      },
      fontFamily:{
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif']
      },
    },
    
  },  
  plugins: [],
}
