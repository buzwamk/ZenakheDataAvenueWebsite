(function($){
	"use strict";

	// Header Sticky
	$(window).on('scroll',function() {
		if ($(this).scrollTop() > 120){  
			$('.navbar-area').addClass("is-sticky");
		}
		else{
			$('.navbar-area').removeClass("is-sticky");
		}
	});

	// Others Option Responsive JS
	$(".others-option-for-responsive .dot-menu").on("click", function(){
		$(".others-option-for-responsive .container .container").toggleClass("active");
	});

	// Button Hover JS
    $(function() {
		$('.default-btn')
		.on('mouseenter', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		})
		.on('mouseout', function(e) {
			var parentOffset = $(this).offset(),
			relX = e.pageX - parentOffset.left,
			relY = e.pageY - parentOffset.top;
			$(this).find('span').css({top:relY, left:relX})
		});
	});

	// Popup Video
	$('.popup-youtube').magnificPopup({
		disableOn: 320,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false
	});

	// Mean Menu
	$('.mean-menu').meanmenu({
		meanScreenWidth: "1199"
	});

	// Home Slides
	$('.home-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='flaticon-left-1'></i>",
			"<i class='flaticon-right-1'></i>"
		]
	});

	// TweenMax JS
	$('.main-banner').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.main-banner-animation-image img:nth-child(1), .main-banner-animation-image img:nth-child(3), .main-banner-animation-image img:nth-child(5), .main-banner-animation-image img:nth-child(7), .main-banner-animation-image img:nth-child(9), .main-banner-animation-image img:nth-child(11), .main-banner-image').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.4;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});
	$('.main-banner').mousemove(function(e){
		var wy = $(window).width();
		var wx = $(window).height();
		var y = e.pageY - this.offsetLeft;
		var x = e.pageX - this.offsetTop;
		var newy = y - wy/2;
		var newx = x - wx/2;
		$('.main-banner-animation-image img:nth-child(2), .main-banner-animation-image img:nth-child(4), .main-banner-animation-image img:nth-child(6), .main-banner-animation-image img:nth-child(8), .main-banner-animation-image img:nth-child(10), .main-banner-animation-image img:nth-child(12)').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.4;
			TweenMax.to($(this), 1, {y: (1 - newx*speed), x: (1 - newy*speed)});
		});
	});
	$('.banner-section').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.banner-animation-image img:nth-child(1), .banner-animation-image img:nth-child(3), .banner-animation-image img:nth-child(5), .banner-animation-image img:nth-child(7), .banner-animation-image img:nth-child(9), .banner-animation-image img:nth-child(11), .banner-image').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.4;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});
	$('.banner-section').mousemove(function(e){
		var wy = $(window).width();
		var wx = $(window).height();
		var y = e.pageY - this.offsetLeft;
		var x = e.pageX - this.offsetTop;
		var newy = y - wy/2;
		var newx = x - wx/2;
		$('.banner-animation-image img:nth-child(2), .banner-animation-image img:nth-child(4), .banner-animation-image img:nth-child(6), .banner-animation-image img:nth-child(8), .banner-animation-image img:nth-child(10), .banner-animation-image img:nth-child(12)').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.4;
			TweenMax.to($(this), 1, {y: (1 - newx*speed), x: (1 - newy*speed)});
		});
	});
	$('.main-banner-area').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('img').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -.8;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});
	$('.blog-area').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.vector-shape1, .vector-shape2').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -1;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});
	$('.project-start-area').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.project-start-image img').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -1;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});
	$('.subscribe-area').mousemove(function(e){
		var wx = $(window).width();
		var wy = $(window).height();
		var x = e.pageX - this.offsetLeft;
		var y = e.pageY - this.offsetTop;
		var newx = x - wx/2;
		var newy = y - wy/2;
		$('.subscribe-image img').each(function(){
			var speed = $(this).attr('data-speed');
			if($(this).attr('data-revert')) speed *= -1;
			TweenMax.to($(this), 1, {x: (1 - newx*speed), y: (1 - newy*speed)});
		});
	});
	var controller = new ScrollMagic.Controller();
	$(".section-title h2").each(function() {
		var tl = new TimelineMax();
		if(tl.isActive()){
			return false;
		}
		var cov = $(this).find(".overlay");
		tl.from(cov, .5, { scaleX: 0, transformOrigin: "left" });
		tl.to(cov, .5, { scaleX: 0, transformOrigin: "right" }, "reveal");
		var scene = new ScrollMagic.Scene({
			triggerElement: this,
			triggerHook: 0.7
		})
		.setTween(tl)
		.addTo(controller);
	});

	// Case Study Slides
	$('.case-study-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		items: 1,
		navText: [
			"<i class='flaticon-left-1'></i>",
			"<i class='flaticon-right-1'></i>"
		]
	});

	// Testimonials Slides
	$('.testimonials-slides').owlCarousel({
		loop: true,
		nav: true,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		margin: 30,
		navText: [
			"<i class='flaticon-left-1'></i>",
			"<i class='flaticon-right-1'></i>"
		],
		responsive: {
			0: {
				items: 1,
			},
			768: {
				items: 2,
			},
			992: {
				items: 2,
			}
		}
	});

	// Isotop Js
	var $grid = $('.projects-items, .blog-items').isotope({
		itemSelector: '.grid-item',
		percentPosition: true,
		masonry: {
			// Use outer width of grid-sizer for columnWidth
			columnWidth: '.grid-item'
		}
	});

	// Services Image Slides
	$('.services-details-image-slides').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
		navText: [
			"<i class='flaticon-left-1'></i>",
			"<i class='flaticon-right-1'></i>"
		]
	});

	// Case Studies Image Slides
	$('.case-studies-details-image-slides').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
		navText: [
			"<i class='flaticon-left-1'></i>",
			"<i class='flaticon-right-1'></i>"
		]
	});

	// Article Image Slides
	$('.article-image-slides').owlCarousel({
		loop: true,
		nav: true,
		items: 1,
		dots: false,
		autoplayHoverPause: true,
		autoplay: true,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
		navText: [
			"<i class='flaticon-left-1'></i>",
			"<i class='flaticon-right-1'></i>"
		]
	});

	// WOW Animation JS
	if($('.wow').length){
		var wow = new WOW({
			mobile:       false
		});
		wow.init();
	}

	// Nice Select JS
	$('select').niceSelect();
	
	// Price Range Slider JS
	$(".js-range-of-price").ionRangeSlider({
		type: "double",
		drag_interval: true,
		min_interval: null,
		max_interval: null,
	});

	// Input Plus & Minus Number JS
	$('.input-counter').each(function() {
		var spinner = jQuery(this),
		input = spinner.find('input[type="text"]'),
		btnUp = spinner.find('.plus-btn'),
		btnDown = spinner.find('.minus-btn'),
		min = input.attr('min'),
		max = input.attr('max');
		
		btnUp.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue >= max) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue + 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
		btnDown.on('click', function() {
			var oldValue = parseFloat(input.val());
			if (oldValue <= min) {
				var newVal = oldValue;
			} else {
				var newVal = oldValue - 1;
			}
			spinner.find("input").val(newVal);
			spinner.find("input").trigger("change");
		});
	});

	// Sidebar Sticky
	$('.case-studies-sidebar-sticky').stickySidebar({
		topSpacing: 85,
		bottomSpacing: 85
	});

	// Tabs
	(function ($) {
		$('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
		$('.tab ul.tabs li a').on('click', function (g) {
			var tab = $(this).closest('.tab'), 
			index = $(this).closest('li').index();
			tab.find('ul.tabs > li').removeClass('current');
			$(this).closest('li').addClass('current');
			tab.find('.tab-content').find('div.tabs-item').not('div.tabs-item:eq(' + index + ')').slideUp();
			tab.find('.tab-content').find('div.tabs-item:eq(' + index + ')').slideDown();
			g.preventDefault();
		});
	})(jQuery);

	// Go to Top
	$(function(){
		// Scroll Event
		$(window).on('scroll', function(){
			var scrolled = $(window).scrollTop();
			if (scrolled > 600) $('.go-top').addClass('active');
			if (scrolled < 600) $('.go-top').removeClass('active');
		});  
		// Click Event
		$('.go-top').on('click', function() {
			$("html, body").animate({ scrollTop: "0" },  500);
		});
	});

}(jQuery));