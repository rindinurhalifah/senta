// chatai.js

const chatForm = document.getElementById("chatForm");
const chatInput = document.getElementById("chatInput");
const chatArea = document.getElementById("chatArea");

/**
 * Tambah pesan ke area chat
 * @param {"user" | "bot"} sender
 * @param {string} text
 */
function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.className = `message ${sender}`;

  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;

  msg.appendChild(bubble);
  chatArea.appendChild(msg);

  // scroll ke bawah
  chatArea.scrollTop = chatArea.scrollHeight;
}

chatForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = chatInput.value.trim();
  if (!text) return;

  // tampilkan pesan user
  addMessage("user", text);
  chatInput.value = "";

  // dummy response AI (bisa diganti nanti)
  setTimeout(() => {
    const reply =
      "Thanks for your question! This is a demo reply. Later I can help you analyze spending, saving, and budgeting 😊";
    addMessage("bot", reply);
  }, 500);
});
const backToDashboard = document.getElementById("backToDashboard");

if (backToDashboard) {
  backToDashboard.addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
}
