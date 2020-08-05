element = document.querySelector(".select");
icone=document.querySelector(".icon");
mesure1 = document.querySelector(".mesure-1");
mesure2 = document.querySelector(".mesure-2");
let c = 'w';
element.addEventListener('change', function() {
    if (this.value === 'height')     {   icone.style.backgroundImage="url('https://drive.google.com/uc?id=17ejXgdywzpRHqAZnRnMM2Nj9sGD5rDu7')";
        mesure1.innerText="cm";
        mesure2.innerText="ft";
        c = 'h';
                                     }
  else if (this.value === 'weight') 
    {
    icone.style.backgroundImage="url('https://drive.google.com/uc?id=1w6DrVDW52cg7KAHmfxDeUbNDto1lzQCS')";
      mesure1.innerText="Pound";
        mesure2.innerText="Kg";
      c='w';
    }
});
input1=document.querySelector(".input-1");
input2=document.querySelector(".input-2");
document.querySelector(".convert").addEventListener("click", function() {
      convert();
  });

function convert()
{
  if (c === 'w')
      convertx(2.2);
  else
     convertx(30.48);
}
function convertx(num)
{
  if (input1.value=== "" && input2.value !=="")
         input1.value = parseInt(input2.value) * num;
  else 
         input2.value = parseInt(input1.value) / num;
}

