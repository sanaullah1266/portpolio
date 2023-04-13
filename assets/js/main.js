window.onscroll = function() {scrollFunction()};

function scrollFunction() {
 
// When the user scrolls down 500px from the top of the document, show the button
   if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none"; 
  
  }

}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
 window.scrollTo({top: 0});
}
$(function(){
     $('#open').click(function(){
    $("#mySidenav").addClass('lft');
  });
      $('#close').click(function(){
    $("#mySidenav").removeClass('lft');
  });
 });

	$(window).scroll(function(){
      $('.fade').each(function(i){
        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window =$(window).scrollTop() + $(window).height();

        if(bottom_of_window > bottom_of_object){
          $(this).animate({'opacity':'1'},900);
        }
      });
   });
   window.addEventListener("DOMContentLoaded",() => {
    const ms = new LogoAnimation("#logo",".logo");
  });
  
  class LogoAnimation {
    constructor(buttonQS,svgQS) {
      this.button = document.querySelector(buttonQS);
      this.svg = document.querySelector(svgQS);
      this.lastAnimPart = this.svg?.querySelector(`${svgQS} [data-anim]`);
      this.playClass = "logo--running";
  
      this.button?.addEventListener("click",this.replay.bind(this));
      this.lastAnimPart?.addEventListener("animationend",this.stop.bind(this));
  
      this.replay();
    }
    replay() {
      if (!this.button.disabled) {
        this.button.disabled = true;
        this.svg?.classList.add(this.playClass);
      }
    }
    stop() {
      this.button.disabled = false;
      this.svg?.classList.remove(this.playClass);
    }
  }






  
  
 $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(".menu-toggle").on('click', function() {
  $(this).toggleClass("on");
  $('.menu-section').toggleClass("on");
  $("nav ul").toggleClass('hidden');
});
jQuery(document).ready(function($){
	// browser window scroll (in pixels) after which the "back to top" link is shown
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

  /*Downloaded from https://www.codeseek.co/ezra_siton/mixitup-fancybox3-JydYqm */
    // 1. querySelector
    var containerEl = document.querySelector(".portfolio-item");
    // 2. Passing the configuration object inline
    //https://www.kunkalabs.com/mixitup/docs/configuration-object/
    var mixer = mixitup(containerEl, {
      animation: {
        effects: "fade translateZ(-100px)",
        effectsIn: "fade translateY(-100%)",
        easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
      }
    });
    // fancybox insilaze & options //
    $("[data-fancybox]").fancybox({
      loop: true,
      hash: true,
      transitionEffect: "slide",
      /* zoom VS next////////////////////
      clickContent - i modify the deafult - now when you click on the image you go to the next image - i more like this approach than zoom on desktop (This idea was in the classic/first lightbox) */
      clickContent: function(current, event) {
        return current.type === "image" ? "next" : false;
      }
    });

});









function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
