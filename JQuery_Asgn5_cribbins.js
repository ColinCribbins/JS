$(document).ready(function () {
    let vacationType = "";
    let errormsg = $("#question span").css("color", "red");
    $("#currentimage").hide();
    $("#imagedesc").text("");

    // Getting images and when you click the big image pops up function
    $("#vacationimages img").click(function () {
        vacationType = $(this).attr("alt");
        let imageUrl = $(this).attr("src");

        $("#currentimage").attr("src", imageUrl).show();
        $("#imagedesc").text(vacationType);
    });

    // Submit button click function
    $("#submitme").click(function () {
        var firstname = $("#firstname").val();

        if (firstname === "") {
            $(errormsg).text("Must enter first name");
            $("#mymessage").text("");
            return;
        }

        if (vacationType === "") {
            $(errormsg).text("Please select a vacation");
            $("#mymessage").text("");
            return;
        }

        $(errormsg).text("");
        $("#mymessage").text(`${firstname}, you want a ${vacationType}`);
        $("#imagedesc").text(vacationType);
    });

    // Show and hide button
    $("#showhidebutton").click(function () {
        $("#currentimage, #imagedesc").toggle();

        if ($("#currentimage").is(":visible")) {
            $(this).val("Hide Image");
        } else {
            $(this).val("Show Image");
        }
    });

    // When you hover this border appears
    $("#vacationimages img").hover(
        function () {
            $(this).css("border", "10px outset");
        },
        function () {
            $(this).css("border", "none");
        }
    );

    $("#currentimage").hover(
        function () {
            $(this).css("border", "10px outset");
        },
        function () {
            $(this).css("border", "none");
        }
    );

});
