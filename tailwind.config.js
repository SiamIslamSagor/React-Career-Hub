/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("daisyui"),
    function ({ addUtilities }) {
      const linearGradients = {
        ".bg-gradient": {
          background: "linear-gradient(90deg, #7E90FE 0%, #9873FF 100%)",
        },
      };

      addUtilities(linearGradients, ["responsive", "hover"]);
    },
  ],
};
