function menu(x) {
  x.classList.toggle("change");

  	if($('.menu-btn').hasClass('change')){
		$('#mobile').css('height', '100%');
		$('#mobile').css('opacity', '1');
	}else{
		$('#mobile').css('height', '0');
		$('#mobile').css('opacity', '0');
	}
}

$(".list-design").click(function(){
	$(window).scrollTo('#hire');
	$('#select').val('2');
});

$(".list-video").click(function(){
	$(window).scrollTo('#hire');
	$('#select').val('3');
});

$(".list-web").click(function(){
	$(window).scrollTo('#hire');
	$('#select').val('4');
});

//base script
lottie.loadAnimation({
  container: document.getElementById('loader'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'js/hero.json'
});
		
$("#select").change(function () {
  // Ubah Ke Value
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

//Navbar Function Control
$(window).on("scroll", function() {
    if($(window).scrollTop()) {
          $('#logo').css('display','flex');
          $('#logo').css('animation-name','logo');
          $('nav').css('background','rgba(0, 0, 0,0.85)');
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
          $('nav').css('background','rgba(0, 0, 0,0)');
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