/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#f60202',
          light: '#ff3333',
          dark: '#cc0000',
        },
        secondary: {
          DEFAULT: '#302c51',
          light: '#46416f',
          dark: '#211e3c',
        },
        accent: {
          DEFAULT: '#F97316',
          light: '#FB923C',
          dark: '#EA580C',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
      },
      animation: {
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    }, 
  },
  plugins: [], 
};
