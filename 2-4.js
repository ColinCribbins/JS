var $ = function (id) {
    return document.getElementById(id);
}
var checkGuesses = function () {
    for (var i=1; i<=3; i++)
        var guess = $("guess" + i).value;
    if(guess === "7") {
        $("mymsg").innerHTML = "nice job"
    } else {
        $("mymsg").innerHTML = "nope thats not it"
    }
}
window.onload = function () {
    $("mybutton") .onclick = displaymsg;
}