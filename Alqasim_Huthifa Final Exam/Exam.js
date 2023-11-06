// change main when mouse over it
function change_image(element){
    element.src = "images/assets/succulents-2.jpg";
}

// tetuen to default main image when mouse out
function restore_image(element){
    element.src = "images/assets/succulents-1.jpg";
}

// remove cookie box one user accepted the terms
var cookie_box = document.querySelector(".cookie_box");
function remove_cookie(){
    cookie_box.remove();
}