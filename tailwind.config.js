/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        // Colores estándar para los temas claro y oscuro
        'standard-light': '#f0f2f5', // Fondo claro estándar
        'standard-dark': '#111b22', // Fondo oscuro estándar
        'text-standard-light': '#1f2937', // Texto claro estándar
        'text-standard-dark': '#f3f4f6', // Texto oscuro estándar

        // Extendido con tus colores originales
        light: {
          light: "#ffffff", //lighter - FONDOS,
          mid: "#f7f8f8", //mid - ELEMENTOS DESTACADOS,
          darker: "#f0f2f5" //darker - ALTO CONTRASTE
        },
        dark: {
          light: "#1b2832", //lighter - FONDOS,
          mid: "#111b22", //mid - ELEMENTOS DESTACADOS
          darker: "#0d161c", //darker - ALTO CONTRASTE
        }
      },
      transitionDelay:{
        '15':'15ms',
        '25':'25ms',
        '50':'50ms'
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
    function({addUtilities}){
      const newUtilities = {
        ".no-scrollbar::webkit-scrollbar":{
          display:"none",
        },
        ".no-scrollbar":{
          "-ms-overflow-style":"none",
          "scrollbar-width":"none",
        },
      };
      addUtilities(newUtilities);
    }
  ] 
};
