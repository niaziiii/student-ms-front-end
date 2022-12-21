/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'box-main': '0 0 3px #22A39F',
      },
      colors:{
        "custom-light":"#F3EFE0",
        "custom-grey" : "#434242",
        "custom-black":"#222222",
        "custom-blue":"#22A39F !important"
      },
      textColor:{
        "custom-blue":"#22A39F !important"
      }
    },
  },
  plugins: [],
}
