/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        primary: "#333",
        black: "#000",
        gray: "#222",
      },
      fontFamily: {
        "text-regular-normal": "Roboto",
      },
    },
    fontSize: {
      xs: "0.75rem",
      "3xs": "0.63rem",
      base: "1rem",
      lg: "1.13rem",
      "29xl": "3rem",
      "11xl": "1.88rem",
      "5xl": "1.5rem",
      xl: "1.25rem",
      "13xl": "2rem",
      "37xl": "3.5rem",
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
