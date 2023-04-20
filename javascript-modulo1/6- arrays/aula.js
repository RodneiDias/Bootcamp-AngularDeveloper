/*
'arrays': objetos de alto nível semelhantes a listas.
Para mais detalhes acesse o site https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

*/


const notas = [];

notas.push(8);
notas.push(10);
notas.push(10);

let soma = 0;

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma = soma + nota;
}

const media = soma / notas.length;
console.log(media);

