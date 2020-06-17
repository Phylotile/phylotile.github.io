// Section: Header

var btn = document.getElementById('btn');
btn.onclick = function (e) {
	e.preventDefault();
}

$(function() {
	var effects = 'animate__animated animate__flash';
	var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

	$('.head-btn').click(function () {
 		$(this).addClass(effects).one(effectsEnd, function() {
 			$(this).removeClass(effects);
 		});
	});
})

$(document).ready(function () {
	$('#btn').on({
		mouseover: function () {
			$('.intro span').css('color', '#ffeb3b');
			$('.intro span').css('fontSize', '20px');
			$('.intro span').off('mouseover');
		},
		mouseout: function () {
			$('.intro span').css('color', '#fff');
			$('.intro span').css('fontSize', '16px');
			$('.intro span').off('mouseout');
		}
	});
})

// Section: Life

$(function () {
	$(window).scroll(function() {
	    $('.life-main-title').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__backInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.life-section-1').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInBottomLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.life-section-2').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.life-section-3').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInBottomRight");
	        }
	    });
	});
})

// Section: section-form

$(function () {
	$(window).scroll(function() {
	    $('.section-form-title').each(function(){
	        var imagePos = $(this).offset().top;
	        var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass('animate__jackInTheBox').one(effectsEnd, function() {
	            	$(this).removeClass('animate__animated animate__jackInTheBox', function() {
	            		$(this).addClass('no_trans')
	            	});
	            });
	        };
	    });
	});
	$(window).scroll(function() {
	    $('.name').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.email').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.phone').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.place').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInRight");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.form-btn').each(function(){
	        var imagePos = $(this).offset().top;

	        var topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("animate__fadeInLeft");
	        }
	    });
	});
})

$(function() {
	var effects = 'animate__animated no_trans animate__jello';
	var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

	$('.form-btn').click(function () {
		$('.section-form-title').addClass(effects).one(effectsEnd, function() {
 			$('.section-form-title').removeClass(effects);
 		});
	});
})

$(function() {
	var effects = 'animate__animated no_trans animate__bounce';
	var effectsEnd = 'animationend oAnimationEnd mozAnimationEnd webkitAnimationEnd';

	$('.form-btn').hover(function () {
 		$('.credits').addClass(effects).one(effectsEnd, function() {
 			$('.credits').removeClass(effects);
 		});
	});
})