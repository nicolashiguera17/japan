


function updateClocks() {
  const clocks = document.querySelectorAll(".clock");
  clocks.forEach(clock => {
    const tz = clock.getAttribute("data-timezone");
    const time = new Date().toLocaleTimeString("en-US", {
      timeZone: tz,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    clock.textContent = time;
  });
}

setInterval(updateClocks, 1000);
updateClocks();