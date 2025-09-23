/* ---------- JAM DIGITAL ---------- */
function updateDigitalClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  document.getElementById("digital-clock").textContent =
    `${hours}:${minutes}:${seconds}`;
}
setInterval(updateDigitalClock, 1000);
updateDigitalClock();

/* ---------- JADWAL DATA ---------- */
const activities = {
  "Senin": {
    5: "Bangun, Ibadah dan Mandi",
    6: "Berangkat ke kampus",
    7: "Sarapan",
    8: "LOGIN (T 511 - AMP)",
    9: "PBO (T 511 - CDN)",
    10: "ALSTRUDAT (T 527 - TAP)",
    11: "PAP (T 511 - RIS)",
    12: "Makan Siang",
    13: "CERTAN (T 511 - OPH)",
    14: "SBD (T 516 - ADS)",
    15: "JARKOM (T 516 - ESS)",
    16: "ING II (T 516 - RMM)",
    17: "Balik Asrama dan persiapan mandi",
    18: "Berangkat ke kampus",
    19: "Makan Malam",
    20: "Belajar",
    21: "Persiapan Balik Asrama",
    22: "Ibadah",
    23: "Tidur"
  },
  "Selasa": {
    5: "Bangun, Ibadah dan Mandi",
    6: "Berangkat ke kampus",
    7: "Sarapan",
    8: "Review materi ALSTRUDAT",
    9: "Latihan soal Certan",
    10: "ALSTRUDAT (P 527 - TAP)",
    11: "ALSTRUDAT (P 527 - TAP)",
    12: "Makan Siang",
    13: "CERTAN (P 527 - OPH)",
    14: "CERTAN (P 527 - OPH)",
    15: "PAP (P 517 - RIS)",
    16: "PAP (P 517 - RIS)",
    17: "Balik Asrama dan persiapan mandi",
    18: "Berangkat ke kampus",
    19: "Makan Malam",
    20: "Belajar",
    21: "Persiapan Balik Asrama",
    22: "Ibadah",
    23: "Tidur"
  },
  "Rabu": {
    5: "Bangun, Ibadah dan Mandi",
    6: "Berangkat ke kampus",
    7: "Sarapan",
    8: "ALSTRUDAT (P 517 - TAP)",
    9: "ALSTRUDAT (P 517 - TAP)",
    10: "PBO (P 527 - CDN)",
    11: "PBO (P 527 - CDN)",
    12: "Makan Siang",
    13: "SBD (P 511 - ADS)",
    14: "SBD (P 511 - ADS)",
    15: "Kerjakan tugas PBO",
    16: "Latihan SQL SBD",
    17: "Balik Asrama dan persiapan mandi",
    18: "Berangkat ke kampus",
    19: "Makan Malam",
    20: "Belajar",
    21: "Persiapan Balik Asrama",
    22: "Ibadah",
    23: "Tidur"
  },
  "Kamis": {
    5: "Bangun, Ibadah dan Mandi",
    6: "Berangkat ke kampus",
    7: "Sarapan",
    8: "LOGIN (P 527 - AMP)",
    9: "Review materi LOGIN",
    10: "Kerjakan laporan PAP",
    11: "Diskusi kelompok / belajar bareng",
    12: "Makan Siang",
    13: "PAP (P 516 - RIS)",
    14: "PAP (P 516 - RIS)",
    15: "SBD (P 517 - ADS)",
    16: "SBD (P 517 - ADS)",
    17: "Balik Asrama dan persiapan mandi",
    18: "Berangkat ke kampus",
    19: "Makan Malam",
    20: "Belajar",
    21: "Persiapan Balik Asrama",
    22: "Ibadah",
    23: "Tidur"
  },
  "Jumat": {
    5: "Bangun, Ibadah dan Mandi",
    6: "Berangkat ke kampus",
    7: "Sarapan",
    8: "JARKOM (P 517 - ESS)",
    9: "JARKOM (P 517 - ESS)",
    10: "Review catatan minggu ini",
    11: "Kerjakan tugas ringan",
    12: "Makan Siang",
    13: "ING II (P 516 - RMM)",
    14: "ING II (P 516 - RMM)",
    15: "PBO (P 516 - CDN)",
    16: "PBO (P 516 - CDN)",
    17: "Balik Asrama dan persiapan mandi serta Loundry",
    18: "Persiapan IB jika IB",
    19: "Belajar ulang JARKOM",
    20: "Game (max 1 jam)",
    21: "Persiapan tugas minggu depan",
    22: "Ibadah",
    23: "Tidur"
  },
  "Sabtu": {
    5: "Bangun",
    6: "Olahraga ringan",
    7: "Sarapan",
    8: "Review materi minggu ini",
    9: "Kerjakan tugas besar (PBO/SBD)",
    10: "Kerjakan laporan praktikum",
    11: "Game / hiburan",
    12: "Makan Siang",
    13: "Belajar Certan",
    14: "Diskusi bareng teman",
    15: "Game / hiburan",
    16: "Belajar Jarkom",
    17: "Persiapan mandi",
    18: "Jalan / refreshing",
    19: "Makan Malam",
    20: "Game bareng teman",
    21: "Belajar ringan",
    22: "Ibadah",
    23: "Tidur"
  },
  "Minggu": {
    5: "Bangun",
    6: "Olahraga",
    7: "Sarapan",
    8: "Ibadah", 
    9: "Ibadah", 
    10: "Ibadah", 
    11: "Family time / bersih kamar",
    12: "Makan Siang",
    13: "Belajar ringan (Certan/PAP)",
    14: "Game / hiburan",
    15: "Tugas kuliah / project",
    16: "Game / hiburan",
    17: "Persiapan mandi",
    18: "Jalan sore",
    19: "Makan Malam",
    20: "Review catatan minggu ini",
    21: "Persiapan kuliah Senin",
    22: "Ibadah",
    23: "Tidur"
  }
};

/* ---------- KONFIG ---------- */
const startHour = 5;
const endHour = 23;
const days = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"];
const scheduleWrapper = document.getElementById("schedule-container");
const dayTabs = document.getElementById("day-tabs");

/* ---------- BUAT TAB HARI ---------- */
days.forEach((day, index) => {
  const btn = document.createElement("button");
  btn.textContent = day;
  btn.onclick = () => renderDaySchedule(index);
  dayTabs.appendChild(btn);
});

/* ---------- RENDER TABEL 1 HARI ---------- */
function renderDaySchedule(dayIndex) {
  const day = days[dayIndex];
  scheduleWrapper.innerHTML = ""; // clear container

  const table = document.createElement("table");

  // Header
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>No</th>
      <th>Jam</th>
      <th>${day}</th>
    </tr>
  `;
  table.appendChild(thead);

  // Body
  const tbody = document.createElement("tbody");
  let no = 1;
  for (let hour = startHour; hour <= endHour; hour++) {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${no++}</td>
      <td>${hour}:00 - ${hour+1}:00</td>
      <td>${activities[day][hour] || "-"}</td>
    `;
    tbody.appendChild(row);
  }
  table.appendChild(tbody);
  scheduleWrapper.appendChild(table);

  highlightCurrentActivity(dayIndex);
  updateActiveTab(dayIndex);

  // 🔹 toast saat ganti hari
  showToast(`Jadwal ${day} ditampilkan 📅`);
}

/* ---------- HIGHLIGHT AKTIVITAS SEKARANG ---------- */
function highlightCurrentActivity(dayIndex) {
  const now = new Date();
  const currentDayIndex = (now.getDay() + 6) % 7; // Senin=0 ... Minggu=6
  const currentHour = now.getHours();
  const day = days[dayIndex];

  // Reset row
  scheduleWrapper.querySelectorAll("tr").forEach(r => r.classList.remove("active-row"));

  if (dayIndex === currentDayIndex && currentHour >= startHour && currentHour <= endHour) {
    const rows = scheduleWrapper.querySelectorAll("tbody tr");
    const rowIndex = currentHour - startHour;
    const activeRow = rows[rowIndex];
    if (activeRow) {
      activeRow.classList.add("active-row");

      const activity = activities[day]?.[currentHour] ?? "Tidak ada kegiatan";
      document.getElementById("current-card").innerHTML = `
        <h2>${activity}</h2>
        <p>
          ${now.toLocaleString("id-ID", { weekday: "long", hour: "2-digit", minute: "2-digit" })}<br>
          ${now.toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })}
        </p>
      `;
    }
  }
}

/* ---------- UPDATE TAB AKTIF ---------- */
function updateActiveTab(activeIndex) {
  const buttons = dayTabs.querySelectorAll("button");
  buttons.forEach((btn, idx) => {
    btn.classList.toggle("active", idx === activeIndex);
  });
}

/* ---------- TOGGLE DARK/LIGHT MODE ---------- */
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// cek preferensi sebelumnya
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light-mode");
  themeToggle.textContent = "☀️";
} else {
  themeToggle.textContent = "🌙";
}

// klik toggle -> gabung dengan toast
themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  const isLight = body.classList.contains("light-mode");
  themeToggle.textContent = isLight ? "☀️" : "🌙";
  localStorage.setItem("theme", isLight ? "light" : "dark");

  // 🔹 Tampilkan toast
  showToast(isLight ? "Tema terang aktif 🌞" : "Tema gelap aktif 🌙");
});

/* ---------- FITUR PENCARIAN LIST ---------- */
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", function () {
  const query = this.value.trim().toLowerCase();
  searchResults.innerHTML = ""; // reset hasil

  if (query.length === 0) return;

  let found = false;

  Object.keys(activities).forEach(day => {
    for (let hour in activities[day]) {
      const text = activities[day][hour];
      if (text.toLowerCase().includes(query)) {
        found = true;
        const item = document.createElement("p");
        item.innerHTML = `✅ <span>${day}</span> - ${hour}:00 → ${text}`;
        searchResults.appendChild(item);
      }
    }
  });

  if (!found) {
    searchResults.innerHTML = "<p>❌ Tidak ditemukan</p>";
  }
});

/* ---------- TOAST FUNCTION ---------- */
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3500); // hilang setelah 3 detik
}


document.addEventListener("DOMContentLoaded", () => {
  const progressBar = document.getElementById("day-progress");

  function updateProgress() {
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;

    // Misal range kegiatan harian jam 07.00 - 18.00
    const startDay = 5;  
    const endDay = 23;   
    let percent;

    if (currentHour < startDay) {
      percent = 0;
    } else if (currentHour > endDay) {
      percent = 100;
    } else {
      percent = ((currentHour - startDay) / (endDay - startDay)) * 100;
    }

    progressBar.style.width = percent + "%";
    progressBar.innerText = Math.floor(percent) + "%";
  }

  // Update saat load + tiap menit
  updateProgress();
  setInterval(updateProgress, 60000);
});




/* ---------- DEFAULT: HARI INI ---------- */
const todayIndex = (new Date().getDay() + 6) % 7;
renderDaySchedule(todayIndex);

/* ---------- UPDATE HIGHLIGHT PER MENIT ---------- */
setInterval(() => {
  const activeTab = [...dayTabs.querySelectorAll("button")].findIndex(btn => btn.classList.contains("active"));
  if (activeTab >= 0) {
    highlightCurrentActivity(activeTab);
  }
}, 60000);
