/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}",],
  darkMode: "class", 
  theme: {
    extend: {
      colors: {
        'dark-color': '#292e37', // Definindo a cor customizada para o modo escuro
      },
    },
  },
  plugins: [],
}

