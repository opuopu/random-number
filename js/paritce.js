function getpin(){
const random = Math.round(Math.random() * 100000);
const pin = random + "";

if ( pin.length == 5){
    return pin;  
}
else{
   return getpin()
}
}
function generatePin(){
    const pins = getpin()
    const display =document.getElementById("display-pin");
    display.value = pins;
}
document.getElementById("key-pad").addEventListener("click",function(event){
    const values = event.target.innerText
    const display = document.getElementById("typed-numbers");
    if(isNaN(values)){
        if( values === "C"){

        display.value = '';
        }
    }
else{
    const oldvalue = display.value;
    display.value = oldvalue + values; 
}
})
function submit(){
    const pinDisplay = document.getElementById("display-pin").value;
    const valueDisplay = document.getElementById("typed-numbers").value;
    const notify1 = document.getElementById("notify-success");
    const notify2 = document.getElementById("notify-fail");
    if( pinDisplay == valueDisplay){
        notify1.style.display = "block" 
    }
    else{
        notify2.style.display = "block"
        notify1.style.display = "None"
    }
}
