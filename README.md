# DashDish — Pesan Antar Kedai Mandiri

Aplikasi Web Progresif (PWA) Pesan Antar Makanan & Minuman langsung dari kedai dengan armada kurir internal tanpa potongan komisi pihak ketiga (*zero third-party commission*).

## 🛵 Fitur Unggulan

1. **Tiga Sudut Pandang Peran Terpadu (All-in-One)**:
   - 🛍️ **Sudut Pelanggan**:
     - Katalog menu interaktif (Makanan Utama, Camilan/Snack, Minuman Segar, Paket Hemat).
     - Keranjang belanja dinamis dengan tombol tambah/kurang kuantiti.
     - Formulir pengantaran alamat & patokan rumah.
     - Kalkulasi ongkir otomatis berbasis jarak kilometer (misal Rp2.000/km) dengan fitur **Tawar Ongkir Bersahabat**.
     - Pilihan pembayaran: **COD (Bayar Tunai ke Kurir di Tempat)**, Transfer Bank, atau QRIS.
     - Checkout langsung mengirimkan draf format pesanan rapi ke WhatsApp Kedai.
     - **Live Order Tracking**: Visualisasi 4 tahap progres pesanan (*Diterima Kedai ⏳ -> Dimasak di Dapur 🍳 -> Diantar Kurir 🛵 -> Sampai & Selesai 🎉*).
   - 🍳 **Sudut Dapur & Kasir Kedai**:
     - Papan antrean pesanan ala Kanban: *Pesanan Baru*, *Sedang Dimasak*, *Siap Diantar*, dan *Selesai*.
     - Notifikasi badge antrean pesanan aktif secara *real-time*.
     - Cetak struk pesanan format thermal 58mm/80mm siap print (*A4/Thermal printable*).
   - 🛵 **Sudut Kurir Kedai (Driver App)**:
     - Daftar pesanan yang ditugaskan untuk pengantaran.
     - Tombol **Buka Rute Google Maps** langsung ke alamat pelanggan.
     - Tombol **Kabari Pelanggan via WA** ("Halo kak, pesanan DashDish segera meluncur...").
     - Rincian tagihan tunai COD yang harus diterima dari pelanggan di lokasi.
     - Tombol satu ketukan untuk menyelesaikan pengantaran.
   - ⚙️ **Kelola Menu & Pengaturan Ongkir**:
     - Tambah, edit, dan hapus menu makanan/minuman beserta foto emoji, deskripsi, dan status ketersediaan (*Tersedia / Habis*).
     - Pengaturan profil kedai, titik koordinat keberangkatan, dan tarif ongkir dasar + per km.
2. **PWA Offline-First & Keamanan Data**:
   - Berjalan mandiri tanpa backend server luar (`localStorage` & `ServiceWorker`).
   - Fitur Unduh Cadangan Lengkap (JSON), Pulihkan Data (JSON), dan Ekspor Riwayat Pesanan ke CSV.
   - Desain bernuansa hangat menggugah selera (*Saffron Flame Orange* `#ea580c` & *Chili Red* `#dc2626`).

---

## 🛠️ Teknologi

- **Frontend**: HTML5 Semantik, Vanilla ES6+ JavaScript, CSS3 Responsive Grid & Flexbox.
- **PWA**: Web App Manifest & Service Worker Cache.
- **Penyimpanan**: Browser LocalStorage (`dashdish_kedai_v1`).

---

## 🚀 Menjalankan Secara Lokal

```bash
python3 -m http.server 8080
```
Buka `http://localhost:8080` pada peramban web Anda.
