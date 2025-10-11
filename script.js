
document.addEventListener('DOMContentLoaded', () => {
  const quotes = document.querySelectorAll('.quote');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => { if(entry.isIntersecting){ quotes.forEach(q=>q.classList.add('visible')); } });
  }, {threshold:0.3});
  const target = document.querySelector('.testimonials');
  if(target) obs.observe(target);
});
