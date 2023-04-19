/*
Faça um programa para calcular o valor gasto de combustivel em uma viagem.
 1- Preço do etanol;
 2- Preço da gasolina;
 3- Tipo de combustivel que esta sendo usado no momento;
 2- Consumo Km do carro;
 3- Distância em Km da viagem;

 Imprima no console o valor que será gasto de combustível para realizar essa viagem.

*/

const precoEtanol = 4.69;
const precoGasolina = 5.79;
let tipoCombustivel = "etanol";
let kmPorLitro = 10;
let distaciaEmKm = 600;

let calculoConsumo = distaciaEmKm / kmPorLitro

if(tipoCombustivel == "etanol"){
    let valorGasto = calculoConsumo * precoEtanol
    console.log(valorGasto.toFixed(2))

}else{
    let valorGasto = calculoConsumo *  precoGasolina
    console.log(valorGasto.toFixed(2))
}


/*
resolvendo com ternario
*/
let gasolina = calculoConsumo *  precoGasolina;
let etanol = calculoConsumo * precoEtanol
let tipo = "gasolina"
let gasto = tipo === "gasolina"  ? gasolina : etanol

console.log("Seu gasto será de R$ " + gasto.toFixed(2))