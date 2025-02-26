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
        graySecundary: "#E8E8E8",
        grayTertiary: "#FAFAFA",
        purplePrimary: "#3722BA",
        purpleSecundary: "#5438FF",
        blackPrimary: "#010101",
        blackSecundary: "#1A1A1A",
      },
      backgroundImage: {
        "logitech-gradient": "linear-gradient(180deg, #020202 0%, #00161D 100%)",
      },
    },
  },
  plugins: [],
} satisfies Config;
