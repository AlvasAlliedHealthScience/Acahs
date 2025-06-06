/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      animation: {
        marquee: 'marquee 20s linear infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '200% center' },
          '50%': { backgroundPosition: '0% center' },
        },
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
    },    
  },
  plugins: [],
}
