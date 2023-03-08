// INPUT
// Chiedere all'utente il numero di km che vuole percorrere e l'età e verificare che siano numeri
// in caso contrario assegno alla variabile messaggio il corretto avviso all'utente e lo mostro
// nella pagina
const kmPercorsi = parseInt(prompt("Inserisci i km che vuoi percorrere"));
const etaPasseggero = parseInt(prompt("Quanti anni hai?"));
let messaggio = "";

if (isNaN(kmPercorsi)){
    messaggio = "Devi inserire i km espressi numericamente, per favore ricarica la pagina";
    document.getElementById("errore").innerHTML = messaggio;
} else if (isNaN(etaPasseggero)) {
    messaggio = "Devi inserire l'età espressa numericamente, per favore ricarica la pagina";
    document.getElementById("errore").innerHTML = messaggio;
}

console.log(kmPercorsi, etaPasseggero);

// LOGICA
// Definisco il prezzo del biglietto che sarà 0.21 * km
const prezzoStandard = (kmPercorsi * 0.21);
let scontoMinori;
let scontoOver;
let prezzoFinale;
console.log(prezzoStandard);

// Se l'età dell'utente è < 18 
//     calcolo il 20% di sconto e lo sottraggo al prezzo standard del biglietto
if (!isNaN(kmPercorsi) && !isNaN(etaPasseggero)){
    if (etaPasseggero < 18) {
        scontoMinori = (prezzoStandard * 0.2);
        prezzoFinale = (prezzoStandard - scontoMinori);
    // ALTRIMENTI SE l'età è compresa tra 18 e 65
    //     prezzo del biglietto standard
    } else if (etaPasseggero >= 18 && etaPasseggero <= 65){
        prezzoFinale = prezzoStandard;
        // ALTRIMENTI
    //     calcolo il 40% di sconto e lo sottraggi al prezzo standard del biglietto
    } else {
        scontoOver = (prezzoStandard * 0.4);
        prezzoFinale = (prezzoStandard - scontoOver);
    }
    console.log(prezzoFinale.toFixed(2) + " €");
    
    // OUTPUT
    // Converto il prezzo finale in un numero con max due decimali e lo stampo
    document.getElementById("prezzo").innerHTML = prezzoFinale.toFixed(2) + " €";
}
