// Definimos productos disponibles
const productos = [
    {id:1, nombre:"Camisa", precio:2000},
    {id:2, nombre:"Pantalón", precio:3500},
    {id:3, nombre:"Zapatos", precio:5000}
];

// Carrito de compras
let carrito = [];

//Elementos del DOM
const productosDiv = document.getElementById("productos");
const listaCarrito = document.getElementById("lista-carrito");
const totalSpan = document.getElementById("total");

//Función para mostrar los productos en la tienda
function mostrarProductos() {
    productos.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = '${producto.nombre} - $${producto.precio}<button onclick="agregarAlCarrito(${producto.id})">Agregar</button>';
        productosDiv.appendChild(div);
    });
}

// Función para agregar productos al carrito
function agregarAlCarrito(id) {
    const producto = productos.find(prod => prod.id === id);
    carrito.push(producto);
    actualizarCarrito();
}

// Función para actualizar la vista del carrito
function actualizarCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((producto, index) => {
        total += producto.precio;
        const li = document.createElement("li");
        li.innerHTML = '${producto.nombre} - $${producto.precio}<button onclick="eliminarDelCarrito(${index})">Eliminar</button>';
        listaCarrito.appendChild(li);
    });

    totalSpan.textContent = total;
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(index) {
    carrito.splice(index, 1);
    actualizarCarrito();
}

// Función para vaciar el carrito
function vaciarCarrito() {
    carrito = [];
    actualizarCarrito();
}

// Inicializar la tienda
mostrarProductos();

