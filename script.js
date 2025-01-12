// Fecha objetivo en formato ISO (15 enero 2024, 23:11)
const targetDate = new Date("2024-01-15T23:11:00").getTime();

// Función que actualiza el contador
function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Calcular días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Seleccionar elemento del DOM
  const countdownElement = document.getElementById("countdown");

  // Comprobar si la fecha ya pasó
  if (distance < 0) {
    countdownElement.innerHTML = "¡La fecha llegó!";
  } else {
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

// Actualizamos cada segundo
setInterval(updateCountdown, 1000);

// Llamada inicial para que muestre el contador al cargar
updateCountdown();
