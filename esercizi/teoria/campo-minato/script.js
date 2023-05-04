import { CCampo } from "./CCampo.js";

//crea campo
const campo = new CCampo(10, 10);

$(document).ready(function(){
    
    //inizializzazione del campo (inserimento bombe)
    campo.inizializzaBombe();

    //inizializzazione del campo (inserimento numeri)
    campo.inizializzaNumeri();

    $('.cella').mousedown(function(evento){

        let rigaCella = $(this).attr("data-riga");
        let colonnaCella = $(this).attr("data-colonna");
        
        //tasto sinistro
        if(evento.which == 1){
            campo.controllaClick(rigaCella, colonnaCella, 1);
        }
        //tasto destro
        else{
            campo.controllaClick(rigaCella, colonnaCella, 3);
        }

    });

});