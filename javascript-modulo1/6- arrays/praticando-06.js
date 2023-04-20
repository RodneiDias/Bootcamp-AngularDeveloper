/*
Dado uma lista com as notas tiradas pelos alunos. imprima a maior nota.
   Ex de lista de notas = [2, 7, 3, 8, 10, 4]
*/
let notas = [2, 7, 3, 8, 10, 4]

maiorNumero = 0
for (let i = 0; i < notas.length; i++) {

    let element = notas[i];

    if(element > maiorNumero){
        maiorNumero = element;
    }
    
}
console.log(maiorNumero);