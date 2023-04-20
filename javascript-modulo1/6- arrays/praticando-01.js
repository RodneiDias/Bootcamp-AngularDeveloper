/*
Crie um programa que dado um número imprima a sua tabuada.
 */

let numero = 1;

for (let i = 1; i <= 10; i++) {
    
    for (let i = 1; i <= 10; i++) {
        console.log(`${numero}x${i}= ${numero*i} `);    
    }
    numero++
    console.log('-----------------------------------')
}