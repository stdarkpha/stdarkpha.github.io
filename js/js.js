//base script

lottie.loadAnimation({
  container: document.getElementById('loader'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'js/hero.json'
});

		
$("#select").change(function () {
  var selected_option = $('#select').val();

  if (selected_option === '1') {
  	$('#harga').css('display','none');
  	$('#perusahaan').css('display','block');

  	$('#pro-ex').css('display','none');
  	$('#pro-com').css('display','block');

  }
  if (selected_option != '1') {
  	$('#harga').css('display','block');
  	$('#perusahaan').css('display','none');

  	$('#pro-ex').css('display','block');
  	$('#pro-com').css('display','none');
  }
})
			

// script 2 tanpa plugin
// var anim;
//     var elem = document.getElementById('loader')
//     var animData = {
//         container: elem,
//         renderer: 'svg',
//         loop: false,
//         autoplay: false,
//         rendererSettings: {
//             progressiveLoad:false,
//             preserveAspectRatio: 'xMidYMid slice'
//         },
//         path: 'js/hero.json'
//     };
// anim = bodymovin.loadAnimation(animData);

// $(window).scroll(function() {

//     // calculate the percentage the user has scrolled down the page
//     var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());

  
//     console.log(anim.currentRawFrame);
 
//     scrollPercentRounded = Math.round(scrollPercent);
   
//     /*console.log( (scrollPercentRounded / 100) * anim.totalFrames );*/
//     anim.goToAndStop( (scrollPercentRounded / 100) * 10000)
// });


// var robotAnimWindow = document.getElementById('loader'),
// robotAnimData = {
// 	wrapper: robotAnimWindow,
// 	animType: 'svg',
// 	loop: false,
// 	prerender: true,
// 	autoplay: true,
// 	path: 'js/hero.json',
// };

// var robotAnim = bodymovin.loadAnimation(robotAnimData);
// robotAnim.addEventListener('DOMLoaded', onRobotDOMLoaded);

// var tl = new TimelineMax();
// function onRobotDOMLoaded(e) {
//   tl.to({frame: 0}, 3, {
//     frame: robotAnim.totalFrames - 1,
//     onUpdate: function() {
//       robotAnim.goToAndStop(Math.round(this.target.frame), true)
//     },
//     ease: Linear.easeNone
//   })
// }

// let controller = new ScrollMagic.Controller({
//   globalSceneOptions: {triggerHook: 'onLeave'}
// });
// let animationScene = new ScrollMagic.Scene({
//     triggerElement: "#root",
//     duration: '125%'
//   })
//   .setTween(tl)
//   .addTo(controller);

//Navbar Function Control
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('#logo').css('display','flex');
          $('#logo').css('animation-name','logo');
          $('nav').css('background','rgba(9, 9, 11,0.85)');
          $('.left').css('animation-name','kiri');
          $('.right').css('animation-name','kanan');
          lottie.setDirection(-1);
          lottie.play();
    }

    else {
          $('#logo').css('display','none');
          $('#logo').css('animation-name','none');
          $('.left').css('animation-name','none');
          $('.right').css('animation-name','none');
          $('nav').css('background','rgba(9, 9, 11,0)');
          lottie.setDirection(1);
          lottie.play();
    }
});

//Local Scroll Init
$('body').localScroll();

//Light Case Init
jQuery(document).ready(function($) {
  $('a[data-rel^=lightcase]').lightcase();
});

//Seach Function
$(document).ready(function(){
  $("#search").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $(".grid li").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});

//Slider Init Design
var swiper = new Swiper('#design-swiper', {
  loop : true,
  autoplay : true,
  slidesPerView: 'auto',
  grabCursor: true,
  scrollbar: {
    el: '.swiper-scrollbar',
    hide: true,
  },      
});

//Slider Init Video
var swiper = new Swiper('#editing-swiper', {
  // loop : true,
  slidesPerView: 'auto',
  	navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});