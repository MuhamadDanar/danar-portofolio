# Portfolio Muhamad Danar

Website statis (HTML, CSS, JavaScript). Buka `index.html` di browser untuk melihat hasilnya.

## Mengubah isi
- **Nama & deskripsi:** edit `index.html` (bagian Hero dan About). Cari teks dalam `[kurung siku]` = placeholder yang harus diganti.
- **Foto profil:** simpan di `assets/images/`, lalu di `index.html` ganti `<div class="photo ph">...</div>` dengan `<img class="photo" src="assets/images/foto.jpg" alt="Foto Muhamad Danar">`.
- **Gambar proyek:** simpan di `assets/images/`, lalu isi `image: "assets/images/nama-file.jpg"` pada proyek terkait di `script.js`.
- **Tambah/hapus proyek:** di `script.js`, salin atau hapus satu blok `{ ... }` dalam `PROJECTS`. Kartu dan detail dibuat otomatis.
- **Kontak & sosial media:** isi `CONFIG` di bagian atas `script.js`. Link yang kosong tidak ditampilkan sebagai tombol.
- **CV:** taruh PDF di `assets/documents/`, lalu isi `cv: "assets/documents/nama-file.pdf"` di `CONFIG`.
- **Sertifikat, pengalaman, tahun lulus:** edit langsung di `index.html`.
- **Warna & font:** ubah variabel di bagian atas `style.css` (`--accent` untuk warna aksen, `--font` untuk font).

## Deploy ke GitHub Pages
1. Buat akun di github.com, lalu klik **New repository**. Beri nama `portfolio` (atau `username.github.io` untuk alamat utama), pilih **Public**, klik **Create repository**.
2. Klik **uploading an existing file**, tarik semua isi folder `portfolio` (`index.html`, `style.css`, `script.js`, `README.md`, folder `assets`), lalu klik **Commit changes**.
3. Buka **Settings → Pages**. Pada **Source** pilih **Deploy from a branch**, branch `main`, folder `/ (root)`, klik **Save**.
4. Tunggu 1–3 menit. Alamat website muncul di halaman Pages: `https://username.github.io/portfolio/`.
5. Untuk memperbarui: buka file di repository, klik ikon pensil (Edit), ubah, lalu **Commit changes**.

## Catatan
- Pastikan proyek perusahaan hanya berisi informasi yang sudah diizinkan untuk dipublikasikan.
