// /* PRUEBITA */
// let globalTranslations;

// async function loadTranslations() {
//     const response = await fetch('translations.json');
//     if (!response.ok) {
//         throw new Error('Error al cargar las traducciones');
//     }
//     globalTranslations = await response.json();
//     return globalTranslations;
// }

// function updateDateTime() {
//     const dateTimeDisplay = document.getElementById("dateTimeDisplay");
//     const now = new Date();

//     const currentLanguage = localStorage.getItem('language') || 'es';
//     const { daysOfWeek, monthsOfYear } = globalTranslations[currentLanguage];

//     const day = daysOfWeek[now.getDay()];
//     const date = now.getDate(); 
//     const month = monthsOfYear[now.getMonth()];
//     const year = now.getFullYear();
//     const hours = String(now.getHours()).padStart(2, '0');
//     const minutes = String(now.getMinutes()).padStart(2, '0');

//     dateTimeDisplay.textContent = `${day}, ${hours}:${minutes} - ${date} ${month} ${year}`;
// }

// function updateTranslations(selectedLanguage) {
//     for (const key in globalTranslations[selectedLanguage]) {
//         const elements = document.querySelectorAll(`[data-translate="${key}"]`);
//         elements.forEach(element => {
//             element.textContent = globalTranslations[selectedLanguage][key];
//         });
//     }
//     updateDateTime();
// }

// loadTranslations().then(() => {
//     updateDateTime();
//     setInterval(updateDateTime, 60000);

//     document.getElementById('language-select').addEventListener('change', function() {
//         const selectedLanguage = this.value;
//         localStorage.setItem('language', selectedLanguage);
//         updateTranslations(selectedLanguage);
//     });

//     // Aplicar traducciones iniciales
//     const initialLanguage = localStorage.getItem('language') || 'es';
//     updateTranslations(initialLanguage);
// }).catch(error => {
//     console.error(error);
// });


// //Página de productos
// /* function cambiarImagen() {
//     const imagen = document.getElementsByClassName("producto_imagen");

//     const atributo = imagen.getAttribute("src");

//     const fotos = ["../fonts/Imagenes/IMG_20240607_155209.jpg", "../fonts/Imagenes/IMG_20240623_111432.jpg", "../fonts/Imagenes/IMG_20240716_120551.jpg", "../fonts/Imagenes/IMG_20240731_070046.jpg", "../fonts/Imagenes/IMG_20240716_120628.jpg", "../fonts/Imagenes/IMG_20240629_184726.jpg", "../fonts/Imagenes/IMG_20240629_185313.jpg", "../fonts/Imagenes/IMG_20240629_185849.jpg", "../fonts/Imagenes/IMG_20240629_185946.jpg", "../fonts/Imagenes/IMG_20240629_190319.jpg", "../fonts/Imagenes/IMG_20240702_170022.jpg", "../fonts/Imagenes/IMG_20240702_175641.jpg", "../fonts/Imagenes/IMG_20240703_171528.jpg", "../fonts/Imagenes/IMG_20240703_195749.jpg", "../fonts/Imagenes/IMG_20240703_201531.jpg", "../fonts/Imagenes/IMG_20240707_111448.jpg", "../fonts/Imagenes/IMG_20240815_104044.jpg"];

//     switch (atributo) {
//         case 
//     }
// }


// /* imagen.addEventListener("click", cambiarImagen);
 
// document.addEventListener('DOMContentLoaded', function() {
//     const productos = document.querySelectorAll('.producto a');
//     productos.forEach(producto => {
//         producto.addEventListener('click', mostrarProducto);
//     });
// });

// function mostrarProducto(event) {
//     event.preventDefault();
//     const producto = event.currentTarget;
//     const nombre = producto.getAttribute('data-nombre');
//     const imagen = producto.getAttribute('data-imagen');
//     const precio = producto.getAttribute('data-precio');

//     localStorage.setItem('productoNombre', nombre);
//     localStorage.setItem('productoImagen', imagen);
//     localStorage.setItem('productoPrecio', precio);

//     window.location.href = 'producto.html';
// }

// // Esta función se ejecutará en la página de producto
// function cargarProducto() {
//     const nombre = localStorage.getItem('productoNombre');
//     const imagen = localStorage.getItem('productoImagen');
//     const precio = localStorage.getItem('productoPrecio');

//     if (nombre && imagen && precio) {
//         document.getElementById('producto-nombre').textContent = nombre;
//         document.getElementById('producto-imagen').src = imagen;
//         document.getElementById('producto-precio').textContent = precio;
//     }
// } */

// //////////////////////////////////
//     let productos = [];

//     fetch("../FrontEndStore_fin/productos.json")
//     .then(response => response.json())
//     .then(data => {
//       const producto = data.find(p => p.id == producto);
//       if (producto) {
//         mostrarDetallesProducto(producto);
//       }
//     });

//         const contenedorProductos = document.querySelector("#contenedor-productos");
// /*         const botonesCategorias = document.querySelectorAll(".boton-categoria"); */
//         const tituloPrincipal = document.querySelector(".producto__nombre");
//         const infoproducto = document.querySelector(".producto__informacion");        
    
//         /* botonesCategorias.forEach(boton => boton.addEventListener("click", () => {
//             aside.classList.remove("aside-visible");
//         })) */

//             function cargarProductos(productosElegidos) {
//                 contenedorProductos.innerHTML = "";
            
//                 productosElegidos.forEach(producto => {
//                     const div = document.createElement("div");
//                     div.classList.add("producto");
//                     div.innerHTML = `
//                         <a href="#" data-id="${producto.id}">
//                             <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
//                             <div class="producto-detalles">
//                                 <h3 class="producto-titulo">${producto.titulo}</h3>
//                                 <p class="producto-precio">$${producto.precio}</p>
//                             </div>
//                         </a>
//                     `;
            
//                     // Añadir evento de clic a la imagen del producto
//                     div.querySelector('a').addEventListener('click', (e) => {
//                         e.preventDefault(); // Prevenir el comportamiento por defecto
            
//                         // Guardar los detalles del producto en localStorage
//                         localStorage.setItem('productoSeleccionado', JSON.stringify(producto));
            
//                         // Redirigir a la página del producto
//                         window.location.href = `producto.html?id=${producto.id}`;
//                     });
            
//                     contenedorProductos.append(div);
//                 });
//             }
// ///////////////////////////////////            



// // SCRIPT LOGIN //
// const loginButton = document.getElementById('loginButton');
// const loginPopup = document.getElementById('loginPopup');
// const closePopup = document.getElementById('loginClose');
// let contrasena =document.getElementById("password");
// const cartButton = document.getElementById('cartButton');
// const cartPopup = document.getElementById('cartPopup');
// const cartClose = document.getElementById('cartClose');

// loginButton.addEventListener('click', () => {
//     loginPopup.style.display = 'block';
//   });

//   closePopup.addEventListener('click', () => {
//     loginPopup.style.display = 'none';
//   });

//   ojito.addEventListener('click', function() {

//     if (contrasena.type === "password") {
//         contrasena.type = "text";
//         imagen.src ="../fonts/Imagenes/ojoAbierto1.jpg" ;

//     } 
//     else {
//         contrasena.type = "password";
//         imagen.src="../fonts/Imagenes/ojoCerrado1.jpg" ;
//     }
// })

// // POPUP CARRITO//
// cartButton.addEventListener('click', () => {
//     cartPopup.style.display = 'block';
// });


// cartClose.addEventListener('click', () => {
//     cartPopup.style.display = 'none';
// });

