for(var i=1; i<= 7; i++) {
    console.log("hola");

if(i==4) { 
    console.log("soy el 4to");
}else if (i==7) {
    console.log("Acabamos de saludar")
}
}

var meses=["Enero","Febrero","Marzo","Abril"
,"Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre"];

for (var index in meses) {
        console.log(meses[index]);
}

meses.forEach(function (mes) {
    console.log(mes);
});

for(var i = 0; i< meses.length;i++) {
    var mes =meses[i];
    console.log(mes);
}