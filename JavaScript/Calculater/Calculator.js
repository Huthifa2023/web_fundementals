
let display_screen=document.querySelector("#display");

let first_number=""; second_number="", operator="";

////// Clear ALL
function clr(element){
    display_screen.innerText = "0";
    first_number=""; Second_number="", operator="";
}

/////inputs numbers
function press(input_num,element){

    first_number += input_num;
    display_screen.innerText = first_number;
}

///// operator
function  setOP(op,element){
    display_screen.innerText += op;
    operator += op;
    second_number = first_number;
    first_number = '';
}

////////////////calc

function calculate(element){
    let num1= parseFloat(second_number), num2=parseFloat(first_number);
    let result=0;
    if(operator == '+'){
        result = num1+num2;
        display_screen.innerText = result;
    }
    else if(operator == '-'){
        result = num1-num2;
        display_screen.innerText = result;
    }
    else if(operator == '/'){
        result = num1/num2;
        display_screen.innerText = result;
    }
    else if(operator == '*'){
        result = num1*num2;
        display_screen.innerText = result;
    }
    first_number=result; Second_number="", operator="";
}


