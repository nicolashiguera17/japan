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

  function crearFarolillo() {
    const farol = document.createElement('div');
    farol.className = 'farolillo';
    farol.style.left = `${Math.random() * 100}vw`;
    document.body.appendChild(farol);
  
    setTimeout(() => {
      farol.remove();
    }, 15000);
  }
  
  // === Farolillos flotando ===
function createLantern() {
  const lantern = document.createElement("div");
  lantern.classList.add("lantern");
  lantern.style.left = Math.random() * 100 + "vw";
  lantern.style.animationDuration = (6 + Math.random() * 4) + "s";
  document.getElementById("lantern-container").appendChild(lantern);

  setTimeout(() => lantern.remove(), 10000); // Remover después de 10s
}

function crearFarol() {
  const farol = document.createElement("img");
  farol.src = "img/farol.png"; // Cambia esto por la ruta de tu imagen
  farol.className = "farol";

  // Posición horizontal aleatoria
  farol.style.left = Math.random() * 100 + "vw";

  // Tamaño aleatorio
  const size = Math.random() * 20 + 30;
  farol.style.width = size + "px";
  farol.style.height = size + "px";

  // Animación con duración aleatoria
  const duracion = Math.random() * 5 + 5;
  farol.style.animationDuration = `${duracion}s`;

  document.body.appendChild(farol);

  // Eliminar después de terminar animación
  setTimeout(() => {
    farol.remove();
  }, duracion * 1000);
}

// Crear farol nuevo cada 1 segundo
setInterval(crearFarol, 1000);
