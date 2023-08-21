/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'card-hover': 'hsl(0, 0%, 0%, 0.7)',
        neutral: {
          100: 'hsl(0, 0%, 85%)',
          400: 'hsl(0, 0%, 50%)',
          700: 'hsl(0, 0%, 25%)',
        },
        'brand-primary': {
          100: 'hsl(231, 100%, 85%)',
          400: 'hsl(230, 100%, 50%)',
          700: 'hsl(230, 100%, 25%)',
        }
      },
      height: {
        'header': '4rem',
        'footer': '6.25rem',
        'screen-no-scroll': 'calc(100vh - 10.25rem)',
      },
      spacing: {
        'navbar-links': '2.625rem',
      },
      fontFamily: {
        'primary': ['Comfortaa', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
