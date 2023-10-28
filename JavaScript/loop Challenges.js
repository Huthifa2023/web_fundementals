//Stack1: coures3: chapter1: assingment2//

//1-print odds 1-20//
for(var i=1; i<=20; i++) {
    if(i%2 != 0){
        console.log(i)
    }
}


//2-deceasing multiplies of 3 100-0
for(var i=100; i>=0; i--) {
    if(i%3 == 0) {
        console.log(i)
    }
}


//3-print the sequence (4,2.5,1,-0.5,-2,3.5)
for(var i=4; i>=-3.5; i-=1.5) {
    console.log(i)
}


//4-Sigma sum from 1-100 print the result and the process 
var sum=0;
var procedure="";
for(var i=1; i<=100; i++) {
    if(i != 100) {
        procedure += i+"+";
    }
    else
    procedure += i
    sum += i;
}
console.log(procedure)
console.log("result is " + sum)


//factorial from 1-12 print the result and the process
var factorial=1;
var procedure_1="";
for(var i=1; i<=12; i++) {
    if(i != 12) {
        procedure += i+"*";
    }
    else {
    procedure_1 += i
    }
    factorial *= i;
}
console.log(procedure_1)
console.log("result is " + factorial)