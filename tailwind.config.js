/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        OpenSans: 'Open Sans',
        OpenSansBold: 'OpenSansBold',
        Montserrat: '"Montserrat", sans-serif',
      },
      screens: {
        xs: '428px',
      },
      backgroundPosition: {
        'pos-0': '0% 0%',
        'pos-100': '100% 100%',
      },
      backgroundSize: {
        'size-200': '200% 200%',
      },
    },
  },
  plugins: [],
}
