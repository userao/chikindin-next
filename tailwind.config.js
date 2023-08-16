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
    },
  },
  plugins: [],
}
