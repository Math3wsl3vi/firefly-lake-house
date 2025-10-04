/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        'forest': {
          DEFAULT: '#2A4C3B',
          light: '#3A6A52',
        },
        'amber': {
          DEFAULT: '#E6A74A',
          light: '#F5C374',
        },
        'charcoal': {
          DEFAULT: '#2D3033',
          light: '#4A4F54',
        },
        'cream': '#F8F5F1',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ["Poppins", "sans-serif"],
        
      },
      backgroundImage: {
        'wood': "url('https://images.unsplash.com/photo-1544252890-c3e91a02b1b3?q=80&w=2070')",
        'stone': "url('https://images.unsplash.com/photo-1604709616775-61a3c6637eae?q=80&w=2070')",
      },
      keyframes: {
        firefly: {
          '0%, 100%': { opacity: 0 },
          '50%': { opacity: 1 },
        }
      },
      animation: {
        'firefly-slow': 'firefly 4s ease-in-out infinite',
        'firefly-medium': 'firefly 3s ease-in-out infinite',
        'firefly-fast': 'firefly 2s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}