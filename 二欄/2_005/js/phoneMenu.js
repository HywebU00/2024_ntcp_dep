// $(function(){

// 	$('.openMenu').addClass('show');

// 	$('.openMenu').click( function(){
// 		$('.closeMenu,.mobileMenu,.mlmenu,.mpwrap,.nav').addClass('show');
// 		$('.openMenu').removeClass('show');
// 	})

// 	$('.closeMenu').click( function(){
// 		$('.openMenu').addClass('show');
// 		$('.closeMenu').removeClass('show');
// 		$('.mobileMenu').removeClass('show');
// 		$('.mlmenu').removeClass('show');
// 		$('.mpwrap').removeClass('show');
// 		$('.nav').removeClass('show');

// 	})
// })

$(function () {
  $('.openMenu').addClass('show');

  $('.openMenu').click(function () {
    $('.closeMenu,.mobileMenu,.mlmenu,.mpwrap,.nav').addClass('show');
    $('.openMenu').removeClass('show');
    $('.mlmenu.show a').eq(0).focus();
    $('.mlmenu a').each(function () {
      $(this).removeAttr('tabindex');
    });
    $('.closeMenu').show();
  });

  function checkMobile() {
    $('.mlmenu a').each(function () {
      if ($(window).width() < 800) {
        $(this).attr('tabindex', '-1');
      } else {
        $(this).removeAttr('tabindex');
      }
    });
  }

  $(window).resize(function () {
    checkMobile();
  });

  checkMobile();

  $('.mlmenu a')
    .eq($('.mlmenu a').length - 1)
    .on('keydown', function (e) {
      console.log('a');
      $('.mobileMenu .openMenu').focus();
    });

  $('.closeMenu').click(function () {
    $('.openMenu').addClass('show');
    $('.closeMenu').removeClass('show');
    $('.mobileMenu').removeClass('show');
    $('.mlmenu').removeClass('show');
    $('.mpwrap').removeClass('show');
    $('.nav').removeClass('show');
    $('.closeMenu').hide();
    $('.mlmenu a').each(function () {
      $(this).attr('tabindex', '-1');
    });
  });
});