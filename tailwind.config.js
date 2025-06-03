/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',            // your HTML entrypoint
    './src/**/*.{js,jsx,ts,tsx}', // all React components
  ],
  theme: {
    extend: {},                // add custom theme extensions here
  },
  plugins: [],                 // add Tailwind plugins here
}
