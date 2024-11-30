const colors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', 1.375],
      sm: ['14px', 1.375],
      base: ['16px', 1.375],
      lg: ['18px', 1.375],
      xl: ['20px', 1.375],
      '2xl': ['24px', 1.375],
      '3xl': ['30px', 1.375],
      '4xl': ['36px', 1.375],
      '5xl': ['48px', 1.375],
      '6xl': ['60px', 1.375],
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-roboto)', 'Helvetica', 'Arial', 'sans-serif'],
        roboto: ['var(--font-roboto)'],
        inter: ['var(--font-inter)'],
      },
      lineHeight: {
        'extra-loose': '1.75',
      },
      colors: {
        black: {
          100: '#222222',
          200: '#282828',
          DEFAULT: '#000000', // Explicit default
        },
        neutral: {
          400: '#717171',
          500: '#747474',
          ...colors.neutral,
        },
        blue: {
          500: '#278ae7',
          600: '#1080e9',
          ...colors.blue,
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
