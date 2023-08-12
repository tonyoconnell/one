/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        white: '#fff',
        gray: '#222',
        whitesmoke: '#f4f4f4',
        primary: '#333',
        black: '#000',
      },
      fontFamily: {
        'text-regular-normal': 'Roboto',
      },
    },
    fontSize: {
      base: '1rem',
      '5xl': '1.5rem',
      sm: '0.88rem',
      lg: '1.13rem',
      '37xl': '3.5rem',
      xs: '0.75rem',
      '3xs': '0.63rem',
      '29xl': '3rem',
      '11xl': '1.88rem',
      xl: '1.25rem',
      '13xl': '2rem',
    },
    screens: {
      lg: {
        max: '1200px',
      },
      md: {
        max: '960px',
      },
      sm: {
        max: '420px',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
}
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui'), '@tailwindcss/typography'],
  // daisyUI config (optional - here are the default values)
  daisyui: {
    themes: [
      {
        ONE: {
          primary: '#1c1917',
          secondary: '#312e81',
          accent: '#365314',
          neutral: 'red',
          'base-100': '#111',
          info: '#77a2f8',
          success: '#21dec5',
          warning: '#c17915',
          error: '#f22618',
        },
        TWO: {
          primary: '#ffff00',
          secondary: '#ffff00',
          accent: '#ffff00',
          neutral: 'ffff00',
          'base-100': '#ffff00',
          info: '#ffff00',
          success: '#ffff00',
          warning: '#ffff00',
          error: '#ffff00',
        },
      },
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
    ],
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
  },
}