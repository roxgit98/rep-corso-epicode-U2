/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

const x = 5
const y = 10
if(x > y) {
  console.log("5 è maggiore di 10")
} else {
console.log("10 è maggiore di 5")
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

const z = 4
if (z === 5){
  console.log("equal")
} else {
  console.log("not equal")

}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

const a = 500
const risultato = (a % 5)
if (risultato === 0){
  console.log("è divisibile per 5")
} else if (risultato === 5 ){
  console.log ("è divisibile per 5")
} else{
  console.log("non è divisibile per 5")
}


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

const b = 4
const c = 4
if (b === 8 || c === 8){
  console.log("è uguale a 8")
} else if (b + c === 8 || c + b === 8){
  console.log("la somma è uguale a 8")
} else if (b - c === 8 || c - b === 8){
  console.log("la differenza è uguale a 8")
}


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

const totalShoppingCart = 40
if (totalShoppingCart > 50){
  console.log("Hai diritto alla spedizione gratuita, il tuo totale è " + totalShoppingCart)
}
 else {
  console.log("Non hai diritto alla spedizione gratuita, il tuo totale è " + totalShoppingCart + " + 10 euro di spedizione")
}

/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

const totalShoppingCart2 = 70
const blackFriday = (totalShoppingCart2 * 20) / 100
const prezzoFinale = totalShoppingCart2 - blackFriday
if (prezzoFinale > 50){
  console.log("Hai diritto alla spedizione gratuita, il tuo totale, col 20% di sconto è " + prezzoFinale )
}
 else {
  console.log("Non hai diritto alla spedizione gratuita, il tuo totale col 20% di sconto è " + prezzoFinale + " + 10 euro di spedizione")
}


/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

const num1 = 10
const num2 = 30
const num3 = 20
if(num1 >= num2){
  if(num3>=num1){
    console.log(num3, num1, num2)
  } else if(num3 >= num2) {
console.log(num1, num3, num2)
  } else {
    
  } console.log(num1, num2, num3)
  
} else {
  if (num3>=num1){
    console.log(num2, num3,num1)
  } else {
    console.log(num2, num1, num3)
  }
}


/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

if(typeof 1 === "number"){
  console.log("numero")
}else{
  console.log(null)
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

const q = 10
if (q % 2 === 0){
  console.log("il numero è pari")
} else{
  console.log("il numero è dispari")
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.*/
  let val = 4
  if (val < 5) {
      console.log("Meno di 5");
    } else if (val < 10) {
      console.log("Meno di 10");
    } else {
      console.log("Uguale a 10 o maggiore");
    }


/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
  city: "Toronto"
} 



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

delete me.lastName
console.log(me)

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

  delete me.skills[2]
console.log(me)

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
array.pop()
array.push(100)
console.log(array)
