/*AQUI ESTARÃO ALGUNS BREVES RASCUNHOS DOS MEUS ESTUDOS DE nodejs*/
/*
resp.status(200)
Esse status() faz parte do Express. Ele define o código de status HTTP da resposta. Tipo assim:

=> 200 → OK (deu tudo certo)
=> 404 → Não encontrado
=> 500 → Erro interno no servidor

find()
O find() procura um único item dentro de um array que bate com uma condição.

Explicando:
=> Ele vai procurar no array times um objeto onde a propriedade sigla bate com a sigla que o usuário colocou na URL.
=> Assim que ele achar o primeiro que bate, ele para e retorna esse item.

const frutas = ['maçã', 'banana', 'laranja'];
const resultado = frutas.find(fruta => fruta.startsWith('b')); 
// resultado = 'banana'

map()

O map() serve pra transformar os itens de um array em outro array, com as mesmas quantidades de elementos, mas com valores transformados.
const numeros = [1, 2, 3];
const dobrados = numeros.map(n => n * 2);
// dobrados = [2, 4, 6]

filter()
O filter() filtra o array e retorna apenas os elementos que batem com uma condição.

const numeros = [1, 2, 3, 4, 5];
const pares = numeros.filter(n => n % 2 === 0);
// pares = [2, 4]

forEach()

O forEach() é usado pra executar uma função pra cada item do array, mas não retorna nada. Ele é só pra fazer ações (como imprimir no console).

const nomes = ['Ariel', 'Lucas', 'Bia'];
nomes.forEach(nome => console.log(`Oi, ${nome}!`));

*/