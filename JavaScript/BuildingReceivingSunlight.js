var arr= [40,20, 2, 8, 4, 11, 13];

var new_arr=[];
let holding = arr[0];
new_arr.push(holding);
for(let i=0; i<arr.length; i++){
    if(arr[i+1] > holding){
        new_arr.push(arr[i+1]);
        holding = arr[i+1];
    }
}
console.log(holding);
console.log(new_arr);
console.log("number of building seeing the sun is  "+ new_arr.length);