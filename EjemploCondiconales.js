var num=100;

if (num <10 ) {
    console.log("El numero es menor a 10");

    } else if (num>10) {
        alert(console.log("El numero es mayor a 10"));

    }else {
        console.log("El numero es igual a 10");

    }

    var estacion = prompt("Escribe una estacion en minisculas.");

    switch (estacion) {
        case "invierno":
            alert("Todo es frio");
            break;

        case "primavera":
          alert("se colorea el mundo.");
            break;

        case "verano":
            alert("las noches se hacen largas.");
              break;

         case "otono":
             alert("donde habia color y ya no queda nada ");
            break;

        default:
            alert("Eso no es una estacion");
            break;
    }

