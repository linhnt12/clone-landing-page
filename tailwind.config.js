/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['"Noto Sans JP"', 'sans-serif'],
      },
      colors: {
        blue: {
          100: "#d7f2ff",
          200: "#58baf1",
          300: "#4ca8e7",
          500: "#3c9cd7",
          600: "#4799dd",
        },
        white:  "#ffffff",
        black: {
          800: "#161c25"
        }
      },
      html: {
        scrollBehavior: "smooth",
      }
    },
  },
  plugins: [],
} 