import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, #50644C 9.38%, #60603C 51.21%, #5F5F53 88%, #DDE5DB 100%)',
        'hero-bg': 'url(/hero-bg.png)',
        'about-bg': 'url(/about-bg.png)',
        'contact-bg': 'url(/conatact-bg.png)'
      },
      colors: {
        primary: "#50644C",
        foreground: "var(--foreground)",
      },
      
    },
  },
  plugins: [],
};
export default config;
