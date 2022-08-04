
const tortas=[
    {
        id:"1",
        nombre:"Torta de chocolate",
        Tipo:"Torta",
        precio:1000
        
    },
    {
        id:"2",
        nombre:"Milk cake",
        Tipo:"Torta",
        precio:2000
        
    },
    {
        id:"3",
        nombre:"Torta de chocolate blanco",
        Tipo:"Torta",
        precio:3000
        
    },
    {
        id:"4",
        nombre:"Torta de Miga",
        Tipo:"Torta",
        precio:4000,
        
    }

];

function pedirNombre (){
    let nombre = prompt ("ingresa tu nombre");
    alert ("Bienvenido "+ nombre)
};
pedirNombre ();


for(const torta of tortas){
    alert(torta.nombre);
};









/* 

function agregarTortas () {

}

    var precio=0;

function pedirNombre (){
    let nombre = prompt ("ingresa tu nombre");
    alert ("Bienvenido "+ nombre)
}
pedirNombre ();

function elegirTuTorta (){
    
    
    let torta=prompt (("ELEGI TU TORTA INGRESANDO EL NUMERO DE LA MISMA \n1-Torta con chocolate $5000\n2-Milk cake chocolate milca $5500\n3-Torta de miga $4000\n4-Cheescake $3500\n5-Torta Oreo $4000\nIngrese (s) para salir"))
    let tortasElegidas="";
    

    
    while(torta!="s"){
        switch(torta){
            case "1":
                alert ("Torta de chocolate agregada");
                precio=precio+5000;
                tortasElegidas=tortasElegidas + "Una torta de chocolate \n";
                break;
            case "2":
                alert ("Milk cake agregada x $5500");          
                precio=precio+5500;
                tortasElegidas=tortasElegidas +"Una Milk cake \n"
                break;
            case "3":
                alert ("Torta de miga agregada x $4000");           
                precio=precio+4000;
                tortasElegidas=tortasElegidas +"Una Torta de Miga \n"
                break;
            case "4":
                alert ("Cheescake agregada x $3500");
                precio=precio+3500;
                tortasElegidas=tortasElegidas +"Una cheescake \n"
                break;
            case "5":
                alert ("Torta Oreo agregada x $4000");
                precio=precio+4000;
                tortasElegidas=tortasElegidas +"Una torta oreo \n"
                break;
            default:
                 alert ("No seleccionaste ninguna torta, por favor , vuelva a intentarlo o presione s para salir");
                 break;

        }
    torta=prompt (("ELEGI TU TORTA INGRESANDO EL NUMERO DE LA MISMA \n1-Torta con choclate $5000\n2-Milk cake choclate milca $5500\n3-Torta de miga $4000\n4-Cheescake $3500\n5-Torta Oreo $4000\nLuego Ingrese la letra (s) para sumar"))
     }

     alert ("Elegiste:\n" + tortasElegidas + "\n" + "El total a pagar es de $" + precio +"\n" + "¿Desea abonar $"+precio + " en 3, 6 o 12 Cuotas?\n\nSeleccione:\n3 para 3 Cuotas\n6 para 6 Cuotas\n12 para 12 cuotas.\n\n Precione 1 para realizar la compra en un pago." );
           
}        



elegirTuTorta ();

function calcularCuota (){
    let Cuotas=prompt ("Seleccione el numero : (3) (6) o (12)")
    
    while(Cuotas!="1"){
        switch(Cuotas){
            case "3":
                precio/Cuotas;
                alert("Abonaras $"+ precio/Cuotas + " por cuota" )
                break;
            case "6":
                precio/Cuotas;
                alert("Abonaras $" + precio/Cuotas + " por cuota")
                break;
            case "12":
                precio/Cuotas;
                alert("Abonaras $" + precio/Cuotas + " por cuota")
                break;
            default:
                alert ("Esa cantidad de cuo tas no esta disponible");
                 break;

        }
     alert ("Gracias por tu compra" + nombre ); 
     break;
    }
}

calcularCuota ();

 */
      
    
