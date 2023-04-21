/*
Dado uma lista com as médias tiradas pelos alunos. 
Imprima todas as médias que ficaram de recuperação (média < 5).
Ex de lista = [2, 7, 3, 8, 10, 4]
* */
let listMedias = [2, 7, 3, 8, 10, 4];

for (let i = 0; i < listMedias.length; i++) {
    const element = listMedias[i];
    if(element < 5){
        console.log(element)
    }       
}