element.addEventListener("click", myFunction);
element.addEventListener("mouseover", myFunction);

function myFunction() {
  alert("Hello World!");
}


element.removeEventListener("mouseover", myFunction);