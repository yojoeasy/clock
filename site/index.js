setInterval(()=>{
  var IndiaClock = document.querySelector(".IndiaClock").innerHTML= Date();
},1000);
setInterval(()=>{
  var RussiaClock = document.querySelector(".RussiaClock").innerHTML= new Date().toLocaleString("en-US", {timeZone: "Europe/Moscow"});
},1000);
setInterval(()=>{
  var USAClock = document.querySelector(".USAClock").innerHTML= new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
},1000);
var show = document.getElementsByClassName("show");
for ( var i = 0; i < show.length-1; i++) {
  show[i].style.display = "none";
}
function start(evt, cityName) {
    var i, clock, show;
     var show = document.getElementsByClassName("show");
    for (i = 0; i < show.length; i++) {
      show[i].style.display = "none";
    }
    // clock = document.getElementsByClassName("clock");
    // for (i = 0; i < clock.length; i++) {
    //   clock[i].className = clock[i].className.replace(" active", "");
    // }
    document.getElementById(cityName).style.display = "block";
    // evt.currentTarget.className += "active";
  }