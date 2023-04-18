/*
Faça um algoritimo que dado as 3 notas de um aluno calcule e imprima sua classificação

Media = (nota1 + nota2 + nota 3) / 3;

Classificação: 
- Menor que 5, reprovado;
- Entre 5 e 7, recuperação;
- Maior que 7, Passou Miseravel

Imprima no console o valor que será gasto de combustível para realizar essa viagem.

*/
let nota1 =7;
let nota2 = 4;
let nota3 = 4;

media = ((nota1 + nota2 + nota3)/3).toFixed(2)

if(media <= 5){
    console.log(`Sua media foi ${media} Você está REPROVADO`)

}else if(media > 5 && media <= 7){
    console.log(`Sua media foi ${media} Você está de Recuperação`)
}else{
    console.log(`Sua media foi ${media} Você foi APROVADO MISERAVEL`)
}

