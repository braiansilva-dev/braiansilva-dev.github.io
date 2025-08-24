
// HAMBURGUESA NAV
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");


hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Cerrar menú al hacer clic en un enlace del menú
const links = navLinks.querySelectorAll("a");
links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Cerrar menú al hacer clic fuera de él
document.addEventListener("click", (e) => {
  // Si el clic NO fue dentro del nav ni en el ícono hamburguesa
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove("active");
  }
});


// SCROLL DE COLOR EN BARRA NAV

const linkColor = document.querySelectorAll('.menu-link');

  window.addEventListener('scroll', () => {
    let scrollY = window.scrollY;

    links.forEach(link => {
      const seccion = document.querySelector(link.getAttribute('href'));
      const topSeccion = seccion.offsetTop;
      const alturaSeccion = seccion.offsetHeight;

      if (scrollY >= topSeccion - 100 && scrollY < topSeccion + alturaSeccion) {
        // Primero quitamos la clase 'active' a todos
        links.forEach(l => l.classList.remove('active'));
        // Luego se la damos solo al que corresponde
        link.classList.add('active');
      }
    });
  });


    // ********************** PROYECTOS ************************

  async function loadProjects() {
    try {
        // Cargar el archivo JSON
        const response = await fetch('projects.json');
        const data = await response.json();
        
        const container = document.getElementById('portafolioContainer');
        
        // Crear las tarjetas de proyectos
        data.projects.forEach(project => {
            const projectCard = `
                <div class="project-card">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-info">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-description">${project.description}</p>
                        <a href="${project.github}" target="_blank" class="github-link">
                            <img src="/img/github.webp" alt="GitHub">
                            Ver en GitHub
                        </a>
                    </div>
                </div>
            `;
            container.innerHTML += projectCard;
        });
    } catch (error) {
        console.error('Error al cargar los proyectos:', error);
    }
}

// Cargar los proyectos cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadProjects);