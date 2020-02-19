const counter = document.getElementById("counter");
const minusButton = document.
function incCounter()
{
  counter.innerText = parseInt(counter.innerText) + 1;
}

setInterval(incCounter, 1000);
