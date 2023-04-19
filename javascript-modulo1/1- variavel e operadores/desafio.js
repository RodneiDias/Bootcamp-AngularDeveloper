/*
Faça um programa para calcular o valor gasto de combustivel em uma viagem.
 1- Preço do combustivél;
 2- Consumo Km do carro;
 3- Distância em Km da viagem;

 Imprima no console o valor que será gasto de combustível para realizar essa viagem.

*/
const precoCombustivel = 5.79;
let kmPorLitro = 10;
let distaciaEmKm = 600;

let calculoConsumo = distaciaEmKm / kmPorLitro
let valorGasto = calculoConsumo * precoCombustivel

console.log(valorGasto.toFixed(2))
