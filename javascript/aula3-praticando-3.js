/*
Elabore um algoritimo que calcule o que deve ser pago por um produto, considerando o preço normal e a condição de pagamento.

1 - À vista Débito, recebe 10% de dsconto 
2 - À vista Dinheiro ou Pix, recebe 15% desconto 
3 - Em duas vezes, preço normal
4 - Acima de duas vezes, preço + 10% 

*/


let preco =100;
let formaPagamento = 4

if(formaPagamento === 1){
    console.log(preco - (preco * 0.1))
}else if( formaPagamento === 2){
    console.log(preco - (preco * 0.15))  
}else if( formaPagamento === 3){
    console.log(preco)  
}else {
    console.log(preco + (preco * 0.1))  

}