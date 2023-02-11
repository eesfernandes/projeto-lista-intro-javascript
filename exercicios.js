// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  const altura = prompt(`Digite a altura: `)
  const largura = prompt(`Digite a largura: `)
  const area = altura * largura
  console.log(area)

}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Digite o ano atual: `))
  const anoDeNascimento = Number(prompt(`Digite seu ano de nascimento: `))
  const idade = anoAtual - anoDeNascimento
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
  return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt(`Digite seu nome: `)
  const idade = Number(prompt(`Digite sua idade: `))
  const email = prompt(`Digite seu e-mail: `)
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const corFavorita1 = prompt(`Digite sua 1° cor favorita: `)
  const corFavorita2 = prompt(`Digite sua 2° cor favorita: `)
  const corFavorita3 = prompt(`Digite sua 3° cor favorita: `)
  console.log([corFavorita1, corFavorita2, corFavorita3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  return string.toUpperCase()

}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
  return custo / valorIngresso

}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
  return string1.length === string2.length

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
  return array[0]

}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
  return array[array.length - 1]

}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const primeiro = array[0]
const ultimo = array[array.length - 1]
array[0] = ultimo
array[array.length - 1] = primeiro
return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
  
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  const anoAtual = Number(prompt(`Digite o ano atual (ex 0000): `))
  const anoNascimento = Number(prompt(`Digite seu ano de nascimento (ex 0000): `))
  const anoEmissaoRg = Number(prompt(`Digite o ano de emissão do RG (ex 0000): `))
  const idade = anoAtual - anoNascimento
  const tempoEmissao = anoAtual - anoEmissaoRg
  if(idade <= 20){
    console.log(tempoEmissao >= 5)
  } else if(idade <= 50){
    console.log(tempoEmissao >= 10)
  } else{
    console.log(tempoEmissao >= 15)
  }
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
  const anoBiSexto = ano % 400 === 0 || ano % 4 === 0 && ano % 100 != 0
  return anoBiSexto
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui
  const maiorDe18 = prompt(`Você tem mais de 18 anos? (Sim ou Não): `)
  const possuiEnsMedio = prompt(`Você possui ensino médio completo? (Sim ou Não): `)
  const dispDeHorario = prompt(`Possui disponibilidade de horário? (Sim ou Não): `)
  const resp = maiorDe18.toLowerCase() === 'sim' && possuiEnsMedio.toLowerCase() === 'sim' && dispDeHorario.toLowerCase() === 'sim'
  console.log(resp)
  
}