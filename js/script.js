document.getElementById('genera').addEventListener("click", function(){
    var valore = document.getElementById('nome').value;
    document.getElementById('utente').innerHTML=valore;
    }
);
document.getElementById('annulla').addEventListener("click", function(){
    document.getElementById('utente').innerHTML="";
    var utente = document.getElementById('utente');
    }
);
