/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#010851",
        "secondary": "#9a7af1",
        "tertiary": "#070707",
        "pink": "#EE99Ae5",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'ping-slow': 'ping 2s linear infinite',
        'hover-zoom-in': 'hoverZoomIn 0.3s ease-in-out 0.2s forwards',
        'hover-zoom-out': 'hoverZoomOut 0.3s ease-in-out backwards',
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-in-right': 'slideInRight 0.5s ease-in-out',
      },
      keyframes: {
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        ping: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.5)', opacity: '0.5' },
        },
        hoverZoomIn: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.1)' },
        },
        hoverZoomOut: {
          '0%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
          },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
};
