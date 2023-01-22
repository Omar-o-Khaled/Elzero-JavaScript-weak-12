let userInput=document.querySelector('[name="phone"]');
let ageInput=document.querySelector('[name="age"]');
let btn=document.querySelector('[type="submit"]');




btn.onclick=function(ele){
    // 1
/*
    if((userInput.value==="" || userInput.value.length > 10) || ageInput.value === ""){
        ele.preventDefault()
        console.error("prevent")
    }
*/
// 2
    if((userInput.value !== ""  &&  userInput.value.length <= 10) && ageInput.value !== ""){
        console.log("sent")
    }else{
        ele.preventDefault()
        console.error("can't sent")
    }

}

