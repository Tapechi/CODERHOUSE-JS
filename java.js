//EJERCICIO: PREGUNTAR AL USUARIO EL AÑO DE SU VEHICULO
//SI EL VEHICULO TIENE MENOS DE 10 AÑOS DE ANTIGUEDAD LE AVISAMOS QUE ABONA 200 DOLARES DE PATENTE ANUAL
//SINO EL VEHICULO ABONA 100 DOLARES DE PATENTE ANUAL

/*const Anoactual = (2022)
let Anoauto=parseInt(prompt ("De que año es su vehiculo"));
let Antiguedad=Anoactual-Anoauto;

if(Antiguedad < 10){
    alert ("Abona 100 dolares de patente");
}else{
    alert ("abona 200 de patente");

}



/*Suma de numeros*/


/*let numero=0;
let suma =parseInt (prompt("ingrese un numero"));

while(suma !="0") {
    numero = numero + suma ;
    alert ( "La suma actual es : " + numero ) ;
    suma =parseInt (prompt("Ingrese un numero para sumar o precione 0 para salir "));
    
}

alert ( "El resultado final fue " + numero ) ;




/*concatenar palabras*/ 

/*
let oracion="";
let palabra=prompt("ingrese una palabra");

while (palabra!="s"){
    oracion =oracion + " " + palabra;
    palabra=prompt("Ingresar otra palabra para armar la oracion (s para salir )")

}

alert ("la oracion formada es: "+oracion)
*/

/*let numero =parseInt (prompt ("ingresar un numero"));
let total =0;


while (true){
    if (numero==0 ) { 
        break;

    } 

    if (numero != 0) {
        total= total +1;
    }

    alert (total + numero);
    numero=parseInt (prompt("ingresar otro numero (0 para salir )"))

}
  
alert ("fin")




function Automovil(marca,modelo,anio,color){
    this.marca=marca;
    this.modelo=modelo;
    this.anio=anio;
    this.color=color;
    this.encender=()=>{alert("Alerta :" + this.marca + " El automovil se acaba de encerder PRRRUNNN")};
}

const auto1=new Automovil("Peugeot","208",2019,"black")
const auto2=new Automovil("VW","amarok",2012,"white")

console.log(auto1)
console.log(auto2)
auto2.encender();
*/

/*class Bicicleta{
    contructor (marca,rodado,color,condicion){
        this.marca=marca;
        this.rodado=rodado;
        this.marca=marca;
        this.condicion=condicion;
    }
    
    mostrarBicicleta(){
        alert("marca:"+this.marca+"Rodado:"+this.rodado+"Color: "+this.color+"Condicion"+this.condicion)
    }

    
} 

const bici1=new Bicicleta("roleigh",26,"rojo","nueva");
const bici2=new Bicicleta("Olmo",25,"azul","usada");

console.log(bici1);
*/


/*function reservarturno (){
    let Nombre =prompt("Ingresa tu nombre");
    let Telefono =prompt("Ingresa tu telefono");
    let Mail =prompt("ingresa tu mail");
    let Comentario =prompt("Ingresar comentario adicional si lo desea");
    let color =prompt ("ingresar el color");
    
    console.log (Nombre)
    console.log (Telefono)
    console.log (Mail)
    console.log (Comentario)
    console.log (color)
    console.log (Servicio)
}
reservarturno();

function seleccionarServicio(){   
    let Servicio =prompt ("Ingresar S si el servicio es STANDAR \nIngresar P si el servicio es PREMIUM ");
    
    if(Servicio =="S"){
        alert("Usted seleccion el servicio Standar")
    }else if(Servicio =="P"){
        alert("Usted selecciono el servicio Premium")
    }else{
        alert("No solecciono ningun servicio disponible por favor seleccione\n S para Standar \n P para Premium ");
        let Servicio =prompt ("Ingresar S si el servicio es STANDAR \nIngresar P si el servicio es PREMIUM ");
    }
}


      
reservarturno();
 */


function agregarTortas () {

}

function pedirNombre (){
    let nombre = prompt ("ingresa tu nombre");
    alert ("Bienvenido "+ nombre)
}
pedirNombre ();

function elegirTuTorta (){
    let torta=prompt (("ELEGI TU TORTA INGRESANDO EL NUMERO DE LA MISMA \n1-Torta con chocolate $5000\n2-Milk cake chocolate milca $5500\n3-Torta de miga $4000\n4-Cheescake $3500\n5-Torta Oreo $4000\nIngrese (s) para salir"))
    let precio=0;
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
                 alert ("No seleccionaste ninguna torta, por favor , vuelva a intentarlo o precione s para salir");
                 break;

        }
    torta=prompt (("ELEGI TU TORTA INGRESANDO EL NUMERO DE LA MISMA \n1-Torta con choclate $5000\n2-Milk cake choclate milca $5500\n3-Torta de miga $4000\n4-Cheescake $3500\n5-Torta Oreo $4000\nIngrese s para salir"))
     }

     alert (tortasElegidas + "\n" + "El total a pagar es de $" + precio );
}        

elegirTuTorta ()
     
       
            
     
            
            
            
    



/*function elegiTuTorta () {
    let tortasElegidas = ( prompt ("ELEGI TU TORTA INGRESANDO EL NUMERO DE LA MISMA \n1-Torta con choclate $5000\n2-Milk cake choclate milca $5500\n3-Torta de miga $4000\n4-Cheescake $3500\n5-Torta Oreo $4000"))
    
    if(tortasElegidas ==1){
        alert("Torta de chocolate agregada")
    }else if(tortasElegidas ==2){
        alert("Torta Milk cake agregada.")
    }else if(tortasElegidas ==3){
        alert("Torta de miga agregada")
    }else if(tortasElegidas ==4){
        alert("Cheescake agregada")
    }else if(tortasElegidas ==5){
        alert("Torta oreo agregada")
    }else{
        alert("No seleccinaste ninguna torta");
        let tortasElegidas = (prompt ("ELEGI TU TORTA INGRESANDO EL NUMERO DE LA MISMA \n1-Torta con choclate $5000\n2-Milk cake choclate milca $5500\n3-Torta de miga $4000\n4-Cheescake $3500\n5-Torta Oreo $4000"));
    }
}

elegiTuTorta()*/