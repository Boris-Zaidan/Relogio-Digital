function atualizarRelogio () {
  const dateToday = new Date();

  //padStart(2, '0') garante que qualquer número menor que 10 será formatado com um zero à esquerda.
  const hr = String(dateToday.getHours()).padStart(2, '0');
  const min = String(dateToday.getMinutes()).padStart(2, '0');
  const seg = String(dateToday.getSeconds()).padStart(2, '0');

  document.querySelector('#horas').textContent = hr;
  document.querySelector('#minutos').textContent = min;
  document.querySelector('#segundos').textContent = seg;

}
  // Definir o intervalo para atualizar o relógio a cada 1 segundo
  const relogio = setInterval(atualizarRelogio, 1000);
  
  atualizarRelogio() // Atualiza imediatamente, sem esperar 1 segundo

