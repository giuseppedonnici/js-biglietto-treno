// INPUT
// Chiedere all'utente il numero di km che vuole percorrere e l'età e verificare che siano numeri
const kmPercorsi = parseInt(prompt("Inserisci i km che vuoi percorrere"));
const etaPasseggero = parseInt(prompt("Quanti anni hai?"));
let message = "";

if (isNaN(kmPercorsi)){
    message = "Devi inserire i km espressi numericamente";
} else if (isNaN(etaPasseggero)) {
    message = "Devi inserire l'età espressa numericamente";
}

console.log(message);


// LOGICA
// Definisco il prezzo del biglietto che sarà 0.21 * km

// Se l'età dell'utente è < 18 
//     calcolo il 20% di sconto e lo sottraggo al prezzo del biglietto
    
// ALTRIMENTI SE l'età è compresa tra 18 e 65
//     prezzo del biglietto standard

// ALTRIMENTI
//     calcolo il 40% di sconto e lo sottraggi al prezzo del biglietto


// OUTPUT
// Converto il prezzo finale in un numero con max due decimali e lo stampo