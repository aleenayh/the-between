/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Theme-aware colors that reference CSS variables
        theme: {
          bg: {
            primary: "var(--color-bg-primary)",
            secondary: "var(--color-bg-secondary)",
            tertiary: "var(--color-bg-tertiary)",
            accent: "var(--color-bg-accent)",
          },
          text: {
            primary: "var(--color-text-primary)",
            secondary: "var(--color-text-secondary)",
            muted: "var(--color-text-muted)",
            accent: "var(--color-text-accent)",
          },
          border: {
            DEFAULT: "var(--color-border)",
            accent: "var(--color-border-accent)",
          },
          accent: {
            primary: "var(--color-accent-primary)",
            secondary: "var(--color-accent-secondary)",
          },
        },
      },
      boxShadow: {
        theme: "0 4px 12px var(--color-shadow)",
        "theme-lg": "0 8px 24px var(--color-shadow)",
        "theme-glow": "0 0 20px var(--color-accent-glow)",
      },
    },
  },
  plugins: [],
};
