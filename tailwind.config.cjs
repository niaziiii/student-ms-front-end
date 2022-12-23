/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        'box-main': '0 0 3px #22A39F',
      },
      colors:{
        "custom-light":"#F3EFE0 !important",
        "custom-grey" : "#434242 !important",
        "custom-black":"#222222 !important",
        "custom-blue":"#22A39F !important",
        "custom-red":"rgb(177, 37, 37) !important"
      },
      textColor:{
        "custom-blue":"#22A39F !important"
      }
        },
  },
  plugins: [],
}
