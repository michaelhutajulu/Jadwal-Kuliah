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

/* ---------- JADWAL DATA SEMESTER 4 ---------- */
const activities = {
  "Senin": {
    5: "Bangun, Ibadah dan Mandi",
    6: "Berangkat ke kampus",
    7: "Sarapan",
    8: "PROBSTAT (T 527 - AMP)",
    9: "PROBSTAT (T 527 - AMP)",
    10: "Waktu Kosong",
    11: "Waktu Kosong",
    12: "Makan Siang",
    13: "Waktu Kosong",
    14: "PPL (T 511 - AMS)",
    15: "Waktu Kosong",
    16: "Waktu Kosong",
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
    8: "TEKNO (T 511 - RIS)",
    9: "Waktu Kosong",
    10: "PA II (T 517 - CDN)",
    11: "PASTI (T 511 - RCH)",
    12: "Makan Siang",
    13: "PROBSTAT (P 527 - AMP)",
    14: "PROBSTAT (P 527 - AMP)",
    15: "PAM (T 516 - ADS)",
    16: "Waktu Kosong",
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
    8: "PASTI (P 527 - RCH)",
    9: "PASTI (P 527 - RCH)",
    10: "PASTI (P 527 - RCH)",
    11: "PASTI (P 527 - RCH)",
    12: "Makan Siang",
    13: "TEKNO (P 527 - RIS)",
    14: "TEKNO (P 527 - RIS)",
    15: "TEKNO (P 527 - RIS)",
    16: "TEKNO (P 527 - RIS)",
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
    8: "PAM (P 527 - ADS)",
    9: "PAM (P 527 - ADS)",
    10: "PAM (P 527 - ADS)",
    11: "PAM (P 527 - ADS)",
    12: "Makan Siang",
    13: "PA II (P 527 - CDN)",
    14: "PA II (P 527 - CDN)",
    15: "PA II (P 527 - CDN)",
    16: "PA II (P 527 - CDN)",
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
    8: "PPL (P 527 - AMS)",
    9: "PPL (P 527 - AMS)",
    10: "PPL (P 527 - AMS)",
    11: "PPL (P 527 - AMS)",
    12: "Makan Siang",
    13: "Waktu Kosong",
    14: "Waktu Kosong",
    15: "PANCASILA (T AUD - APT)",
    16: "PANCASILA (T AUD - APT)",
    17: "Balik Asrama dan persiapan mandi serta Loundry",
    18: "Persiapan IB jika IB",
    19: "Belajar ulang PROBSTAT",
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
    9: "Kerjakan tugas besar (PPL/PASTI)",
    10: "Kerjakan laporan praktikum",
    11: "Game / hiburan",
    12: "Makan Siang",
    13: "Belajar PROBSTAT",
    14: "Diskusi bareng teman",
    15: "Game / hiburan",
    16: "Belajar TEKNO",
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
    13: "Belajar ringan (PAM/PA II)",
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

/* ======================== */
/* 🔹 Swipe untuk ganti hari */
/* ======================== */
let startX = 0;
let endX = 0;

document.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});

document.addEventListener("touchend", e => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diffX = endX - startX;

  if (Math.abs(diffX) > 80) { // minimal jarak swipe
    const activeBtn = document.querySelector(".day-tabs button.active");
    const buttons = Array.from(document.querySelectorAll(".day-tabs button"));
    let index = buttons.indexOf(activeBtn);

    if (diffX < 0 && index < buttons.length - 1) {
      // geser kiri → hari berikutnya
      buttons[index + 1].click();
    } else if (diffX > 0 && index > 0) {
      // geser kanan → hari sebelumnya
      buttons[index - 1].click();
    }
  }
}

/* ======================== */
/* 🔹 Cuaca Dinamis (Real-time) */
/* ======================== */
async function loadWeather() {
  const weatherBox = document.getElementById("weather-widget");
  
  // API key dari OpenWeatherMap
  const API_KEY = "4e99fc81eb482058c959ddae5229dd16";
  const CITY = "Jakarta"; // Kota kamu
  
  try {
    weatherBox.innerHTML = `<p>⏳ Memuat cuaca...</p>`;
    
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric&lang=id`
    );
    
    if (!response.ok) {
      throw new Error("Gagal mengambil data cuaca");
    }
    
    const data = await response.json();
    
    // Konversi kode cuaca ke emoji
    const weatherIcons = {
      "clear sky": "☀️",
      "langit cerah": "☀️",
      "few clouds": "🌤️",
      "sedikit berawan": "🌤️",
      "scattered clouds": "⛅",
      "awan tersebar": "⛅",
      "broken clouds": "☁️",
      "awan pecah": "☁️",
      "overcast clouds": "☁️",
      "berawan": "☁️",
      "shower rain": "🌧️",
      "hujan lokal": "🌧️",
      "rain": "🌧️",
      "hujan": "🌧️",
      "light rain": "🌦️",
      "hujan ringan": "🌦️",
      "moderate rain": "🌧️",
      "hujan sedang": "🌧️",
      "heavy intensity rain": "🌧️",
      "hujan lebat": "🌧️",
      "thunderstorm": "⛈️",
      "badai petir": "⛈️",
      "snow": "❄️",
      "salju": "❄️",
      "mist": "🌫️",
      "kabut": "🌫️",
      "haze": "🌫️",
      "kabut asap": "🌫️",
      "smoke": "🌫️",
      "asap": "🌫️",
      "dust": "🌫️",
      "debu": "🌫️",
      "fog": "🌫️"
    };
    
    const description = data.weather[0].description.toLowerCase();
    const icon = weatherIcons[description] || "🌈";
    const temp = Math.round(data.main.temp);
    const humidity = data.main.humidity;
    const feelsLike = Math.round(data.main.feels_like);
    
    weatherBox.innerHTML = `
      <p>
        ${icon} ${description.charAt(0).toUpperCase() + description.slice(1)} | 
        Suhu: ${temp}°C 
        (Terasa ${feelsLike}°C) | 
        Kelembaban: ${humidity}%
      </p>
    `;
    
  } catch (error) {
    console.error("Error loading weather:", error);
    // Fallback ke data dummy jika gagal
    weatherBox.innerHTML = `
      <p>☀️ Cerah | Suhu: 28°C (Data offline)</p>
    `;
  }
}

// Load cuaca saat pertama kali
loadWeather();

// Update cuaca setiap 10 menit (600000 ms = 10 menit)
setInterval(loadWeather, 600000);