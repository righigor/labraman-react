/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Playfair Display', 'serif'],
        body: ['Roboto', 'sans-serif'],
      },
      colors:{
        primary: '#003366',    /* Azul Escuro */
        secondary: '#66CC99',  /* Verde Claro */
        accent: '#FF7F00',     /* Laranja */
        background: '#F4F4F4', /* Cinza Claro */
        text: '#f4f4f4',       /* Cinza Escuro */
        purple: '#6A0DAD',     /* Roxo */
        danger: '#FF4C4C',
      },
      backgroundImage: {
        'hero': "url('./assets/hero-icon-img.jpg')",
      },
    },
  },
  plugins: [],
};
