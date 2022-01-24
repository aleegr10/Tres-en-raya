const importarScript = (nombre) => {
    var s = document.createElement("script");
    s.src = nombre;
    document.querySelector("head").appendChild(s);
}

const jugar = () => {
    importarScript("jugar.js");
}

const cargaTabla = () => {
    var table = "<table>";
    var cont = 1;
    for(i = 1; i <= 3; i++){
        table += "<tr>";
        for(j = 1; j <= 3; j++){
            table += "<td><button id='"+cont+"' class='juego' onclick='comprobar(this)'></button></td>"
            cont++;
        }
        table += "</tr>";
        table += "<br><br>";
    }
    $("#juego").html(table);
    $("#juego").append("<button id='reset' onclick='reset()'>Volver a jugar</button>");
}

const reset = () => {
    jugador = 1;
    conta = 0;
    $("#fin").html("");
    cargaTabla();
}

var jugador = 1;
var conta = 0;

const comprobar = (boton) => {
    if(jugador == 1){
        $("#"+boton.id).html("x");
        $("#"+boton.id).prop('disabled', true);
        conta += 1;
        jugador = 2;
    }
    else{
        if(jugador == 2){
            $("#"+boton.id).html("o");
            $("#"+boton.id).prop('disabled', true);
            conta += 1;
            jugador = 1;
        }
    }

    if(ganaJ1()){
        $("#fin").html("<h2>GANA JUGADOR 1</h2>");

        for(i = 1; i<=9; i++){
            $("#"+i).prop('disabled', true);
        }
    }else{
        if(ganaJ2()){
            $("#fin").html("<h2>GANA JUGADOR 2</h2>");
            for(i = 1; i<=9; i++){
                $("#"+i).prop('disabled', true);
            }
        }
        else{
            if(conta == 9){
               $("#fin").html("<h2>EMPATE</h2>");
            }
        }
    }
}


const ganaJ1 = () =>{
    if((document.getElementById("1").innerHTML == "x" && document.getElementById("2").innerHTML == "x" &&
    document.getElementById("3").innerHTML == "x") || (document.getElementById("1").innerHTML == "x" &&
    document.getElementById("5").innerHTML == "x" && document.getElementById("9").innerHTML == "x") ||
    (document.getElementById("1").innerHTML == "x" && document.getElementById("4").innerHTML == "x" &&
    document.getElementById("7").innerHTML == "x") || (document.getElementById("2").innerHTML == "x" &&
    document.getElementById("5").innerHTML == "x" && document.getElementById("8").innerHTML == "x") ||
    (document.getElementById("3").innerHTML == "x" && document.getElementById("6").innerHTML == "x" &&
    document.getElementById("9").innerHTML == "x") || (document.getElementById("4").innerHTML == "x" &&
    document.getElementById("5").innerHTML == "x" && document.getElementById("6").innerHTML == "x") ||
    (document.getElementById("7").innerHTML == "x" && document.getElementById("8").innerHTML == "x" &&
    document.getElementById("9").innerHTML == "x") || (document.getElementById("3").innerHTML == "x" &&
    document.getElementById("5").innerHTML == "x" && document.getElementById("7").innerHTML == "x")){
        return true;
    }
    else{
        return false;
    }
}

const ganaJ2 = () =>{
    if((document.getElementById("1").innerHTML == "o" && document.getElementById("2").innerHTML == "o" &&
    document.getElementById("3").innerHTML == "o") || (document.getElementById("1").innerHTML == "o" &&
    document.getElementById("5").innerHTML == "o" && document.getElementById("9").innerHTML == "o") ||
    (document.getElementById("1").innerHTML == "o" && document.getElementById("4").innerHTML == "o" &&
    document.getElementById("7").innerHTML == "o") || (document.getElementById("2").innerHTML == "o" &&
    document.getElementById("5").innerHTML == "o" && document.getElementById("8").innerHTML == "o") ||
    (document.getElementById("3").innerHTML == "o" && document.getElementById("6").innerHTML == "o" &&
    document.getElementById("9").innerHTML == "o") || (document.getElementById("4").innerHTML == "o" &&
    document.getElementById("5").innerHTML == "o" && document.getElementById("6").innerHTML == "o") ||
    (document.getElementById("7").innerHTML == "o" && document.getElementById("8").innerHTML == "o" &&
    document.getElementById("9").innerHTML == "o") || (document.getElementById("3").innerHTML == "o" &&
    document.getElementById("5").innerHTML == "o" && document.getElementById("7").innerHTML == "o")){
        return true;
    }
    else{
        return false;
    }
}