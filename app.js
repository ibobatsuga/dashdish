/**
 * DashDish — Pesan Antar Kedai Mandiri
 * Sistem Pesan Antar Makanan & Manajemen Kurir Internal Kedai
 * Versi: 2026112101
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'dashdish_kedai_v1';

  // --- DATA AWAL (DEFAULT) ---
  const DEFAULT_DATA = {
    profil: {
      namaKedai: 'Kedai DashDish Rasa Nusantara',
      alamat: 'Jl. Kuliner Lezat No. 12, Sleman, Yogyakarta',
      noWa: '081234567890',
      rekening: 'BCA 8820192819 a.n. DashDish',
      ongkirDasar: 5000,   // untuk 2 km pertama
      ongkirPerKm: 2000    // tiap km berikutnya
    },
    menu: [
      {
        id: 'm-1',
        nama: 'Nasi Goreng Spesial Babat Gongso',
        kategori: 'utama',
        harga: 24000,
        emoji: '🍛',
        deskripsi: 'Nasi goreng bumbu gurih rempah dengan irisan babat gongso empuk, telur ceplok & acar segar.',
        stok: 'tersedia'
      },
      {
        id: 'm-2',
        nama: 'Ayam Bakar Madu Pedas Manis + Nasi',
        kategori: 'utama',
        harga: 26000,
        emoji: '🍗',
        deskripsi: 'Ayam pejantan bakar bumbu madu karamel, sambal terasi matang, lalapan kemangi timun & nasi pulen.',
        stok: 'tersedia'
      },
      {
        id: 'm-3',
        nama: 'Mie Nyemek Jawa Telur Bebek',
        kategori: 'utama',
        harga: 22000,
        emoji: '🍜',
        deskripsi: 'Mie kuning godhog kuah kental gurih, orak-arik telur bebek, suwiran ayam kampung & sawi hijau.',
        stok: 'tersedia'
      },
      {
        id: 'm-4',
        nama: 'Bebek Goreng Sambal Korek + Lalapan',
        kategori: 'utama',
        harga: 32000,
        emoji: '🦆',
        deskripsi: 'Bebek goreng ungkep bumbu rempah kuning lengkuas, daging gurih renyah di luar juicy di dalam.',
        stok: 'tersedia'
      },
      {
        id: 'm-5',
        nama: 'Tahu Walik Krispi Sambal Kecap (Isi 8)',
        kategori: 'snack',
        harga: 15000,
        emoji: '🥟',
        deskripsi: 'Tahu khas banyuwangi dibalik isi adonan ayam kenyal renyah, cocolan kecap rawit pedas mantap.',
        stok: 'tersedia'
      },
      {
        id: 'm-6',
        nama: 'Tempe Mendoan Hangat Daun Bawang',
        kategori: 'snack',
        harga: 12000,
        emoji: '🫓',
        deskripsi: 'Tempe lebar tepung basah lembut harum ketumbar daun bawang, disajikan panas dengan cabe rawit hijau.',
        stok: 'tersedia'
      },
      {
        id: 'm-7',
        nama: 'Pisang Bakar Cokelat Keju Susu',
        kategori: 'snack',
        harga: 16000,
        emoji: '🍌',
        deskripsi: 'Pisang kepok manis legit dibakar mentega, taburan parutan keju cheddar tebal, meses & kental manis.',
        stok: 'tersedia'
      },
      {
        id: 'm-8',
        nama: 'Es Teh Kampul Jeruk Peras Solo',
        kategori: 'minuman',
        harga: 6000,
        emoji: '🍹',
        deskripsi: 'Teh melati wangi khas Solo dipadukan irisan jeruk peras asli segar manis mantap pelepas dahaga.',
        stok: 'tersedia'
      },
      {
        id: 'm-9',
        nama: 'Es Kopi Susu Gula Aren Tubruk',
        kategori: 'minuman',
        harga: 14000,
        emoji: '☕',
        deskripsi: 'Espresso robusta lokal susu segar creamy dengan manis alami gula aren kelapa organik.',
        stok: 'tersedia'
      },
      {
        id: 'm-10',
        nama: 'Wedang Ronde Jahe Hangat Komplit',
        kategori: 'minuman',
        harga: 12000,
        emoji: '🥣',
        deskripsi: 'Bola-bola ketan kenyal isi kacang tanah manis, kolang-kaling, agar-agar disiram kuah jahe wangi.',
        stok: 'tersedia'
      },
      {
        id: 'm-11',
        nama: 'Paket Kenyang: Nasi Ayam Bakar + Es Teh',
        kategori: 'paket',
        harga: 29000,
        emoji: '🍱',
        deskripsi: 'Hemat 3 ribu: Paket komplit 1 porsi Nasi Ayam Bakar Madu + 1 Es Teh Kampul Jumbo.',
        stok: 'tersedia'
      },
      {
        id: 'm-12',
        nama: 'Paket Mabar: 2 Mie Nyemek + Tahu Walik + 2 Es Teh',
        kategori: 'paket',
        harga: 65000,
        emoji: '🥡',
        deskripsi: 'Paling pas berdua: 2 porsi Mie Nyemek Jawa + 1 porsi Tahu Walik Krispi + 2 Es Teh Manis.',
        stok: 'tersedia'
      }
    ],
    pesanan: [
      {
        id: 'ord-101',
        noOrder: 'DSH-2026-001',
        namaPemesan: 'Bp. Doni Prasetya',
        waPemesan: '081234567890',
        alamat: 'Jl. Melati No. 8, pagar hitam depan minimarket',
        jarakKm: 2.5,
        items: [
          { id: 'm-2', nama: 'Ayam Bakar Madu Pedas Manis + Nasi', harga: 26000, qty: 2 },
          { id: 'm-8', nama: 'Es Teh Kampul Jeruk Peras Solo', harga: 6000, qty: 2 }
        ],
        subtotalMakanan: 64000,
        ongkir: 8000,
        totalBayar: 72000,
        metodeBayar: 'COD',
        catatan: 'Sambal terasi dipisah ya kak',
        status: 'masak', // 'baru', 'masak', 'antar', 'selesai'
        jamMasuk: '14:20',
        tanggal: '2026-11-21'
      },
      {
        id: 'ord-102',
        noOrder: 'DSH-2026-002',
        namaPemesan: 'Ibu Maya Anggraini',
        waPemesan: '085712345678',
        alamat: 'Griya Asri Blok C No. 14, Ringroad Utara',
        jarakKm: 3.5,
        items: [
          { id: 'm-1', nama: 'Nasi Goreng Spesial Babat Gongso', harga: 24000, qty: 1 },
          { id: 'm-3', nama: 'Mie Nyemek Jawa Telur Bebek', harga: 22000, qty: 1 },
          { id: 'm-5', nama: 'Tahu Walik Krispi Sambal Kecap (Isi 8)', harga: 15000, qty: 1 }
        ],
        subtotalMakanan: 61000,
        ongkir: 10000,
        totalBayar: 71000,
        metodeBayar: 'Transfer',
        catatan: 'Mie nyemeknya pedas sedang',
        status: 'antar',
        jamMasuk: '14:05',
        tanggal: '2026-11-21'
      },
      {
        id: 'ord-103',
        noOrder: 'DSH-2026-003',
        namaPemesan: 'Mas Reza Fahmi',
        waPemesan: '082155667788',
        alamat: 'Kost Duta Bangsa Kamar 12, Pogung Kidul',
        jarakKm: 1.5,
        items: [
          { id: 'm-11', nama: 'Paket Kenyang: Nasi Ayam Bakar + Es Teh', harga: 29000, qty: 1 }
        ],
        subtotalMakanan: 29000,
        ongkir: 5000,
        totalBayar: 34000,
        metodeBayar: 'QRIS',
        catatan: 'Titip di meja resepsionis kost',
        status: 'selesai',
        jamMasuk: '13:45',
        tanggal: '2026-11-21'
      }
    ],
    activeOrderId: 'ord-101'
  };

  // --- STATE RUNTIME ---
  let state = loadState();
  let keranjang = []; // [{ id, nama, harga, qty, emoji }]
  let kategoriAktif = 'semua';
  let keywordCari = '';

  function loadState() {
    try {
      const data = localStorage.getItem(STORAGE_KEY);
      if (data) {
        return Object.assign({}, DEFAULT_DATA, JSON.parse(data));
      }
    } catch (e) {
      console.warn('Gagal memuat localStorage:', e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_DATA));
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.error('Gagal menyimpan localStorage:', e);
    }
  }

  // --- FORMATTER HELPER ---
  function formatRupiah(angka) {
    const val = Number(angka) || 0;
    return 'Rp' + Math.round(val).toLocaleString('id-ID');
  }

  function getJamMenitSekarang() {
    const d = new Date();
    const hh = String(d.getHours()).padStart(2, '0');
    const mm = String(d.getMinutes()).padStart(2, '0');
    return `${hh}:${mm}`;
  }

  function getTanggalHariIniISO() {
    const d = new Date();
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}-${mm}-${dd}`;
  }

  // --- INITIALIZATION ---
  document.addEventListener('DOMContentLoaded', () => {
    initPeranNavigasi();
    renderKatalogMenu();
    initPencarianDanKategori();
    initKeranjangDanCheckout();
    renderDapurAntrean();
    renderSudutKurir();
    renderKelolaMenu();
    initPengaturanKedai();
    initBackupRestore();
    initModalMenu();
    initModalStruk();
    updateBadgeCounter();
    renderTrackingPesananAktif();
    registerServiceWorker();
  });

  // --- SERVICE WORKER ---
  function registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('sw.js').catch(err => {
        console.warn('Gagal daftarkan service worker:', err);
      });
    }
  }

  // --- ROLE / PERAN SWITCHER ---
  function initPeranNavigasi() {
    const btnPeran = document.querySelectorAll('.btn-peran');
    const layars = document.querySelectorAll('.layar-peran');

    btnPeran.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        btnPeran.forEach(b => b.classList.remove('aktif'));
        layars.forEach(l => l.classList.remove('aktif'));

        btn.classList.add('aktif');
        const targetLayar = document.getElementById(targetId);
        if (targetLayar) targetLayar.classList.add('aktif');

        if (targetId === 'layar-dapur') renderDapurAntrean();
        if (targetId === 'layar-kurir') renderSudutKurir();
        if (targetId === 'layar-kelola') renderKelolaMenu();
        if (targetId === 'layar-pelanggan') renderTrackingPesananAktif();
      });
    });
  }

  // --- KATALOG MENU PELANGGAN ---
  function renderKatalogMenu() {
    const wadah = document.getElementById('wadahGridMenu');
    if (!wadah) return;

    let items = state.menu.slice();

    if (kategoriAktif !== 'semua') {
      items = items.filter(m => m.kategori === kategoriAktif);
    }

    if (keywordCari) {
      const q = keywordCari.toLowerCase();
      items = items.filter(m => m.nama.toLowerCase().includes(q) || (m.deskripsi || '').toLowerCase().includes(q));
    }

    if (items.length === 0) {
      wadah.innerHTML = '<p class="redup-kecil" style="grid-column: 1/-1; text-align: center; padding: 40px 0;">Tidak ada menu yang sesuai dengan pencarian Anda.</p>';
      return;
    }

    wadah.innerHTML = items.map(m => {
      const isHabis = m.stok === 'habis';
      return `
        <div class="kartu-menu">
          <div class="menu-visual">
            <span>${m.emoji || '🍲'}</span>
            <span class="badge-kategori-menu">${m.kategori}</span>
          </div>
          <div class="menu-info">
            <h3 class="menu-nama">${m.nama}</h3>
            <p class="menu-deskripsi">${m.deskripsi || 'Menu lezat pilihan khas kedai.'}</p>
            <div class="menu-bawah">
              <span class="menu-harga">${formatRupiah(m.harga)}</span>
              ${isHabis ? `
                <span class="badge-hitung" style="background:#fee2e2; color:#dc2626;">Habis</span>
              ` : `
                <button type="button" class="btn-tambah-menu" onclick="window.tambahKeKeranjang('${m.id}')">+ Tambah</button>
              `}
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function initPencarianDanKategori() {
    const cariInput = document.getElementById('cariMenuInput');
    const pills = document.querySelectorAll('.pill-kategori');

    if (cariInput) {
      cariInput.addEventListener('input', (e) => {
        keywordCari = e.target.value.trim();
        renderKatalogMenu();
      });
    }

    pills.forEach(pill => {
      pill.addEventListener('click', () => {
        pills.forEach(p => p.classList.remove('aktif'));
        pill.classList.add('aktif');
        kategoriAktif = pill.getAttribute('data-kategori');
        renderKatalogMenu();
      });
    });
  }

  // --- KERANJANG BELANJA & HITUNG ONGKIR ---
  window.tambahKeKeranjang = function (menuId) {
    const itemMenu = state.menu.find(m => m.id === menuId);
    if (!itemMenu || itemMenu.stok === 'habis') return;

    const ada = keranjang.find(k => k.id === menuId);
    if (ada) {
      ada.qty += 1;
    } else {
      keranjang.push({
        id: itemMenu.id,
        nama: itemMenu.nama,
        harga: itemMenu.harga,
        emoji: itemMenu.emoji || '🍲',
        qty: 1
      });
    }

    updateBadgeCounter();
    tampilkanToastSingkat(`✓ ${itemMenu.nama} ditambahkan ke keranjang`);
  };

  function tampilkanToastSingkat(pesan) {
    let toast = document.getElementById('toastSingkatApp');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastSingkatApp';
      toast.style.cssText = 'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#0f172a;color:#ffffff;padding:10px 20px;border-radius:9999px;font-size:0.88rem;font-weight:700;box-shadow:0 10px 25px rgba(0,0,0,0.3);z-index:999;transition:all 0.3s ease;pointer-events:none;';
      document.body.appendChild(toast);
    }
    toast.textContent = pesan;
    toast.style.opacity = '1';
    setTimeout(() => { toast.style.opacity = '0'; }, 1800);
  }

  function updateBadgeCounter() {
    const totalQty = keranjang.reduce((a, c) => a + c.qty, 0);
    const badge = document.getElementById('badgeTotalItem');
    if (badge) badge.textContent = totalQty;

    // Hitung juga notifikasi antrean dapur & kurir
    const pesananAktifDapur = state.pesanan.filter(p => p.status === 'baru' || p.status === 'masak');
    const pesananKurir = state.pesanan.filter(p => p.status === 'antar');

    const badgeDapur = document.getElementById('badgeAntreanDapur');
    const badgeKurir = document.getElementById('badgeAntreanKurir');

    if (badgeDapur) {
      if (pesananAktifDapur.length > 0) {
        badgeDapur.textContent = pesananAktifDapur.length;
        badgeDapur.removeAttribute('hidden');
      } else {
        badgeDapur.setAttribute('hidden', 'true');
      }
    }

    if (badgeKurir) {
      if (pesananKurir.length > 0) {
        badgeKurir.textContent = pesananKurir.length;
        badgeKurir.removeAttribute('hidden');
      } else {
        badgeKurir.setAttribute('hidden', 'true');
      }
    }
  }

  function initKeranjangDanCheckout() {
    const modal = document.getElementById('modalKeranjang');
    const btnBuka = document.getElementById('btnBukaKeranjang');
    const btnTutup = document.getElementById('btnTutupKeranjang');
    const inputJarak = document.getElementById('checkJarak');
    const inputOngkir = document.getElementById('checkOngkir');
    const formCheckout = document.getElementById('formCheckoutAntar');

    if (btnBuka) {
      btnBuka.addEventListener('click', () => {
        if (keranjang.length === 0) {
          alert('Keranjang belanja Anda masih kosong. Silakan pilih menu makanan terlebih dahulu!');
          return;
        }
        renderIsiModalKeranjang();
        modal.removeAttribute('hidden');
      });
    }

    if (btnTutup) {
      btnTutup.addEventListener('click', () => modal.setAttribute('hidden', 'true'));
    }

    // Kalkulasi Ongkir Otomatis berdasarkan Jarak (km)
    if (inputJarak) {
      inputJarak.addEventListener('input', () => {
        const km = Math.max(0.5, parseFloat(inputJarak.value) || 1);
        const ongkirDasar = Number(state.profil.ongkirDasar) || 5000;
        const perKm = Number(state.profil.ongkirPerKm) || 2000;

        let ongkir = ongkirDasar;
        if (km > 2) {
          ongkir += Math.round((km - 2) * perKm);
        }
        inputOngkir.value = ongkir;
        kalkulasiTotalTagihan();
      });
    }

    if (inputOngkir) {
      inputOngkir.addEventListener('input', kalkulasiTotalTagihan);
    }

    // Submit Checkout Pesanan
    if (formCheckout) {
      formCheckout.addEventListener('submit', (e) => {
        e.preventDefault();
        prosesCheckoutPesanan();
      });
    }
  }

  function renderIsiModalKeranjang() {
    const wadah = document.getElementById('wadahItemKeranjang');
    if (!wadah) return;

    wadah.innerHTML = keranjang.map(item => `
      <div class="item-keranjang-baris">
        <div class="item-info">
          <strong>${item.emoji} ${item.nama}</strong>
          <small>${formatRupiah(item.harga)} x ${item.qty} = <b>${formatRupiah(item.harga * item.qty)}</b></small>
        </div>
        <div class="item-kontrol-qty">
          <button type="button" class="btn-qty" onclick="window.ubahQtyItem('${item.id}', -1)">-</button>
          <span><b>${item.qty}</b></span>
          <button type="button" class="btn-qty" onclick="window.ubahQtyItem('${item.id}', 1)">+</button>
        </div>
      </div>
    `).join('');

    kalkulasiTotalTagihan();
  }

  window.ubahQtyItem = function (menuId, delta) {
    const item = keranjang.find(k => k.id === menuId);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
      keranjang = keranjang.filter(k => k.id !== menuId);
    }

    updateBadgeCounter();

    if (keranjang.length === 0) {
      document.getElementById('modalKeranjang').setAttribute('hidden', 'true');
    } else {
      renderIsiModalKeranjang();
    }
  };

  function kalkulasiTotalTagihan() {
    const subtotalMakanan = keranjang.reduce((a, c) => a + (c.harga * c.qty), 0);
    const ongkir = Math.max(0, Number(document.getElementById('checkOngkir').value) || 0);
    const grandTotal = subtotalMakanan + ongkir;

    document.getElementById('labelSubtotalMakanan').textContent = formatRupiah(subtotalMakanan);
    document.getElementById('ringkasMakanan').textContent = formatRupiah(subtotalMakanan);
    document.getElementById('ringkasOngkir').textContent = formatRupiah(ongkir);
    document.getElementById('ringkasTotalAkhir').textContent = formatRupiah(grandTotal);
  }

  function prosesCheckoutPesanan() {
    const nama = document.getElementById('checkNama').value.trim();
    const wa = document.getElementById('checkWa').value.trim();
    const alamat = document.getElementById('checkAlamat').value.trim();
    const jarakKm = parseFloat(document.getElementById('checkJarak').value) || 2.5;
    const ongkir = Number(document.getElementById('checkOngkir').value) || 0;
    const metode = document.getElementById('checkMetodeBayar').value;
    const catatan = document.getElementById('checkCatatan').value.trim();

    const subtotalMakanan = keranjang.reduce((a, c) => a + (c.harga * c.qty), 0);
    const totalBayar = subtotalMakanan + ongkir;
    const nomorOrder = `DSH-${new Date().getFullYear()}-${String(state.pesanan.length + 1).padStart(3, '0')}`;

    const orderBaru = {
      id: 'ord-' + Date.now(),
      noOrder: nomorOrder,
      namaPemesan: nama,
      waPemesan: wa,
      alamat: alamat,
      jarakKm: jarakKm,
      items: JSON.parse(JSON.stringify(keranjang)),
      subtotalMakanan: subtotalMakanan,
      ongkir: ongkir,
      totalBayar: totalBayar,
      metodeBayar: metode,
      catatan: catatan,
      status: 'baru', // otomatis masuk antrean dapur
      jamMasuk: getJamMenitSekarang(),
      tanggal: getTanggalHariIniISO()
    };

    state.pesanan.unshift(orderBaru);
    state.activeOrderId = orderBaru.id;
    saveState();

    // Buat Draf Pesan WhatsApp Resmi ke Kedai
    let rincianMenuTeks = '';
    keranjang.forEach((it, idx) => {
      rincianMenuTeks += `${idx + 1}. ${it.nama} x${it.qty} = ${formatRupiah(it.harga * it.qty)}\n`;
    });

    const pesanWa = encodeURIComponent(`*PESANAN BARU DASHDISH 🛵💨*\n` +
      `-----------------------------------------\n` +
      `No. Order : *${nomorOrder}*\n` +
      `Nama      : ${nama}\n` +
      `WhatsApp  : ${wa}\n` +
      `Alamat    : ${alamat}\n` +
      `Jarak     : ~${jarakKm} km\n` +
      `-----------------------------------------\n` +
      `*RINCIAN MENU:*\n${rincianMenuTeks}` +
      `-----------------------------------------\n` +
      `Subtotal Menu : ${formatRupiah(subtotalMakanan)}\n` +
      `Ongkir Kurir  : ${formatRupiah(ongkir)}\n` +
      `*TOTAL TAGIHAN : ${formatRupiah(totalBayar)}*\n` +
      `Metode Bayar  : ${metode}\n` +
      (catatan ? `Catatan Dapur : "${catatan}"\n` : '') +
      `-----------------------------------------\n` +
      `Mohon segera dikonfirmasi dan dimasak ya kak. Terima kasih!`);

    const noKedaiBersih = (state.profil.noWa || '').replace(/[^0-9]/g, '');
    const waFormatted = noKedaiBersih.startsWith('0') ? '62' + noKedaiBersih.slice(1) : noKedaiBersih;

    // Reset keranjang & tutup modal
    keranjang = [];
    updateBadgeCounter();
    document.getElementById('modalKeranjang').setAttribute('hidden', 'true');
    renderTrackingPesananAktif();

    // Buka WhatsApp dan tampilkan konfirmasi
    window.open(`https://api.whatsapp.com/send?phone=${waFormatted}&text=${pesanWa}`, '_blank');
    alert(`🎉 Pesanan ${nomorOrder} berhasil dibuat!\nDraf pesan sudah diteruskan ke WhatsApp Kedai.`);
  }

  // --- LIVE ORDER TRACKING PELANGGAN ---
  function renderTrackingPesananAktif() {
    const wadah = document.getElementById('wadahPesananAktifPelanggan');
    if (!wadah) return;

    const activeOrder = state.pesanan.find(p => p.id === state.activeOrderId);
    if (!activeOrder) {
      wadah.setAttribute('hidden', 'true');
      return;
    }

    wadah.removeAttribute('hidden');
    document.getElementById('trackNoPesanan').textContent = activeOrder.noOrder;
    document.getElementById('trackDetailPesanan').textContent = `${activeOrder.items.length} Menu (${formatRupiah(activeOrder.totalBayar)}) • ${activeOrder.alamat}`;

    const stepKonf = document.getElementById('stepKonfirmasi');
    const stepMsk = document.getElementById('stepMasak');
    const stepAnt = document.getElementById('stepAntar');
    const stepSls = document.getElementById('stepSelesai');
    const l1 = document.getElementById('line1');
    const l2 = document.getElementById('line2');
    const l3 = document.getElementById('line3');
    const badge = document.getElementById('trackBadgeTahap');

    // Reset status classes
    [stepKonf, stepMsk, stepAnt, stepSls].forEach(el => el.className = 'tahap-item');
    [l1, l2, l3].forEach(l => l.classList.remove('aktif'));

    if (activeOrder.status === 'baru') {
      badge.textContent = 'Diterima Kedai ⏳';
      stepKonf.classList.add('aktif');
    } else if (activeOrder.status === 'masak') {
      badge.textContent = 'Sedang Dimasak di Dapur 🍳';
      stepKonf.classList.add('selesai');
      l1.classList.add('aktif');
      stepMsk.classList.add('aktif');
    } else if (activeOrder.status === 'antar') {
      badge.textContent = 'Kurir Menuju Lokasi Anda 🛵';
      stepKonf.classList.add('selesai');
      l1.classList.add('aktif');
      stepMsk.classList.add('selesai');
      l2.classList.add('aktif');
      stepAnt.classList.add('aktif');
    } else if (activeOrder.status === 'selesai') {
      badge.textContent = 'Pesanan Sampai & Selesai 🎉';
      stepKonf.classList.add('selesai');
      l1.classList.add('aktif');
      stepMsk.classList.add('selesai');
      l2.classList.add('aktif');
      stepAnt.classList.add('selesai');
      l3.classList.add('aktif');
      stepSls.classList.add('selesai');
    }

    const noKedaiBersih = (state.profil.noWa || '').replace(/[^0-9]/g, '');
    const waFormatted = noKedaiBersih.startsWith('0') ? '62' + noKedaiBersih.slice(1) : noKedaiBersih;
    const btnHubungi = document.getElementById('trackBtnHubungiKedai');
    if (btnHubungi) {
      btnHubungi.href = `https://api.whatsapp.com/send?phone=${waFormatted}&text=Halo%20Kedai%20DashDish%2C%20mau%20tanya%20progres%20pesanan%20${activeOrder.noOrder}`;
    }
  }

  // --- SUDUT DAPUR & PAPAN ANTREAN (KANBAN) ---
  function renderDapurAntrean() {
    const colBaru = document.getElementById('kolomOrderBaru');
    const colMasak = document.getElementById('kolomOrderMasak');
    const colAntar = document.getElementById('kolomOrderAntar');
    const colSelesai = document.getElementById('kolomOrderSelesai');

    if (!colBaru) return;

    const baru = state.pesanan.filter(p => p.status === 'baru');
    const masak = state.pesanan.filter(p => p.status === 'masak');
    const antar = state.pesanan.filter(p => p.status === 'antar');
    const selesai = state.pesanan.filter(p => p.status === 'selesai');

    document.getElementById('countBaru').textContent = baru.length;
    document.getElementById('countMasak').textContent = masak.length;
    document.getElementById('countAntar').textContent = antar.length;
    document.getElementById('countSelesai').textContent = selesai.length;
    document.getElementById('dapurTotalPesananAktif').textContent = `${baru.length + masak.length + antar.length} Pesanan Aktif`;

    colBaru.innerHTML = renderKartuOrderDapur(baru, 'baru');
    colMasak.innerHTML = renderKartuOrderDapur(masak, 'masak');
    colAntar.innerHTML = renderKartuOrderDapur(antar, 'antar');
    colSelesai.innerHTML = renderKartuOrderDapur(selesai, 'selesai');

    updateBadgeCounter();
  }

  function renderKartuOrderDapur(list, kolomTipe) {
    if (list.length === 0) {
      return '<p class="redup-kecil" style="text-align:center; padding: 20px 0; margin:0;">Tidak ada pesanan.</p>';
    }

    return list.map(ord => {
      let daftarMenuHtml = ord.items.map(it => `
        <div class="item-baris-dapur">
          <span>${it.qty}x ${it.nama}</span>
          <b>${formatRupiah(it.harga * it.qty)}</b>
        </div>
      `).join('');

      let tombolAksi = '';
      if (kolomTipe === 'baru') {
        tombolAksi = `<button type="button" class="btn-order-aksi btn-terima-masak" onclick="window.updateStatusPesanan('${ord.id}', 'masak')">🍳 Masak Sekarang</button>`;
      } else if (kolomTipe === 'masak') {
        tombolAksi = `<button type="button" class="btn-order-aksi btn-siap-antar" onclick="window.updateStatusPesanan('${ord.id}', 'antar')">🛵 Serahkan ke Kurir</button>`;
      } else if (kolomTipe === 'antar') {
        tombolAksi = `<button type="button" class="btn-order-aksi" style="background:#16a34a;color:white;" onclick="window.updateStatusPesanan('${ord.id}', 'selesai')">✓ Selesai Terkirim</button>`;
      } else {
        tombolAksi = `<span class="badge-status-tahap" style="background:#dcfce7;color:#16a34a;font-size:0.75rem;">Selesai & Lunas</span>`;
      }

      return `
        <div class="kartu-order-dapur">
          <div class="order-dapur-header">
            <span class="order-nomor">${ord.noOrder}</span>
            <span class="order-jam">🕒 ${ord.jamMasuk}</span>
          </div>
          <div class="order-pemesan">
            <strong>${ord.namaPemesan}</strong>
            <small>${ord.alamat} (~${ord.jarakKm} km)</small>
          </div>
          <div class="order-daftar-item">
            ${daftarMenuHtml}
            ${ord.catatan ? `<div style="color:#ea580c;font-size:0.75rem;margin-top:4px;">* Catatan: ${ord.catatan}</div>` : ''}
          </div>
          <div class="order-total-dapur">
            <span>Total (${ord.metodeBayar}):</span>
            <span style="color:#ea580c;">${formatRupiah(ord.totalBayar)}</span>
          </div>
          <div class="baris-aksi-order">
            ${tombolAksi}
            <button type="button" class="btn-order-aksi btn-cetak-struk-mini" onclick="window.tampilStrukPesanan('${ord.id}')">🖨️ Struk</button>
          </div>
        </div>
      `;
    }).join('');
  }

  window.updateStatusPesanan = function (orderId, statusBaru) {
    const ord = state.pesanan.find(p => p.id === orderId);
    if (!ord) return;

    ord.status = statusBaru;
    saveState();
    renderDapurAntrean();
    renderSudutKurir();
    renderTrackingPesananAktif();
  };

  // --- SUDUT KURIR KEDAI (DRIVER APP) ---
  function renderSudutKurir() {
    const wadah = document.getElementById('wadahTugasKurir');
    if (!wadah) return;

    const tugasAktif = state.pesanan.filter(p => p.status === 'antar');

    if (tugasAktif.length === 0) {
      wadah.innerHTML = '<div class="kartu-kelola kolom-penuh" style="text-align:center; padding: 40px;"><p style="font-size:1.1rem; color:#64748b;">Belum ada pesanan yang siap diantar saat ini. Standby di kedai ya, Mas Kurir! ☕</p></div>';
      return;
    }

    wadah.innerHTML = tugasAktif.map(ord => {
      const isCod = ord.metodeBayar === 'COD';
      const noHpBersih = (ord.waPemesan || '').replace(/[^0-9]/g, '');
      const waFormatted = noHpBersih.startsWith('0') ? '62' + noHpBersih.slice(1) : noHpBersih;
      const pesanWa = encodeURIComponent(`Halo Kak ${ord.namaPemesan}, saya Pak Slamet kurir dari ${state.profil.namaKedai}. Pesanan kakak (#${ord.noOrder}) sudah selesai dimasak dan sekarang sedang dalam perjalanan ke alamat kakak ya. Mohon standby di rumah. Terima kasih!`);
      const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ord.alamat)}`;

      let itemRingkas = ord.items.map(it => `${it.qty}x ${it.nama}`).join(', ');

      return `
        <div class="kartu-tugas-kurir">
          <div class="tugas-header">
            <span class="tugas-nomor">${ord.noOrder}</span>
            <span class="tugas-badge-status badge-antar-aktif">🛵 Diantar Sekarang</span>
          </div>
          <div class="tugas-alamat-box">
            <strong>${ord.namaPemesan} (${ord.waPemesan})</strong>
            <p>📍 ${ord.alamat}</p>
            <small style="color:#0284c7; font-weight:700;">Jarak Tempuh: ~${ord.jarakKm} km • Jam: ${ord.jamMasuk}</small>
          </div>
          <div>
            <small style="color:#64748b;">Menu Dibawa:</small>
            <p style="font-size:0.85rem; font-weight:600;">${itemRingkas}</p>
          </div>
          ${isCod ? `
          <div class="kotak-tagihan-cod">
            <span class="tagihan-label">TAGIH TUNAI (COD):</span>
            <strong class="tagihan-nominal">${formatRupiah(ord.totalBayar)}</strong>
          </div>` : `
          <div class="kotak-tagihan-cod" style="background:#f0fdf4; border-color:#86efac;">
            <span class="tagihan-label" style="color:#16a34a;">PEMBAYARAN LUNAS (${ord.metodeBayar}):</span>
            <strong class="tagihan-nominal" style="color:#16a34a;">Rp0 (Non-Tunai)</strong>
          </div>`}
          <div class="baris-aksi-kurir">
            <a href="${mapsUrl}" target="_blank" class="btn-navigasi-maps">🗺️ Buka Rute Google Maps</a>
            <a href="https://api.whatsapp.com/send?phone=${waFormatted}&text=${pesanWa}" target="_blank" class="btn-wa-kurir">📲 Kabari Pelanggan via WA</a>
            <button type="button" class="btn-selesai-antar" onclick="window.kurirSelesaikanAntar('${ord.id}')">
              ✅ Pesanan Tiba & Diterima Pelanggan
            </button>
          </div>
        </div>
      `;
    }).join('');
  }

  window.kurirSelesaikanAntar = function (orderId) {
    const ord = state.pesanan.find(p => p.id === orderId);
    if (!ord) return;

    if (ord.metodeBayar === 'COD') {
      if (!confirm(`Pastikan uang tunai COD sebesar ${formatRupiah(ord.totalBayar)} sudah diterima dari pelanggan. Selesaikan pesanan?`)) {
        return;
      }
    }

    ord.status = 'selesai';
    saveState();
    renderSudutKurir();
    renderDapurAntrean();
    renderTrackingPesananAktif();
    alert(`🎉 Hebat! Pesanan ${ord.noOrder} telah sukses diantar sampai ke tangan pelanggan.`);
  };

  // --- STRUK CETAK THERMAL (58/80MM) ---
  function initModalStruk() {
    const modal = document.getElementById('modalStrukPesanan');
    const btnTutup = document.getElementById('btnTutupModalStruk');
    const btnTutupKaki = document.getElementById('btnTutupStrukKaki');
    const btnCetak = document.getElementById('btnCetakStrukThermal');

    const tutup = () => modal.setAttribute('hidden', 'true');
    if (btnTutup) btnTutup.addEventListener('click', tutup);
    if (btnTutupKaki) btnTutupKaki.addEventListener('click', tutup);
    if (btnCetak) btnCetak.addEventListener('click', () => window.print());

    window.tampilStrukPesanan = function (orderId) {
      const ord = state.pesanan.find(p => p.id === orderId);
      if (!ord) return;

      document.getElementById('strukNamaKedai').textContent = state.profil.namaKedai.toUpperCase();
      document.getElementById('strukAlamatKedai').textContent = state.profil.alamat;
      document.getElementById('strukWaKedai').textContent = `WA: ${state.profil.noWa}`;
      document.getElementById('strukNomorNota').textContent = `No: ${ord.noOrder}`;
      document.getElementById('strukTglWaktu').textContent = `${ord.tanggal}, ${ord.jamMasuk} WIB`;

      document.getElementById('strukNamaPelanggan').textContent = ord.namaPemesan;
      document.getElementById('strukWaPelanggan').textContent = ord.waPemesan;
      document.getElementById('strukAlamatPelanggan').textContent = ord.alamat;
      document.getElementById('strukJarakKm').textContent = `${ord.jarakKm} km`;

      const wadahItems = document.getElementById('strukRincianMenu');
      wadahItems.innerHTML = ord.items.map(it => `
        <div class="struk-item-baris">
          <span>${it.qty}x ${it.nama}</span>
          <b>${formatRupiah(it.harga * it.qty)}</b>
        </div>
      `).join('');

      document.getElementById('strukSubtotal').textContent = formatRupiah(ord.subtotalMakanan);
      document.getElementById('strukOngkir').textContent = formatRupiah(ord.ongkir);
      document.getElementById('strukGrandTotal').textContent = formatRupiah(ord.totalBayar);
      document.getElementById('strukMetodeBayar').textContent = ord.metodeBayar;

      const wadahCat = document.getElementById('strukCatatanWadah');
      if (ord.catatan) {
        document.getElementById('strukCatatanDapur').textContent = `"${ord.catatan}"`;
        wadahCat.removeAttribute('hidden');
      } else {
        wadahCat.setAttribute('hidden', 'true');
      }

      modal.removeAttribute('hidden');
    };
  }

  // --- KELOLA MENU & PENGATURAN KEDAI ---
  function renderKelolaMenu() {
    const tbody = document.getElementById('tbodyKelolaMenu');
    if (!tbody) return;

    tbody.innerHTML = state.menu.map(m => `
      <tr>
        <td class="emoji-thumb">${m.emoji || '🍲'}</td>
        <td><b>${m.nama}</b><br><small class="redup-kecil">${m.deskripsi || '-'}</small></td>
        <td><span class="badge-status-tahap" style="text-transform:capitalize;">${m.kategori}</span></td>
        <td><b>${formatRupiah(m.harga)}</b></td>
        <td>
          <span class="badge-status-tahap" style="${m.stok === 'tersedia' ? 'background:#dcfce7;color:#16a34a;' : 'background:#fee2e2;color:#dc2626;'}">
            ${m.stok === 'tersedia' ? 'Tersedia' : 'Habis'}
          </span>
        </td>
        <td>
          <button type="button" class="btn-aksi-tabel" onclick="window.editMenu('${m.id}')">✏️ Edit</button>
          <button type="button" class="btn-aksi-tabel" style="color:#dc2626;" onclick="window.hapusMenu('${m.id}')">🗑️</button>
        </td>
      </tr>
    `).join('');
  }

  function initModalMenu() {
    const modal = document.getElementById('modalFormMenu');
    const btnTambah = document.getElementById('btnTambahMenu');
    const btnTutup = document.getElementById('btnTutupModalMenu');
    const btnBatal = document.getElementById('btnBatalMenu');
    const form = document.getElementById('formMenuKedai');

    if (btnTambah) {
      btnTambah.addEventListener('click', () => {
        form.reset();
        document.getElementById('formMenuId').value = '';
        document.getElementById('judulModalMenu').textContent = 'Tambah Menu Makanan Baru';
        modal.removeAttribute('hidden');
      });
    }

    const tutup = () => modal.setAttribute('hidden', 'true');
    if (btnTutup) btnTutup.addEventListener('click', tutup);
    if (btnBatal) btnBatal.addEventListener('click', tutup);

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = document.getElementById('formMenuId').value;
        const nama = document.getElementById('formMenuNama').value.trim();
        const kategori = document.getElementById('formMenuKategori').value;
        const harga = Number(document.getElementById('formMenuHarga').value) || 0;
        const emoji = document.getElementById('formMenuEmoji').value.trim() || '🍲';
        const deskripsi = document.getElementById('formMenuDeskripsi').value.trim();
        const stok = document.getElementById('formMenuStok').value;

        if (id) {
          const item = state.menu.find(m => m.id === id);
          if (item) {
            item.nama = nama;
            item.kategori = kategori;
            item.harga = harga;
            item.emoji = emoji;
            item.deskripsi = deskripsi;
            item.stok = stok;
          }
        } else {
          state.menu.push({
            id: 'm-' + Date.now(),
            nama: nama,
            kategori: kategori,
            harga: harga,
            emoji: emoji,
            deskripsi: deskripsi,
            stok: stok
          });
        }

        saveState();
        tutup();
        renderKelolaMenu();
        renderKatalogMenu();
        alert('✅ Menu berhasil disimpan!');
      });
    }

    window.editMenu = function (id) {
      const item = state.menu.find(m => m.id === id);
      if (!item) return;

      document.getElementById('formMenuId').value = item.id;
      document.getElementById('formMenuNama').value = item.nama;
      document.getElementById('formMenuKategori').value = item.kategori;
      document.getElementById('formMenuHarga').value = item.harga;
      document.getElementById('formMenuEmoji').value = item.emoji || '🍲';
      document.getElementById('formMenuDeskripsi').value = item.deskripsi || '';
      document.getElementById('formMenuStok').value = item.stok || 'tersedia';

      document.getElementById('judulModalMenu').textContent = 'Edit Menu Makanan';
      modal.removeAttribute('hidden');
    };

    window.hapusMenu = function (id) {
      if (confirm('Hapus menu ini dari daftar pesanan kedai?')) {
        state.menu = state.menu.filter(m => m.id !== id);
        saveState();
        renderKelolaMenu();
        renderKatalogMenu();
      }
    };
  }

  function initPengaturanKedai() {
    const form = document.getElementById('formSettingKedai');
    if (!form) return;

    document.getElementById('setNamaKedai').value = state.profil.namaKedai;
    document.getElementById('setAlamatKedai').value = state.profil.alamat;
    document.getElementById('setWaKedai').value = state.profil.noWa;
    document.getElementById('setRekeningKedai').value = state.profil.rekening;
    document.getElementById('setOngkirDasar').value = state.profil.ongkirDasar;
    document.getElementById('setOngkirPerKm').value = state.profil.ongkirPerKm;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      state.profil.namaKedai = document.getElementById('setNamaKedai').value.trim();
      state.profil.alamat = document.getElementById('setAlamatKedai').value.trim();
      state.profil.noWa = document.getElementById('setWaKedai').value.trim();
      state.profil.rekening = document.getElementById('setRekeningKedai').value.trim();
      state.profil.ongkirDasar = Number(document.getElementById('setOngkirDasar').value) || 5000;
      state.profil.ongkirPerKm = Number(document.getElementById('setOngkirPerKm').value) || 2000;

      saveState();
      document.getElementById('headerNamaKedai').textContent = state.profil.namaKedai;
      document.getElementById('bannerInfoOngkir').textContent = `Ongkir bersahabat kurir internal: ${formatRupiah(state.profil.ongkirPerKm)}/km (Dasar: ${formatRupiah(state.profil.ongkirDasar)}). Makanan dijamin hangat & porsi penuh!`;
      alert('✅ Pengaturan profil kedai & tarif kurir berhasil disimpan!');
    });
  }

  // --- BACKUP RESTORE & EKSPOR CSV ---
  function initBackupRestore() {
    const btnBackup = document.getElementById('btnUnduhBackupJson');
    const inputRestore = document.getElementById('inputPulihkanJson');
    const btnCsv = document.getElementById('btnEksporPesananCsv');
    const btnResetDemo = document.getElementById('btnResetDemo');

    if (btnBackup) {
      btnBackup.addEventListener('click', () => {
        const jsonStr = JSON.stringify(state, null, 2);
        unduhBerkasTeks(`dashdish_backup_${getTanggalHariIniISO()}.json`, jsonStr);
      });
    }

    if (inputRestore) {
      inputRestore.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
          try {
            const data = JSON.parse(event.target.result);
            if (!data.menu || !data.pesanan) {
              throw new Error('Berkas cadangan tidak cocok.');
            }
            state = data;
            saveState();
            alert('✅ Data pesanan kedai berhasil dipulihkan!');
            location.reload();
          } catch (err) {
            alert('Gagal membaca file cadangan: ' + err.message);
          }
        };
        reader.readAsText(file);
      });
    }

    if (btnCsv) {
      btnCsv.addEventListener('click', () => {
        let csv = 'No Order,Nama Pemesan,WhatsApp,Alamat,Jarak Km,Subtotal Makanan,Ongkir,Total Bayar,Metode Bayar,Catatan,Status,Jam,Tanggal\n';
        state.pesanan.forEach(p => {
          csv += `"${p.noOrder}","${p.namaPemesan}","${p.waPemesan}","${p.alamat}",${p.jarakKm},${p.subtotalMakanan},${p.ongkir},${p.totalBayar},"${p.metodeBayar}","${p.catatan || '-'}","${p.status}","${p.jamMasuk}","${p.tanggal}"\n`;
        });
        unduhBerkasTeks(`riwayat_pesanan_dashdish_${getTanggalHariIniISO()}.csv`, csv);
      });
    }

    if (btnResetDemo) {
      btnResetDemo.addEventListener('click', () => {
        if (confirm('Atur ulang seluruh menu dan pesanan ke data demo bawaan?')) {
          localStorage.removeItem(STORAGE_KEY);
          location.reload();
        }
      });
    }
  }

  function unduhBerkasTeks(namaBerkas, isiTeks) {
    const blob = new Blob([isiTeks], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = namaBerkas;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

})();
