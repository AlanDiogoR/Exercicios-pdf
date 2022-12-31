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

    if (numbers.length === 3) {
      break;
    }

    numbers.push(Number(number));
  }

  numbers.sort((a, b) => b - a);

  alert(numbers[0]);

}
function averageNumbers() {
  alert('oi');
}
function impresNumbers() {
  alert('oi');
}
function wholeNumbers() {
  alert('oi');
}