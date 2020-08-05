let index = 1;

display(index);

function plusDivs(n) {
  display(index += n);
}

function display(n) {
  let id =    document.getElementsByClassName("slides");
  if (n > id.length) {index = 1}
  if (n < 1) {index = id.length} ;
  for (let i = 0; i < id.length; i++) {
    id[i].style.display = "none";
  }
  id[index-1].style.display = "block";
}
