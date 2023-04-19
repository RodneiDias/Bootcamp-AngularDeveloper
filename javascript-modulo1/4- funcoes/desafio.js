function aplicarDesconto(valor, desconto){
    return valor - (valor * (desconto / 100) )
}

function aplicarJurus(valor, juros){
    return valor + (valor * (juros / 100) )
}

let preco = 100;
let formaPagamento = 2;

if(formaPagamento === 1){
    console.log(aplicarDesconto(preco, 10))
}else if( formaPagamento === 2){
    console.log(aplicarDesconto(preco, 15))  
}else if( formaPagamento === 3){
    console.log(preco)  
}else {
    console.log(aplicarJurus(preco, 10)) 
}
    
