var $ = function(id) {
    return document.getElementById(id)
}
var BeatlesArray;

var displayMsg = function (event) {
    var allNames = "";
    for (item in BeatlesArray){
        // Item number
        itemNumber = parseInt(item) + 1

        if (item == BeatlesArray.length - 1){
            // Don't write comma
            allNames += itemNumber + ". " + BeatlesArray[item.toString()];
        } else {
            
            allNames += itemNumber + ". " + BeatlesArray[item.toString()] + ", ";
        }    
    }
    $("list").innerHTML = allNames;
    
}
function handleClick(event){
    // Reset all borders
    $("john").border = "0px";
    $("paul").border = "0px";
    $("george").border = "0px";
    $("ringo").border = "0px";
    // Set specific border
    event.target.border = "4px";
    event.target.style.color = "yellow";

    BeatlesArray.push(event.target.id);

}

window.onload = function () {
    BeatlesArray = new Array();
    
    $("john").onclick = handleClick;
    $("paul").onclick = handleClick;
    $("george").onclick = handleClick;
    $("ringo").onclick = handleClick;

    $("showlist").onclick = displayMsg;
}

