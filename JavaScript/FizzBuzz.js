// from 1 to 100, multiple of 3 fizz, multiple of 5 Buzz, mutiple of both 
//FizzBuzz


for(var i=1; i<=100; i++) {
    if(i%3 == 0 && i%5 == 0) {
        console.log("FizzBuzz")
    }
    else if(i%3 == 0){
        console.log("Fizz")
    }
    else if(i%5 ==0) {
        console.log("Buzz")
    }
    else{
        console.log(i)
    }
}