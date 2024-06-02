// eslint-disable-next-line no-undef
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        transparentBg: "rgba(0, 0, 0, 0)",
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [flowbite.plugin()],
};
