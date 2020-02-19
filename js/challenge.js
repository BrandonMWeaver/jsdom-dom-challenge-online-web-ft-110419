const counter = document.getElementById("counter");
const addButton = document.getElementById("add");
const minusButton = document.getElementById("minus");

setInterval(incCounter, 1000);

function incCounter()
{
  counter.innerText = parseInt(counter.innerText) + 1;
}

minusButton.addEventListener("click", function(e)
{
  counter.innerText = parseInt(counter.innerText) - 1;
});
