import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      applyBaseStyles: false,
      content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
      theme: {
        extend: {},
      },
      variants: {
        extend: {},
      },
      plugins: [
           function ({ addUtilities }) {
          addUtilities({
            ".glassmorphism": {
              background: "rgba(255, 255, 255, 0.25)",
              boxShadow: "0 2px 30px 0 rgba(31, 38, 135, 0.07)",
              backdropFilter: "blur(4px)",
              "-webkit-backdrop-filter": "blur(4px)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
            },
          });
        },
      ],
    }),
  ],
});
