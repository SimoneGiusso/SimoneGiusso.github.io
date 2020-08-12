$(function() {
    $('body').addClass('js');
  
    var $hamburger = $('.hamburger'),
        $nav = $('#site-nav'),
        $masthead = $('#masthead');
		$home = $('#home');
  
    $hamburger.click(function() {
      	$(this).toggleClass('is-active');
      	$nav.toggleClass('is-active');
      	$masthead.toggleClass('is-active');
		$home.toggleClass('is-active');
      return false; 
    })
});