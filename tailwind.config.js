/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      container: {
        center: true,
        padding: '7rem', // You can adjust the padding as needed
      },
      fontFamily: {
        play: ["Play", "sans-serif"],
      },
      colors: {
        // Add your custom color definitions here
        'primary': '#0086D5',
        'secondary': '#303030',
        'font-color': '#707070',
        'backgound-color' : '#FAFAFA'
      },
    },
  },
  plugins: [],
};
