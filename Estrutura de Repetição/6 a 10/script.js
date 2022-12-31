function numberTo() {
  let numbers = [];
  let div = document.createElement("div");

  let i = 0;
  while (numbers.length < 21) {
    numbers.push(Number(i));
    i++;
  }

  div.textContent = numbers.join(", ");
  div.style.backgroundColor = "#ccc";
  document.body.appendChild(div);

  setTimeout(() => {
    div.style.background = 'purple';
    div.innerHTML = numbers.join("<br>");

    div.addEventListener('click', () => {
      div.style.display = 'none';
    });
  }, "2000");

}
function greaterThan() {
  let numbers = [];

  while (true) {
    let number = prompt('Insira um número');

    if (numbers.length === 4) {
      break;
    }

    numbers.push(Number(number));
  }

  numbers.sort((a, b) => b - a);

  alert(numbers[0]);

}
function averageNumbers() {
  let n1 = Number(prompt('Insira o primeiro número'));
  let n2 = Number(prompt('Insira o segundo número'));
  let n3 = Number(prompt('Insira o terceiro número'));
  let n4 = Number(prompt('Insira o quarto número'));
  let n5 = Number(prompt('Insira o último número'));

  alert(`
    A soma deles é: ${n1 + n2 + n3 + n4 + n5} 
    A a média deles é: ${(n1 + n2 + n3 + n4 + n5)/ 5}
  `);

}
function impresNumbers() {
  let numbers = [];
  let div = document.createElement("div");

  let i = 0;
  while (numbers.length < 25) {
    if (i % 2 != 0) {
      numbers.push(i);
    }
    i++;
  }

  div.textContent = numbers.join(", ");
  div.style.backgroundColor = "#ccc";
  document.body.appendChild(div);

  setTimeout(() => {
    div.style.background = 'purple';
    div.addEventListener('click', () => {
      div.style.display = 'none';
    });
  }, "2000");
}
function wholeNumbers() {
  let n1 = Number(prompt('Informe o primeiro número'));
  let n2 = Number(prompt('Informe o segundo número para eu te mostrar o intervalo deles'));
  let div = document.createElement("div");

  function getInterval(start, end) {
    var interval = [];
    for (var i = start; i <= end; i++) {
      interval.push(i);
    }
    return interval;
  }
  div.textContent = getInterval(n1, n2).join(", ");
  div.style.backgroundColor = "#ccc";
  document.body.appendChild(div);

  setTimeout(() => {
    div.style.background = 'purple';
    div.addEventListener('click', () => {
      div.style.display = 'none';
    });
  }, "2000");
}