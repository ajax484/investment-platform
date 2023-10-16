module.exports = {
  darkMode: 'media',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite-react/**/*.{js, jsx, ts, tsx}"
  ],

  theme: {
    extend: {
      colors: {
        vestaPurple: {
          1: '#0048ba',
          2: '#1a3178'
        }
      },

      fontFamily: {
        nunitoSans: ["nunito-sans", "sans-serif"]
      },

      backgroundImage: {
        "hero": "url('/src/Assets/img/hero.jpg')",
        "interior": "url('/src/Assets/img/interior.webp')",
        "girl": "url('/src/Assets/img/girl.webp')",
      }
    },
  },

  plugins: [
    require('tailwindcss-textshadow')
  ],
}