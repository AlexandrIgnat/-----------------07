document.addEventListener('DOMContentLoaded', () =>{
  let inputNumber = document.getElementById('id1');
  let display = document.querySelector('.display');
  let btn = document.querySelector('.starter');

  let timerReduce = () => {
    display.textContent--;
    if (display.textContent == 0) {
      clearInterval(inter)
    }
  }

  let foo = function() {
    display.textContent = inputNumber.value;
    inter = setInterval(timerReduce, 1000);
  }

  btn.addEventListener('click', foo);
});
