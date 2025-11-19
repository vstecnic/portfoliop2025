# Portfolio Web Profesional - Plantilla Editable

Una plantilla de portfolio web moderna, completamente responsive y editable, desarrollada con HTML, CSS, JavaScript vanilla y Bootstrap 5. Perfecta para desarrolladores que desean mostrar sus proyectos de forma profesional.

## Características Principales

### Diseño y Estilo
- **Paleta de colores azul oscuro pastel** inspirada en diseños modernos
- **Completamente responsive** - Se adapta a todos los dispositivos (móvil, tablet, desktop)
- **Animaciones suaves** con AOS (Animate On Scroll)
- **Efectos hover** en cards de proyectos con animaciones sutiles
- **Landing page style** con hero section impactante

### Funcionalidades
- **Sistema CRUD completo** para gestionar proyectos y habilidades
- **Panel de Administración** intuitivo con pestañas organizadas
- **LocalStorage** para persistencia de datos
- **Totalmente editable** - Todos los textos e información son personalizables
- **Call to Action** a WhatsApp (+5491135008496)
- **Grilla automática** de proyectos que se acomoda según la cantidad

### Secciones Incluidas
1. **Hero/Inicio** - Presentación principal con nombre, título y descripción
2. **Sobre Mí** - Biografía profesional personalizable
3. **Proyectos** - Cards con imagen, título, descripción, tecnologías y enlace
4. **Habilidades** - Visualización de skills con íconos y barras de progreso
5. **Contacto** - Links a redes sociales y botón de WhatsApp
6. **Footer** - Información de copyright personalizable

## Estructura del Proyecto

```
Portfolio Personal/
│
├── index.html          # Estructura HTML principal
├── styles.css          # Estilos personalizados
├── script.js           # Lógica JavaScript y CRUD
└── README.md           # Este archivo
```

## Tecnologías Utilizadas

- **HTML5** - Estructura semántica
- **CSS3** - Estilos y animaciones
- **JavaScript (Vanilla)** - Lógica y CRUD
- **Bootstrap 5.3.2** - Framework CSS responsive
- **Bootstrap Icons** - Iconografía
- **AOS Library** - Animaciones on scroll
- **Google Fonts (Inter)** - Tipografía moderna

## Instalación y Uso

### 1. Descarga o Clona el Proyecto
```bash
git clone <url-del-repositorio>
cd "Portfolio Personal"
```

### 2. Abre el Archivo
Simplemente abre el archivo `index.html` en tu navegador favorito. No requiere instalación de dependencias ni servidor local.

### 3. Personaliza tu Portfolio
Haz clic en el botón **"Modo Admin"** en la barra de navegación para acceder al panel de administración.

## Panel de Administración

El panel de administración está organizado en 5 pestañas:

### 1. Hero
Personaliza la sección principal:
- Saludo inicial
- Tu nombre
- Título profesional
- Descripción breve

### 2. Sobre Mí
Edita tu biografía profesional:
- Párrafo 1: Experiencia y especialización
- Párrafo 2: Intereses y actividades

### 3. Proyectos (CRUD)
Gestiona tus proyectos:
- **Agregar** nuevos proyectos
- **Editar** proyectos existentes
- **Eliminar** proyectos
- Campos por proyecto:
  - Título del trabajo
  - URL de la imagen/miniatura (600x400px recomendado)
  - Link/URL del proyecto
  - Detalle descriptivo
  - Tecnologías utilizadas (separadas por comas)

### 4. Habilidades (CRUD)
Administra tus skills:
- **Agregar** habilidades
- **Editar** habilidades existentes
- **Eliminar** habilidades
- Campos por habilidad:
  - Nombre de la tecnología
  - Ícono de Bootstrap Icons
  - Nivel de dominio (%)

### 5. Contacto
Configura tus redes sociales:
- LinkedIn URL
- GitHub URL
- Email
- Texto del footer

## Estructura de Cards de Proyectos

Cada card de proyecto incluye:
```
┌─────────────────────────┐
│   Imagen/Miniatura      │
├─────────────────────────┤
│ Título del Proyecto     │
│                         │
│ Descripción del         │
│ proyecto realizado      │
│                         │
│ [Tech1] [Tech2] [Tech3] │
│                         │
│ Ver Proyecto →          │
└─────────────────────────┘
```

## Personalización de Colores

Los colores están definidos como variables CSS en `styles.css`:

```css
:root {
    --color-primary: #0a192f;        /* Background principal */
    --color-secondary: #112240;      /* Cards y secciones */
    --color-accent: #64ffda;         /* Acentos principales */
    --color-text-primary: #ccd6f6;   /* Texto principal */
    --color-text-secondary: #8892b0; /* Texto secundario */
}
```

Puedes modificar estos valores para cambiar toda la paleta de colores del sitio.

## Despliegue

### Vercel
1. Crea una cuenta en [Vercel](https://vercel.com)
2. Importa tu repositorio de GitHub
3. Vercel detectará automáticamente el proyecto HTML estático
4. ¡Despliega!

### GitHub Pages
1. Sube tu proyecto a un repositorio de GitHub
2. Ve a Settings → Pages
3. Selecciona la rama main como fuente
4. Tu sitio estará disponible en `https://tu-usuario.github.io/nombre-repo`

### Netlify
1. Arrastra la carpeta del proyecto a [Netlify Drop](https://app.netlify.com/drop)
2. ¡Listo! Tu sitio está en línea

## Imágenes Recomendadas

Para las miniaturas de proyectos:
- **Tamaño recomendado**: 600x400px
- **Formato**: JPG o PNG
- **Peso**: Menor a 500KB para mejor rendimiento
- **Fuentes gratuitas**:
  - [Unsplash](https://unsplash.com)
  - [Pexels](https://pexels.com)
  - Screenshots de tus proyectos reales

## Iconos para Habilidades

Usa iconos de [Bootstrap Icons](https://icons.getbootstrap.com/):
- Copia el nombre de clase (ej: `bi-code-slash`)
- Pégalo en el campo "Icono" del formulario de habilidades

Ejemplos populares:
- `bi-code-slash` - JavaScript/Programación
- `bi-layers` - React/Frontend
- `bi-server` - Backend/Node.js
- `bi-database` - Bases de datos
- `bi-git` - Control de versiones
- `bi-cloud` - Cloud/DevOps

## Persistencia de Datos

Los datos se guardan en **LocalStorage** del navegador:
- Los datos persisten al cerrar y abrir el navegador
- Los datos son específicos por navegador y dispositivo
- Para transferir datos a otro dispositivo, puedes:
  1. Copiar manualmente la información
  2. Exportar desde la consola del navegador:
     ```javascript
     console.log(localStorage);
     ```

## Navegadores Compatibles

- Chrome/Edge (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Opera (últimas 2 versiones)

## Solución de Problemas

### Los cambios no se guardan
- Verifica que tu navegador tenga habilitado LocalStorage
- Revisa la consola del navegador (F12) en busca de errores

### Las imágenes no cargan
- Asegúrate de usar URLs completas (https://)
- Verifica que las URLs de las imágenes sean públicas
- Si la imagen falla, se mostrará una imagen placeholder automáticamente

### Las animaciones no funcionan
- Verifica tu conexión a internet (AOS se carga desde CDN)
- Refresca la página con Ctrl+F5

## Mejoras Futuras Sugeridas

- [ ] Sistema de autenticación para el panel admin
- [ ] Exportar/Importar datos en JSON
- [ ] Modo oscuro/claro toggle
- [ ] Sección de testimonios
- [ ] Formulario de contacto funcional
- [ ] Blog integrado
- [ ] Múltiples idiomas

## Créditos

- **Framework CSS**: Bootstrap 5
- **Iconos**: Bootstrap Icons
- **Animaciones**: AOS (Animate On Scroll)
- **Fuente**: Google Fonts - Inter
- **Inspiración de diseño**: sigma-dev.com.ar

## Licencia

Este proyecto es de uso libre. Puedes modificarlo y utilizarlo para tus proyectos personales o comerciales.

---

**Desarrollado con ❤️ para la comunidad de desarrolladores**

¿Preguntas o sugerencias? ¡Contáctame por WhatsApp al +5491135008496!
