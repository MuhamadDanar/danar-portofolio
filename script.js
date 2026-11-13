/* ==========================================================
   1) CONFIG: isi data kontak di sini. Kosongkan ("") jika belum ada.
      Link hanya tampil kalau sudah diisi, jadi tidak ada tombol palsu.
   ========================================================== */
const CONFIG = {
  email: "",     // contoh: "nama@email.com"
  linkedin: "",  // contoh: "https://www.linkedin.com/in/username"
  github: "",    // contoh: "https://github.com/username"
  cv: ""         // contoh: "assets/documents/CV-Muhamad-Danar.pdf"
};

/* ==========================================================
   2) PROJECTS: setiap proyek = satu blok { ... }.
      Untuk menambah proyek, salin satu blok. Untuk menghapus, hapus blok.
      Teks dalam [kurung siku] adalah placeholder yang harus Anda ganti.
      image: isi path gambar, contoh "assets/images/proyek-a.jpg" (kosong = placeholder)
   ========================================================== */
const PROJECTS = [
  {
    id: "smart-greenhouse",
    title: "Smart Greenhouse: Automatic Irrigation System",
    type: "Proyek Akhir D3 (Akademik)",
    image: "",
    summary: "Sistem penyiraman otomatis pada prototype greenhouse melon dengan jaringan sensor nirkabel ESP-NOW dan aplikasi Android.",
    tech: ["ESP32", "ESP8266", "ESP-NOW", "10 sensor kelembapan tanah", "Kodular"],
    overview: "Proyek akhir D3 berupa sistem penyiraman otomatis pada prototype greenhouse tanaman melon. ESP32 berperan sebagai kontrol utama/gateway dan ESP8266 sebagai wireless sensor node.",
    objectives: ["[Tulis tujuan proyek sesuai laporan Tugas Akhir]"],
    tools: ["ESP32 (gateway)", "ESP8266 (sensor node)", "10 sensor kelembapan tanah", "RTC DS3231", "DHT22", "Sensor ultrasonik", "Relay", "LCD", "SD Card", "Kodular (aplikasi Android)"],
    architecture: "Komunikasi antar-node menggunakan ESP-NOW. Monitoring melalui jaringan Wi-Fi lokal ESP32 yang diakses aplikasi Android. [Tambahkan diagram arsitektur dan jumlah node]",
    implementation: ["Mode penyiraman otomatis dan penjadwalan.", "[Jelaskan alur kerja, logika penyiraman, dan fitur SD Card/LCD]"],
    results: ["[Isi hasil pengujian: akurasi sensor, keberhasilan penyiraman, jangkauan ESP-NOW, dll.]"],
    contribution: ["[Jelaskan peran pribadi Anda: hardware, firmware, aplikasi, pengujian]"]
  },
  {
    id: "motor-monitoring",
    title: "Industrial Motor Condition Monitoring",
    type: "[Kategori: Akademik / Pribadi]",
    image: "",
    summary: "Monitoring kondisi motor DC dengan ESP32 dan Raspberry Pi, lengkap dengan deteksi kondisi abnormal dan alarm.",
    tech: ["ESP32", "Raspberry Pi", "MQTT", "Firebase", "MPU6050", "INA219"],
    overview: "Sistem monitoring kondisi motor DC menggunakan ESP32 dan Raspberry Pi.",
    objectives: ["[Tulis tujuan proyek]"],
    tools: ["ESP32", "Raspberry Pi", "Encoder (RPM)", "Sensor suhu", "MPU6050 (getaran)", "INA219 (arus)", "MQTT", "Firebase"],
    architecture: "Data dikomunikasikan melalui MQTT dan terintegrasi dengan Firebase. [Jelaskan peran ESP32 dan Raspberry Pi, tambahkan diagram]",
    implementation: ["Pengukuran RPM dengan encoder, suhu, getaran, dan arus.", "Deteksi kondisi abnormal dan sistem alarm.", "[Jelaskan ambang batas dan logika deteksi]"],
    results: ["[Isi hasil pengujian]"],
    contribution: ["[Jelaskan peran pribadi Anda]"]
  },
  {
    id: "internship-watering",
    title: "Automated Watering System: Internship Project",
    type: "Proyek Perusahaan (Magang)",
    image: "",
    summary: "Program sistem penyiraman otomatis untuk greenhouse melon yang diintegrasikan dengan aplikasi khusus, dikerjakan saat magang di Tensai Innovations.",
    tech: ["Pemrograman", "Integrasi sistem", "Greenhouse melon"],
    overview: "Proyek perusahaan selama magang di Tensai Innovations (Februari–Juni 2025). Detail internal perusahaan tidak dipublikasikan.",
    objectives: ["[Tulis tujuan yang boleh dipublikasikan]"],
    tools: ["[Isi perangkat/teknologi yang boleh dipublikasikan]"],
    architecture: "[Isi gambaran umum yang boleh dipublikasikan]",
    implementation: ["Mengembangkan program sistem penyiraman otomatis.", "Mengintegrasikan perangkat dengan aplikasi khusus."],
    results: ["[Isi hasil yang boleh dipublikasikan]"],
    contribution: ["Berfokus pada pemrograman dan integrasi sistem.", "[Rincikan kontribusi Anda setelah mendapat izin publikasi]"]
  },
  {
    id: "wsn-ota",
    title: "Wireless Sensor Network: OTA Development",
    type: "[Kategori: Akademik / Pribadi / Perusahaan]",
    image: "",
    summary: "Pengembangan node WSN dengan fitur Over-The-Air (OTA) untuk mempermudah pemeliharaan dan troubleshooting firmware.",
    tech: ["WSN", "OTA", "Firmware"],
    overview: "Pengembangan perangkat node WSN dengan penambahan fitur Over-The-Air (OTA) agar pemeliharaan dan troubleshooting firmware lebih mudah.",
    objectives: ["Mempermudah pemeliharaan dan troubleshooting firmware node.", "[Tambahkan tujuan lain]"],
    tools: ["[Isi mikrokontroler, library, dan tools yang dipakai]"],
    architecture: "[Jelaskan alur pembaruan firmware OTA, tambahkan diagram]",
    implementation: ["[Jelaskan langkah implementasi OTA]"],
    results: ["[Isi hasil pengujian]"],
    contribution: ["[Jelaskan peran pribadi Anda]"]
  }
];

/* ==========================================================
   3) KODE PROGRAM: umumnya tidak perlu diubah
   ========================================================== */
const list = items => items.map(i => `<li${i.startsWith("[") ? ' class="todo"' : ""}>${i}</li>`).join("");
const media = (p, cls) => p.image
  ? `<img src="${p.image}" alt="Gambar proyek ${p.title}" loading="lazy">`
  : `<div class="ph" role="img" aria-label="Placeholder gambar proyek">Gambar proyek (placeholder)</div>`;

// Kartu proyek
document.getElementById("project-grid").innerHTML = PROJECTS.map(p => `
  <article class="card pcard">
    ${media(p)}
    <div class="pbody">
      <span class="badge">${p.type}</span>
      <h3>${p.title}</h3>
      <p>${p.summary}</p>
      <ul class="chips">${p.tech.map(t => `<li>${t}</li>`).join("")}</ul>
      <a class="btn" href="#detail-${p.id}">View Details</a>
    </div>
  </article>`).join("");

// Detail proyek
document.getElementById("project-details").innerHTML = PROJECTS.map(p => `
  <article class="card detail" id="detail-${p.id}">
    ${media(p)}
    <span class="badge">${p.type}</span>
    <h3>${p.title}</h3>
    <h4>Overview</h4><p>${p.overview}</p>
    <h4>Objectives</h4><ul>${list(p.objectives)}</ul>
    <h4>Tools</h4><ul>${list(p.tools)}</ul>
    <h4>Architecture</h4><p>${p.architecture}</p>
    <h4>Implementation</h4><ul>${list(p.implementation)}</ul>
    <h4>Testing &amp; Results</h4><ul>${list(p.results)}</ul>
    <h4>My Contribution</h4><ul>${list(p.contribution)}</ul>
    <p class="back"><a href="#projects">Kembali ke Featured Projects</a></p>
  </article>`).join("");

// Kontak: hanya tampil sebagai link jika sudah diisi di CONFIG
const contacts = [
  ["Email", CONFIG.email, CONFIG.email && "mailto:" + CONFIG.email],
  ["LinkedIn", CONFIG.linkedin, CONFIG.linkedin],
  ["GitHub", CONFIG.github, CONFIG.github],
  ["CV", CONFIG.cv && "Unduh CV (PDF)", CONFIG.cv]
];
document.getElementById("contact-list").innerHTML = contacts.map(([label, text, href]) =>
  `<li><span class="k">${label}</span>` +
  (href ? `<a href="${href}" ${href.startsWith("http") ? 'target="_blank" rel="noopener"' : ""}>${text}</a>`
        : `<span class="todo">[belum diisi]</span>`) + `</li>`).join("");

// Tahun footer
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile
const toggle = document.querySelector(".nav-toggle");
const menu = document.getElementById("menu");
toggle.addEventListener("click", () => {
  const open = menu.classList.toggle("open");
  toggle.setAttribute("aria-expanded", open);
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") { menu.classList.remove("open"); toggle.setAttribute("aria-expanded", false); }
});

// Tandai menu aktif saat scroll
const links = [...menu.querySelectorAll("a")];
if ("IntersectionObserver" in window) {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(en => {
      if (!en.isIntersecting) return;
      const id = en.target.id === "details" ? "projects" : en.target.id;
      links.forEach(a => a.getAttribute("href") === "#" + id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current"));
    });
  }, { rootMargin: "-40% 0px -55% 0px" });
  document.querySelectorAll("main section[id]").forEach(s => obs.observe(s));
}
