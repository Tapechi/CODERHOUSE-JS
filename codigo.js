class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
    
    }

    sumarIva() {
        return this.precio *1.21;
    }

    Vender() {
        this.disponible = false
    }
    
    precioSugerido() {
        return this.precio * 1.21 * 1.25;
    }
}

var arrayProductos = [];
do {
    var comprobacion = prompt ("ingresar un producto o s para terminar de agregar");
    if (comprobacion == "S" || comprobacion == "s" ) {
        break;
    }else{
        nombreP = comprobacion;
        var precioP = prompt("Ingrese el precio del producto");
        var detalleP = prompt("Ingresar el detalle del producto");
        var cantidadP = prompt("Ingresa la cantidad a stockear")
        arrayProductos.push(new Producto(nombreP, precioP, detalleP, cantidadP));
    }
  }   

  while (comprobacion != "S" || comprobacion != "s")
  console.log(arrayProductos);

    document.write(`<div class="cardPadre">`)
    for (var producto of arrayProductos) {
        document.write(`<div class="card"><ul><li><h3> Nombre: ${producto.nombre} </li></h3>`);
        document.write("<li><h3> Detalle: " + producto.detalle + " </li></h3>");
        document.write("<li><h3> Cantidad: " + producto.cantidad + " </li></h3>");
        document.write("<li><h3> Precio:$" + producto.precio  + " </li></h3>");
        document.write("<li><h3> Precio con Iva:$" + producto.sumarIva() + " </li></h3></ul></div>");
        console.log(producto.nombre);
        console.log(producto.detalle);
        console.log(producto.cantidad);
        console.log(producto.precio);
        console.log(producto.sumarIva());  
    }
    document.write(`</div>`)

    /*poco stock menos de 3 productos

var pocoStock = arrayProductos.filter(producto => producto.cantidad <= 3);
console.log("Producto con poco stock: ");
console.log(pocoStock);
document.write("<h3> Lista de productos con poco stock: <h3>");

for(var producto of pocoStock) {
    document.write("<ul><li><h3> Nombre: " + producto.nombre + " </li></h3>");
    document.write("<li><h3> Detalle: " + producto.detalle + " </li></h3>");
    document.write("<li><h3> Cantidad: "  + producto.cantidad + " </li></h3></ul>");
}

/sumar productos

/agrupar por detalle / categoria