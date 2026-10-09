const kotak = document.getElementById("kotak");
const sampul = document.getElementById("sampul");
const isi = document.getElementById("isi");
const elTeks = document.getElementById("teks");
const elPilihan = document.getElementById("pilihan");

// Isi judul dan disclaimer dari cerita.js
document.getElementById("judul").textContent = judulCerita;
document.getElementById("disclaimer").textContent = disclaimer;
document.title = judulCerita;

function tampilkanSampul() {
  isi.hidden = true;
  sampul.hidden = false;
  kotak.classList.remove("ending");
}

function tampilkan(id) {
  const node = cerita[id];
  if (!node) {
    console.error("Node tidak ditemukan: " + id);
    return;
  }

  kotak.classList.add("ganti");

  setTimeout(() => {
    // Hapus isi halaman sebelumnya, ganti dengan yang baru
    elTeks.textContent = node.ending ? node.judul + "\n\n" + node.teks : node.teks;
    elPilihan.innerHTML = "";
    kotak.classList.toggle("ending", !!node.ending);

    // Di ending, tombolnya kembali ke halaman awal
    if (node.ending) {
      const ulang = document.createElement("button");
      ulang.textContent = "Mulai dari awal";
      ulang.addEventListener("click", tampilkanSampul);
      elPilihan.appendChild(ulang);
    } else {
      node.pilihan.forEach(p => {
        const tombol = document.createElement("button");
        tombol.textContent = p.label;
        tombol.addEventListener("click", () => tampilkan(p.ke));
        elPilihan.appendChild(tombol);
      });
    }

    kotak.classList.remove("ganti");
  }, 250);
}

// Tombol "Lanjut" di halaman awal
document.getElementById("tombolLanjut").addEventListener("click", () => {
  sampul.hidden = true;
  isi.hidden = false;
  tampilkan(nodeAwal);
});

// Blokir tombol Back browser supaya pembaca tidak bisa mundur
history.pushState(null, "", location.href);
window.addEventListener("popstate", () => {
  history.pushState(null, "", location.href);
});
