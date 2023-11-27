var peso = prompt("Escriba su peso en kg");
var opcion = prompt("Elegir opcion 1 o 2");
var peso_tierra = 9.807;
var peso_marte= 3.71;
var peso_jupiter=24.79;
resultado ="";

 

switch (opcion) {
    case "1":
       (resultado= peso * peso_marte / peso_tierra);

        alert("su peso es: " +resultado)
        break;

    case "2":
      (resultado= peso * peso_jupiter / peso_tierra);

        alert("su peso es: " +resultado)
        break;

    default:
        alert("no existe esa opcion");
        break;
}
/*
if ( opcion== 1 ) {
    (resultado= peso * peso_marte / peso_tierra);

    alert("su peso es: " +resultado)

    } else if (opcion== 2) {
        (resultado= peso * peso_jupiter / peso_tierra);

        alert("su peso es: " +resultado)

     }else {
       alert("no existe esa opcion");

    }

*/