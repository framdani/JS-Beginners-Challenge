select = document.querySelector(".myselect");
input = document.querySelector(".myinput");
flip = document.querySelector(".flip");
reset = document.querySelector(".reset");
computer=document.querySelector(".computer");
player=document.querySelector(".player");
select.addEventListener('change', function() {
    if (this.value === 'Heads')     {   
      input.value = "Tails";
    }
  else
    {
      input.value = "Heads";
    }
});
function checkValue()
{
  if(player.innerText == 3)
    
  {player.innerText = "Winner";}
  
  else if(computer.innerText == 3)
  {
      computer.innerText = "Winner";
    }
}
function play()
{
  if (Math.random()<0.5)
    {
      //alert("Heads");
      if(input.value === 'Heads')
        player.innerText = parseInt(player.innerText)+1;
      else
        computer.innerText = parseInt(computer.innerText)+1;
    }
  else
     {
       if(input.value === 'Tails')
        player.innerText = parseInt(player.innerText)+1;
      else
        computer.innerText = parseInt(computer.innerText)+1;
     }
   checkValue();
}
flip.addEventListener("click", function() {
  if(player.innerText == 'Winner' || computer.innerText == 'Winner')
    restart();
      play();
  });
function restart()
{
  player.innerText = 0;
  computer.innerText = 0;
}
reset.addEventListener("click", function() {
      restart();
  });

