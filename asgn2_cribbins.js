var $ = function (id) {
    return document.getElementById(id);
}
function displaymsg() {
    var msg = "";
    var isValid = true; 
    var firstName = $("firstname").value; 
    var lastName = $("lastname").value; 
    var numPets = $("numpets").value; 

    if (firstName.length === 0) {
        fnmsg = "Please enter first name";
        $("firstname_error").innerHTML = fnmsg; 
        isValid = false;
    } else {
        $("firstname_error").innerHTML = ""; 
    }

    if (lastName.length === 0) {
        lnmsg = "Please enter last name";
        $("lastname_error").innerHTML = lnmsg;
        isValid = false;
    } else {
        $("lastname_error").innerHTML = "";
    }

    if (numPets.length === 0) {
        msg += "Please enter the number of pets you have";
        $("numpets_error").innerHTML = "Please enter the number of pet you have";
        isValid = false;
    } else {
        var petCount = parseInt(numPets, 10);
        if (isNaN(petCount) || petCount < 0 || petCount > 3) {
            msg += "must be a number";
            $("numpets_error").innerHTML = "must be a number";
        } else {
            $("numpets_error").innerHTML = "";
        }
    }

    if (isValid) {
        $("message").innerHTML = "thanks";
        return;
    }

    var today = new Date();
    var formattedDate = (today.getMonth() + 1) + "-" + today.getDate() + "-" + today.getFullYear();

    var fullName = lastName + ", " + firstName;
    var finalMsg = "Your Name is listed as " + fullName + " and today's date is " + formattedDate + ".";

    for (var counter = 1; counter <= petCount; counter++) {
        var petName = $("pet" + counter).value;
        if (petName.length > 0) {
            finalMsg += " Your Pet #" + counter + " is named " + petName + ".";
        }
    }
    $("message").innerHTML = finalMsg;
}
window.onload = function () {
    $("mybutton").onclick = displaymsg;
}