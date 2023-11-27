var valores=[true,10,false,"codigo","herramientas",7];

var texto3 = valores[3];
var texto4= valores[4];
if (texto3.length > texto4.length) {
    alert("codigo es mayor que herramientas");
}
else if (texto3.length < texto4.length){
    alert ("herramientas es mayor que codigo");
}

//2
var resultadoTrue = valores[0] && valores[2];
var resultadoFalse = valores[0]  || valores[2];
alert("Resultado true"+resultadoTrue);
alert("Resultado false"+resultadoFalse);

//3
var numero1=valores[1];
var numero2=valores[5];

var suma= parseInt (numero1) + parseInt(numero2);
var resta= parseFloat (numero1 - numero2);
var multipliacion=  parseFloat(numero1 * numero2);
var division=  parseFloat(numero1 / numero2);

alert(suma);
alert(resta);
alert(multipliacion);
alert(division);


