const countdownDisplay = document.getElementById("countdown-display");
const dayDisplay = document.getElementById("day-display");

function renderCountdown() {
  // - Get today's date and Christmas date
  const today = new Date();
  const christmas = new Date(today.getFullYear(), 11, 25);

  // Checking if Christmas has already passed for the current year
  if (today.getMonth() === 11 && today.getDate() > 25) {
    christmas.setFullYear(christmas.getFullYear() + 1);
  }

  // Display remaining days, hours, minutes, seconds
  const timeDiff = christmas.getTime() - today.getTime();

  //Get days, hours, minutes and seconds
  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24) + 1);
  const hours = Math.floor(
    (timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  // Display remaining days
  dayDisplay.textContent = `${days} days`;

  let countdown = `... ${hours} hours, ${minutes} minutes`;

  if (seconds < 10) {
    countdown += ` ...and 0${seconds} seconds`;
  } else {
    countdown += ` ...and ${seconds} seconds`;
  }
  //Display countdown
  countdownDisplay.textContent = countdown;
}

renderCountdown();
setInterval(renderCountdown, 1000);
