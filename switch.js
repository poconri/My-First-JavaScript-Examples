//valida casos no tanto las variables es mas facil
//switch(true) {}
var numero = 1;
switch (numero) {
    case 1:
        console.log("Soy Uno!");
        break;
    case 10:
            console.log("Soy un 10!");
            break;
    case 100:
            console.log("Soy un 100!");
            break;
    default:
        console.log("No soy nada");
}

function Play(gente,PC) {
    switch(gente){
        case "piedra":
            switch(pc){
                case "tijeras":
                    console.log("Ganaste");
                    break;
                case "papel":
                    console.log("perdiste"); 
                    break;
                default:
                    console.log("empate"); 
                    break;
            }