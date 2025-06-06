/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fontFamily: {
          title: ["Poppins", "sans-serif"],
        },
      },
      colors: {
        second_color: "#5c2f91",
      },
      width: {
        max_width: "1280px",
        min_width: "340px",
      }
    },
  },
  plugins: [],
};
