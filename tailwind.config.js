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
        "rect-lg": "400px",
        "rect-md": "280px",
        "rect-sm": "140px",
        "square-lg": "280px",
        "square-md": "210px",
        "square-sm": "140px",
      },
      height: {
        "rect-lg": "600px",
        "rect-md": "420px",
        "rect-sm": "210px",
        "square-lg": "280px",
        "square-md": "210px",
        "square-sm": "140px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
