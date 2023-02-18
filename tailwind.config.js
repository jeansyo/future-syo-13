/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        textGradient: "textGradient 10s ease infinite",
      },
      keyframes: {
        textGradient: {
          "0%, 100%": {
            'background-size': '200% 200%',
            'background-position': 'left right',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        }
      }
    },
  },
  plugins: [],
}
