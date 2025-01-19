'use strict';

//header activar pagia actual
fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header').innerHTML = data;

            // Resaltar el título actual
            const currentPage = document.body.getAttribute('data-page');
            const activeLink = document.querySelector(`a[data-page="${currentPage}"]`);
            if (activeLink) {
                activeLink.classList.add('active'); // Clase que resalta el link actual
            }
        });


//footer igual
fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        });

//header lado
function toggleHeader() {
    const header = document.getElementById("header");
    header.classList.toggle("visible"); // Alterna la clase 'visible'
}




//lightbox
const enlaces = document.querySelectorAll('.dibuix');
const lightbox = document.querySelector('.lightbox');
const grande = document.querySelector('.grande');
const cerrar = document.querySelector('.cerrar');
const prev = document.querySelector('.lightbox .prev');
const next = document.querySelector('.lightbox .next');

let rutas = [];
let indiceActual = 0;


//filtros proyectos
 // Selecciona botones y proyectos
        const filterButtons = document.querySelectorAll('.project-filter');
        const projects = document.querySelectorAll('.project-box');

        // Función para filtrar proyectos
        function filterProjects(category) {
            // Actualiza la clase activa en los botones
            filterButtons.forEach(button => {
                if (button.dataset.filter === category) {
                    button.classList.add('active');
                } else {
                    button.classList.remove('active');
                }
            });

            // Filtra los proyectos según la categoría seleccionada
            projects.forEach(project => {
                if (category === 'all' || project.dataset.category.includes(category)) {
                    project.classList.add('show'); // Muestra proyectos coincidentes
                } else {
                    project.classList.remove('show'); // Oculta los demás
                }
            });
        }

        // Agrega eventos a los botones
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.filter;
                filterProjects(category); // Llama a la función con la categoría correspondiente
            });
        });

        // Mostrar todos los proyectos al cargar la página
        filterProjects('all');


// Llenar el arreglo con las rutas de las imágenes
enlaces.forEach((cadaEnlace, i) => {
    rutas.push(cadaEnlace.querySelector('.img').src);

    cadaEnlace.addEventListener('click', (e) => {
        e.preventDefault();

        indiceActual = i;

        grande.setAttribute('src', rutas[indiceActual]);
        lightbox.classList.add('active');
    });
});

function cambiarImagen(direccion) {
    // Clase de salida activa (desaparece la imagen actual)
    grande.classList.add(direccion === 'next' ? 'slide-left-exit-active' : 'slide-right-exit-active');

    // Después de 400ms, cambia la imagen y aplica la animación de entrada
    setTimeout(() => {
        // Actualizar el índice de la imagen actual
        if (direccion === 'next') {
            indiceActual = (indiceActual < rutas.length - 1) ? indiceActual + 1 : 0;
        } else {
            indiceActual = (indiceActual > 0) ? indiceActual - 1 : rutas.length - 1;
        }

        grande.setAttribute('src', rutas[indiceActual]);

        // Remover clase de salida y añadir clase de entrada
        grande.classList.remove('slide-left-exit-active', 'slide-right-exit-active');
        grande.classList.add(direccion === 'next' ? 'slide-left-enter' : 'slide-right-enter');

        // Quitar la clase de entrada después de que termine la animación
        setTimeout(() => {
            grande.classList.remove('slide-left-enter', 'slide-right-enter');
        }, 200); // Duración de la animación
    }, 300); // Duración de la animación de salida
}

// Cambiar a la imagen siguiente
next.addEventListener('click', () => {
    cambiarImagen('next');
});

// Cambiar a la imagen anterior
prev.addEventListener('click', () => {
    cambiarImagen('prev');
});

// Cerrar el lightbox
cerrar.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Cerrar el lightbox cuando se hace clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) { // Solo cerrar si el clic es fuera de la imagen
        lightbox.classList.remove('active');
    }
});


//Slider
// Object to store current slide index for each slider
// Object to store current slide index for each slider
let slideIndexes = {};

// Initialize sliders
function initializeSlider(sliderId) {
    slideIndexes[sliderId] = 1;
    showSlides(slideIndexes[sliderId], sliderId);
}

// Function to move to the next or previous slide
function plusSlides(n, sliderId) {
    showSlides(slideIndexes[sliderId] += n, sliderId);
}

// Function to move to a specific slide
function currentSlide(n, sliderId) {
    showSlides(slideIndexes[sliderId] = n, sliderId);
}

// Main function to show slides for a specific slider
function showSlides(n, sliderId) {
    let i;
    let slider = document.getElementById(sliderId);
    let slides = slider.getElementsByClassName("mySlides");
    let dots = slider.getElementsByClassName("demo");

    // Control to loop back slides
    if (n > slides.length) {
        slideIndexes[sliderId] = 1;
    }
    if (n < 1) {
        slideIndexes[sliderId] = slides.length;
    }

    // Hide all slides in the current slider
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Remove the "active" class from all dots in the current slider
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and add "active" class to the current dot
    slides[slideIndexes[sliderId] - 1].style.display = "block";
    if (dots.length > 0) {
        dots[slideIndexes[sliderId] - 1].className += " active";
    }
}

// Initialize sliders after DOM content is loaded
document.addEventListener("DOMContentLoaded", function() {
    initializeSlider("slider1");
    initializeSlider("slider2");
    initializeSlider("slider3");
    initializeSlider("slider4");
});



//Dropdown
const contadorElement = document.getElementById('contador');
let typeSumaValue = 0; // Valor del primer dropdown
let styleMultiplicacionValue = 1; // Multiplicador de estilo
let charMultiplicacionValue = 1; // Multiplicador de Characters
let backValue = 0; // Valor del tercer dropdown
let objSumaValue = 0; // Valor del slider de suma de objetos
let valorSeleccionado = 0; // Valor de opciones seleccionadas

// Actualizar el valor base del primer dropdown
function actualizarType() {
    typeSumaValue = parseInt(document.getElementById('typeSuma').value, 10);
    recalcularResultado();
}

// Actualizar el valor de estilo (multiplicador)
function actualizarStyleMultiplicacion() {
    styleMultiplicacionValue = parseInt(document.getElementById('styleMultiplicacion').value, 10);
    recalcularResultado();
}

// Actualizar el valor del multiplicador de Characters
function actualizarCharMultiplicacion() {
    charMultiplicacionValue = parseInt(document.getElementById('charMultiplicacion').value, 10);
    document.getElementById('charMultiplicacionValue').textContent = charMultiplicacionValue;
    recalcularResultado();
}

// Actualizar el valor de fondo
function actualizarBack() {
    backValue = parseInt(document.getElementById('backSuma').value, 10);
    recalcularResultado();
}

// Actualizar el valor de objetos extra (suma)
function actualizarObjSuma() {
    objSumaValue = parseInt(document.getElementById('objSuma').value, 10) * 5;
    document.getElementById('objSumaValue').textContent = objSumaValue / 5;
    recalcularResultado();
}

// Actualizar valor de los extras seleccionados
function actualizarSeleccion() {
    const seleccionadas = document.querySelectorAll('input[name="opcion"]:checked');
    valorSeleccionado = Array.from(seleccionadas).reduce((acc, el) => acc + parseInt(el.value, 10), 0);
    recalcularResultado();
}

// Recalcular el resultado total
function recalcularResultado() {
    const resultado = (typeSumaValue * charMultiplicacionValue * styleMultiplicacionValue) + (backValue * styleMultiplicacionValue) + (objSumaValue * styleMultiplicacionValue) + valorSeleccionado;
    contadorElement.textContent = resultado;
}

// Eventos de cambio para cada control
document.getElementById('typeSuma').addEventListener('change', actualizarType);
document.getElementById('styleMultiplicacion').addEventListener('change', actualizarStyleMultiplicacion);
document.getElementById('charMultiplicacion').addEventListener('input', actualizarCharMultiplicacion);
document.getElementById('backSuma').addEventListener('change', actualizarBack);
document.getElementById('objSuma').addEventListener('input', actualizarObjSuma);
document.querySelectorAll('input[name="opcion"]').forEach(checkbox => {
    checkbox.addEventListener('change', actualizarSeleccion);
});


