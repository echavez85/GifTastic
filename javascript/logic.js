$(document).ready(function () {

    // Initial gifTopics array
    var gifTopics = ["Gross", "Party", "Excited", "Sad", "Nerd", "Christmas", "Thanksgiving", "Snow"];

    // displayGifFunction re-renders HTML to display the appropriate content.

    // Function for displaying the buttons.
    function renderButtons() {

        // Delete other buttons prior to adding new ones.
        $("#buttonsHolder").empty();

        // Loop through array of gif topics.
        for (var i = 0; i < gifTopics.length; i++) {
            // Dynamically generate buttons for each gif topic in the array with $("<button").
            var topicButton = $("<button>");

            // Add class of "gifBtn" to button.
            topicButton.addClass("gifBtn");

            // Add data attribute.
            topicButton.attr("data-name", gifTopics[i]);

            // Provide initial button text.
            topicButton.text(gifTopics[i]);

            // Add the button to id="buttonsHolder".
            $("#buttonsHolder").append(topicButton);
        }
    }

    $(document).on("click", ".gifBtn", function (event) {
        var searchParam = $(this).attr('data-name')
        displayGifButtons(searchParam);
    })

    $("#add-gif").on("click", function (event) {
        event.preventDefault();
        var newTopic = $("#gif-topic-input").val().trim();
        gifTopics.push(newTopic);
        renderButtons();
    })

    // Create on click function for submit button.
    $("#add-gifs").on("click", function (event) {
        event.preventDefaul();

        // Take input from textbox.
        var gifTopic = $("#gif-topic-input").val().trim();

        // Add gif topic from textbox to array.
        gifTopics.push(gifTopic);

        // Call renderButtons to process gif array.

        renderButtons();
    });

    function displayGifButtons(gifTopic) {
        console.log('gifTopic', gifTopic);

        // var gifTopic = $(this).attr("data-name");
        var queryURL = `https://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=qPnM9oCUgEYxmEAp0JVH7PdbS4lsMrcv&q=${gifTopic}`;

        // Create AJAX request for the gif button being clicked.
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            // Store array of results in the results variable.
            var results = response.data;
            // Loop over every result item.
            for (var i = 0; i < results.length; i++) {
                // Create a div for the gif.
                var gifDiv = $("<div>");

                // Create image tag.
                var topicImage = $("<img>");

                // Give image tag source from the response.
                topicImage.attr("src", results[i].images.original_still.url);

                // Store rating of the results.
                var rating = results[i].rating;

                // Create paragraph tag with item's rating.
                var rating = $("<p>").text(`Rating: ${rating}`);

                // Append the gifs to the gifdiv.
                gifDiv.append(topicImage);
                gifDiv.append(rating);

                // Prepend the gifDiv to the html.
                $("#gifHolder").prepend(gifDiv);

            };
        })
        renderButtons();
    };
    renderButtons();
});



    // Append the gif with a (state === "still").

    // Create an element to have the rating data displayed.

    // Display the rating.















    // Add click event listener to all elements with class of "gifBtn".

    // Call renderButtons to display initial buttons.

