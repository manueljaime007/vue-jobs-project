// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF',
        secondary: '#3B82F6',
        accent: '#FBBF24',
        background: '#F3F4F6',
        text: '#111827',
      },
      gridTemplateColumns: {
        '70-30': '70% 28%',
      },
    },
  },
  plugins: [],
}
