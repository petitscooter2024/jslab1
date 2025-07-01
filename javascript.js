// ====== Dark / Light Mode Handling ======
const toggleBtn = document.getElementById("toggleModeBtn");

// On first load, apply saved theme (if any)
(function restoreTheme() {
  const saved = localStorage.getItem("theme");
  if (saved === "dark") {
    document.body.classList.add("dark");
    toggleBtn.textContent = "🌙 Toggle Light Mode";
  }
})();

// Toggle and save
toggleBtn.addEventListener("click", () => {
  const isDark = document.body.classList.toggle("dark");
  localStorage.setItem("theme", isDark ? "dark" : "light");
  toggleBtn.textContent = isDark ? "🌙 Toggle Light Mode" : "🌞 Toggle Dark Mode";
});

// ====== Live Clock with Time‑Zone Support ======
const tzSelect = document.getElementById("timezone");
let currentTZ = tzSelect.value;

// Change time zone immediately when user picks a new one
tzSelect.addEventListener("change", (e) => {
  currentTZ = e.target.value;
  updateClock();              // refresh right away
});

// Start the ticking clock
startClock();

function startClock() {
  updateClock();               // initial paint
  setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();
  const timeOptions = { timeZone: currentTZ, hour12: false };
  const dateOptions = { timeZone: currentTZ };

  const timeStr = now.toLocaleTimeString("en-US", timeOptions);
  const dateStr = now.toLocaleDateString("en-US", dateOptions);

  document.getElementById("clock").textContent = `${dateStr} – ${timeStr}`;
}
