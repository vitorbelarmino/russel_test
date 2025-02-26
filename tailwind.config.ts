import type { Config } from "tailwindcss";

export default {
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
        logitechColor: "#EFEFEF",
        bluePrimary: "#00B5EA",
        blueSecundary: "#0085AC",
        grayPrimary: "#CCCCCC",
      },
      backgroundImage: {
        "logitech-gradient": "linear-gradient(180deg, #020202 0%, #00161D 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
