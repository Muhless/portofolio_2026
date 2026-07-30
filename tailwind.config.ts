import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  darkMode: 'class',
  content: [
    './pages/**/*.vue',
    './components/**/*.vue',
    './app.vue'
  ],
  theme: {
    extend: {
      colors: {
        // Dua kutub monokrom yang nilainya dibalik oleh .dark di main.css —
        // "ink" dipakai untuk latar (bg-ink), "paper" untuk teks (text-paper).
        ink: 'var(--ink)',
        paper: 'var(--paper)',
        panel: 'var(--panel)',
        line: 'var(--line)',
        muted: 'var(--muted)'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      letterSpacing: {
        tightest: '-0.04em'
      }
    }
  },
  plugins: []
}
