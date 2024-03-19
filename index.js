let input = document.querySelector("#input-box");


let values = document.querySelector("#calculator-buttons");

let string = "";

values.addEventListener("click" , function(e){
    
    if(e.target.innerHTML === "="){
        string = eval(string);
        input.value = string;
    }

    else if(e.target.innerHTML === "CLR"){
         string = "";
         input.value = string;
    }

    else if(e.target.innerHTML === "DEL"){
        string = string.substring(0 , string.length-1);
        input.value = string;

    }
    
    else{
        string += e.target.innerHTML;
        input.value = string;
    }
})

input.addEventListener("focus" , function(){
    input.value = "Cannot use keyboard to enter numbers";
    input.style.fontSize = "20px";
})

input.addEventListener("blur" , function(){
    input.style.fontSize = "60px";
})