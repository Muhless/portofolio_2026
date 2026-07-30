# muhless.dev — Portofolio

Portofolio minimalis hitam-putih dengan Nuxt 3 + Tailwind CSS, bergaya dokumentasi REST API
(terminal prompt di hero, daftar proyek disajikan sebagai "endpoint").

## Menjalankan secara lokal

```bash
pnpm install   # atau: bun install / npm install
pnpm dev       # atau: bun run dev / npm run dev
```

Buka http://localhost:3000

## Build untuk produksi

```bash
pnpm build
pnpm preview
```

## Yang perlu kamu ganti

- `pages/index.vue`
  - Isi array `projects` — link GitHub tiap proyek masih menunjuk ke profil umum, arahkan ke repo masing-masing.
  - Alamat `mailto:hai@muhless.dev` di bagian kontak — ganti dengan emailmu.
  - Tambahkan link LinkedIn jika perlu (ikuti pola blok kontak yang sudah ada).
- `public/favicon.svg` — ganti kalau mau pakai favicon lain.

## Struktur

```
pages/index.vue        halaman utama (satu halaman, dibagi per section)
assets/css/main.css     token warna monokrom + utilitas terminal (caret, dsb)
tailwind.config.ts      warna & font (Space Grotesk untuk display, JetBrains Mono untuk teks)
nuxt.config.ts          meta, font Google, module Tailwind
```
