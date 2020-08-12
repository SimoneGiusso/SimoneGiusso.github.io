var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});


//UPDATE reference
$('#home>a').attr("href", "../" + $('#home>a').attr("href"));

//update article reference in menu bar
$.each($('.article'), function(){
	$('.article').attr("href", $('.article').attr("href").replace("Articles/", ""));
});



// TAB Code

// show java code
$.each($('.tabcontent'), function(index, value){
	if ( $(value).attr('class').includes("java") ){ 
		$(value).css("display", "block");
	}
});

// fire java tab
$.each($('.tablinks'), function(index, value){
	if( $(value).attr("onClick").includes("java") ){
		$(value).attr('class', $(value).attr('class') + " active" );
	}
});


function openCode(evt, language) {
	
	// show selected code and hidden other
	$.each($('.tabcontent'), function(index, value){
		if ( $(value).attr('class').includes(language) ){ 
			$(value).css("display", "block");
		}else{
			$(value).css("display", "none");
		}
	});

	// fire selected tab and hidden other
	$.each($('.tablinks'), function(index, value){
		if( $(value).attr("onClick").includes(language) ){
			$(value).attr('class', $(value).attr('class') + " active" );
		}else{
			$(value).attr('class', $(value).attr('class').replace(" active", ""));
		}
	});
}