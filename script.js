// A lista produtos deve conter os seguintes produtos: Computador, Telefone, Mouse, Teclado 
let listaDeProdutos = ["Computador", "Telefone", "Mouse", "Teclado"]

// Exiba essa lista no console quando abrir o index.html.
console.log('Meus Produtos: ' + listaDeProdutos)

// Mostre no console quantos produtos tem nessa lista.
console.log(listaDeProdutos.length + " produtos")

// Retire o produto Mouse da lista e retorne no console a lista com os produtos restantes.
listaDeProdutos.splice(2, 1)
console.log('Meus Produtos: ' + listaDeProdutos)

//Faça uma busca na sua lista por algum produto, por exemplo procure por Computador e caso exista esse produto na sua lista exiba um console falando que este produto existe e mostre tambem o nome deste produto caso não exista mostre uma mensagem avisando que o produto não foi encontrado.
const buscaProduto = listaDeProdutos.find(item => item === 'Telefone');

if (buscaProduto) {
    console.log(`O Produto ${buscaProduto} esta cadastrado em nosso sistema`)
} else {
    console.log(`O Produto não esta existe em nosso sistema`)
}

// Remova o segundo item da sua lista.
listaDeProdutos.splice(1, 1)
console.log('Meus Produtos: ' + listaDeProdutos)

//Crie uma lista de apenas numeros 1,3,5,7,0,9​
let listaDeNumerosAleatorios = [1, 3, 5, 7, 0, 9]
console.log(listaDeNumerosAleatorios)

// Ordene essa lista do menor para o maior.
listaDeNumerosAleatorios.sort((a,b) => a -b)
console.log(listaDeNumerosAleatorios)

// Retire o primeiro numero desta lista.
listaDeNumerosAleatorios.shift()
console.log(listaDeNumerosAleatorios)

// Inverta toda ordem da sua lista por exemplo: [1,3,5,7,9] para [9,7,5,3,1]
listaDeNumerosAleatorios.reverse()
console.log(listaDeNumerosAleatorios)

// Crie uma string que contenha o dia de hoje, exemplo: 
// let hoje = '20/07/2019';
// Dia de hoje
let hoje = '17/07/2019';
const [dia, mes, ano] = hoje.split('/');

console.log('Dia: ' + dia);
console.log('Mes: ' + mes);
console.log('Ano: ' + ano);

