/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        whitePrimary: "#EAEAEA",
        blackPrimary: "#131313",
      },
      fontFamily: {
        s1: ['"Slussen regular"'],
        s2: ['"Slussen medium"'],
        s3: ['"Slussen semibold"'],
        s4: ['"Slussen bold"'],
        s5: ['"Slussen expanded"'],
        s6: ['"Slussen compressed"'],
      },
    },
  },
  plugins: [],
};
