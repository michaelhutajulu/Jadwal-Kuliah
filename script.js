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



const startHour = 5;
const endHour = 23;
const scheduleWrapper = document.getElementById("schedule-container");

/* ---------- BUAT TABEL PER HARI ---------- */
const days = ["Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu"];
days.forEach(day => {
  const dayBox = document.createElement("div");
  dayBox.classList.add("day-table");

  const dayTable = document.createElement("table");

  // Header
  const thead = document.createElement("thead");
  thead.innerHTML = `
    <tr>
      <th>No</th>
      <th>Jam</th>
      <th>${day}</th>
    </tr>
  `;
  dayTable.appendChild(thead);

  // Body
  const tbody = document.createElement("tbody");
  let no = 1;
  for (let hour = startHour; hour <= endHour; hour++) {
    const row = document.createElement("tr");

    const noCell = document.createElement("td");
    noCell.textContent = no++;
    row.appendChild(noCell);

    const timeCell = document.createElement("td");
    timeCell.textContent = `${hour}:00 - ${hour + 1}:00`;
    row.appendChild(timeCell);

    const activityCell = document.createElement("td");
    activityCell.textContent = activities[day][hour] || "-";
    row.appendChild(activityCell);

    tbody.appendChild(row);
  }
  dayTable.appendChild(tbody);
  dayBox.appendChild(dayTable);
  scheduleWrapper.appendChild(dayBox);
});

function highlightCurrentActivity() {
  const now = new Date();
  const currentDayIndex = (now.getDay() + 6) % 7; // Senin=0 ... Minggu=6
  const currentDayName = days[currentDayIndex];
  const currentHour = now.getHours(); // tetap dipakai untuk highlight

  // Ambil tanggal lengkap
  const currentDate = now.getDate();
  const currentMonth = now.getMonth() + 1; // bulan mulai dari 0
  const currentYear = now.getFullYear();

  const allTables = document.querySelectorAll(".day-table tbody");
  allTables.forEach(tbody => {
    tbody.querySelectorAll("td").forEach(c => c.classList.remove("active-cell"));
  });

  if (currentHour >= startHour && currentHour <= endHour) {
    const todayTable = allTables[currentDayIndex];
    const rowIndex = currentHour - startHour;
    const activeRow = todayTable?.querySelectorAll("tr")[rowIndex];

    if (activeRow) {
      const activeCell = activeRow.querySelectorAll("td")[2];
      if (activeCell) {
        activeCell.classList.add("active-cell");

        // Update card → sekarang tampilkan juga tanggal
        const activity = activities[currentDayName]?.[currentHour] ?? "Tidak ada kegiatan";
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
}

setInterval(highlightCurrentActivity, 60000);
highlightCurrentActivity();
