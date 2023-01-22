let nums=document.querySelector('[type="number"');
let text=document.querySelector('[type="text"');
let selection=document.querySelector("select");
let submit=document.querySelector('[type="submit"]');

let container=document.createElement("div");
container.className="elmentsAdd"

submit.onclick=function(submit){
    // empty container
    container.innerHTML="";
    submit.preventDefault();
    if(nums.value && text.value){
        for(let i=1;i<=nums.value;i++){
            let dors=document.createElement(`${selection.value}`);
            dors.className="box";
            dors.title="Element";
            dors.id=`id-${i}`
            dors.innerHTML=text.value;
            container.appendChild(dors)
        }
        document.body.appendChild(container)
        nums.value="";
        text.value="";
    }
}