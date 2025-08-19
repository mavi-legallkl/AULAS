/// comentario de uma linha só
/* comentario de varias linhas
    comentario de varias linhas
    comentario de varias linhas
*/
// console.log é como se fosse o "escreva" do portugol
console.log("UMA MENSAGEM TOP AQUI") // ta comentado

// Cria uma janela de alerta no navegador
// alert ("Uma mensagem de alerta top aqui") 

var nome = "Vinicius" // var cria variável na tela

console.log(nome)
console.log("o nome é:" + nome)

var texto = 'Vinicius "Vieira"' // cadeia = string - Variável do tipo de guardar texto
console.log ( typeof ( texto ) )


// Variável do tipo number - guarda números - inteiro = number, int
var numero = 1698
console.log ( typeof ( numero ) )

var quebrado = 16.98 
// Variável do tipo number - guarda números - real = number, float


 // Variável do tipo boolean - guarda verdadeiro ou falso
var VouF = true
console.log ( typeof ( VouF ) )



var nulo = null
console.log ( typeof ( nulo ) )



var indefinido = undefined
console.log ( typeof ( indefinido ) )

// operadores aritméticos
// + - * / % 
var a = 10
var b = 5
var soma = a + b
console.log("A soma é: " + soma)
var subtracao = a - b
console.log("A subtração é: " + subtracao)
var multiplicacao = a * b
console.log("A multiplicação é: " + multiplicacao)
var divisao = a / b
console.log("A divisão é: " + divisao)
var indefinido = a % b
console.log("A indefinido é: " + indefinido)

//operadores logicos
// && (e) || (ou) ! (não)

var verdade = true 
var falso = false 

// comparaçao com && (e)
console.log(verdade && falso) 

// comparaçao com || (ou)
console.log(verdade || falso)

// comparaçao com ! (não)
console.log(verdade && falso) 

//operadores relacionais
// > < >= <= == === != !==

var v1 = 10
var v2 = 5
var v3 = "10"

console.log(v1 > v2) // maior que
console.log(v1 >= v2) // maior ou igual que
console.log(v1 == v2) // igual que
console.log(v1 === v2) // estritamente igual que
console.log(v1 < v2) // menor que

console.log(v1 == v3) // compara o valor
console.log(v1 === v3) // compara o valor e o tipo
console.log(v1 != v3) // diferente que


var numero = prompt("Digite um numero:") // cria uma janela de prompt para o usuário digitar algo
var numero2 = prompt("Digite outro numero:") // cria uma janela de prompt para o usuário digitar outro algo

var resultado = Number(numero) + Number(numero2) // concatena os valores digitados, pois ambos são strings
console.log("O resultado é:", resultado )
alert("O resultado é: " + resultado) // exibe o resultado em uma janela de alerta