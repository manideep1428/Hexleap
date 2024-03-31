import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      gradientColorStops : {
        'primary': '#18282A',
        'secondary': '#221A2C',
        'light-100':"#F9F8FF",
        'light-200':"#F3F9FF",
        "black-100":"#1D1D1F",
        "light-gray":"#F7F7F8"
      },
      colors:{
          "dark-100" : "#292B32",
          "dark-200":"#3B3E47",
          "dark-300":"#292B32",
          "blue-sky" :"#738FFF",
          "light":"#FFFFFF"

 
      }
      ,backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'dark-gradient': 'linear-gradient(180deg, #18282A 0%, #221A2C 100%)',
          'light-gradient': 'linear-gradient(180deg, #F9F8FF 0%, #F3F9FF 100%)'  
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: 'class',
};
export default config;
