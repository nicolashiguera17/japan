document.addEventListener("DOMContentLoaded", () => {
    for (let i = 0; i < 5; i++) {
      const lantern = document.createElement("div");
      lantern.className = "lantern";
      lantern.style.left = Math.random() * 90 + "%";
      lantern.style.bottom = Math.random() * 10 + "%";
      lantern.style.animationDelay = `${Math.random() * 5}s`;
      lantern.textContent = "🏮";
      document.querySelector(".hero").appendChild(lantern);
    }
  });