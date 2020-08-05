function display()
{
  let selector = "all";
  let hidden;
  let filter1=document.getElementById("myselect").value;
  if (filter1.includes("men"))
    
  {selector = 'm';
   hidden = 'w';
  }
  else if(filter1.includes("wo"))
  {
    selector = 'w';
    hidden='m';
  }
  let div=document.getElementsByClassName(selector);
  let divH=document.getElementsByClassName(hidden);
  for(i=0;i<divH.length; i++)
    {
      //divH[i].style.visibility = "hidden";
     divH[i].style.display = "none";
    }
  let listText=document.getElementsByClassName(filter1);
 
  let input=document.getElementById("filter");
  let filter2 = input.value.toLowerCase();
  
  for(i=0;i<listText.length;i++)
  {
    value = listText[i].innerHTML.toLowerCase();
    if (!(value.includes(filter2)))
        
      //div[i].style.visibility = "hidden";
      div[i].style.display = "none";
    else
      div[i].style.display = "block";
  }
}
