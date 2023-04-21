/*
Faça um programa que preencha uma lista com todos os números 
pares contidos no intervalo de 10 a 50;
* */

let numerosPares = [];
let cont =10 ;

    while (cont<50) {        
        cont = cont + 2;
        numerosPares.push(cont)
    }
    console.log(numerosPares)