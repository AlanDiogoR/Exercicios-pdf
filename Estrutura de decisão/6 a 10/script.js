function biggest() {
  let n1 = Number(prompt('Informe o primeiro número'));
  let n2 = Number(prompt('Informe o segundo número'));
  let n3 = Number(prompt('Informe o terceiro número'));

  if ((n1 > n2) && (n1 > n3)) {
    alert(`O maior número dentre os informados foi o número ${n1}`);
  } else if ((n2 > n1) && (n2 > n3)) {
    alert(`O maior número dentre os informados foi o número ${n2}`);
  } else if ((n3 > n1) && (n3 > n2)) {
    alert(`O maior número dentre os informados foi o número ${n3}`);
  } else {
    alert('Informe um valor valido');
  }

}

function biggestSmallest() {
  let n1 = Number(prompt('Informe o primeiro número'));
  let n2 = Number(prompt('Informe o segundo número'));
  let n3 = Number(prompt('Informe o terceiro número'));

  if ((n1 > n2) && (n1 > n3)) {
    alert(`O maior número dentre os informados foi o número ${n1}`);
  } else if ((n2 > n1) && (n2 > n3)) {
    alert(`O maior número dentre os informados foi o número ${n2}`);
  } else if ((n3 > n1) && (n3 > n2)) {
    alert(`O maior número dentre os informados foi o número ${n3}`);
  } else {
    alert('Informe um valor valido');
  }

  if ((n1 < n2) && (n1 < n3)) {
    alert(`O menor número dentre os informados foi o número ${n1}`);
  } else if ((n2 < n1) && (n2 < n3)) {
    alert(`O  menor número dentre os informados foi o número ${n2}`);
  } else if ((n3 < n1) && (n3 < n2)) {
    alert(`O menor número dentre os informados foi o número ${n3}`);
  } else {
    alert('Informe um valor valido');
  }
}

function cheapest() {
  let p1 = Number(prompt('Informe o primeiro preço'));
  let p2 = Number(prompt('Informe o segundo preço'));
  let p3 = Number(prompt('Informe o terceiro preço'));

  if ((p1 < p2) && (p1 < p3)) {
    alert(`O menor preço dentre os informados foi o número ${p1}`);
  } else if ((p2 < p1) && (p2 < p3)) {
    alert(`O  menor preço dentre os informados foi o número ${p2}`);
  } else if ((p3 < p1) && (p3 < p2)) {
    alert(`O menor preço dentre os informados foi o número ${p3}`);
  } else {
    alert('Informe um valor valido');
  }  
}

function orderDesc() {
  let numbers = [];

  while (true) {
    let number = prompt('Insira um número');

    if (numbers.length === 3) {
      break;
    }

    numbers.push(Number(number));
  }

  numbers.sort((a, b) => b - a);

  alert(numbers);


}

function studyInMorning() {
  let shift = prompt('M: para matutino, V: para Vespetino, e N: para noturno');
  let shiftUp = shift.toUpperCase();

  switch(shiftUp) {
    case 'M':
      alert('Bom dia! ☀');
      break;
    case 'V':
      alert('Boa tarde! 🌤');
      break;  
    case 'N':
      alert('Boa noite! 🌝');
      break;
    default: 
      alert('Valor inválido, infome um valor válido!♦');
  }

}