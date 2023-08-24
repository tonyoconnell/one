/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "pure-white": "#fff",
        black: "#000",
        gray: {
          "100": "#1f0c0b",
          "200": "#0f0d1c",
          "300": "#fefefe",
          "400": "#8e8e8e",
          "500": "#7f7f7f",
          "600": "#7c7c7c",
          "700": "#7a7a7a",
          "800": "#787878",
          "900": "#767676",
          "1000": "#242323",
          "1100": "#191919",
          "1200": "#191818",
        },
        whitesmoke: {
          "100": "#f4f6f5",
          "200": "#eaeaea",
        },
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#d9d9d9",
        },
        khaki: "#ebd96b",
        goldenrod: "#e5c643",
        snow: "#fffcf8",
        darkslategray: {
          "100": "#3e3a3a",
          "200": "#39364e",
        },
        floralwhite: "#fbf7ec",
        paragraph: "#696969",
        darkseagreen: "#89a965",
        papayawhip: "#f5ebcf",
        dimgray: "#5a5a5a",
        golden: "#cfa27b",
      },
      fontFamily: {
        roboto: "Roboto",
        poppins: "Poppins",
        outfit: "Outfit",
        volkhov: "Volkhov",
        inherit: "inherit",
        "dm-sans": "'DM Sans'",
        "work-sans": "'Work Sans'",
      },
      borderRadius: {
        "xs-3": "11.3px",
        "5xs-5": "7.5px",
        mini: "15px",
        "7xs-3": "5.3px",
        "sm-3": "13.3px",
        "mid-7": "17.7px",
        "7xs-8": "5.8px",
        "8xs": "5px",
        "31xl": "50px",
        "13xl": "32px",
      },
    },
    fontSize: {
      lg: "1.13rem",
      "11xl": "1.88rem",
      xl: "1.25rem",
      mini: "0.94rem",
      "5xl": "1.5rem",
      smi: "0.81rem",
      sm: "0.88rem",
      "17xl": "2.25rem",
      "6xl": "1.56rem",
      base: "1rem",
      "base-5": "1.03rem",
      "15xl": "2.13rem",
      "36xl": "3.44rem",
      "7xl": "1.63rem",
      "49xl": "4.25rem",
      inherit: "inherit",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
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
          primary: '#1D3963',
          secondary: '#394E32',
          accent: '#365314',
          neutral: 'red',
          'base-100': 'white',
          info: '#77a2f8',
          success: '#21dec5',
          warning: '#c17915',
          error: '#f22618',
        },
      },
      'ONE',
      'TWO',
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
