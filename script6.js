var $ = function (id) {
 return document.getElementById(id);
}
var displayName = function () {
    var myFirstName = $("firstname") .value;
    var myLastName = $("lastname") .value;
    var myText = "Hi there, " + myFirstName + " " + myLastName;
    $("mymsg") .innerHTML = myText;
}
window.onload = function () {
    $("mybutton") .onclick = displayName;
}