/*class Producto {
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


 //BUSCADOR
 
 var buscar = prompt("Que producto queres buscar?");
 var prodBuscado = arrayProductos.filter(producto => producto.nombre.includes(buscar));
 document.write("<h3> Lista de productos buscados </h3>");

 for (var producto of prodBuscado) {
    
    document.write(`<div class="card"><ul><li><h3> Nombre: ${producto.nombre} </li></h3>`);
    document.write("<li><h3> Detalle: " + producto.detalle + " </li></h3>");
 }
   
 
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

/agrupar por detalle / categoria */

const stock=[
    {
        nombre:"Torta Chocolate Negro",
        precio:1000,
        },
        {
        nombre:"Torta limon",
        precio:2000,
        },
        {
        nombre:"Torta Chocolate blanco",
        precio:3000,
        },
    ];
    
    
    let contenedor = document.getElementById("muestra")
    console.log (stock)
    for (let s of stock){

        contenedor.innerHTML +=
        `
        <div class="card agregarProducto">
        <ul>
            <div class="producto">
                <h3 class="productoNombre">${s.nombre}</h3>
                <h3 class="productoPrecio">$${s.precio}</h3>
            </div>
            <br>
            <div class=boton>
                <button   id="btn1" class=" agregarProductoBoton btn btn-primary btn-sm">Agregar</button>
            </div>
        </ul> 
        </div>
        <br>
        `
    };
    
    const addToShoppingCartButtons = document.querySelectorAll(`.agregarProductoBoton`);
    addToShoppingCartButtons.forEach(addtoCartButton => {
       addtoCartButton.addEventListener(`click`, addToCartClicked)
    })

    const carritoCompraContenedorContainter = document.querySelector(`.carritoCompraContenedorContainter`);
    

    function addToCartClicked (event) {
        const button = event.target;
        const producto = button.closest(`.agregarProducto`)
        
        const productoTitulo = producto.querySelector (`.productoNombre`).textContent;
        const productoPrecio = producto.querySelector (`.productoPrecio`).textContent;
        agregaProductoAlCarro(productoTitulo, productoPrecio);
    }

    function agregaProductoAlCarro(productoTitulo, productoPrecio) {
        const CarritoCompras = document.createElement(`div`);
        const carritoCompraContenedorContainter = document.querySelector(`.carritoCompraContenedorContainter`);
        const carritoContenido = `
        <div class="row  containter">
            <div class="col-7">
                <div class="d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <h6 class="  text-truncate ml-3 mb-0">${productoTitulo}</h6>
                </div>
            </div>
            <div class="col-2">
                <div class=" d-flex align-items-center h-100 border-bottom pb-2 pt-3">
                    <p class="mb-0 id="precioProductoCuota">${productoPrecio}</p>
                    <input class="shopping-cart-quantity-input cantidadProductos"  type="number" value="1" onkeypress="capturarEnter(event)">
                </div>
            </div>
        </div>
        <br>
        `
        
        CarritoCompras.innerHTML = carritoContenido;
        carritoCompraContenedorContainter.append(CarritoCompras);
 

        CarritoCompras
        .querySelector(`.cantidadProductos`).addEventListener(`change`,elegirCantidadProductos);
        }

        function elegirCantidadProductos(event) {
            const input = event.target;
            if (input.value <= 0) {
                input.value = 1;
            }
            
        }
   
    
        function capturarEnter(event) {
            if(event.keycode ==13 || event.which==13){
                alert("Estas agregando cantidades");
            }
        }
  