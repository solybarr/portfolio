//Stellar.js Parallax plugin
$.stellar({
    horizontalScrolling: false,
    responsive: true
});



// Twitter button script -->

window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
 
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
 
  return t;
}(document, "script", "twitter-wjs"));



// Facebook Button JavaScript SDK 
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));


// Google Map Javascript API
var map;
var marker;
function initMap() {
  var myLatLng = {lat: 9.142276, lng: -79.724052};
  map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 11
  });

  var image = 'img/panama.png';
  marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: 'The Panama Canal',
    icon:image,
    animation: google.maps.Animation.DROP 
  });

  marker.addListener('click', toggleBounce);
}

//Bouncing marker!
function toggleBounce() {
  if (marker.getAnimation() !== null) {
    marker.setAnimation(null);
  } else {
    marker.setAnimation(google.maps.Animation.BOUNCE);
  }
}


//Load this after the document has fully loaded

$(document).ready(function(){

	// Tooltip Scripts
	// For buttons

	$(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});

	// For links 
	$(function () {
		$('#item1').tooltip();
		$('#item2').tooltip();
	}); 


  // Form JQuery Tests for Task 2.7

  $('#message-box').on('keyup', function() {
    //console.log('Keyup happened!');
    var charCount = $('#message-box').val().length;
    //console.log(charCount);
    if (charCount > 50 ) {
      $('#char-count').css('color', 'red');
    } else {
      $('#char-count').css('color', 'white');
    }
    $('#char-count').html(charCount);
  });


	// Form JQuery for Task 2.6 & 2.7

	//Changing the background color of the text area
	//$('#message-box').css('background-color','lightgray');
	//$('#message-box').css('border','1px solid white');

	//Submitted information appears on the DOM
	$('#button').on('click', function() {

    if ($('#message-box').val() === "") {
      $('#message-box').css('border', '2px solid red');

    } else {
  		var submittedInfo = '<h1>Thank you for submitting your message!</h1>';
  		submittedInfo += '<p>This is the information you submitted:</p>';
  		submittedInfo += '<ul>';
  		submittedInfo += '<li>Name: ' + $('#fullname').val().toUpperCase() + '</li>';
  		submittedInfo += '<li>Telephone: ' + $('#telephone').val() + '</li>';
  		submittedInfo += '<li>E-mail: '+ $('#email').val() + '</li>';
  		submittedInfo += '<li>Message: ' + $('#message-box').val(); + '</li>';
  		submittedInfo += '</ul>';
    
    		$('#visible-comment').html(submittedInfo);
    		$('.form-group').hide();
    		return false;
    }
	});


	//Scroll SPY script -->
    var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });


    // Work Section
    //Wordpress Section
    for(var i = 0; i < workWP.length; ++i) {
      $('#wordpress').append('\
        <div class="col-md-4 col-sm-6 portfolio-item">\
          <a class="work-img" href="' + workWP[i].url + '" target="_blank">\
          <img class="img-responsive" src="' + workWP[i].pic + '" alt="' + workWP[i].title + '">\
          <span class="info"><p class="proj-title"><i class="fa fa-' + workWP[i].icon + ' fa-3x" aria-hidden="true"></i></p></span></a>'
          + '<div class="work-caption"><h4>' + workWP[i].title + '</h4><p>' + workWP[i].desc + '</p></div></div>'
        );
    }

    for(var i = 0; i < workPSD.length; ++i) {
      $('#psdtohtml').append('\
        <div class="col-md-4 col-sm-6 work-image portfolio-item">\
          <a class="work-img" href="' + workPSD[i].url + '" target="_blank">\
          <img class="img-responsive" src="' + workPSD[i].pic + '" alt="' + workPSD[i].title + '">\
          <span class="info"><p class="proj-title"><i class="fa fa-' + workPSD[i].icon + ' fa-3x" aria-hidden="true"></i></p></span></a>'
          + '<div class="work-caption"><h4>' + workPSD[i].title + '</h4><p>' + workPSD[i].desc + '</p></div></div>'
        );
    }


    $(".work-img").mouseenter(function(){
      $(".info", this).show();
    }).mouseleave(function(){
      $(".info", this).hide();
    });

        
});







