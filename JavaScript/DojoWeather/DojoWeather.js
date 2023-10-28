var cookibox=document.querySelector(".cookie-box")
function remove_cookie() {
    cookibox.remove();
}

///////////////////////////

// var fahernhiet=[];
var all_numbers_nodes=document.querySelectorAll(".deg-convert")
// console.log(all_numbers_nodes)
//obj
// var test = all_numbers_nodes[0];
// var done = test.innerText
// console.log(done);
// (all_numbers_nodes[i]*(9/5)+32)
var current_choice=document.querySelector("#change-temp-select")
// console.log(current_choice.value);

function change_temp_meter(){
    if(current_choice.value == '°C'){
        let fahernhiet=[];
        for(let i=0; i<all_numbers_nodes.length; i++) {
            fahernhiet.push(all_numbers_nodes[i].innerText)
            fahernhiet[i]=Math.round((fahernhiet[i]-32)*(5/9));
            all_numbers_nodes[i].innerText=fahernhiet[i];
        }
    }
        else if (current_choice.value == '°F'){
            let Celsiuos=[];
            for(let i=0; i<all_numbers_nodes.length; i++) {
            Celsiuos.push(all_numbers_nodes[i].innerText)
            Celsiuos[i]=Math.round(Celsiuos[i]*(9/5)+32);
            all_numbers_nodes[i].innerText=Celsiuos[i];
            }
        }
    }


//needs another funsiton with 
// console.log(fahernhiet);
