import { colors } from "./src/styles/colors"
import { fontFamily } from "./src/styles/fontFamily"

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Usarão tailwind qualquer pasta dentro de src e qualquer arquivo .ts ou .tsx
  content: ["./src/**/*.{ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors,
      fontFamily,
    },
  },
  plugins: [],
}
