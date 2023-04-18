/*
Operadores comparação
 
 = Atribuição
 == Igual
 === Igual e do mesmo tipo
 != Diferente
 ------------------------------------
 Operador lógico

 >= Maior
 <=Menor
 || ou
 && e
 ! negação
-----------------------------------------
Ternário

condição ? valor1 : valor2
Se condicao for verdadeira, o operador terá o valor de valor1. Caso contrário, terá o valor de valor2. Você pode utilizar o operador condicional em qualquer lugar onde utilizaria um operador padrão.
Exemplo 

var status = (idade >= 18) ? "adulto" : "menor de idade";

*/
/*
Par ou impar
se o resto da divisão for = 0 o numero é par
se o resto da divisão for = 1 o numero é impar

* */
let numero = 25

if((numero % 2) === 0){
    console.log("numero é par")
}else {
    console.log("numero é impar")
}

/*
resolvendo com ternário
*/
    let parImpar = (numero % 2) === 0 ? "par" : "impar"
    console.log(parImpar)