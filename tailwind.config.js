/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      morado: "#00355F",
      azul: "#004C7A",
      rojo: "#A70832",
      rojo_claro: "#E73646",
      rojiso: "rgba(231,54,70,0.5)",
      white: "#FFFF",
      gris: "#F6F6F6",
      azulado: "rgba(255,255, 255, 0.5)",
      negro: "#000000",
      beige: "#f5f5dc",
      darkBlue: "#003153",
    },
  },
  plugins: [require("daisyui")],
};
