// action.js - interactividad básica para la web de viajes

// Datos de ejemplo (podrías reemplazarlos por una API real)
const sampleDestinations = [
  {name: 'París', country: 'Francia', desc: 'Romance, arte y cocina.'},
  {name: 'Bali', country: 'Indonesia', desc: 'Playas, templos y relax.'},
  {name: 'Tokio', country: 'Japón', desc: 'Cultura, tecnología y gastronomía.'},
  {name: 'Nueva York', country: 'EEUU', desc: 'La ciudad que nunca duerme.'},
  {name: 'Barcelona', country: 'España', desc: 'Arquitectura y costa mediterránea.'}
];

document.addEventListener('DOMContentLoaded', () => {
  // Año dinámico en el footer
  document.getElementById('year').textContent = new Date().getFullYear();

  // Toggle menú móvil
  const menuToggle = document.getElementById('menuToggle');
  const nav = document.getElementById('nav');
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });

  // Manejo del formulario de búsqueda
  const form = document.getElementById('searchForm');
  const grid = document.getElementById('destinosGrid');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const destino = document.getElementById('destino').value.trim().toLowerCase();
    const fecha = document.getElementById('fecha').value;
    const personas = document.getElementById('personas').value;

    // Filtrar destinos por nombre que contenga el texto buscado
    const results = sampleDestinations.filter(d => d.name.toLowerCase().includes(destino) || d.country.toLowerCase().includes(destino));

    // Si no hay término de búsqueda, mostramos todos
    const show = destino ? results : sampleDestinations;

    // Renderizar resultados en el grid
    grid.innerHTML = '';
    if(show.length === 0){
      grid.innerHTML = '<p class="muted">No se encontraron destinos. Intenta con otro término.</p>';
      return;
    }

    show.forEach(d => {
      const article = document.createElement('article');
      article.className = 'card';

      const img = document.createElement('div');
      img.className = 'card-img';
      // colores aleatorios agradables
      const gradients = ['linear-gradient(120deg,#a1c4fd,#c2e9fb)','linear-gradient(120deg,#f6d365,#fda085)','linear-gradient(120deg,#fbc2eb,#a6c1ee)','linear-gradient(120deg,#cfe9ff,#e0f7fa)'];
      img.style.backgroundImage = gradients[Math.floor(Math.random()*gradients.length)];

      const body = document.createElement('div');
      body.className = 'card-body';

      const h3 = document.createElement('h3');
      h3.textContent = d.name + ', ' + d.country;

      const p = document.createElement('p');
      p.className = 'muted';
      p.textContent = d.desc;

      const btn = document.createElement('button');
      btn.className = 'btn-ghost';
      btn.textContent = 'Ver oferta';
      btn.addEventListener('click', () => {
        alert(`Oferta seleccionada:\n${d.name}, ${d.country}\nFecha: ${fecha || 'no especificada'}\nPersonas: ${personas}`);
      });

      body.appendChild(h3);
      body.appendChild(p);
      body.appendChild(btn);

      article.appendChild(img);
      article.appendChild(body);

      grid.appendChild(article);
    });

    // Cerrar menú móvil si está abierto
    nav.classList.remove('open');
  });

  // Formulario de contacto (simulación)
  const contactForm = document.getElementById('contactForm');
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.');
    contactForm.reset();
  });

  // Suscripción (simulación)
  const subscribe = document.getElementById('subscribe');
  subscribe.addEventListener('click', () => {
    const email = document.getElementById('email').value.trim();
    if(!email) return alert('Por favor ingresa tu correo.');
    alert(`¡Gracias! Hemos registrado ${email} para recibir ofertas.`);
    document.getElementById('email').value = '';
  });

  // Enlaces de navegación con scroll suave
  document.querySelectorAll('.nav a').forEach(a => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(a.getAttribute('href'));
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
      nav.classList.remove('open');
    });
  });
});
