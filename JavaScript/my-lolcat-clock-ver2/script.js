//LOLCAT Final working code with fun times

var time = new Date().getHours();
//var time = 13;

var wakeUpTime = 8;
var noon = 12;
var lunchTime = 13;
var napTime = 15;
var evening = 18;
var partyTime = 22;

var messageText = "Meow! Meow! Meow!";
var theImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

var updateClock = function() 
{

if (time < noon) {
    messageText = "Good morning!";
    if (time == wakeUpTime) {
        messageText = "Wake up you slouch!";
        theImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
        
       }
    }
else if (time == noon) {
    messageText = "It's noon, you get to eat soon!";

    }
else if ((time > noon) && (time < evening)) {
    if (time == lunchTime) {
        messageText = "Lunch time, let's eat!";
        theImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
        }
    else if (time == napTime) {
        messageText = "Nap Time!";
        theImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
        }
    else {
        messageText = "Good Afternoon!";
        }
    }
else if (time >= evening) {
    messageText = "Good Evening!";
    if (time == partyTime) {
        messageText = "Get this Party Started!";
        theImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
        }
    }
else {
    messageText = "Good Day!";
    }


//Print the message
//console.log(messageText);

var announceJS = document.getElementById("timeEvent");
announceJS.innerText=messageText; 

var lolcatImageJS = document.getElementById("lolcatImage");
lolcatImageJS.src = theImage;


   //working clock
    var showCurrentTime = function()
    {
        // display the string on the webpage
        var clock = document.getElementById('clock');
     
        var currentTime = new Date();
     
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";
     
        // Set hours 
        if (hours >= noon) 
        { 
            meridian = "PM"; 
        }  
        if (hours > noon) 
        { 
            hours = hours - 12; 
        }
     
        // Set Minutes
        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }
     
        // Set Seconds
        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }
     
        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
     
        clock.innerText = clockTime;
    };
        
    showCurrentTime(); 

};

updateClock(); 

var oneSecond = 1000;

setInterval( updateClock, oneSecond);


//Button events 
var partyButton = document.getElementById('partyTimeButton');
var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var lunchTimeSelector = document.getElementById('lunchTimeSelector');
var napTimeSelector = document.getElementById('napTimeSelector');

var partyEvent = function()
{
    if (partyTime < 0) 
    {
        partyTime = new Date().getHours(); 
        // text in the button should read "Party Over"
        partyButton.innerText = "Party Over";

        // color of the button should be "#0A8DAB" (bonus!)
        partyButton.style.background = "#0A8DAB";
    }
    else
    {
        partyTime = -1;
        // text in the button should read "PARTY TIME!"
        partyButton.innerText = "PARTY TIME!";

        // color of the button should be "#222" (bonus!)
        partyButton.style.background = "#222";
    }
};

var wakeUpEvent = function() {
    this.wakeUpTime = wakeUpTimeSelector.value;
};

var lunchEvent = function() {
    lunchTime = lunchTimeSelector.value;
};

var napEvent = function() {
    napTime = napTimeSelector.value;
};


partyEvent();
partyButton.addEventListener('click', partyEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);

lunchTimeSelector.addEventListener('change', lunchEvent);

napTimeSelector.addEventListener('change', napEvent);



//LOLCAT Final working code with fun times

var time = new Date().getHours();
//var time = 13;

var wakeUpTime = 8;
var noon = 12;
var lunchTime = 13;
var napTime = 15;
var evening = 18;
var partyTime = 22;

var messageText = "Meow! Meow! Meow!";
var theImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/normalTime.jpg";

var updateClock = function() 
{

    if (time < noon) {
        messageText = "Good morning!";
        if (time == wakeUpTime) {
            messageText = "Wake up you slouch!";
            theImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
            
           }
        }
    else if (time == noon) {
        messageText = "It's noon, you get to eat soon!";

        }
    else if ((time > noon) && (time < evening)) {
        if (time == lunchTime) {
            messageText = "Lunch time, let's eat!";
            theImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
            }
        else if (time == napTime) {
            messageText = "Nap Time!";
            theImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
            }
        else {
            messageText = "Good Afternoon!";
            }
        }
    else if (time >= evening) {
        messageText = "Good Evening!";
        if (time == partyTime) {
            messageText = "Get this Party Started!";
            theImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
            }
        }
    else {
        messageText = "Good Day!";
        }


    //Print the message
    //console.log(messageText);

    var announceJS = document.getElementById("timeEvent");
    announceJS.innerText=messageText; 

    var lolcatImageJS = document.getElementById("lolcatImage");
    lolcatImageJS.src = theImage;


    //working clock
    var showCurrentTime = function()
    {
        // display the string on the webpage
        var clock = document.getElementById('clock');
     
        var currentTime = new Date();
     
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();
        var meridian = "AM";
     
        // Set hours 
        if (hours >= noon) 
        { 
            meridian = "PM"; 
        }  
        if (hours > noon) 
        { 
            hours = hours - 12; 
        }
     
        // Set Minutes
        if (minutes < 10)
        {
            minutes = "0" + minutes;
        }
     
        // Set Seconds
        if (seconds < 10)
        {
            seconds = "0" + seconds;
        }
     
        // put together the string that displays the time
        var clockTime = hours + ':' + minutes + ':' + seconds + " " + meridian + "!";
     
        clock.innerText = clockTime;
    };
        
    showCurrentTime(); 
}

    
updateClock(); 

var oneSecond = 1000;

setInterval( updateClock, oneSecond);



