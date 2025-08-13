// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: { center: true, padding: "1rem", screens: { lg: "1120px" } },
    extend: {
      colors: {
        background: "#0d1117",
        surface: "#0f172a",
        border: "rgba(148, 163, 184, 0.15)",
        primary: "#58a6ff",
        secondary: "#8b949e",
        accent: "#f778ba",
        text: "#c9d1d9",
        heading: "#ffffff",
        darkblue: "#001f3f",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "Noto Sans",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
        ],
        heading: ['Poppins', 'ui-sans-serif', 'system-ui'],
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(0,0,0,0.45)",
        soft: "0 6px 18px -10px rgba(0,0,0,0.35)",
      },
      backgroundImage: {
        "grid-s":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid-s": "24px 24px",
      },
    },
  },
  plugins: [],
};
