var counter_1=0;
var counter_2=0;
var counter_3=0;

var likes_count_1 = document.querySelector("#box-1-count")
function addlikes_1(){
    counter_1 += 1;
    likes_count_1.innerText= counter_1+" Like(s)"
    return likes_count_1;
}

var likes_count_2 = document.querySelector("#box-2-count")
console.log(likes_count_2)
function addlikes_2(){
    counter_2 += 1;
    likes_count_2.innerText= counter_2+" Like(s)"
    return likes_count_2;
}

var likes_count_3 = document.querySelector("#box-3-count")
console.log(likes_count_3)
function addlikes_3(){
    counter_3 += 1;
    likes_count_3.innerText= counter_3+" Like(s)"
    return likes_count_3;
}

