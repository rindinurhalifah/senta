document.addEventListener("DOMContentLoaded", () => {
  // Arena roadmap -> badges
  const arenaCard = document.getElementById("arenaCard");
  arenaCard.addEventListener("click", () => {
    window.location.href = "badges.html";
  });

  // Learning modules
  document.getElementById("beginnerCard").addEventListener("click", () => {
    window.location.href = "beginner.html";
  });

  document.getElementById("intermediateCard").addEventListener("click", () => {
    window.location.href = "intermediate.html";
  });

  document.getElementById("advancedCard").addEventListener("click", () => {
    window.location.href = "advanced.html";
  });

  // Daily practice & weekly report
  document.getElementById("dailyPracticeCard").addEventListener("click", () => {
    window.location.href = "dailyprac.html";
  });

  document.getElementById("weeklyReportCard").addEventListener("click", () => {
    window.location.href = "wreport.html";
  });

  // Bottom nav
  document.getElementById("navSendu").addEventListener("click", () => {
    window.location.href = "sendu.html";
  });
  document.getElementById("navSentAI").addEventListener("click", () => {
    window.location.href = "sentai.html";
  });
  document.getElementById("navDashboard").addEventListener("click", () => {
    window.location.href = "dashboard.html";
  });
  document.getElementById("navSentaBung").addEventListener("click", () => {
    window.location.href = "sentabung.html";
  });
  document.getElementById("navProfile").addEventListener("click", () => {
    window.location.href = "profile.html";
  });
});
