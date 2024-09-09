import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#e6f7ff",
          light: "#91C7F0",
          DEFAULT: "#0D73C1",
          dark: "",
          TchBlue: "#0D72C0",
          TchOrange: '#EB743C',
        },
      },
      fontFamily:{
        poppins: ["var(--font-poppins)"],
      }
      
    },
  },
  plugins: [],
};
export default config;
