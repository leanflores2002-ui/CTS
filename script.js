// script.js — carga data.json y renderiza secciones
(async function(){
  try {
    const res = await fetch('data.json', {cache: "no-store"});
    if(!res.ok) throw new Error('No se pudo cargar data.json');
    const data = await res.json();

    // Hero
    const heroImg = document.getElementById('hero-img');
    if (heroImg && data.meta && data.meta.heroImage) heroImg.src = data.meta.heroImage;

    // Stats
    document.getElementById('stat-topics').textContent = data.topics.length;
    document.getElementById('stat-cases').textContent = data.cases.length;
    document.getElementById('stat-resources').textContent = data.resources.length;

    // Themes
    const themesGrid = document.getElementById('themesGrid');
    themesGrid.innerHTML = data.topics.map(t => `
      <article class="card glass-card">
        <img src="${t.image}" alt="${t.title}">
        <div class="card-body">
          <h3>${t.emoji} ${t.title}</h3>
          <p class="muted">${t.description}</p>
        </div>
      </article>
    `).join('');

    // Cases
    const casesGrid = document.getElementById('casesGrid');
    casesGrid.innerHTML = data.cases.map(c => `
      <article class="case">
        <img src="${c.image}" alt="${c.title}">
        <div class="case-body">
          <h3>${c.title}</h3>
          <p class="muted">${c.description}</p>
        </div>
      </article>
    `).join('');

    // Resources
    const resourcesGrid = document.getElementById('resourcesGrid');
    resourcesGrid.innerHTML = data.resources.map(r => `
      <a class="resource" href="${r.url}" target="_blank" rel="noopener noreferrer">
        <div class="icon">${r.icon}</div>
        <div>
          <h4>${r.name}</h4>
          <p class="muted">${r.description}</p>
        </div>
      </a>
    `).join('');

    // Mobile menu
    const btn = document.getElementById('menuBtn');
    const nav = document.getElementById('mainNav');
    btn?.addEventListener('click', () => {
      nav.classList.toggle('open');
    });
  } catch (err) {
    console.error(err);
    // En caso de falla, podríamos mostrar un mensaje en UI o usar contenido fallback
  }
})();
