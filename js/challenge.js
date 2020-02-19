const counter = document.getElementById("counter");

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const pauseButton = document.getElementById("pause");

let interval = setInterval(incCounter, 1000);
let intervalPaused = false;

function incCounter()
{
  counter.innerText = parseInt(counter.innerText) + 1;
}

plusButton.addEventListener("click", function()
{
  counter.innerText = parseInt(counter.innerText) + 1;
});

minusButton.addEventListener("click", function()
{
  counter.innerText = parseInt(counter.innerText) - 1;
});

pauseButton.addEventListener("click", function()
{
  if (intervalPaused)
  {
    interval = setInterval(incCounter, 1000);
  }
  else
  {
    clearInterval(interval);
  }
  intervalPaused = !intervalPaused;
});
