function imprimir(){
    var cal1 = parseInt(document.getElementById("cal1").value);
    var cal2 = parseInt(document.getElementById("cal2").value);
    var cal3 = parseInt(document.getElementById("cal3").value);
    var cal4 = parseInt(document.getElementById("cal4").value);
    var cal5 = parseInt(document.getElementById("cal5").value);
    var cal6 = parseInt(document.getElementById("cal6").value);
    var cal7 = parseInt(document.getElementById("cal7").value);
    var cal8 = parseInt(document.getElementById("cal8").value);

    var promedio= (cal1+cal2+cal3+cal4+cal5+cal6+cal7+cal8)/8;

    alert("En 'Base de datos' has sacado: " + cal1);
    alert("En 'Matematicas' has sacado: " + cal2);
    alert("En 'Linguística' has sacado: " + cal3);
    alert("En 'Redes' has sacado: " + cal4);
    alert("En 'Conectividad' has sacado: " + cal5);
    alert("En 'Programacion' has sacado: " + cal6);
    alert("En 'Algebra' has sacado: " + cal7);
    alert("En 'Emprendedores' has sacado: " + cal8);

    if (promedio > 85) {
        alert("Tu promedio es: " + promedio +" Estas exento de ordinario.");
    } else {
        alert("Tu promedio es: " + promedio +" Debes presentar examen ordinario.");
    }


}