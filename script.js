document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('nav ul li a');
    const secciones = document.querySelectorAll('.seccion');
  
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const id = link.getAttribute('data-seccion');
  
       
        secciones.forEach(seccion => {
          seccion.classList.toggle('activa', seccion.id === id);
        });
  
        
        
        document.body.classList.remove('fondo-inicio', 'pastel-verde', 'pastel-rosa');
  
        if (id === 'inicio') {
          document.body.classList.add('fondo-inicio');
        } else if (id === 'nosotros') {
          document.body.classList.add('pastel-verde');
        } else if (id === 'contacto') {
          document.body.classList.add('pastel-rosa');
        }
      });
    });
  });
  