const navAutoHide = () => {

  var c, currentScrollTop = 0,
     navbar = $('.nav-wrapper, .toggle-bar-wrapper');

 $(window).scroll(function () {
    var a = $(window).scrollTop();
    var b = navbar.height();
   
    currentScrollTop = a;
   
    if (c < currentScrollTop && a > b + b) {
      navbar.addClass("scrollup");
      
    } else if (c > currentScrollTop && !(a <= b)) {
      navbar.removeClass("scrollup");
    }
    c = currentScrollTop;

    if ($(window).scrollTop() >= 30) {
      $('header').addClass('nav-shadow');
    }
    else {
        $('header').removeClass('nav-shadow');
    }
});




}

export default navAutoHide