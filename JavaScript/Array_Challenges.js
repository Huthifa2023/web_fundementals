//--------------Always Hungry---------------------------------------------------------
// function alwaysHungry(arr) {
//     if(!arr.includes('food')){
//         console.log("I'm hungry")
//     }
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] == "food"){
//             console.log('Yummy');
//         }
//     }
// }
// alwaysHungry([3.14, "food", "pie", true, "food"]);
// // this should console log "yummy", "yummy"
// alwaysHungry([4, 1, 5, 7, 2]);
// // this should console log "I'm hungry"


//--------------High Pass Filter---------------------------------------------------------
// function highPass(arr, cutoff) {
//     var filteredArr = [];
//     for(var i=0; i<arr.length; i++){
//         if(arr[i] > cutoff){
//             filteredArr.push(arr[i]);
//         }
//     }
//     return filteredArr;
// }
// var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
// console.log(result); // we expect back [6, 8, 10, 9]


//----------------Better Than Average-------------------------------------------------------
// function betterThanAverage(arr) {
//     var sum = 0;
//     for(var i=0; i<arr.length; i++){
//         sum += arr[i];
//     }
//     var avg = sum/arr.length;
//     var count = 0
//     for(var i=0; i<arr.length; i++){
//         if(arr[i]>avg){
//             count++;
//         }
//     }
//     return count;
// }
// var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
// console.log(result); // we expect back 4


//---------------Array Reverse--------------------------------------------------------
// function reverse(arr) {
//         var new_arr=[];
//         while (arr.length){
//             new_arr.push(arr.pop());
//         }
//     arr = new_arr;
//     return arr;
// }
// var result = reverse(["a", "b", "c", "d", "e"]);
// console.log(result); // we expect back ["e", "d", "c", "b", "a"]


//--------------Fabonacci Array---------------------------------------------------------
function fibonacciArray(n) {
    var fibArr = [0, 1];
    for(let i=0; i<n-2; i++){
        fibArr.push(fibArr[i]+fibArr[i+1]);
    }
    return fibArr;
}

var result = fibonacciArray(20);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
