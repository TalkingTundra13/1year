// Fecha objetivo: 15 de enero de 2024 a las 23:11
const targetDate = new Date("January 15, 2024 23:11:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Cálculo de días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (distance % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor(
    (distance % (1000 * 60)) / 1000
  );

  const countdownElement = document.getElementById("countdown");

  if (distance < 0) {
    // Si se supera la fecha objetivo
    countdownElement.innerHTML = "¡La fecha llegó!";
  } else {
    // Mostrar la cuenta regresiva
    countdownElement.innerHTML = `
      Faltan 
      <strong>${days}</strong>d 
      <strong>${hours}</strong>h 
      <strong>${minutes}</strong>m 
      <strong>${seconds}</strong>s
      para el <em>15 de enero de 2024, 23:11</em>
    `;
  }
}

// Actualiza el contador cada segundo
setInterval(updateCountdown, 1000);

// Llamada inicial para que aparezca al cargar la página
updateCountdown();
