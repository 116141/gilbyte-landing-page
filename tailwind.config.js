/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0e',
        brand: {
          light: '#a4b1ff',
          DEFAULT: '#3b82f6', // blue-500
          hover: '#2563eb', // blue-600
          dark: '#1e3a8a',
        },
        accent: {
          light: '#e0b3ff',
          DEFAULT: '#8b5cf6', // violet-500
          hover: '#7c3aed', // violet-600
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      backgroundImage: {
        'glass-gradient': 'linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)',
        'glow-gradient': 'radial-gradient(circle at center, rgba(59, 130, 246, 0.15), transparent 50%)',
      },
      boxShadow: {
        'glass': '0 4px 30px rgba(0, 0, 0, 0.1)',
        'glass-card': '0 8px 32px 0 rgba(0, 0, 0, 0.3)',
        'primary': '0 0 20px rgba(59, 130, 246, 0.5)',
        'primary-hover': '0 0 30px rgba(59, 130, 246, 0.8)',
        'glow': '0 0 40px rgba(59, 130, 246, 0.3)',
      }
    },
  },
  plugins: [],
}
