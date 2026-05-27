# Blog dengan Next.js + React + Markdown

Sebuah blog modern yang dibangun dengan Next.js, React, dan dukungan penuh untuk Markdown.

## 🚀 Fitur

- 📝 Posting blog dengan Markdown
- 🎨 Responsive design
- 🌓 Dark mode support (CSS variables)
- ⚡ Optimized performance dengan Next.js
- 📱 Mobile friendly
- 🔍 SEO friendly
- 📅 Metadata dengan date formatting
- 🏷️ Author support

## 🛠 Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Markdown Parser**: marked + gray-matter
- **Styling**: CSS Modules + CSS Variables
- **Date Formatting**: date-fns

## 📦 Install Dependencies

```bash
npm install
# or
yarn install
```

## 🏃 Development

```bash
npm run dev
# or
yarn dev
```

Buka [http://localhost:3000](http://localhost:3000) untuk melihat hasil.

## 🏗️ Build for Production

```bash
npm run build
npm start
```

## 📝 Membuat Postingan Baru

1. Buat file Markdown baru di folder `posts/`
   ```
   posts/nama-postingan.md
   ```

2. Tambahkan frontmatter di awal file:
   ```markdown
   ---
   title: "Judul Postingan Anda"
   date: "2026-05-27"
   author: "Nama Anda"
   excerpt: "Deskripsi singkat postingan"
   ---
   ```

3. Tulis konten Anda menggunakan Markdown

### Contoh Postingan

```markdown
---
title: "Belajar Next.js"
date: "2026-05-27"
author: "Maulana"
excerpt: "Tutorial lengkap belajar Next.js dari nol"
---

# Belajar Next.js

Next.js adalah framework React yang powerful untuk membangun aplikasi web.

## Keuntungan Next.js

- Server-side rendering
- Static site generation
- API routes
- Dynamic routing

## Mulai dengan Next.js

```bash
npx create-next-app@latest
```
```

## 📁 Struktur Project

```
.
├── components/          # React components
│   ├── Layout.js       # Layout utama
│   └── BlogCard.js     # Card untuk daftar blog
├── pages/              # Next.js pages
│   ├── index.js        # Homepage
│   ├── blog/
│   │   └── [slug].js   # Halaman individual post
│   ├── 404.js          # Not found page
│   └── _app.js         # App wrapper
├── posts/              # Folder untuk file Markdown
│   └── welcome.md      # Contoh postingan
├── lib/                # Utility functions
│   └── posts.js        # Fungsi untuk membaca Markdown
├── styles/             # CSS Modules dan global styles
│   ├── globals.css     # Global styles
│   ├── Layout.module.css
│   ├── Home.module.css
│   ├── BlogCard.module.css
│   ├── Post.module.css
│   └── 404.module.css
├── public/             # Static assets
├── package.json
├── next.config.js
└── README.md
```

## 🎨 Customization

### Mengubah Warna

Edit file `styles/globals.css` dan ubah CSS variables:

```css
:root {
  --primary-color: #0070f3;      /* Warna utama */
  --secondary-color: #ff0080;    /* Warna sekunder */
  --text-color: #1a1a1a;         /* Warna teks */
  --bg-color: #ffffff;           /* Warna background */
  --border-color: #e0e0e0;       /* Warna border */
}
```

### Mengubah Header

Edit `components/Layout.js` untuk mengubah branding dan navigasi.

## 🚀 Deploy

### Vercel (Recommended)

1. Push code ke GitHub
2. Buka [vercel.com](https://vercel.com)
3. Import project dari GitHub
4. Deployment otomatis selesai!

### Alternatif

- Netlify
- GitHub Pages
- Railway
- Heroku

## 📄 License

MIT

## 👨‍💻 Author

Maulana Stack

---

**Happy Blogging!** 🎉
