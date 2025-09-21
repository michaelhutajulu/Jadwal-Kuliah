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
    5: "Bangun dan Ibadah", 6: "Mandi dan persiapan kuliah", 7: "Sarapan", 8: "Mata Kuliah Login", 9: "Mata Kuliah PBO ", 10: "Mata Kuliah Alstrudat",
    11: "Mata Kuliah PAP", 12: "Makan Siang", 13: "Mata Kuliah Certan", 14: "Mata Kuliah SBD", 15: "Mata Kuliah Jarkom", 16: "Mata Kuliah Bahasa Inggris",
    17: "Kembali ke Asrama", 18: "Mandi", 19: "Makan Malam", 20: "Belajar", 21: "Belajar", 22: "Belajar", 23: "Ibadah dan Tidur"
  },
  "Selasa": {
    5: "-", 6: "-", 7: "-", 8: "-", 9: "-", 10: "-",
    11: "-", 12: "-", 13: "-", 14: "-", 15: "-", 16: "-",
    17: "-", 18: "-", 19: "-", 20: "-", 21: "-", 22: "-", 23: "-"
  },
  "Rabu": {
    5: "-", 6: "-", 7: "-", 8: "-", 9: "-", 10: "-",
    11: "-", 12: "-", 13: "-", 14: "-", 15: "-", 16: "-",
    17: "-", 18: "-", 19: "-", 20: "-", 21: "-", 22: "-", 23: "-"
  },
  "Kamis": {
    5: "-", 6: "-", 7: "-", 8: "-", 9: "-", 10: "-",
    11: "-", 12: "-", 13: "-", 14: "-", 15: "-", 16: "-",
    17: "-", 18: "-", 19: "-", 20: "-", 21: "-", 22: "-", 23: "-"
  },
  "Jumat": {
    5: "-", 6: "-", 7: "-", 8: "-", 9: "-", 10: "-",
    11: "-", 12: "-", 13: "-", 14: "-", 15: "-", 16: "-",
    17: "-", 18: "-", 19: "-", 20: "-", 21: "-", 22: "-", 23: "-"
  },
  "Sabtu": {
    5: "-", 6: "-", 7: "-", 8: "-", 9: "-", 10: "-",
    11: "-", 12: "-", 13: "-", 14: "-", 15: "-", 16: "-",
    17: "-", 18: "-", 19: "-", 20: "-", 21: "-", 22: "-", 23: "-"
  },
  "Minggu": {
    5: "-", 6: "-", 7: "-", 8: "-", 9: "-", 10: "-",
    11: "-", 12: "-", 13: "-", 14: "Belajar", 15: "Belajar", 16: "-",
    17: "-", 18: "-", 19: "-", 20: "-", 21: "-", 22: "-", 23: "-"
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

/* ---------- HIGHLIGHT KEGIATAN SEKARANG ---------- */
function highlightCurrentActivity() {
  const now = new Date();
  const currentDayIndex = (now.getDay() + 6) % 7; // Senin=0 ... Minggu=6
  const currentDayName = days[currentDayIndex];
  const currentHour = now.getHours();

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

        // Update card
        const activity = activities[currentDayName][currentHour] !== "-" 
          ? activities[currentDayName][currentHour] 
          : "Tidak ada kegiatan";
        document.getElementById("current-card").innerHTML = `
          <h2>${activity}</h2>
          <p>${now.toLocaleString("id-ID", { weekday: "long", hour: "2-digit", minute: "2-digit" })}</p>
        `;
      }
    }
  }
}
setInterval(highlightCurrentActivity, 60000);
highlightCurrentActivity();
