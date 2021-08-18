function getpin(){
//  pin create korte hobee
const pin = Math.round(Math.random() * 10000)
// pin cheekup korte hobe mane 4 digit er na hole eita abar kaj korbe
const getpin = pin + "";

if( getpin.length === 4){

    return pin;
}
else{
    return getpin();
}
}

// caaling function on click handler.....and input value on input section..uporer function tai holo pin create korar jonno....seta arekta function e likha ar eikhane likha same kotha..
function generatePin(){
const calling = getpin()
    const  input = document.getElementById("display-pin");
input.value = calling;
}
   

// calculator input
//  1 parents a bubble diye id diye click korte hobe.
//  event.target.innertext diye e sob child er point access kora jabe.
//  er por input id ke niye tar ager value er sathe new value jog korte hobe..
// not a number cheek korte hobe 

document.getElementById("key-pad").addEventListener("click",function(event){
    const values = event.target.innerText
    const input = document.getElementById("typed-numbers");

    // cheecking not a number
    if(isNaN(values)){
        if(values === "C"){

            input.value = "";
        }
      
    }
    else{

        
        const oldValue = input.value;
        const newValue = oldValue + values;
        
        input.value = newValue;
    }


})


// pin matching kono ekta input er kaj jodi age kore rakhi pore seta niye kaj korte hole ar sei function ta lagbe na.tar id ke niye value ba innertext hisebe dorlei tar value ta peye jabo and pore seta niye kaj korte parbo

function verifypin(){


 const getpin = document.getElementById("display-pin").value;
 const  typePin = document.getElementById("typed-numbers").value;
 const fail = document.getElementById("notify-fail");
 const right = document.getElementById("notify-success");

 if(getpin == typePin){

right.style.display = "block"
   
fail.style.display = "None"
   
 }
else{

    right.style.display = "None"
   
    fail.style.display = "block"
   
}

}


// step 1 button a click korle ekta pin ready hobe
//  step 2 setake input er bitor show korate hobe

// step 3 calculator er bubble system e er paren ke id diye click korle er bitorer sob click hobe.setake event.target.innertext dile dekha jabe.
// step 4 point vade bakigulake not a number cheek korte hobe.
// step 5 c ke click korle input clear hoye jabe.
// step 6 validation korte hole ager input gula id ta niye aslei hobe.bcs segular kaj sesh kora hoyece..