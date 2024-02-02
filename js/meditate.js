document.addEventListener("DOMContentLoaded", function () {
  const startMeditationBtn = document.getElementById("startMeditationBtn");
  const meditationTimer = document.getElementById("meditationTimer");
  const counterElement = document.getElementById("counter");

  let count = 0;

  startMeditationBtn.addEventListener("click", startMeditation);

  function startMeditation() {
    meditationTimer.innerHTML = "Meditation in progress...";
    setTimeout(() => {
      meditationTimer.innerHTML = "Meditation complete. Feel refreshed!";
      count++;
      counterElement.innerText = count;
    }, 1500);
  }
});
