/*
Crie um programa que seja capaz de percorrer uma lista
de números e imprima cada número Par encontrado.
* */
let numero = [10,25,63,98,55,5,4,10,200,220]

for (let i = 0; i < numero.length; i++) {
    const element = numero[i];
    if(element % 2=== 0){
        console.log(element)
    }
}