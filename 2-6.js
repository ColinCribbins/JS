var $ = function (id){
    return document.getElementById(id);
}
if (first == '' || second == '' || third == '') {
    $("mymsg").innerHTML = "Please enter a number"
}

var processGuesses = function () {
    var guesses = "";
    
    for (cntr = 1; cntr <= 3; cntr++) {
        var guessid = "guess" + cntr;
        var guessnum = $(guessid).value;

        guesses += guessnum + "<br>"
    }
    $("mymsg").innerHTML = guesses;
}
window.onload = function () {
    $(mymsg).onclick = processGuesses;
}

