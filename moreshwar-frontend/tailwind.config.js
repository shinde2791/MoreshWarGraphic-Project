module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Scans all JS, JSX, TS, and TSX files in the src directory for Tailwind CSS classes
  ],
  theme: {
    extend: {},  // You can add custom styles and theme extensions here
  },
  plugins: [
    require('daisyui'),  // Includes the DaisyUI plugin
  ],
}