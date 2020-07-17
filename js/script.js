
// Attiva bottone "GENERA" che estrapola i dati inseriti dall'utente
//e calcola il costo del biglietto.
document.getElementById('genera').addEventListener("click", function(){
    var nomePasseggero = document.getElementById('name').value;
    var lunghezzaTragitto = document.getElementById('km').value;
    var scontistica = document.getElementById('eta').value;
    var tariffaViaggio = calcoloPrezzo(lunghezzaTragitto, scontistica);
    var numeroCarrozza = randomNumber (1,14);
    var numeroTicket = randomNumber (90000,100000);
    document.getElementById('passeggero').innerHTML=nomePasseggero;
    document.getElementById('offerta').innerHTML=scontistica;
    document.getElementById('carrozza').innerHTML=numeroCarrozza;
    document.getElementById('numero-ticket').innerHTML=numeroTicket;
    document.getElementById('prezzo').innerHTML=tariffaViaggio;
    document.getElementById('ticket').className = 'show';
    }
);

// Attiva bottone "ANNULLA" che cancella i dati del biglietto.
document.getElementById('annulla').addEventListener("click", function(){
    document.getElementById('ticket').className = 'hidden';
    document.getElementById('passeggero').innerHTML="";
    document.getElementById('offerta').innerHTML="";
    document.getElementById('carrozza').innerHTML="";
    document.getElementById('numero-ticket').innerHTML="";
    document.getElementById('prezzo').innerHTML="";
    var nomePasseggero = document.getElementById('name');
    var lunghezzaTragitto = document.getElementById('km');
    var scontistica = document.getElementById('offerta');
    var numeroCarrozza = document.getElementById('carrozza');
    var numeroTicket = document.getElementById('numero-ticket');
    var tariffaViaggio = document.getElementById('prezzo');
    }
);


// ** FUNZIONI ** //

// Funzione che calcola il prezzo del biglietto
function calcoloPrezzo (kmViaggio, scontistica){
    // Dichiarazione variabili
    var prezzo = 0.21;
    var costoBiglietto = kmViaggio * prezzo;
    // Condizione
    if (scontistica == "Sconto minorenne") {
        costoBiglietto *= 0.8;
    } else if (scontistica == "Sconto Silver") {
        costoBiglietto *= 0.6;
    }
    return costoBiglietto.toFixed(2);
}

// Funzione che estrae un numero random in un intervallo min - max
function randomNumber (min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
