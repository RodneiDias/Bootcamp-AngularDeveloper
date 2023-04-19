/*
IMC com funções
*/

function calcularImc(peso, altura){
    return (peso / Math.pow(altura, 2)).toFixed(2);

}

function classificarImc(imc){
    if (imc < 18.5) {  
        return 'Você está abaixo do peso';
    }else if (imc >= 18.5 && imc < 25){
        return 'Você está com peso normal';
    }else if (imc >= 25 && imc < 30){
        return 'Você está acima do peso';
    }else if (imc >= 30 && imc < 40){
        return 'Você está Obeso';
    }else {
        return 'Você está com Obesidade morbida';
    }
}  

/*
Função imediatamente invocada, cria e se executa.
Estou usando uma função anônima dentro
*/

(()=>{
    let peso = 70;
    let altura = 1.71

    const imc = (calcularImc(peso,altura));
    console.log(classificarImc(imc))
 }    
)();





