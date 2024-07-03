/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./src/**/*.{ts,tsx}", "./public/index.htl"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        "noto-sans-kr": ["Noto Sans KR", "sans-serif"],
        dunggeunmo: ["DungGeunMo", "sans-serif"],
      },
      colors: {
        "primary-green": "#9CAA84",
      },
      width: {
        "rect-lg": "300px",
        "rect-md": "200px",
        "rect-sm": "140px",
        "square-lg": "120px",
        "square-md": "80px",
        "square-sm": "50px",
      },
      height: {
        "rect-lg": "450px",
        "rect-md": "300px",
        "rect-sm": "210px",
        "square-lg": "120px",
        "square-md": "80px",
        "square-sm": "50px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
