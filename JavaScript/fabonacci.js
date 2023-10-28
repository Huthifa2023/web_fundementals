function fibonacciSeries(num) { 
    var a = 0, b = 1, test;
    if (num == 0 || num == 1){
        return num;
    } 
    for (let i = 0; i < num; i++) {  
    test = a + b; 
    b = a; 
    a = test; 
    } 
    return test;
}

console.log(fibonacciSeries(6))


// 0 1 1 2 3 5 8 
// 0 1 2 3 4 5 6 