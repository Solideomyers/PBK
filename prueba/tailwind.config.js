/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src//*.{js,ts,jsx,tsx }",
    "./node_modules/@tremor//*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: ["daisyui"],
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
