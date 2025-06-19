// Faz a animação de fade + slide aparecer quando a seção entra na tela
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = 1;
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.section').forEach(section => {
  observer.observe(section);
});

// Botão relaxar
document.getElementById('contatoBtn').addEventListener('click', () => {
  alert('Respire fundo, sinta a harmonia e relaxe.');
});
