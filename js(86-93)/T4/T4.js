let one=document.querySelector(".one");
let two=document.querySelector(".two");

one.title=`${two.title}`
two.title=`${one.innerHTML}`

one.innerHTML=`${two.innerHTML}`
two.innerHTML=`${two.title} ${document.querySelectorAll("div").length}`

two.title=two.title.toLocaleLowerCase()

