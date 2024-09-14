/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#4379F2",
        "secondary": "#0F67B1",
        "white": "#F2F7FF",
        "black": "#1A2130",
        night: {
          "primary": "#16325B",
          "secondary": "#5A72A0",
        }
      },

    },
  },
  plugins: [],
}

