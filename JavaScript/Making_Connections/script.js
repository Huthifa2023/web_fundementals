var request_1 = document.querySelector("#request-1");
var number_requests = document.querySelector("#number_requests");
var num = 2;
console.log(request_1)
function remove_request_1(){
    num --;
    number_requests.innerText = num;
    request_1.remove();
}

var request_2 = document.querySelector("#request-2")
console.log(request_2)
function remove_request_2(){
    num --;
    number_requests.innerText = num;
    request_2.remove();
}

// ///////////////

var name_user_card=document.querySelector("#my_name")
function change_name() {
    name_user_card.innerText = "Huthifa Alqasim"
}

////////////////////////

var connections_counter = document.querySelector("#connections-counter"), con_counter=310;
function increase_connection(){
    con_counter ++;
    connections_counter.innerText = con_counter;
}