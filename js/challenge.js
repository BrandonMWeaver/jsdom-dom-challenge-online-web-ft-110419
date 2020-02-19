const counter = document.getElementById("counter");

function incCounter()
{
  counter.innerText = parseInt(counter.innerText) + 1;
}

setInterval(incCounter, 1000);
