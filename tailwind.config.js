/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "white": "#FFFFFE",
        "black": "#121826",
        "gray": "#364153",
        "lightgray": "#CED6E1",
        "blue": "#406AFF"
      },
    },
  },
  plugins: [],
}

