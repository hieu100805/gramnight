const STORAGE_KEYS = {
  count: "gn-total-count",
  streak: "gn-streak",
  lastDate: "gn-last-date"
};

const NIGHT_MESSAGES = [
  "Good Night. Good Narrative.",
  "Wake up at $1M.",
  "Chart can wait. GN.",
  "Sleep now. Moon later."
];

const CA_TEXT = "EQA69Mhu92OBCtAse0SJbv3_3VpiVV10d5vLUw_3Bg8Myt_0";

const countElement = document.getElementById("gnCount");
const streakElement = document.getElementById("gnStreak");
const messageElement = document.getElementById("messageText");
const sayGnButton = document.getElementById("sayGnButton");
const copyCaButton = document.getElementById("copyCaButton");
const messageCard = document.getElementById("messageCard");

function getTodayKey() {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getYesterdayKey() {
  const yesterday = new Date();
  yesterday.setDate(yesterday.getDate() - 1);
  const year = yesterday.getFullYear();
  const month = String(yesterday.getMonth() + 1).padStart(2, "0");
  const day = String(yesterday.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function readNumber(key) {
  const value = Number.parseInt(localStorage.getItem(key) || "0", 10);
  return Number.isNaN(value) ? 0 : value;
}

function getEffectiveStreak() {
  const storedStreak = readNumber(STORAGE_KEYS.streak);
  const lastDate = localStorage.getItem(STORAGE_KEYS.lastDate);
  const today = getTodayKey();
  const yesterday = getYesterdayKey();

  if (lastDate === today || lastDate === yesterday) {
    return storedStreak;
  }

  return 0;
}

function updateStats() {
  countElement.textContent = readNumber(STORAGE_KEYS.count).toString();
  streakElement.textContent = getEffectiveStreak().toString();
}

function pickNightMessage() {
  const randomIndex = Math.floor(Math.random() * NIGHT_MESSAGES.length);
  return NIGHT_MESSAGES[randomIndex];
}

function celebrateMessage(message) {
  messageElement.textContent = message;
  messageCard.classList.remove("pulse");
  void messageCard.offsetWidth;
  messageCard.classList.add("pulse");
}

function saveGn() {
  const today = getTodayKey();
  const yesterday = getYesterdayKey();
  const lastDate = localStorage.getItem(STORAGE_KEYS.lastDate);
  const nextCount = readNumber(STORAGE_KEYS.count) + 1;
  let nextStreak = 1;

  if (lastDate === today) {
    nextStreak = getEffectiveStreak() || 1;
  } else if (lastDate === yesterday) {
    nextStreak = getEffectiveStreak() + 1;
  }

  localStorage.setItem(STORAGE_KEYS.count, String(nextCount));
  localStorage.setItem(STORAGE_KEYS.streak, String(nextStreak));
  localStorage.setItem(STORAGE_KEYS.lastDate, today);

  updateStats();
  celebrateMessage(pickNightMessage());
}

async function copyContractAddress() {
  try {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(CA_TEXT);
    } else {
      const tempInput = document.createElement("textarea");
      tempInput.value = CA_TEXT;
      tempInput.setAttribute("readonly", "");
      tempInput.style.position = "absolute";
      tempInput.style.left = "-9999px";
      document.body.appendChild(tempInput);
      tempInput.select();
      document.execCommand("copy");
      document.body.removeChild(tempInput);
    }

    copyCaButton.textContent = "Copied";
    copyCaButton.classList.add("copied");
  } catch (error) {
    copyCaButton.textContent = "Copy failed";
  }

  window.setTimeout(() => {
    copyCaButton.textContent = "Copy CA";
    copyCaButton.classList.remove("copied");
  }, 1600);
}

function initTelegramWebApp() {
  const webApp = window.Telegram && window.Telegram.WebApp;

  if (!webApp) {
    return;
  }

  webApp.ready();
  webApp.expand();

  try {
    if (typeof webApp.setHeaderColor === "function") {
      webApp.setHeaderColor("#071224");
    }

    if (typeof webApp.setBackgroundColor === "function") {
      webApp.setBackgroundColor("#071224");
    }
  } catch (error) {
    console.warn("Telegram WebApp theme setup skipped:", error);
  }

  document.documentElement.style.colorScheme = "dark";
}

copyCaButton.addEventListener("click", copyContractAddress);
sayGnButton.addEventListener("click", saveGn);

initTelegramWebApp();
updateStats();
celebrateMessage(pickNightMessage());
