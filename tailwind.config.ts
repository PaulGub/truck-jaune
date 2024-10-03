import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      scale: {
        125: '1.25', // 125%
        150: '1.5',  // 150%
        175: '1.75', // 175%
        200: '2',    // 200%
      },
      fontFamily: {
        BebasNeue: ['Bebas Neue', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;