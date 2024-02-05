// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
$(document).ready(function () {
    $("#calculateBtn").on("click", function () {
        // Get the entered hours and hourly rate
        var hours = parseFloat($("#hours").val());
        var hourlyRate = parseFloat($("#rate").val().replace("$", ""));

        // Validate input
        if (isNaN(hours) || hours < 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        // Calculate total
        var total = hours * hourlyRate;

        // Display total in the output box
        $("#total").val("$" + total.toFixed(2));
    });
});