/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = 'A'

// Dichiara la funzione qui.
const allowedNames = (listNames, allowedLetter) =>{
    let allowedNamesArray = [];
    for(let i=0; i<listNames.length; i++){
        if(listNames[i].includes(allowedLetter)){
            allowedNamesArray.push(listNames[i]);
        }

    }
    return allowedNamesArray;
}


 
// Invoca la funzione qui e stampa il risultato in console
console.log(allowedNames(names,letter));



//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]