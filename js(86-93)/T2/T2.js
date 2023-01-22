let imgs=document.querySelectorAll("img");

for(let i=0;i<imgs.length;i++){
    imgs[i].setAttribute("src","https://elzero.org/wp-content/themes/elzero/imgs/logo.png");
    imgs[i].setAttribute("alt","Elzero Logo");
    console.log(imgs[i])
}
