var $ = function (id) {
 return document.getElementById(id);
}
var displayYears = function () {
    var myFirstName = $("firstname") .value;
    var myAge = parseInt ($("age").value);
    var Hours = parseInt ($("hours").value);
    var Years = Math.round (myAge * (Hours/24));
    var myText = "Hi " + myFirstName + ". You have slept " + Years + " years of your life away." ;
    $("mymsg") .innerHTML = myText;
}
window.onload = function () {
    $("mybutton") .onclick = displayYears;
}