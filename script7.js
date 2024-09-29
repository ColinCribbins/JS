var $ =function (id) {
    return document.getElementById(id);
}
var displayCalc = function () {
    var Width = $("width") .value;
    var Length = $("length") .value;
    var WidthINT = parseInt(Width);
    var LengthINT = parseInt(Length);
    var Calc = WidthINT * LengthINT;
    var myText = "area of rectangle = " + Calc;
    $("mymsg") .innerHTML = myText;
}
window.onload = function () {
    $("mybutton").onclick = displayCalc;
}