// Menu Hamburguer
const menuIcon = document.querySelector('.navbar-menu-icon');
const menuMobile = document.querySelector('.nav-bar-mobile');
const menuLines = document.querySelectorAll('.menu-line');

menuIcon.addEventListener('click', () => {
  menuLines.forEach(line => line.classList.toggle('active'));
  menuMobile.classList.toggle('active'); // Alternar a classe 'active' dos links
  menuIcon.classList.toggle('active'); // Alternar a classe 'active' do ícone do menu]
});