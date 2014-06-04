$(document).ready(function() {
	$('input[type="checkbox"], input[type="radio"]').uniform();
	$('select').selectbox();
	$('.carousel').jcarousel({
		scroll: 1,
		animation: 250,
		easing: 'easeInOutQuint'
	});
	$('.largefilter > ul li').each(function() {
		$(this).css({'background-position': -$(this).position().left+'px '+(-$(this).position().top)+'px'});
	});
	$('.selectbox .dropdown li').each(function() {
		if ( $(this).is(':empty') ) {
			$(this).hide();
		}
	});
	var filter = $('.largefilter > div');
	$('.largefilter > ul li a').click(function () {
		filter.hide();
		filter.filter(this.hash).stop(true, true).fadeIn(0);
		$(this).parent().siblings().removeClass('active');
		$(this).parent().addClass('active');
		return false;
	}).filter(':first').click();
	$('table.result .favorite .add').bind('click', function() {
		$(this).toggleClass('active');
	});
	$('.apartment').each(function() {
		var gallery = $(this).find('.gallery div img');
		if ( gallery.size() > 1 ) {
			$(this).find('.gallery ul li a').bind('click', function () {
				gallery.hide();
				gallery.filter(this.hash).stop(true, true).fadeIn(250);
				return false;
			}).filter(':first').click();
		}
	});
	$('.content .team').each(function() {
		var tabs = $(this).children('div');
		$(this).find('ul li a').bind('click', function () {
			tabs.hide();
			tabs.filter(this.hash).stop(true, true).fadeIn(250);
			$(this).parent().addClass('active').siblings().removeClass('active');
			return false;
		}).filter(':first').click();
	});
	$('input, textarea').each(function () {
		$(this).data('holder',$(this).attr('placeholder'));
		$(this).focusin(function(){
			$(this).attr('placeholder','');
		});
		$(this).focusout(function(){
			$(this).attr('placeholder',$(this).data('holder'));
		});
	});
	$('.modal').append('<span class="close"></span>');
	$('.modal').each(function() {
		var mh = ($(this).height()+36)/2;
		$(this).css({'margin-top': -mh+'px'});
	})
	$('.header .publish').click(function() {
		$('.modal.submit, .fade').fadeIn(250);
		return false;
	});
	$('.apartment .description button').click(function() {
		$('.modal.write, .fade').fadeIn(250);
		return false;
	});
	$('.modal .close').click(function() {
		$(this).parent().fadeOut(250);
		$('.fade').fadeOut(250);
		return false;
	});
	$('.fade').click(function() {
		$('.fade, .modal').fadeOut(250);
		return false;
	});
	$(this).keydown(function(eventObject){
		if (eventObject.which == 27) {
			$('.fade, .modal').fadeOut(250);
		}
	});
});