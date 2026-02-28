document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Lógica para resaltar el enlace activo en el menú de navegación
    const enlacesMenu = document.querySelectorAll('#nav-menu a');
    const urlActual = window.location.pathname;
    
    // Obtenemos solo el nombre del archivo actual (ej: "contacto.html")
    const archivoActual = urlActual.substring(urlActual.lastIndexOf('/') + 1);

    enlacesMenu.forEach(enlace => {
        const hrefEnlace = enlace.getAttribute('href');
        
        // Comparamos el href con el archivo actual
        if (hrefEnlace === archivoActual) {
            enlace.classList.add('activo');
        } 
        // Caso especial para la raíz (cuando abres el sitio pero no sale index.html en la barra)
        else if (archivoActual === '' && hrefEnlace === 'index.html') {
            enlace.classList.add('activo');
        }
    });

    // 2. Lógica para la alerta del formulario de contacto
    const formulario = document.getElementById('form-contacto');
    
    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            // Prevenimos que la página se recargue inmediatamente
            evento.preventDefault();
            
            // Mostramos el mensaje solicitado
            alert('¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.');
            
            // Vaciamos los campos
            formulario.reset();
        });
    }
});