/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        jetbrains: ["JetBrains Mono", "monospace"],
        opensans: ["Open Sans", "sans-serif"],
        fglyphic: ["Faculty Glyphic", "serif"],
      },
      textShadow: {
        // New shadows with different colors and effects
        soft: "1px 1px 2px rgba(0, 0, 0)", // Soft black shadow
        hard: "6px 6px 30px rgba(0, 0, 0)", // Harder black shadow
        neon: "0px 0px 10px rgba(0, 255, 0, 0.8)", // Neon green shadow
        glow: "0px 0px 15px rgba(0, 255, 255, 0.6)", // Cyan glow effect
        red: "2px 2px 4px rgba(255, 0, 0, 0.7)", // Red shadow
      },
      backgroundImage: {
        heroImage: "url('/asset/airplane.jpg')",
        serviceBg: "url('/asset/service/service-b.jpg')",
        gallerybg: "url('/asset/gallery/gallery-bg.jpg')",
        aboutBg:"url('/asset/about/bg.jpg')",
      },

      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },

    screens: {
      vsm: "380px",
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "878px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("tailwindcss-textshadow")],
};
