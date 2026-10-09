// ====== HALAMAN AWAL ======
const judulCerita = "Judul Fanfic Kamu";

const disclaimer = "Cerita ini adalah karya fiksi penggemar (fanfiction) dan tidak berhubungan dengan pihak mana pun.\nSemua tokoh dan dunia cerita milik pencipta aslinya.\nPilihanmu menentukan akhir cerita, dan kamu tidak bisa kembali ke halaman sebelumnya.";

// ====== ISI CERITA ======
// ISI CERITAMU DI SINI.
// Tiap bagian = satu "node". "ke" harus sama dengan nama node tujuan.
// Kalau ending: true, pembaca cuma dapat tombol "Mulai dari awal".

const cerita = {
  awal: {
    teks: "Kamu berdiri di depan pintu kelas yang gelap.\nDari dalam terdengar suara pelan.",
    pilihan: [
      { label: "Masuk ke dalam", ke: "kelas" },
      { label: "Pergi dari sini", ke: "ending_kabur" }
    ]
  },

  kelas: {
    teks: "Di dalam, ada seseorang duduk di bangku paling belakang.",
    pilihan: [
      { label: "Sapa dia", ke: "ending_baik" },
      { label: "Diam saja", ke: "ending_buruk" }
    ]
  },

  ending_kabur: {
    ending: true,
    judul: "Ending: Pengecut",
    teks: "Kamu lari, dan tidak pernah tahu apa yang ada di dalam."
  },

  ending_baik: {
    ending: true,
    judul: "Ending: Awal yang Baru",
    teks: "Dia menoleh dan tersenyum. Sejak hari itu, semuanya berubah."
  },

  ending_buruk: {
    ending: true,
    judul: "Ending: Terlambat",
    teks: "Kamu terlalu lama diam. Ketika sadar, dia sudah pergi."
  }
};

const nodeAwal = "awal";
