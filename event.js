// script.js

// Wait for the document to be fully loaded
$(document).ready(function () {
    // Add hover event listener to Block B
    $('#blockB').hover(
        function () {
            // Mouse over
            $(this).css('background-color', '#ccc'); // Change background color to gray
        },
        function () {
            // Mouse out
            $(this).css('background-color', ''); // Reset background color
        }
    );
});
