$(document).ready(function() {
    $('form').submit(function(){
        //Display basic card
        var $theCard = "<div class=single_card data-desc="
            + $('textarea[name="description"]').val()
            + ">"
            + "<p class='contact'>Contact Information</p>"
            + "<p class='name'>" + $('input[name="first_name"]').val()
            + " " + $('input[name="last_name"]').val() + "</p>"
            + "<p class='click'>Click for description!</p>";

        $('#cards').append($theCard);

        // Handler for showing description
        $(document).on('click', 'p.click', function(){
            var $myDesc = $(this).parent().attr('data-desc');
            $(this).parent().addClass("back");

            var $theBack = "<p class=click-back>Go Back</p>"
                + "<img class='click-back' src=go-back.png>"
                + "<p class='desc'>" + $myDesc + "</p>";

            $(this).parent().html($theBack);
        });

        //Handler for going back to the front of the page
        $(document).on('click', '.click-back', function() {
            $(this).parent().removeClass("back");
            $(this).parent().html("<p class=contact>You're back!</p>");
        });

        return false;
    });

});
