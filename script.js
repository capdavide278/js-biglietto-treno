/*Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.
L’output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). */

let costo;
let costo_scontato;
let costo_non_scontato;

//chiede il numero di chilometri
const lunghezza = prompt("Chilometri che servono per arrivare");
console.log(lunghezza);

//chiede l' età del ragazzo
const eta = prompt("quanti anni hai");
console.log(eta);

if (eta < 18) {
    //costo scontato ragazzi
    costo = ((lunghezza * 0.21) * 0.20);
    costo_scontato = costo.toFixed(2);
    console.log("Ecco il costo del biglietto: " + costo_scontato + "€");

} else if (eta > 65){
    //costo scontato adulti
    costo = ((lunghezza * 0.21) * 0.40);
    costo_scontato = costo.toFixed(2);
    console.log("Ecco il costo del biglietto: " + costo_scontato + "€");
}else{
    //costo per i maggiorenni e gli adulti di età inferiore a 65
    costo = (lunghezza * 0.21);
    costo_non_scontato = costo.toFixed(2);
    console.log("Ecco il costo del biglietto: " + costo_non_scontato + "€");
}

