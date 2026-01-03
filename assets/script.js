function toggleMenu(){
  const nav = document.getElementById('nav');
  nav.style.display = (nav.style.display === 'flex') ? 'none' : 'flex';
}
document.getElementById('year').textContent = new Date().getFullYear();
