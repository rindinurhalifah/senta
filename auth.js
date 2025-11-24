// js/auth.js
// File ini yang ngurus LOGIN, REGISTER, dan LOGOUT

import { auth, db } from "./firebase.js";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import {
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";


// ---------------------- REGISTER ----------------------
export async function registerUser(email, password) {
  try {
    // bikin akun baru di Firebase Auth
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    // simpan data awal user di Firestore (optional tapi bagus buat nanti)
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      createdAt: new Date(),
      displayName: "",
      streakSendu: 0,
      totalPoints: 0,
    });

    alert("Registrasi berhasil! Kamu akan diarahkan ke dashboard.");
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Error register:", error);
    alert(error.message);
  }
}


// ---------------------- LOGIN ----------------------
export async function loginUser(email, password) {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;
    console.log("Login berhasil:", user.email);

    alert("Login berhasil!");
    window.location.href = "dashboard.html";
  } catch (error) {
    console.error("Error login:", error);
    alert("Login gagal: " + error.message);
  }
}


// ---------------------- LOGOUT (kalau nanti mau dipake) ----------------------
export async function logoutUser() {
  try {
    await signOut(auth);
    window.location.href = "login.html";
  } catch (error) {
    console.error("Error logout:", error);
    alert("Gagal logout: " + error.message);
  }
}


// Supaya bisa dipanggil dari <script> biasa di login.html & register.html
window.registerUser = registerUser;
window.loginUser = loginUser;
window.logoutUser = logoutUser;


// Misal: kalau user udah login dan buka login/register lagi, langsung kirim ke dashboard
onAuthStateChanged(auth, (user) => {
  const path = window.location.pathname;

  if (user) {
    // kalau user sudah login dan lagi di login/register, arahkan ke dashboard
    if (path.endsWith("login.html") || path.endsWith("register.html")) {
      window.location.href = "dashboard.html";
    }
  }
  // kalau user belum login, biarin saja (dashboard.js yang jaga akses dashboard)
});
