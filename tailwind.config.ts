import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        border: "var(--border)",
        card: "var(--card)",
        primary: "var(--primary)",
        "primary-strong": "var(--primary-strong)"
      },
      boxShadow: {
        soft: "0 22px 70px rgba(18, 24, 38, 0.10)",
        elegant: "0 30px 90px rgba(20, 22, 28, 0.16)"
      },
      fontFamily: {
        sans: ["-apple-system", "BlinkMacSystemFont", "Inter", "Segoe UI", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
