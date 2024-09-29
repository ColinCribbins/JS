var $ = function (id) {
    return document.getElementById(id);
}
var displayMessage = function () {
    var today = new Date ();
    var todayyyy = today.getFullYear();
    var todaymm = today.getMonth() + 1;
    var todaydd = today.getDate();
    var todayFormatted = todayyyy + "-" + todaymm + "-" + todaydd;
    var myText = "Today's date is " + todayFormatted;
    $("mymsg") .innerHTML = myText;
}
window.onload = function () {
    $("mybutton") .onclick = displayMessage;
}