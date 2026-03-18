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
          success: '#34C759',
          warning: '#FF9500',
          error: '#FF3B30',
        }
      }
    },
  },
  plugins: [],
}
