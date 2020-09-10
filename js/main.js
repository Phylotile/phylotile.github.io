// Hamburger Animation

var navSlide = () => {
	var burger = document.querySelector('.burger');
	var nav = document.querySelector('.header_list');
	var navLinks = document.querySelectorAll('.header_list li');

	burger.addEventListener('click', () => {
		// Toggle Nav
		nav.classList.toggle('nav-active');

		//Animate Links
		navLinks.forEach((link, index) => {
			if (link.style.animation) {
				link.style.animation = '';
			} else {
				link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
			}
		});

		// Burger Animation
		burger.classList.toggle('toggle');
	});
}



// Slowly Going to the Specific Section when Click on the Specific Button

$(document).ready(function(){  
    $(".header_list-item").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 1000);
    });
});



// Play Button of the Video

//youtube script
// var tag = document.createElement('script');
// tag.src = "//www.youtube.com/iframe_api";
// var firstScriptTag = document.getElementsByTagName('script')[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// var player;

// onYouTubeIframeAPIReady = function () {
//     player = new YT.Player('player', {
//         height: '244',
//         width: '434',
//         videoId: '14yISnvGJOE',  // youtube video id
//         playerVars: {
//             'autoplay': 0,
//             'rel': 0,
//             'showinfo': 0
//         },
//         events: {
//             'onStateChange': onPlayerStateChange
//         }
//     });
// }

// var p = document.getElementById ("player");
// $(p).hide();

// var t = document.getElementById ("thumbnail");
// t.src = "http://img.youtube.com/vi/AkyQgpqRyBY/0.jpg";

// onPlayerStateChange = function (event) {
//     if (event.data == YT.PlayerState.ENDED) {
//         $('.start-video').fadeIn('normal');
//     }
// }

// $(document).on('click', '.start-video', function () {
//     $(this).hide();
//     $("#player").show();
//     $("#thumbnail_container").hide();
//     player.playVideo();
// });



// Blocks Resizing at the beginning

$(document).ready(function () {
	$('.cube').addClass('block_resize');
	$('.block_inc').addClass('block_display-none');
	$('.s-arrow_down').addClass('arrow_transform');
})



// Block Resizing Animation on click

var blockResize_1 = () => { 
	var block = document.querySelector('.stat_block');
	var blockInc = document.querySelector('.block_inc-1');
	var arrow = document.querySelector('.sad-1');

	block.addEventListener('click', () => {
		// Resize Block
		block.classList.toggle('block_resize');
		// Display None
		blockInc.classList.toggle('block_display-none');
		// Transform Arrow to Up
		arrow.classList.toggle('arrow_transform');
	});
}
var blockResize_2 = () => { 
	var block = document.querySelector('.inbox_block');
	var blockInc = document.querySelector('.block_inc-2');
	var arrow = document.querySelector('.sad-2');

	block.addEventListener('click', () => {
		// Display None
		blockInc.classList.toggle('block_display-none');
		// Block Resize
		block.classList.toggle('block_resize');
		// Transform Arrow to Up
		arrow.classList.toggle('arrow_transform');
	});
}
var blockResize_3 = () => { 
	var block = document.querySelector('.team_block');
	var blockInc = document.querySelector('.block_inc-3');
	var arrow = document.querySelector('.sad-3');

	block.addEventListener('click', () => {
		// Display None
		blockInc.classList.toggle('block_display-none');
		// Block Resize
		block.classList.toggle('block_resize');
		// Transform Arrow to Up
		arrow.classList.toggle('arrow_transform');
	});
}
var blockResize_4 = () => { 
	var block = document.querySelector('.set_block');
	var blockInc = document.querySelector('.block_inc-4');
	var arrow = document.querySelector('.sad-4');

	block.addEventListener('click', () => {
		// Display None
		blockInc.classList.toggle('block_display-none');
		// Block Resize
		block.classList.toggle('block_resize');
		// Transform Arrow to Up
		arrow.classList.toggle('arrow_transform');
	});
}
var blockResize_5 = () => { 
	var block = document.querySelector('.feed_block');
	var blockInc = document.querySelector('.block_inc-5');
	var arrow = document.querySelector('.sad-5');

	block.addEventListener('click', () => {
		// Display None
		blockInc.classList.toggle('block_display-none');
		// Block Resize
		block.classList.toggle('block_resize');
		// Transform Arrow to Up
		arrow.classList.toggle('arrow_transform');
	});
}



// Resize Other Blocks if needed

$(document).ready(function() {
	$('.stat_block').click(function() {
		$('.cube').not(this).addClass('block_resize');
		$('.block_inc').not('.block_inc-1').addClass('block_display-none');
		$('.s-arrow_down').not('.sad-1').addClass('arrow_transform');
	});
})
$(document).ready(function() {
	$('.inbox_block').click(function() {
		$('.cube').not(this).addClass('block_resize');
		$('.block_inc').not('.block_inc-2').addClass('block_display-none');
		$('.s-arrow_down').not('.sad-2').addClass('arrow_transform');
	});
})
$(document).ready(function() {
	$('.team_block').click(function() {
		$('.cube').not(this).addClass('block_resize');
		$('.block_inc').not('.block_inc-3').addClass('block_display-none');
		$('.s-arrow_down').not('.sad-3').addClass('arrow_transform');
	});
})
$(document).ready(function() {
	$('.set_block').click(function() {
		$('.cube').not(this).addClass('block_resize');
		$('.block_inc').not('.block_inc-4').addClass('block_display-none');
		$('.s-arrow_down').not('.sad-4').addClass('arrow_transform');
	});
})
$(document).ready(function() {
	$('.feed_block').click(function() {
		$('.cube').not(this).addClass('block_resize');
		$('.block_inc').not('.block_inc-5').addClass('block_display-none');
		$('.s-arrow_down').not('.sad-5').addClass('arrow_transform');
	});
})



// Prevent Default

var preventDefault_1 = () => {
	var btn = document.querySelector('.btn_buy-now');
	btn.onclick = function (e) {
		e.preventDefault();
	};
}
var preventDefault_2 = () => {
	var btn = document.querySelector('.btn_try-for-free');
	btn.onclick = function (e) {
		e.preventDefault();
	};
}
var preventDefault_3 = () => {
	var btn = document.querySelector('.btn_get-started');
	btn.onclick = function (e) {
		e.preventDefault();
	};
}
var preventDefault_4 = () => {
	var btn = document.querySelector('.btn_get-started-2');
	btn.onclick = function (e) {
		e.preventDefault();
	};
}
var preventDefault_5 = () => {
	var btn = document.querySelector('.btn_send');
	btn.onclick = function (e) {
		e.preventDefault();
	};
}



// Run Animations

const myAnimations = () => {
	blockResize_1();
	blockResize_2();
	blockResize_3();
	blockResize_4();
	blockResize_5();

	preventDefault_1();
	preventDefault_2();
	preventDefault_3();
	preventDefault_4();
	preventDefault_5();

	navSlide();
}
myAnimations();



// Swiper JS

$(window).resize(function(){
   console.log('resize called');
   var width = $(window).width();
   if(width >= 992){
   		// remove swiper-container classes
        $('.swiper-container').removeClass('swiper-container-3');
        $('.swiper-container').removeClass('swiper-container-4');

        // remove swiper-slide classes
        $('.facts_li').removeClass('swiper-slide');
   }
})
.resize(); // trigger the resize event on page load.
