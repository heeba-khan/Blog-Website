/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'body-color':'#FDF7E4',
        'header-color':'#A94438',
        'blog-body':'#F9E8C9',
      },
    },
  },
  plugins: [],
}

