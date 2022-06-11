const idade = 13;

//if (idade >= 5 && idade <= 7){
//    console.log("Infantil A")
//} else if (idade >= 8 && idade <= 11){
//    console.log("Infantil B")
//} else if (idade >= 12 && idade <= 13){
//    console.log ("Juvenil A")
//} else if (idade >= 14 && idade <= 17){
//    console.log ("Juvenil B")
//} else if (idade >= 18){
//    console.log ("Adulto")
//} else if (idade < 5){
//    console.log ("Você ainda não tem idade para competir :(") 
//}

switch (idade){
    case 5:
    case 6:
    case 7:
        console.log ("Infantil A");
        break;
    case 8:
    case 9:
    case 10:
    case 11:
        console.log ("Infantil B");
        break;
    case 12:
    case 13:
        console.log ("Juvenil A")
        break;
    case 14:
        console.log ("Juvenil B")
        break;
    default:
        console.log ("Você não pode competir");
        break;
}
 