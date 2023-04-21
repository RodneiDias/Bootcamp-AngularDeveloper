/*
 Faça um programa que dado uma lista de nomes imprima os 
 nomes que começem com a letra "V"?
* */
let listNomes = ['rodnei','valeria','monica','veronica'];

function retornaNomes(nome){
    if (nome.charAt(0) == "v") 
    return nome;
}
var resultado = listNomes.filter(retornaNomes);
console.log(resultado);





