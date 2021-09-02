// para usar un if necesito lo siguiente
//if
//()entre el parentesis va lo que estoy cuestionando
//entre {} agrego que va ser lo que pase si es verdadero
//else y {} para que me diga que va ser si no se cumple mi condicional
//else if () {} sirve para agregar mas condicionales
var edad = 18;

if (edad === 18) {
    console.log ("puedes votar, sera tu 1ra votacion");
} else if (edad > 18) {
    console.log ("Puedes votar de nuevo");
}else {
    console.log("aun no puedes votar");
}
//operador ternario es el if y else en la misma linea y es condition

condition ? true:false //se escribe todo en la misma linea

var numero = 1;
var resultado = numero === 1 ? "Sí soy un uno" :"no, no soy uno";

//entiendo que en la "condition" agrego la 
//variable + 



var uno = "Piedra"
var dos ="Tijeras"
var tres = "Papel"
var compu = function pc (){
    var computadora = Math.random();
if (computadora <=0.33) {
    eleccionPC = uno;  
    console.log(eleccionPC);
} else if (computadora <=0.66) {
    eleccionPC = dos;    
    console.log(eleccionPC);  
} else if (computadora <=0.99) {
    eleccionPC = tres;
    console.log(eleccionPC);
}else{
        eleccionPC = "Me rindo,Ganaste";
        console.log(eleccionPC); 

}
}
function resultado (user,compu) {
    if (user == uno && compu == dos){
    console.log("Ganaste! eligio Tijeras");

} else if (user == dos && compu == tres){
    console.log("Ganaste! eligio Papel");
}

else if (user == tres && compu == piedra){
    console.log("Ganaste! eligio Piedra");
}

else if (user == compu){
    console.log("Empate");
}

else if (compu =="Me rindo,Ganaste"){
    console.log("La compu se rindio");
}

else{
    console.log("No elegiste algo valido");
}
}