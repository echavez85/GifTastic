$(document).ready(function()) {

    // Initial gifTopics array
    var gifTopics = ["Gross", "Party", "Excited", "Sad", "Nerd", "Christmas", "Thanksgiving", "Snow"];

    // displayGifFunction re-renders HTML to display the appropriate content.
    function displayGifButtons() {
        var gifTopic = $(this).attr("data-name");
        var queryURL = `https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=qPnM9oCUgEYxmEAp0JVH7PdbS4lsMrcv&q=${gifTopic}`;

        // Create AJAX request for the gif button being clicked.
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {

            // Store array of results in the results variable.
            var results = response.data;
            // Loop over every result item.
            for(var i = 0; i< results.length; i++) {
                // Create a div for the gif.
                var gifDiv = $("<div>");

                // Create image tag.
                var topicImage = $("<img>");

                // Give image tag source from the response.
                topicImage.attr("src", results[i].original.url);
                
                // Store rating of the results.
                var rating = results[i].rating;

                // Create paragraph tag with item's rating.
                var p = $("<p>").text(`Rating: ${rating}`);
            }
        })
    }



    

    
    
    

    // Append the gif with a (state === "still").

    // Create an element to have the rating data displayed.

    // Display the rating.

    // Function for displaying the gif and gif data.

    // Delete other buttons prior to adding new ones.

    // Loop through array of gif topics.

    // Dynamically generate buttons for each gif topic in the array with $("<button").

    // Add class of "gifBtn" to button.

    // Add data attribute.

    // Provide initial button text.

    // Add the button to id="buttonsHolder".

    // Create on click function for submit button.

    // Take input from textbox.

    // Add gif topic from textbox to array.

    // Call renderButtons to process gif array.

    // Add click event listener to all elements with class of "gifBtn".

    // Call renderButtons to display initial buttons.

}
