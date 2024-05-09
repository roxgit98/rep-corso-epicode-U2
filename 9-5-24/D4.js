/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/
function area(l1, l2) {
  equazione = l1 * l2;
  return equazione;
}
const risultato = area(5, 5);
console.log(risultato);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

function crazySum(n1, n2) {
  if (n1 !== n2) {
    somma = n1 + n2;
    return somma;
  } else if (n1 === n2) {
    sommaPerTre = (n1 + n2) * 3;
    return sommaPerTre;
  }
}
const risultato2 = crazySum(3, 2);
console.log(risultato2);

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

function crazyDiff(n1) {
  if (Math.abs(n1 - 19) < 19) {
    absDiff = Math.abs(n1 - 19);
    return absDiff;
  } else if (Math.abs(n1 - 19) > 19) {
    absDiff2 = Math.abs((n1 - 19) * 3);
    return absDiff2;
  }
}
const risultato3 = crazyDiff(50);
console.log(risultato3);

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

function boundary(n) {
  if (n >= 20 && n <= 100) {
    return true;
  } else if (n === 400) {
    return "n è uguale a 400";
  }
}
const risultato4 = boundary(100);
console.log(risultato4);

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/
function epify(stringa) {
  if (stringa.startsWith("EPICODE")) {
    return stringa;
  } else {
    return "EPICODE " + stringa;
  }
}
const frase = epify("paolo");
console.log(frase);

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

function check3and7(n1) {
  if (n1 % 3 === 0 || n1 % 7 === 0) {
    return true;
  } else {
    return false;
  }
}
const risultato5 = check3and7(7);
console.log(risultato5);

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

function reverseString(stringa) {
  const string = stringa.split("");
  const reverse = string.reverse();
  return string;
}
const frase2 = reverseString("EPICODE");
console.log(frase2);

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

function cutString(stringa) {
  const taglio = stringa.slice(1, -1);
  return taglio;
}
const frase3 = cutString("giovanna");
console.log(frase3);

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
