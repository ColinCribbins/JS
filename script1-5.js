var $ = function (id) {
    return document.getElementById(id);
}
var addClass = function () {
    $("dazzle") .setAttribute ("class", "razzle");
}
window.onload = function () {
    $("dazzleButton").onclick = addClass;
}