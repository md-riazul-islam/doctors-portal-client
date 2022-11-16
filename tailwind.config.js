/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },

  daisyui: {
    themes: [
      {
        mytheme: {
        
primary: "#0FCFEC",
        
secondary: "#19D3AE",
        
accent: "#3A4256",
        
neutral: "#1A1A1A",
        
"base-100": "#FFFFFF",

        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
