function mostrarSeccion(id, enlace) {
  console.log("Mostrando:", id);
  document.querySelectorAll('main section').forEach(sec => {
    sec.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (target) {
    target.classList.add('active');
  }
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active-tab'));
  if (enlace) enlace.classList.add('active-tab');
}

window.onload = function () {
  mostrarSeccion('productos', document.querySelector('nav a'));
};
