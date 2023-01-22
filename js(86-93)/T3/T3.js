let inputField=document.querySelector('[name="dollar"')
let convert=document.querySelector(".result")

inputField.oninput=function change(){
    convert.innerHTML=`{${inputField.value}} USD Dollar = {${(inputField.value*15.6).toFixed(2)}} Egyptian Pound`
}

