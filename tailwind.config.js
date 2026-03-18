/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          blue: '#007AFF',
          bg: '#F5F5F7',
          surface: '#FFFFFF',
          dark: '#1D1D1F',
          secondary: '#86868B',
          success: '#34C759',
          warning: '#FF9500',
          error: '#FF3B30',
        }
      },
      fontFamily: {
        sans: ['Inter', 'SF Pro Display', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'apple': '20px',
      },
      boxShadow: {
        'apple': '0 4px 24px rgba(0, 0, 0, 0.06)',
        'apple-hover': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      transitionTimingFunction: {
        'apple': 'cubic-bezier(0.4, 0, 0.2, 1)',
      }
    },
  },
  plugins: [],
}
