// ============================================
// INICIALIZACIÓN DE AOS (Animate On Scroll)
// ============================================
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// ============================================
// CONFIGURACIÓN - Sin LocalStorage (datos estáticos)
// ============================================

// ============================================
// DATOS POR DEFECTO
// ============================================
const defaultData = {
    hero: {
        greeting: 'Hola, mi nombre es',
        name: 'Juan Gabriel Soto Valenzuela',
        title: 'Desarrollador Full Stack',
        description: 'Soy Técnico Informático y Superior en Desarrollador web y Aplicaciones Digitales. Busco constantemente contribuir y participar de soluciones y servicios que faciliten la vida y trabajo de personas. Soy apasionado, entusiasta y atento a aprender, comunicar y trabajar cordialmente tanto en equipo como de forma individual.'
    },
    about: {
        description1: 'Como Técnico Informático y Superior en Desarrollador web y Aplicaciones Digitales, me especializo en crear soluciones web completas y funcionales. Mi experiencia abarca desde el desarrollo frontend con HTML, CSS, JavaScript y Angular, hasta implementaciones backend con PHP, Python, Django y Node.js.',
        description2: 'Cada proyecto que desarrollo representa mi compromiso con la excelencia técnica y la innovación. Me apasiona transformar ideas en aplicaciones digitales que realmente impacten en la vida de las personas, trabajando tanto de forma individual como en equipos colaborativos.'
    },
    projects: [
        {
            id: 1,
            title: 'Portal de reseñas gastronómicas',
            image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop',
            url: 'https://desplieguesjgsv.free.nf/?i=1',
            detail: 'Entre sus funciones contiene: Sign In/Log In de usuarios con comprobación de correo electrónico, Dashboard User para ver las reseñas realizadas y sistema de reseñas con cards que contienen puntuación, detalle, imágenes y videos para incrustar. (2025)',
            techs: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript']
        },
        {
            id: 2,
            title: 'Listado de compras',
            image: 'https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=600&h=400&fit=crop',
            url: 'https://pruebadetesteo.infinityfreeapp.com/',
            detail: 'Sistema simple para listado de compras grupal. Por ejemplo, en un asado con amigos, se distribuyen las compras entre cada uno, detallando importe, cantidades, etc. Contiene CRUD de compras para agregar-editar-eliminar compras. (2025)',
            techs: ['PHP', 'MySQL', 'JavaScript']
        },
        {
            id: 3,
            title: 'Estilo e Imagen',
            image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&h=400&fit=crop',
            url: 'https://estiloeimagen.page.gd/',
            detail: 'Sitio web para asesoramiento de Imagen. Contiene un call to action para contactarse, blog con notas, detalles de servicios, descarga de info y formulario de contacto. (2024)',
            techs: ['WordPress', 'CSS', 'Elementor']
        },
        {
            id: 4,
            title: 'Area58',
            image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop',
            url: 'https://area58.page.gd/',
            detail: 'Sitio de Grupo de alumnos para entrega de proyecto de la materia "Sistema de Gestión" en el primer año de la Tecnicatura de Desarrollo Web y Aplicaciones Digitales. Contiene presentación de los integrantes, competencias y descripción del proyecto. (2022)',
            techs: ['WordPress', 'HTML', 'CSS']
        },
        {
            id: 5,
            title: 'Myhouse',
            image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
            url: 'https://myhouse.com.ar/',
            detail: 'Portal web de publicación de venta de inmuebles. Contiene detalles de publicaciones, filtros, búsqueda por ambientes y blog de noticias. (2023)',
            techs: ['WordPress', 'PHP', 'MySQL']
        },
        {
            id: 6,
            title: 'Cava Digital de Vinos',
            image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=600&h=400&fit=crop',
            url: 'https://vstecnic.github.io/cavaDeVinos/',
            detail: 'Sitio pequeño que tiene como finalidad mostrar los vinos disponibles de un cliente en su cava. La idea era que muestre el link a sus invitados y pudieran ver o seleccionar qué vino disfrutar, sin abrir la cava. Conteniendo los detalles como Tipo de Vino, Cepa, Zona, su descripción y link de la bodega que lo produjo. (2024)',
            techs: ['HTML', 'CSS', 'JavaScript']
        },
        {
            id: 7,
            title: 'Petit Malbec Sommelier',
            image: 'https://images.unsplash.com/photo-1547595628-c61a29f496f0?w=600&h=400&fit=crop',
            url: 'https://vstecnic.github.io/TalentoTechFrontEnd_V2Final/',
            detail: 'Sitio web publicitario con los servicios de un sommelier profesional. Entre sus detalles se ven, presentación, servicios, formulario de contacto y un carrito simulado con JS para agregar y realizar compra de los servicios y/o productos que se ofrecen. Contiene una pequeña integración con IG y WhatsApp para contacto. (2024)',
            techs: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
        },
        {
            id: 8,
            title: 'Travel Dreams',
            image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=600&h=400&fit=crop',
            url: 'https://traveldreamsmp.vercel.app/',
            detail: 'Trabajo grupal presentado para la materia de Práctica Profesionalizante, de la Tecnicatura de Desarrollador web y Aplicaciones Digitales del ISPC. Consta de un portal con ventas de paquetes turísticos. Para la misma se accede por medio de una creación de usuario o login, seleccionar los paquetes deseados y abonarlos con pasarela de pago de Mercado Pago. Dentro de algunas de las funciones que se pueden apreciar se encuentra, Alta de usuarios, dashboard de usuarios, gestión de compras de paquetes, CRUD de compras, integración con Mercado Pago... Todo completamente funcional. El front está desarrollado con Angular, el Back con Django. (2024-2025)',
            techs: ['Angular', 'Python', 'Django', 'MySQL', 'Mercado Pago']
        }
    ],
    skills: [
        { id: 1, name: 'Inglés B2', icon: 'bi-translate', level: 0 },
        { id: 2, name: 'HTML', icon: 'bi-filetype-html', level: 0 },
        { id: 3, name: 'CSS', icon: 'bi-filetype-css', level: 0 },
        { id: 4, name: 'JavaScript', icon: 'bi-filetype-js', level: 0 },
        { id: 5, name: 'Angular', icon: 'bi-code-square', level: 0 },
        { id: 6, name: 'WordPress', icon: 'bi-wordpress', level: 0 },
        { id: 7, name: 'PHP', icon: 'bi-filetype-php', level: 0 },
        { id: 8, name: 'MySQL', icon: 'bi-database', level: 0 },
        { id: 9, name: 'Python', icon: 'bi-code-slash', level: 0 },
        { id: 10, name: 'Django', icon: 'bi-server', level: 0 },
        { id: 11, name: 'Node.js', icon: 'bi-node-plus', level: 0 },
        { id: 12, name: 'Java', icon: 'bi-cup-hot', level: 0 },
        { id: 13, name: 'Git', icon: 'bi-git', level: 0 },
        { id: 14, name: 'GitHub', icon: 'bi-github', level: 0 },
        { id: 15, name: 'Scrum', icon: 'bi-kanban', level: 0 },
        { id: 16, name: 'Postman', icon: 'bi-send', level: 0 },
        { id: 17, name: 'Bootstrap', icon: 'bi-bootstrap', level: 0 }
    ],
    contact: {
        linkedin: 'https://linkedin.com/in/juan-gabriel-soto-valenzuela/',
        github: 'https://github.com/vstecnic',
        email: 'mailto:vstecnic@gmail.com',
        footer: 'Diseñado y Desarrollado by Juan Gabriel Soto Valenzuela'
    }
};

// ============================================
// FUNCIONES DE GESTIÓN DE DATOS (Sin LocalStorage)
// ============================================

// Cargar datos directamente desde defaultData
function loadData(key) {
    return defaultData[key];
}

// ============================================
// RENDERIZADO DE SECCIONES
// ============================================

// Renderizar Hero Section
function renderHero() {
    const hero = loadData('hero');
    document.getElementById('heroGreeting').textContent = hero.greeting;
    document.getElementById('heroName').textContent = hero.name;
    document.getElementById('heroTitle').textContent = hero.title;
    document.getElementById('heroDescription').textContent = hero.description;

    // Actualizar título de la página
    document.title = `Portfolio - ${hero.name}`;
}

// Renderizar About Section
function renderAbout() {
    const about = loadData('about');
    document.getElementById('aboutDescription').textContent = about.description1;
    document.getElementById('aboutDescription2').textContent = about.description2;
}

// Renderizar Projects Section
function renderProjects() {
    const projects = loadData('projects');
    const projectsGrid = document.getElementById('projectsGrid');
    const noProjectsMessage = document.getElementById('noProjectsMessage');

    projectsGrid.innerHTML = '';

    if (projects.length === 0) {
        noProjectsMessage.classList.remove('d-none');
    } else {
        noProjectsMessage.classList.add('d-none');

        projects.forEach((project, index) => {
            const techBadges = project.techs.map(tech =>
                `<span class="tech-badge">${tech}</span>`
            ).join('');

            const projectCard = `
                <div class="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="${index * 100}">
                    <div class="project-card">
                        <img src="${project.image}"
                             alt="${project.title}"
                             class="project-card-img"
                             onerror="this.src='https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop'">
                        <div class="project-card-body">
                            <h3 class="project-card-title">${project.title}</h3>
                            <p class="project-card-text">${project.detail}</p>
                            <div class="project-techs">
                                ${techBadges}
                            </div>
                            <a href="${project.url}" target="_blank" class="project-link">
                                Ver Proyecto <i class="bi bi-arrow-up-right"></i>
                            </a>
                        </div>
                    </div>
                </div>
            `;
            projectsGrid.insertAdjacentHTML('beforeend', projectCard);
        });
    }
}

// Renderizar Skills Section
function renderSkills() {
    const skills = loadData('skills');
    const skillsGrid = document.getElementById('skillsGrid');
    skillsGrid.innerHTML = '';

    skills.forEach((skill, index) => {
        const skillCard = `
            <div class="col-lg-3 col-md-4 col-sm-6" data-aos="zoom-in" data-aos-delay="${index * 100}">
                <div class="skill-card">
                    <i class="${skill.icon} skill-icon"></i>
                    <h4 class="skill-name">${skill.name}</h4>
                </div>
            </div>
        `;
        skillsGrid.insertAdjacentHTML('beforeend', skillCard);
    });
}

// Renderizar Contact Section
function renderContact() {
    const contact = loadData('contact');
    // Los links ya están hardcodeados en el HTML
    // Solo necesitamos actualizar el footer si es necesario
}

// ============================================
// SMOOTH SCROLL PARA NAVEGACIÓN
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Cerrar navbar en móviles
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                bootstrap.Collapse.getInstance(navbarCollapse).hide();
            }
        }
    });
});

// ============================================
// NAVBAR TRANSPARENTE EN SCROLL
// ============================================
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('mainNav');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.98)';
        navbar.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.95)';
        navbar.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    }
});

// ============================================
// INICIALIZACIÓN AL CARGAR LA PÁGINA
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Renderizar todas las secciones
    renderHero();
    renderAbout();
    renderProjects();
    renderSkills();
    renderContact();

    // Actualizar el año actual en el footer
    document.getElementById('currentYear').textContent = new Date().getFullYear();

    console.log('%c¡Portfolio cargado exitosamente! 🚀', 'color: #64ffda; font-size: 16px; font-weight: bold;');
    console.log('%cDesarrollado con Bootstrap 5, HTML, CSS y JavaScript vanilla', 'color: #8892b0; font-size: 12px;');
});
