function preEntrega2() {
    //Lista de productos: 
    const productos = [
        {id: 0, nombre: 'Arroz', precio: 75},
        {id: 1, nombre: 'Carne', precio: 150},
        {id: 2, nombre: 'Fideos', precio: 80},
        {id: 3, nombre: 'Pollo', precio: 120},
        {id: 4, nombre: 'Pescado', precio: 135},
        {id: 5, nombre: 'Medialunas', precio: 25},
        {id: 6, nombre: 'Churros', precio: 15},
        {id: 7, nombre: 'Lentejas', precio: 50},
        {id: 8, nombre: 'Polenta', precio: 65},
        {id: 9, nombre: 'Huevos', precio: 10},
    ]
    //Productos en lista con su id, precio y nombre:
    productos.map((producto) => console.log(producto))
    //Filtro por precio:
    let filtroPrecio = parseInt(prompt('Ingrese un precio maximo para filtrar productos'))
    let productosFiltrados = productos.filter(function(producto) {
        return producto.precio <= filtroPrecio;
    });
    console.log(productosFiltrados)
    //Colocar IVA a productos seleccionados:
    let buscarPorNombre = prompt('Ingrese el nombre de un producto para mostrar su precio con IVA')
    let buscar = productos.find((el) => el.nombre === buscarPorNombre)
    let resultado = buscar.precio * 1.21
    console.log(`El precio con IVA del producto ${buscar.nombre} es de: $${resultado}`)
}