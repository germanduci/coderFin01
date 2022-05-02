///DECLARACION DE VARIABLES GLOBALES///

///Variables de precio:
const large         = 1.25;
const extraLarge    = 1.5;
let precioFinal     = 0;

///Tamaño producto - Se utiliza para calcular el precio final.
const size=["Regular","Large","Extra Large"];

///Array contenedor de hamburguesas creadas, "simiar a un carrito"
const hamburguesas=[];

///CONSTRUCTOR DE CLASES///
class ingrediente{
    constructor(nombre,precio){
        this.nombre = nombre;
        this.precio = precio;
    }
}

///Construcción objetos ingredientes.
const tomate = new ingrediente("Tomate",10);
const lechuga = new ingrediente("Lechuga",5);
const pepino = new ingrediente("Pepino",8);
const cebolla = new ingrediente("Cebolla",3);

const panTradicional = new ingrediente("Tradicional",5);
const panCeliaco = new ingrediente("Celiaco",10);

const carne = new ingrediente("Carne",20);
const cerdo = new ingrediente("Cerdo",15);
const veggie = new ingrediente("Veggie",18);

const cheddar = new ingrediente("Cheddar",8);
const cabra = new ingrediente("Cabra",7);
const provolone = new ingrediente("Provolone",10);
const azul = new ingrediente("Azul",7);

const bacon = new ingrediente("Bacon",10);
const jamon = new ingrediente("Jamon",8);
const huevo = new ingrediente("Huevo",5);
const salsaHeroica = new ingrediente("Salsa Heroica",12);


///Arrays contenedores ingredientes
const ingredientesVerdes=[tomate,lechuga,pepino,cebolla];
const ingredientesCarnes=[carne,cerdo,veggie];
const ingredientesQuesos=[cheddar,cabra,provolone,azul];
const ingredientesExtras=[bacon,jamon,huevo,salsaHeroica];
const ingredientesPanes=[panTradicional,panCeliaco];

class Burger{
    constructor(ingredienteCarne,ingredientePan,ingredienteVerde,ingredienteQueso,ingredienteExtra,tamanio,precioFinal,numOrder){
        this.ingredienteCarne   = ingredienteCarne;
        this.ingredientePan     = ingredientePan;
        this.ingredienteVerde   = ingredienteVerde;
        this.ingredienteQueso   = ingredienteQueso;
        this.ingredienteExtra   = ingredienteExtra;
        this.tamanio            = tamanio;
        this.precioFinal        = precioFinal;
        this.numOrder           = numOrder;
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

//Creamos su hamburgesa, llamando funciones para ingredientes y mostrando un resumen de orden por alerta.
function crearBurger(){    
    ingredientePan      = agregarPan();
    ingredienteCarne    = agregarCarne();
    ingredienteVerde    = agregarVerdura();
    ingredienteQueso    = agregarQueso();
    ingredienteExtra    = agregarExtra();    
    tamanio             = setSize();
    precioFinal         = setPrecio(tamanio);
    numOrder            = Math.ceil(Math.random()*100);

    alert("Su Burger Hero ha sido creada!\nSu pan es: "+ingredientePan+".\nEsta compuesta por un medallón: "+ingredienteCarne+".\nSus ingredientes son:\nVerde: "+ingredienteVerde+".\nQueso: "+ingredienteQueso+".\nExtra: "+ingredienteExtra+".\nEl tamaño elegido es: "+
    tamanio+"\nEl precio Final es de: $"+precioFinal+".\nTu número de orden es: "+numOrder+".\nAl finalizar puedes ver en la consola todas las Hero burguers que has armado!"); 
    
    hamburguesas.push(new Burger(ingredientePan,ingredienteCarne,ingredienteVerde,ingredienteQueso,ingredienteExtra,tamanio,precioFinal,numOrder));
    moreBurger();
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
            alert("Gracias por elegirnos, Aquí podrás visualizar tu orden.")
            break;        
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt("Creamos otra Hero Burger?: 1. Si! - 2. Salir"));
    }
}
///Funciones de ingredientes, son todas similares, refieren al array de ingredientes correspondiente segun elección del usuario.
function agregarPan(){  

    let opcion = parseInt(prompt(`Tipo de Pan:\n
            1) ${ingredientesPanes[0].nombre} - $ ${ingredientesPanes[0].precio}\n 
            2) ${ingredientesPanes[1].nombre} - $ ${ingredientesPanes[1].precio}\n                        
            `));          
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
        alert("Opcion no valida. Intentemos nuevamente.")
        opcion = parseInt(prompt(`Tipo de Pan:\n
            1) ${ingredientesPanes[0].nombre} - $ ${ingredientesPanes[0].precio}\n 
            2) ${ingredientesPanes[1].nombre} - $ ${ingredientesPanes[1].precio}\n                        
            `));
    }
    switch(opcion){
        case 1:
            ingredientePan = ingredientesPanes[0].nombre;
            precioFinal=precioFinal+ingredientesPanes[0].precio;
            break;
        case 2:
            ingredientePan = ingredientesPanes[1].nombre;
            precioFinal= precioFinal+ingredientesPanes[1].precio;
            break;        
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt(`Tipo de Pan:\n
                1) ${ingredientesPanes[0].nombre} - $ ${ingredientesPanes[0].precio}\n 
                2) ${ingredientesPanes[1].nombre} - $ ${ingredientesPanes[1].precio}\n                        
                `));
    }    
    return ingredientePan;
}

function agregarCarne(){
    
    let opcion = parseInt(prompt(`Tipo de Medallón:\n
            1) ${ingredientesCarnes[0].nombre} - $ ${ingredientesCarnes[0].precio}\n 
            2) ${ingredientesCarnes[1].nombre} - $ ${ingredientesCarnes[1].precio}\n
            3) ${ingredientesCarnes[2].nombre} - $ ${ingredientesCarnes[2].precio}\n            
            `));          
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
        alert("Opcion no valida. Intentemos nuevamente.")
        opcion = parseInt(prompt(`Tipo de Medallón:\n
            1) ${ingredientesCarnes[0].nombre} - $ ${ingredientesCarnes[0].precio}\n 
            2) ${ingredientesCarnes[1].nombre} - $ ${ingredientesCarnes[1].precio}\n
            3) ${ingredientesCarnes[2].nombre} - $ ${ingredientesCarnes[2].precio}\n            
            `));
    }
    switch(opcion){
        case 1:
            ingredienteCarne = ingredientesCarnes[0].nombre;
            precioFinal+= ingredientesCarnes[0].precio;
            break;
        case 2:
            ingredienteCarne = ingredientesCarnes[1].nombre;
            precioFinal+= ingredientesCarnes[1].precio;
            break;
        case 3:
            ingredienteCarne = ingredientesCarnes[2].nombre;
            precioFinal+= ingredientesCarnes[2].precio;
            break; 
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt(`Tipo de Medallón:\n
                1) ${ingredientesCarnes[0].nombre} - $ ${ingredientesCarnes[0].precio}\n 
                2) ${ingredientesCarnes[1].nombre} - $ ${ingredientesCarnes[1].precio}\n
                3) ${ingredientesCarnes[2].nombre} - $ ${ingredientesCarnes[2].precio}\n            
                `));
    }    
    return ingredienteCarne;
}

function agregarVerdura(){
    
    let opcion = parseInt(prompt(`Verduras:\n
            1) ${ingredientesVerdes[0].nombre} - $ ${ingredientesVerdes[0].precio}\n 
            2) ${ingredientesVerdes[1].nombre} - $ ${ingredientesVerdes[1].precio}\n 
            3) ${ingredientesVerdes[2].nombre} - $ ${ingredientesVerdes[2].precio}\n
            4) ${ingredientesVerdes[3].nombre} - $ ${ingredientesVerdes[3].precio}\n            
            `));          
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
        alert("Opcion no valida. Intentemos nuevamente.")
        opcion = parseInt(prompt(`Verduras:\n
            1) ${ingredientesVerdes[0].nombre} - $ ${ingredientesVerdes[0].precio}\n 
            2) ${ingredientesVerdes[1].nombre} - $ ${ingredientesVerdes[1].precio}\n 
            3) ${ingredientesVerdes[2].nombre} - $ ${ingredientesVerdes[2].precio}\n
            4) ${ingredientesVerdes[3].nombre} - $ ${ingredientesVerdes[3].precio}\n             
            `));
    }
    switch(opcion){
        case 1:
            ingredienteVerde = ingredientesVerdes[0].nombre;
            precioFinal+= ingredientesVerdes[0].precio;
            break;
        case 2:
            ingredienteVerde = ingredientesVerdes[1].nombre;
            precioFinal+= ingredientesVerdes[1].precio;
            break;
        case 3:
            ingredienteVerde = ingredientesVerdes[2].nombre;
            precioFinal+= ingredientesVerdes[2].precio;
            break; 
        case 4:
            ingredienteVerde = ingredientesVerdes[3].nombre;
            precioFinal+= ingredientesVerdes[3].precio;
            break; 
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt(`Verduras:\n
                1) ${ingredientesVerdes[0].nombre} - $ ${ingredientesVerdes[0].precio}\n 
                2) ${ingredientesVerdes[1].nombre} - $ ${ingredientesVerdes[1].precio}\n 
                3) ${ingredientesVerdes[2].nombre} - $ ${ingredientesVerdes[2].precio}\n
                4) ${ingredientesVerdes[3].nombre} - $ ${ingredientesVerdes[3].precio}\n             
                `));
    }    
    return ingredienteVerde;
}

function agregarQueso(){
    
    let opcion = parseInt(prompt(`Queso:\n
            1) ${ingredientesQuesos[0].nombre} - $ ${ingredientesQuesos[0].precio}\n 
            2) ${ingredientesQuesos[1].nombre} - $ ${ingredientesQuesos[1].precio}\n 
            3) ${ingredientesQuesos[2].nombre} - $ ${ingredientesQuesos[2].precio}\n
            4) ${ingredientesQuesos[3].nombre} - $ ${ingredientesQuesos[3].precio}\n           
            `));          
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
        alert("Opcion no valida. Intentemos nuevamente.")
        opcion = parseInt(prompt(`Queso:\n
            1) ${ingredientesQuesos[0].nombre} - $ ${ingredientesQuesos[0].precio}\n 
            2) ${ingredientesQuesos[1].nombre} - $ ${ingredientesQuesos[1].precio}\n 
            3) ${ingredientesQuesos[2].nombre} - $ ${ingredientesQuesos[2].precio}\n
            4) ${ingredientesQuesos[3].nombre} - $ ${ingredientesQuesos[3].precio}\n           
            `));
    }
    switch(opcion){
        case 1:
            ingredienteQueso = ingredientesQuesos[0].nombre;
            precioFinal+= ingredientesQuesos[0].precio;
            break;
        case 2:
            ingredienteQueso = ingredientesQuesos[1].nombre;
            precioFinal+= ingredientesQuesos[1].precio;
            break;
        case 3:
            ingredienteQueso = ingredientesQuesos[2].nombre;
            precioFinal+= ingredientesQuesos[2].precio;
            break; 
        case 4:
            ingredienteQueso = ingredientesQuesos[3].nombre;
            precioFinal+= ingredientesQuesos[3].precio;
            break; 
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt(`Queso:\n
                1) ${ingredientesQuesos[0].nombre} - $ ${ingredientesQuesos[0].precio}\n 
                2) ${ingredientesQuesos[1].nombre} - $ ${ingredientesQuesos[1].precio}\n 
                3) ${ingredientesQuesos[2].nombre} - $ ${ingredientesQuesos[2].precio}\n
                4) ${ingredientesQuesos[3].nombre} - $ ${ingredientesQuesos[3].precio}\n           
                `));
    }    
    return ingredienteQueso;
}

function agregarExtra(){
    
    let opcion = parseInt(prompt(`Extra:\n
            1) ${ingredientesExtras[0].nombre} - $ ${ingredientesExtras[0].precio}\n 
            2) ${ingredientesExtras[1].nombre} - $ ${ingredientesExtras[1].precio}\n 
            3) ${ingredientesExtras[2].nombre} - $ ${ingredientesExtras[2].precio}\n
            4) ${ingredientesExtras[3].nombre} - $ ${ingredientesExtras[3].precio}\n           
            `));          
    while (opcion !== 1 && opcion !== 2 && opcion !== 3){
        alert("Opcion no valida. Intentemos nuevamente.")
        opcion = parseInt(prompt(`Extra:\n
            1) ${ingredientesExtras[0].nombre} - $ ${ingredientesExtras[0].precio}\n 
            2) ${ingredientesExtras[1].nombre} - $ ${ingredientesExtras[1].precio}\n 
            3) ${ingredientesExtras[2].nombre} - $ ${ingredientesExtras[2].precio}\n
            4) ${ingredientesExtras[3].nombre} - $ ${ingredientesExtras[3].precio}\n           
            `));
    }
    switch(opcion){
        case 1:
            ingredienteExtra = ingredientesExtras[0].nombre;
            precioFinal+= ingredientesExtras[0].precio;
            break;
        case 2:
            ingredienteExtra = ingredientesExtras[1].nombre;
            precioFinal+= ingredientesExtras[1].precio;
            break;
        case 3:
            ingredientesExtra = ingredientesExtras[2].nombre;
            precioFinal+= ingredientesExtras[2].precio;
            break; 
        case 4:
            ingredientesExtra = ingredientesExtras[3].nombre;
            precioFinal+= ingredientesExtras[3].precio;
            break; 
        default:
            alert("Opcion no valida. Intentemos nuevamente")
            opcion = parseInt(prompt(`Extra:\n
                1) ${ingredientesExtras[0].nombre} - $ ${ingredientesExtras[0].precio}\n 
                2) ${ingredientesExtras[1].nombre} - $ ${ingredientesExtras[1].precio}\n 
                3) ${ingredientesExtras[2].nombre} - $ ${ingredientesExtras[2].precio}\n
                4) ${ingredientesExtras[3].nombre} - $ ${ingredientesExtras[3].precio}\n           
                `));
    }    
    return ingredienteExtra;
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
//Las funcion recibe el precio sumado ingredientes elegidos y de forma posterior multiplica el valor en funcion del tamaño del producto definido por constantes.
function setPrecio(tamanio){    
    if (tamanio == "Extra Large") {
        precioFinal*=extraLarge;
    }
    else if (tamanio == "Large"){
        precioFinal*=large;
    }
    else{
        precioFinal;
    }
    return precioFinal;
}
///Agregamos al html el detalle de la orden.
function printOrder(){
    for (const burger of hamburguesas){ 
        let index = hamburguesas.indexOf(burger);   
        document.write(`<p>Esta es tu orden:</p>
                        <table>
                            <colgroup>
                                <col>
                                <col>
                                <col>
                            </colgroup>
                            <thead>
                                <tr>
                                    <td style="color: white">Hero Burguer: ${index+1}</td>
                                    <td style="color: white"> Tipo de Pan: ${burger.ingredientePan}</td>
                                    <td style="color: white"> Tipo de Medallón: ${burger.ingredienteCarne}</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td style="color: white">Verdes: ${burger.ingredienteVerde}</td>
                                    <td style="color: white"> Queso: ${burger.ingredienteQueso}</td>
                                    <td style="color: white"> Extras: ${burger.ingredienteExtra}</td>
                                </tr>
                                <tr>
                                    <td style="color: white">Tamaño: ${burger.tamanio}</td>
                                    <td style="color: white"> Precio Final: ${burger.precioFinal}</td>
                                    <td style="color: white"> Número de Orden: ${burger.numOrder}</td>
                                </tr>
                            </tbody>
                        </table>`);        
    }
}
///EJECUCCION///
alert("Bienvenido a HeroBurger: Tu Hamburguesa Heroica");
menuBurger();
///El usuario puede visualizar por consola las hamburguesas creadas en la ejecución actual.
console.log(hamburguesas);
printOrder();





