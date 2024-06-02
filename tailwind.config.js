/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{ts,tsx}", "./public/index.htl"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-kr": ["Noto Sans KR", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
