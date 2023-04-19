/**
 Crie uma classe para representar carros. 
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilômetro rodado.
Crie um método que dado a quantidade de quilómetros e o preço do combustível nos dê o valor 
gasto em reais para realizar este percurso.
 
 */

class Carro{
    marca;
    cor;
    consumoKm;

    constructor(marca, cor, consumoKm){
        this.marca = marca;
        this.cor = cor;
        this.consumoKm = consumoKm; 
    }
    gastoPercurso (distancia, prCombustivel){
        return distancia * this.consumoKm * prCombustivel;
    }
}

const hb20 = new Carro('hyundai', 'preto', 1/12);
console.log(`O valor gasto no percuso será de R$${hb20.gastoPercurso(120, 5.79).toFixed(2)}`)