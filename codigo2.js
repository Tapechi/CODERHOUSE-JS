class Producto {
    constructor(nombre, precio, detalle, cantidad) {
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.detalle = detalle;
        this.cantidad = cantidad;
        this.disponible = true;
      
    }
}

function capturar(){
var nombreCapturar = document.getElementById("producto");
var precioCapturar = document.getElementById("precio");
var detalleCapturar = document.getElementById("detalle");
var cantidadCapturar = document.getElementById("cantidad");
var nuevoProducto = new Producto(nombreCapturar.value,precioCapturar.value,detalleCapturar.value,cantidadCapturar.value)
console.log (nuevoProducto);
agregar(nuevoProducto);
};

var baseDatos = [];
function agregar(nuevoProducto){
    baseDatos.push(nuevoProducto);
    console.log(baseDatos);
    document.getElementById("tabla").innerHTML += '<tbody><td>'+nuevoProducto.nombre+'</td><td>'+'$'+nuevoProducto.precio+'</td></tbody>';
};

/*let valor1 = prompt("igrese un valor");
let valor2 = prompt("igrese un valor");
let valor3 = prompt("igrese un valor");
resultado=(valor1+valor2+valor3)*0.9;
localstorage.setItem("resultado",resultado);*/



