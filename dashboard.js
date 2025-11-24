// js/dashboard.js
import { auth } from "./firebase.js";
import {
  onAuthStateChanged,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Cek user login, kalau belum -> balik ke login
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "login.html";
  }
});

// ---- Day Streak (dummy dari localStorage, nanti bisa di-update dari SENDU) ----
const STREAK_KEY = "senta_sendu_streak";

function getStreak() {
  const saved = localStorage.getItem(STREAK_KEY);
  if (!saved) return 0;
  const n = parseInt(saved, 10);
  return Number.isNaN(n) ? 0 : n;
}

function setStreakDisplay() {
  const el = document.getElementById("streakNumber");
  if (!el) return;
  el.textContent = getStreak();
}

setStreakDisplay();

// ---- Leaderboard dummy (bisa diganti dari Firestore nanti) ----
const leaderboardData = [
  { name: "User 1", score: 13118 },
  { name: "User 2", score: 7649 },
  { name: "User 3", score: 6580 },
];

function setLeaderboard() {
  const [u1, u2, u3] = leaderboardData;
  document.getElementById("user1Name").textContent = u1.name;
  document.getElementById("user1Score").textContent = u1.score;

  document.getElementById("user2Name").textContent = u2.name;
  document.getElementById("user2Score").textContent = u2.score;

  document.getElementById("user3Name").textContent = u3.name;
  document.getElementById("user3Score").textContent = u3.score;
}

setLeaderboard();

// ---- AI Quick Access -> pergi ke halaman chat AI (SentAI) ----
const aiBtn = document.getElementById("aiQuickAccessBtn");
if (aiBtn) {
  aiBtn.addEventListener("click", () => {
    window.location.href = "chatai.html"; // MASUK KE HALAMAN CHAT AI YANG BARU
  });
}

