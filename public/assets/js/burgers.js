$(function () {
    $("#submit-button").on("click", function (event) {
        event.preventDefault();
        if ($("#burger-input").val().length === 0) {
            alert("Please add a burger name");
        } else {
            var newBurger = {
                burger_name: $("#burger-input").val().trim(),
                devoured: false
            };
            console.log(newBurger);
            $.post("/add", newBurger, function (data) {

                location.reload();
            });
        }
    });



    $(".delete-button").on("click", function (event) {
        event.preventDefault();
        var burgID = $(this).data("button-id");
        var burgName = $(this).parent(".listItem").find(".pText").text();

        $.ajax({
            type: "PUT",
            url: "/" + burgID,
            data: burgName
        }).then(
            function (data) {
                console.log("deleted burger", burgID);
                console.log(data);

                location.href = "/";
            }
        );
    });
});