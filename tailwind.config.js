/** @type {import('tailwindcss').Config} 
 * V-305,paso 1.0 Instalamos Tailwind
*/
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        //Paso 4.3 ponemos la imagen del background
        "header": "url('/bg.jpg')"
      },
    },
  },
  plugins: [],
}
