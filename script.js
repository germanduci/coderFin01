///DECLARACION DE VARIABLES GLOBALES///

///Variables de precio:
const large         = 1.45;
const extraLarge    = 1.75;
const precioRegular = 69;

///Arrays de ingredientes, se puede agregar o quitar segun necesario.
const carnes        =["Carne","Cerdo","Veggie"];
const verdes        =["Tomate","Lechuga","Pepino","Cebolla"];
const quesos        =["Cheddar","Cabra","Provolone","Azul"];
const extras        =["Bacon","Jamon","Huevo","Salsa Heroica"];
const pan           =["Tradicional","Celiaco"];
const size          =["Regular","Large","Extra Large"];

///Array contenedor de hamburguesas creadas, "simiar a un carrito"
const hamburguesas=[];

///CONSTRUCTOR DE CLASE BURGER///
class Burger{
    constructor(ingredienteCarne,ingredientePan,ingredienteVerde,ingredienteQueso,ingredienteExtra,tamano,precioFin,numeroOrder){
        this.ingredienteCarne   = ingredienteCarne;
        this.ingredientePan     = ingredientePan;
        this.ingredienteVerde   = ingredienteVerde;
        this.ingredienteQueso   = ingredienteQueso;
        this.ingredienteExtra   = ingredienteExtra;
        this.tamano             = tamano;
        this.precioFin          = precioFin;
        this.numerorder         = numeroOrder;
    }
}

///FUNCIONES///
//Iteración sobre el menu.
function menuBurger(){
    let opcion = parseInt(prompt("Seleccione su opción: 1. Crear Burger - 2. Salir"));
    while (opcion !== 1 && opcion !== 2){
        alert("Opcion no valida. Intentemos nuevamente")
        opcion = parseInt(prompt("Seleccione su opción: 1. Crear Burger - 2. Salir"));
    }                
    switch(opcion){
        case 1:
            alert("Excelente! Pulsa continuar para preparar tu Hero burger!")
            crearBurger();
            break;        
        case 2:
            alert("Gracias por visitarnos!")
            break;        
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Seleccione su opción: 1. Crear Burger - 2. Salir"));
    }
}
//Opción de agregar otra hamburguesa
function moreBurger(){
    let opcion = parseInt(prompt("Creamos otra Hero Burger?: 1. Si! - 2. Salir"));
    while (opcion !== 1 && opcion !== 2){
        alert("Opcion no valida. Intentemos nuevamente")
        opcion = parseInt(prompt("Creamos otra Hero Burger?: 1. Si! - 2. Salir"));
    }                
    switch(opcion){
        case 1:
            alert("Excelente! Pulsa continuar para preparar tu Hero burger!")
            crearBurger();
            break;        
        case 2:
            alert("Gracias por visitarnos!")
            break;        
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Creamos otra Hero Burger?: 1. Si! - 2. Salir"));
    }
}

//Creamos su hamburgesa, llamando funciones para ingredientes y mostrando un resumen de orden.
function crearBurger(){
    ingredienteCarne    = agregarCarne();
    ingredientePan      = agregarPan();
    ingredienteVerde    = agregarVerduras();
    ingredienteQueso    = agregarQueso();
    ingredienteExtra    = agregarExtra();
    precioBase          = precioRegular;
    tamanio             = setSize();
    precioFinal         = setPrecio(precioBase,tamanio);
    let numOrder        = Math.ceil(Math.random()*100);    

    alert("Su Burger Hero ha sido creada!\nEsta compuesta por una hamburguesa de "+ingredienteCarne+".\nSu pan es: "+ingredientePan+".\nSus ingredientes son:\nVerde: "+ingredienteVerde+".\nQueso: "+ingredienteQueso+".\nExtra: "+ingredienteExtra+".\nEl tamaño elegido es: "+
    tamanio+"\nEl precio Final es de: $"+precioFinal+".\nTu número de orden es: "+numOrder+".\nSi lo deseas puedes ver en la consola todas las Hero burguers que has armado!"); 
    
    hamburguesas.push(new Burger(ingredienteCarne,ingredientePan,ingredienteVerde,ingredienteQueso,ingredienteExtra,tamanio,precioFinal,numOrder));
    moreBurger();
}


///Funciones de ingredientes, son todas similares, refieren al array de ingredientes correspondiente segun elección del usuario.
function agregarCarne(){    
    let opcion = parseInt(prompt("Tipo de Carne = 1. Vaca - 2. Cerdo - 3. Veggie"));       
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
        alert("Opcion no valida. Intentemos nuevamente.")
        opcion = parseInt(prompt("Tipo de Carne = 1. Vaca - 2. Cerdo - 3. Veggie"));
    }
    switch(opcion){
        case 1:
            ingredienteCarne = carnes[0];;
            break;
        case 2:
            ingredienteCarne = carnes[1];
            break;
        case 3:
            ingredienteCarne = carnes[2];
            break; 
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Tipo de Carne = 1. Vaca - 2. Cerdo - 3. Veggie"));
    }    
    return ingredienteCarne;
}

function agregarPan(){    
    let opcion = parseInt(prompt("Tipo de Pan = 1. Traducional - 2. Celiaco"));       
    while (opcion !== 1 && opcion !== 2){
        alert("Opcion no valida. Intentemos nuevamente.")
        opcion = parseInt(prompt("Tipo de Pan = 1. Traducional - 2. Celiaco"));
    }
    switch(opcion){
        case 1:
            ingredientePan = pan[0];;
            break;
        case 2:
            ingredientePan = pan[1];
            break;        
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Tipo de Pan = 1. Traducional - 2. Celiaco"));
    }    
    return ingredienteCarne;
}

function agregarVerduras(){
    let opcion = parseInt(prompt("Verduras = 1. Tomate - 2. Lechuga - 3. Pepino - 4. Cebolla"))
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4){
        alert("Opcion no valida. Intentemos nuevamente")
        opcion = parseInt(prompt("Primer Ingrediente = 1. Tomate - 2. Lechuga - 3. Pepino - 4. Cebolla"));
    }
    switch(opcion){
        case 1:
            ingredienteVerde = verdes[0];
            break;
        case 2:
            ingredienteVerde = verdes[1];
            break;
        case 3:
            ingredienteVerde = verdes[2];
            break;
        case 4:
            ingredienteVerde = verdes[3];
            break;
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Verduras = 1. Tomate - 2. Lechuga - 3. Pepino - 4. Cebolla"));                     
    }    
    return ingredienteVerde;
}

function agregarQueso(){
    let opcion = parseInt(prompt("Quesos = 1. Cheddar - 2. Cabra - 3. Provolone - 4. Azul"))
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4){
        alert("Opcion no valida. Intentemos nuevamente")
        opcion = parseInt(prompt("Quesos = 1. Cheddar - 2. Cabra - 3. Provolone - 4. Azul"));
    }
    switch(opcion){
        case 1:
            ingredienteQueso = quesos[0];
            break;
        case 2:
            ingredienteQueso = quesos[1];
            break;
        case 3:
            ingredienteQueso = quesos[2];
            break;
        case 4:
            ingredienteQueso = quesos[3];
            break;  
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Quesos = 1. Cheddar - 2. Cabra - 3. Provolone - 4. Azul"));
    }    
    return ingredienteQueso;
}

function agregarExtra(){    
    let opcion = parseInt(prompt("Agregar Extra = 1. Bacon - 2. Jamon - 3. Huevo - 4. Salsa Heroica"));       
    while (opcion !== 1 && opcion !== 2 && opcion !== 3 && opcion !== 4){
        alert("Opcion no valida. Intentemos nuevamente.")
        opcion = parseInt(prompt("Agregar Extra = 1. Bacon - 2. Jamon - 3. Huevo - 4. Salsa Heroica"));
    }
    switch(opcion){
        case 1:
            ingredienteExtra = extras[0];
            break;
        case 2:
            ingredienteExtra = extras[1];
            break;
        case 3:
            ingredienteExtra = extras[2];
            break; 
        case 4:
            ingredienteExtra = extras[3];
            break;
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Agregar Extra = 1. Bacon - 2. Jamon - 3. Huevo - 4. Salsa Heroica"));
    }    
    return ingredienteCarne;
}

function setSize(){
    let opcion = parseInt(prompt("Tamaño: 1. Regular - 2. Large - 3. Extra Large"))
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
    alert("Opcion no valida. Intentemos nuevamente")
    opcion = parseInt(prompt("Tamaño: 1. Regular - 2. Large - 3. Extra Large"));
    }                
    switch(opcion){
        case 1:
            tamanio = size[0];
            break;
        case 2:
            tamanio = size[1];
            break;
        case 3:
            tamanio = size[2];
            break;
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Tamaño: 1. Regular - 2. Large - 3. Extra Large"));
    }    
return tamanio;
}

//Las funcion precio refiere a las constantes de precio acorde a la elección previa del usuario.
function setPrecio(precioBase,tamanio){    
    if (tamanio == "Extra Large") {
        precioFinal=precioBase*extraLarge;
    }
    else if (tamanio == "Large"){
        precioFinal=precioBase*large;
    }
    else{
        precioFinal=precioBase;
    }
    return precioFinal;
}

///EJECUCCION///
alert("Bienvenido a HeroBurger: Tu Hamburguesa Heroica");
menuBurger();
console.log(hamburguesas);
