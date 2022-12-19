/*
Supondo que a população de um país A seja da ordem de 80000 habitantes com uma taxa anual de crescimento
de 3% e que a população de B seja 200000 habitantes com uma taxa de crescimento de 1.5%. Faça um programa
que calcule e escreva o número de anos necessários para que a população do país A ultrapasse ou iguale a
população do país B, mantidas as taxas de crescimento.
 */

function populate() {
  let populateA = 80000
  let populateB = 200000

  for (let i = 0; populateA < populateB; i++) {
    populateA = (populateA * 0.03) + populateA
    populateB = (populateB * 0.015) + populateB
  }

  if(populateA > populateB) {
    alert(`A população A já passou a B sendo A: ${Math.floor(populateA)} habitantes e B: ${Math.floor(populateB)} aproximadamente`)
  }
}