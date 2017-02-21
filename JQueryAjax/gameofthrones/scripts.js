$(document).ready(function() {
    //Show the user what they need to do!
    $('.house').hover(function(){
        $('img.alert',this).css("visibility","visible");
    }, function(){
        $('img.alert',this).css("visibility","hidden");
    });

    //Let's display the data
    $('.house').click(function(){
        var $houseName = $(this).attr('id');
        function setBackground(house){
            $theBackground = "img/" + house + ".jpg";
            //console.log($theBackground);
            return $theBackground;
        }
        var $theBackground;
        //console.log($houseName);
        var $requestName;
        if ($houseName === "lannister") {
            $requestName = "House Lannister of Casterly Rock";
            setBackground($houseName);
        }
        if ($houseName === "baratheon") {
            $requestName = "House Baratheon of Storm's End";
            setBackground($houseName);
        }
        if ($houseName === "targaryen") {
            $requestName = "House Targaryen of King's Landing";
            setBackground($houseName);
        }
        if ($houseName === "stark") {
            $requestName = "House Stark of Winterfell";
            setBackground($houseName);
        }

        //Background changes to the house
        $('#details').css({"background": "url('" + $theBackground + "')",
            "height": "650px", "background-size": "cover",
            "background-repeat": "no-repeat"   });

        //Query the API
        var $theQuery = "https://anapioficeandfire.com/api/houses/?name=" + $requestName;
        $theQuery = $theQuery.replace(" ", "+");

        $.get($theQuery, function(result) {
            console.log(result);
            var $theTitles = '';
            var $details = "<h2>House Details</h2>"
                            + "<p>Name: " + result[0].name + "</p>"
                            + "<p>Words: '" + result[0].words + "'</p>"
                            + "<p>Titles: " + $theTitles + "</p>";
            if ($houseName === "stark") {
                $('#details').css("color","#000");
            }
            else {
                $('#details').css("color","#fff");
            }
            $('#details').html($details);

        }, "json");

    });


});
