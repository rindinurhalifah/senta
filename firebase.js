// Import Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Firebase Config 
const firebaseConfig = {
  apiKey: "AIzaSyB82aPySDnRjeKYeasz0x381HAw_DoH4n0",
  authDomain: "senta-53fe4.firebaseapp.com",
  projectId: "senta-53fe4",
  storageBucket: "senta-53fe4.firebasestorage.app",
  messagingSenderId: "72745231772",
  appId: "1:72745231772:web:f50fd992f855e03d7c1459",
  measurementId: "G-31S5R93CS0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth & Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Export supaya bisa dipake di login.js, register.js, dashboard.js, dll
export { auth, db };
