const counter = document.getElementById("counter");

const plusButton = document.getElementById("plus");
const minusButton = document.getElementById("minus");
const likeButton = document.getElementById("heart");
const pauseButton = document.getElementById("pause");
const submitButton = document.getElementById("submit");

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
    plusButton.disabled = false;
    minusButton.disabled = false;
    likeButton.disabled = false;
    pauseButton.innerText = "pause";
  }
  else
  {
    clearInterval(interval);
    plusButton.disabled = true;
    minusButton.disabled = true;
    likeButton.disabled = true;
    pauseButton.innerText = "resume";
  }
  intervalPaused = !intervalPaused;
});

submitButton.addEventListener("click", function(event)
{
  event.preventDefault();
  const p = document.createElement("p");
  p.innerText = document.getElementById("comment-input").value;
  document.body.append(p);
  document.getElementById("comment-input").value = '';
});

