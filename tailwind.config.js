/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'noto-sans': ['Noto Sans JP'],
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
          400: "#767676",
          500: "#7a7f82",
          600: "#818181",
          700: "#333333",
          800: "#161c25",
        },
        gray: {
          100: "#F4F6F7",
          200: "#f5f5f5",
          500: "#e5e7eb",
        },
        red: {
          300: "#f56c6c",
        },
      },
      screens: {
        'sm2': '676px', 
        'lg1': '986px',
        '992': '992px',
        'xxl': '1200px',
        'xl2': '1440px', 
      },
      html: {
        scrollBehavior: "smooth",
      }
    },
  },
  plugins: [],
} 