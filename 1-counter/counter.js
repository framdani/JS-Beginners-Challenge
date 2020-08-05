let screen = document.querySelector(".number-row");
let previousNumber = document.querySelector(".number-row");
let resultat;
function handleSymbol(value)
{
  if (value.includes("-"))
     { 
     resultat = parseInt(previousNumber.innerText)-1;
     }
  else if (value.includes("+"))
    {
      resultat = parseInt(previousNumber.innerText)+1;
    }
  rerender();
}
function rerender()
{
  screen.innerText = resultat;
}

function init() {
 document.querySelector(".button-row").addEventListener("click", function(event) {
      handleSymbol(event.target.innerText);
  });
}
init();
