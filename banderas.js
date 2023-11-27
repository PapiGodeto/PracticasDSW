let banderas = ["argelia.svg", "chipre.svg", "costademarfil.svg", "egipto.svg", "marruecos.svg","somalia.svg","sudafrica.svg","sanmarino.svg","portugal.svg","Liechtenstein.svg"];
let correctaBanderas = [1,0,2,1,2,0,3,3,0,1];


let opcionesBanderas = [];

opcionesBanderas.push(["bandera", "Argelia", "bandera","bandera"]);
opcionesBanderas.push(["Chipre", "bandera", "bandera ","bandera"]);
opcionesBanderas.push(["bandera", "bandera", "Costa de Marfil","bandera"]);
opcionesBanderas.push(["bandera", "Egipto", "bandera","bandera"]);
opcionesBanderas.push(["bandera", "bandera", "Marruecos ","bandera"]);
opcionesBanderas.push(["Somalia", "bandera ", "bandera ","bandera"]);
opcionesBanderas.push(["bandera", " bandera", "bandera ","Sudafrica"]);
opcionesBanderas.push(["bandera", " bandera", "bandera ","San Marino"]);
opcionesBanderas.push(["Portugal", "bandera", "bandera ","bandera"]);
opcionesBanderas.push(["bandera", "Liechtenstein", "bandera ","bandera"]);

let posActualBanderas = 0;
let cantidadAcertadasBanderas = 0;

function comenzarJuegoBanderas(){
    posActualBanderas = 0;
    cantidadAcertadasBanderas = 0;
    document.getElementById("pantalla-inicialBanderas").style.display = "none";
    document.getElementById("pantalla-juegoBanderas").style.display = "block";
    cargarbandera();

}

function cargarbandera(){
    if(banderas.length <= posActualBanderas){
        terminarJuegoBanderas();
    }
    else{
        limpiarOpcionesBanderas();

        document.getElementById("imgbandera").src = "imgbanderas/" + banderas[posActualBanderas];
        document.getElementById("n0").innerHTML = opcionesBanderas[posActualBanderas][0];
        document.getElementById("n1").innerHTML = opcionesBanderas[posActualBanderas][1];
        document.getElementById("n2").innerHTML = opcionesBanderas[posActualBanderas][2];
        document.getElementById("n3").innerHTML = opcionesBanderas[posActualBanderas][3];
    }
}

function limpiarOpcionesBanderas(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("n3").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
    document.getElementById("l3").className = "letra";
}

function comprobarRespuestaBanderas(opElegida){
    if(opElegida==correctaBanderas[posActualBanderas]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadasBanderas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correctaBanderas[posActualBanderas]).className = "nombre nombreAcertada";
        document.getElementById("l" + correctaBanderas[posActualBanderas]).className = "letra letraAcertada";
    }
    posActualBanderas++;
    setTimeout(cargarbandera,1000);
}
function terminarJuegoBanderas(){
    document.getElementById("pantalla-juegoBanderas").style.display = "none";
    document.getElementById("pantalla-finalBanderas").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadasBanderas;
    document.getElementById("numIncorrectas").innerHTML = banderas.length - cantidadAcertadasBanderas;
}

function volverAlInicioBanderas(){
    document.getElementById("pantalla-finalBanderas").style.display = "none";
    document.getElementById("pantalla-inicialBanderas").style.display = "block";
    document.getElementById("pantalla-juegoBanderas").style.display = "none";
}

let maravillas = ["chichen-itza.svg", "coliseo.svg", "cristo-redentor.svg", "machu-picchu.svg", "muralla-china.svg","petra.svg","taj-mahal.svg"];
let correcta = [1,0,2,1,2,0,1];


let opciones = [];

opciones.push(["Machu Picchu", "Chichen Itza", "Coliseo"]);
opciones.push(["Coliseo", "Petra", "Cristo Redentor"]);
opciones.push(["Muralla China", "Taj Mahal", "Cristo Redentor"]);
opciones.push(["Petra", "Machu Picchu", "Taj Mahal"]);
opciones.push(["Chichen Itza", "Petra", "Muralla China"]);
opciones.push(["Petra", "Machu Pichu", "Chichen Itza"]);
opciones.push(["Coliseo", "Taj Mahal", "Cristo Redentor"]);

let posActual = 0;
let cantidadAcertadas = 0;

function comenzarJuego(){
    posActual = 0;
    cantidadAcertadas = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarMaravilla();

}

function cargarMaravilla(){
    if(maravillas.length <= posActual){
        terminarJuego();
    }
    else{
        limpiarOpciones();

        document.getElementById("imgMaravilla").src = "img/" + maravillas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";
    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    setTimeout(cargarMaravilla,1000);
}
function terminarJuego(){
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = maravillas.length - cantidadAcertadas;
}

function volverAlInicio(){
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}