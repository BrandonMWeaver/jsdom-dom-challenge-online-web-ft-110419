const counter = document.getElementById("counter");
const minusButton = document.getElementById("minus");

setInterval(incCounter, 1000);

function incCounter()
{
  counter.innerText = parseInt(counter.innerText) + 1;
}

minusButton.addEventListener("click", function(e)
{
  
});
