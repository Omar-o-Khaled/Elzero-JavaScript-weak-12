let imgs=document.querySelectorAll("img");

for(let i=0;i<imgs.length;i++){
    imgs[i].alt ? imgs[i].alt="old" : imgs[i].alt="Elzero New";
}