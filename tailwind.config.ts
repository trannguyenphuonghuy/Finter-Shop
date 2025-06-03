// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 👈 CHỈNH Ở ĐÂY
  theme: {
    extend: {},
  },
  plugins: [],
}
export default config
