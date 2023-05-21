
fetch('https://api.ejemplo.com/recurso', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
})


window.sr = ScrollReveal();
sr.reveal('.izq', {
  duration: 3000,
  origin: "left",
  distance: '-300px',
  reset: true
  
});

window.sr = ScrollReveal();
sr.reveal('.der', {
  duration: 3000,
  origin: "right",
  distance: '-300px',
  reset: true,
});

window.sr = ScrollReveal();
sr.reveal('.sr1', {
  duration: 2000,
  origin: "top",
  distance: '-100px',
  reset: true // Agrega esta opción para excluir la clase .sr1 de las animaciones de ScrollReveal
});


const links = document.querySelectorAll('.btn a');
const contactoBoton = document.querySelector('.contacto a');
const inicioBoton = document.querySelector('.logo img');
const offset = 0; 

links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');
    const target = document.querySelector(href);
    const targetPosition = target.offsetTop - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  });
});



inicioBoton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

const animadoresBoton = document.querySelector('.btn a[href="#animadores"]');
animadoresBoton.addEventListener('click', (e) => {
  e.preventDefault();
  const animadoresTitulo = document.querySelector('.contenedor-animadores .titulo-animadores');
  const targetPosition = animadoresTitulo.offsetTop - offset;
  window.scrollTo({ top: targetPosition, behavior: 'smooth' });
});



