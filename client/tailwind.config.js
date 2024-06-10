/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0A192F",
        secondary: "#F97316",
        tertiary: "#54D6BB",
      },
    },
    screens: {
      lg: { max: "2000px" },
      // => @media (max-width: 1023px) { ... }//web devices

      sm: { max: "639px" },
      // => @media (max-width: 639px) { ... }//mobile devices
    },
  },
  plugins: [],
};
