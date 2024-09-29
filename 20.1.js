var $ = function (id) {
	return document.getElementById(id);
}
var appendText = function ()
{
	var myTown = $("town").value;
	var myCountry = $("country").value;
    var myStreet = $("Street").value;
    var myState = $("Code").value;

	var myLocation = "My Location is " + myStreet + ", " + myTown + " " + myState + ", " + myCountry;
			   
	$("mymsg").innerHTML = myLocation;
}
window.onload = function ()
{
	$("mybutton").onclick = appendText;  //Remember no ()!!
}