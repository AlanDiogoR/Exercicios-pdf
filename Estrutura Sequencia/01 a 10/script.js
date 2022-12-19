function es1() {
  alert('AlÔ mundo')
}

function es2() {
  const num = prompt('Informe um numero')
  alert(`Numero ${num} foi informado`)
}
function es3() {
  const num1 = prompt('Informe o numero 1')
  const num2 = prompt('Informe o numero 2')
  alert(`${num1} + ${num2} é igual ${num1 + num2}`)
  
}
function es4() {
  let nota1 = prompt('Informe a primeira nota')
  let nota2 = prompt('Informe a segunda nota')
  let nota3 = prompt('Informe a penultima nota')
  let nota4 = prompt('Informe a ultima nota')
  let soma = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3) + parseInt(nota4)) / 4 

  alert(`a média desses quatros notas é ${soma}`)
  
}
function es5() {
  let metros = prompt('Informe os centímetros')
  let centímetros = parseInt(metros) / 100
  alert(`a conversão de metros para centímetros é: ${centímetros}`)
}
function es6() {
  let raio = prompt('Digite o raio do círculo: ')
  let area = 3.14 * (parseInt(raio) * parseInt(raio))
  alert(`a area do circulo é: ${area}`)
}
function es7() {
  let quadrado = prompt('Informe um lado do quadrado')
  let areaQuadrado = parseInt(quadrado) * parseInt(quadrado)
  alert(`a area do quadrado é: ${areaQuadrado} e o dobro dela é ${areaQuadrado * areaQuadrado}`)
  
}
function es8() {
  let salario = prompt('Informe quanto você ganha por hora')
  let horasTrabalhadas = prompt('Informe quantas horas vc trabalha por dia')
  let horasTrabalhadasMes = parseInt(horasTrabalhadas * 30)

  alert(`O total do seu salario referio ao mês é de: ${parseInt(salario) * horasTrabalhadasMes}`)
}
function es9() {
  let farenheit = prompt('Informe quantos grau Farenheit está')
  let celsius = (((parseInt(farenheit) - 32) * 5 )/ 9)
  alert(`A conversão de ${farenheit} graus farenheit para graus celcius deu: ${celsius}`)
}

function es10() {
  let gcelsius = prompt('Informe quantos graus celsius está')
  let gFarenheit = ((parseInt(gcelsius) * 9) / 5) + 32
  alert(`A conversão de ${gcelsius} graus celcius para graus farenheit deu: ${celsius}`)
}


/**
 *  Faça um Programa que mostre a mensagem "Alo mundo" na tela.
2. Faça um Programa que peça um número e então mostre a mensagem O número informado foi [número].
3. Faça um Programa que peça dois números e imprima a soma.
4. Faça um Programa que peça as 4 notas bimestrais e mostre a média.
5. Faça um Programa que converta metros para centímetros.
6. Faça um Programa que peça o raio de um círculo, calcule e mostre sua área.
7. Faça um Programa que calcule a área de um quadrado, em seguida mostre o dobro desta área para o usuário.
8. Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. Calcule e
mostre o total do seu salário no referido mês.
9. Faça um Programa que peça a temperatura em graus Farenheit, transforme e mostre a temperatura em graus
Celsius.
C = (5 * (F­32) / 9).
10. Faça um Programa que peça a temperatura em graus Celsius, transforme e mostre em graus Farenheit.

 * 
 */