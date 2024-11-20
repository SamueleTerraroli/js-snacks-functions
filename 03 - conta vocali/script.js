/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const vocals = ['a','e','i','o','u']

// Dichiara la funzione qui.
const getAeiou = (parola, aeiou) => {
    const vocal = [];
    for (let i = 0; i < parola.length; i++) {
        if (aeiou.includes(parola[i])) {
            vocal.push(parola[i]);
        }
    }
    return vocal;
}


// Invoca la funzione qui e stampa il risultato in console

console.log(getAeiou(word, vocals));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)


