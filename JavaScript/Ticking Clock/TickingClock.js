function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

var secondpointer = document.getElementById("seconds")
setInterval( function() {
    var time = getSecondsSinceStartOfDay();
    console.log(time);
    secondpointer.style.transform = "rotate(20deg)";
}, 1000);