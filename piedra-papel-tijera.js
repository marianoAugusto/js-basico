/* //Ejercicio con IF
var piedra;
var papel;
var tijera;

var juego = function(jugador, compu) {
   if (jugador === piedra && compu === tijera || jugador === papel && compu === piedra || jugador === tijera && compu === papel)
   {console.log("ganador")
    } else if ( compu === piedra && jugador === tijera || compu === papel && jugador === piedra && compu === tijera && jugador === papel)
    {console.log("perdedor")}
    else {console.log ("empate")}
}
*/

// ejercicio con switch

var piedra;
var papel;
var tijera;

var juego = function (jugador, compu){
    switch (true) {
        case (jugador === piedra && compu === tijera || jugador === papel && compu === piedra || jugador === tijera && compu === papel) :
        console.log ("ganador")
        break;
        case (compu === piedra && jugador === tijera || compu === papel && jugador === piedra && compu === tijera && jugador === papel) :
        console.log("perdedor")
        break;
        default: console.log ("empate")

    }

}

juego()