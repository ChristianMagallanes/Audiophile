// Productos disponibles cargados desde productos.json
let productos = [];

fetch("./scripts/data.json")
  .then(response => response.json())
  .then(data => {
    productos = data;

    // Define el orden deseado de los productos (XX99 Mark I Headphones, ZX9 Speaker, YX1 Wireless Earphones)
    const ordenDeseado = [
      "xx99-mark-one-headphones",
      "zx9-speaker",
      "yx1-earphones"
    ];

    // Ordena el arreglo de productos de acuerdo al orden deseado
    const productosOrdenados = ordenDeseado.map(slug => productos.find(producto => producto.slug === slug));

    cargarProductos(productosOrdenados);
  })
  .catch(error => {
    console.error("Error al cargar los productos:", error);
  });

// Obtiene elementos del DOM
const productosPrincipales = document.getElementById("productosPrincipales");

// Función para cargar los productos en el contenedor HTML
function cargarProductos(productosElegidos) {
  productosPrincipales.innerHTML = "";

  productosElegidos.forEach(producto => {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.innerHTML = `
      <img class="producto-imagen" src="${producto.image.desktop}" alt="${producto.name}">
      <div class="producto-detalles">
          <h2 class="producto-titulo">${producto.name}</h2>
          <button class="boton-agregar-carrito" data-id="${producto.id}">shop <svg  xmlns="http://www.w3.org/2000/svg" width="8" height="12" viewBox="0 0 8 12" fill="none">
          <path d="M1.3219 1L6.3219 6L1.3219 11" stroke="#D87D4A" stroke-width="2"/>
          </svg></button>
      </div>
    `;
    productosPrincipales.appendChild(div);
  });
}
