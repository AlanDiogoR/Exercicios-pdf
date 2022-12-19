/*
   Altere o programa anterior permitindo ao usuário informar as populações e as taxas de crescimento iniciais. Valide
a entrada e permita repetir a operação  
*/

function Calc() {
  let populateA = prompt('Informe a população menor A')
  let populateATaxa = prompt('Informe a taxa de crescimento da população A')
  let populateB = prompt('Informe a pouplação maior B')
  let populateBTaxa = prompt('Informe a taxa de crescimento da população B')

  for (let i = 0; populateA < populateB; i++) {
    populateA = (populateA * ) + populateA
    populateB = (populateB * 0.015) + populateB
  }

  if(populateA > populateB) {
    alert(`A população A já passou a B sendo A: ${Math.floor(populateA)} habitantes e B: ${Math.floor(populateB)} aproximadamente`)
  }
}