
fetch('https://api.ejemplo.com/recurso', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})

window.sr = ScrollReveal();
  sr.reveal('.sr', {
    duration: 2500,
    origin:"top",
    distance:'-200px',
    easing: 'ease-in-out',
  });

  window.sr = ScrollReveal();
  sr.reveal('.izq', {
    duration: 3000,
    origin:"left",
    distance: '-300px',
  });

  window.sr = ScrollReveal();
  sr.reveal('.der', {
    duration: 3000,
    origin:"right",
    distance: '-300px'
  });

 
