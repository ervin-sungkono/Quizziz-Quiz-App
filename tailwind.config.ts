import type { Config } from "tailwindcss";

import flowbite from "flowbite/plugin";
const defaultTheme = require('tailwindcss/defaultTheme')

const config : Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    screens: {
      'xs': '440px',
      ...defaultTheme.screens,
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6.25rem',
      },
    },
    extend: {
      colors: {
        // Tambah warna disini dengan format 'nama-warna': 'kode warna (hex atau rgb)'
        'darker-blue': '#041221',
        'dark-blue': '#262E3E',
        'light-blue': '#778DA9',
        'sky-blue': '#EAF5FF',
        'primary-orange': '#DC851F',
        'light-orange': '#EE9C3B'
      },
      zIndex:{
        'fixed': '9999'
      },
    },
  },
  darkMode: 'class',
  plugins: [flowbite],
}

export default config;
