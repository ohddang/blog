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
        lg: "400px",
        md: "280px",
        sm: "140px",
      },
      height: {
        lg: "600px",
        md: "420px",
        sm: "210px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
