var Colors = ["#222629", "#86c232", "white", "gray"];	//One color for each section

class StickyNavigation {
	
	
	constructor() {
		this.currentId = null;
		this.currentTab = null;
		this.tabContainerHeight = $('nav').height();
		let self = this;
		
		$('nav a').click(function() { 
			self.onTabClick(event, $(this)); 			//insert in action on nav button
		});
		
		$(window).scroll(() => { this.onScroll(); });	//action when scroll
		$(window).resize(() => { this.onResize(); });	//action when resize
	}
	
	onTabClick(event, element) {	//Scroll when link is clicked
		event.preventDefault();	//Block standard action
		let scrollTop = $(element.attr('href') + ' h1:first-child').offset().top - this.tabContainerHeight - 100;
		$('html, body').animate({ scrollTop: scrollTop }, 600);
	}
	
	onScroll() {
		this.checkTabContainerPosition();
    	this.findCurrentTabSelector();
	}
	
	onResize() {
		if(this.currentId) {
			this.setCss();
		}
	}
	
	checkTabContainerPosition() {	// Fix the nav bar when exeed the header
		let offset = $('header').offset().top + $('header').height() - this.tabContainerHeight;
		if($(window).scrollTop() > offset) {
			$('nav').addClass('fix_top');
		} 
		else {
			$('nav').removeClass('fix_top');
		}
	}
	
	findCurrentTabSelector(element) {
		let newCurrentId;
		let newCurrentTab;
		let self = this;
		
		$('nav a').each(function() { // Find link on nav that refer to the actual show section
			let id = $(this).attr('href');
			let offsetTop = $(id).offset().top - self.tabContainerHeight;
			let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
			
			if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
				newCurrentId = id;
				newCurrentTab = $(this);
			}
			
		});
		
		if(this.currentId != newCurrentId || this.currentId === null) {
			this.currentId = newCurrentId;
			this.currentTab = newCurrentTab;
			this.setCss();
		}
	}
	
	//Show the slider and change nav link
	setCss() {
		let width = 0;
		let left = 0;
		
		if(this.currentTab) {
			width = this.currentTab.css('width');
			left = this.currentTab.offset().left;
		}
		
		$('nav span').css('width', width);
		$('nav span').css('left', left);
		
		let currentId = this.currentId;
		$('nav a').each(function() { // Change the color of nav link
			let id = $(this).attr('href');
			
			if(id == currentId) {
				$(this).css('color', Colors[2]);
			}
			else{
				$(this).css('color', Colors[0]);
			}
			
		});
		
	}
	
}

new StickyNavigation();

$(function() {
	$( "#dialog-1" ).dialog({
    	autoOpen: false,  
    });
    $( "#phone" ).click(function() {
    	$( "#dialog-1" ).dialog( "open" );
    });
});