/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryCyan: "hsl(172, 67%, 45%)",
        neutralVeryDarkCyan: "hsl(183, 100%, 15%)",
        neutralDarkGrayishCyan: "hsl(186, 14%, 43%)",
        neutralGrayishCyan: "hsl(184, 14%, 56%)",
        neutralLightGrayishCyan: "hsl(185, 41%, 84%)",
        neutralVeryLightGrayishCyan: "hsl(189, 41%, 97%)",
        neutralWhite: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        fontFamily: {
          sans: ["Space Mono", "sans-serif"],
        },
        fontWeight: {
          normal: 400,
          bold: 700,
        },
      },
    },
  },
  plugins: [],
};
