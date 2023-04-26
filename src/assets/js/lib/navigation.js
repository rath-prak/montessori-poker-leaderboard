import $ from 'jquery';

const navigation = () => {


  let $toggleBarsWrapper = $(".toggle-bar-wrapper");
  let $bar1 = $toggleBarsWrapper.find("b:nth-child(1)");
  let $bar2 = $toggleBarsWrapper.find("b:nth-child(2)");
  let $bar3 = $toggleBarsWrapper.find("b:nth-child(3)");
  let $toggleBars = $('.toggle-bars b')

  let $dropdownLink = $('.dropdown-link');
  let $dropdownMenu = $('.dropdown-menu');
  // let $sidenavWrapper = $('.sidenav-wrapper');
  let $overLayWrapper = $('.nav-fp-overlay-wrapper');
  let $sidenavDroplink = $('.sidenav-dropdown-link');
  let $sidenavDropMenu = $('.sidenav-dropdown-menu');

  // Hamburger toggle
  let tl = new TimelineMax({ paused:true, reversed:true });

  TweenMax.set($overLayWrapper,{autoAlpha:0});

  tl.to($bar1, 0.2, { y: 10,})
    .to($bar1, 0.5, { rotation: -135, backgroundColor: "#172b4d", ease: Back.easeOut})

  tl.to($bar3, 0.2, { y: -10,}, 0)
    .to($bar3, 0.5, { rotation: 135, backgroundColor: "#172b4d", ease: Back.easeOut}, "-=0.5")

  tl.to($bar2, 0.5, { opacity: 0, ease: Back.easeIn}, -0.5);

  // tl.to($sidenavWrapper, 0.5, {
  //   x: '0',
  //   ease: Back.easeIn,
  // }, 0.2)

    tl.to($overLayWrapper, 0.5, {
    autoAlpha: 1,
    ease: Back.easeIn,
  }, 0.5)


  tl.call(function() {
    $('.toggle-bar-light').toggleClass("toggle-bars-reverse");
  }, null, null, 0.25); 


  $toggleBarsWrapper.click(() => {
    tl.reversed() ? tl.play() : tl.reverse();
  });


  // navigation dropdown menu
  $dropdownLink.hover(function () {
    let dropdown = $(this).find($dropdownMenu)
     dropdown.slideDown('fast');
  },
  function () {
     $dropdownMenu.css('display', 'none');
  });


  // side nav secondary dropdown
  $sidenavDroplink.on('click', () => {
     $sidenavDropMenu.toggleClass('sidenav-active-menu');
  });

}

export default navigation;



// const navigation = () => {
//   let toggleBarsWrapper = $(".toggle-bar-wrapper");
//   let navMenuText = toggleBarsWrapper.find("span");
//   let bar1 = toggleBarsWrapper.find("b:nth-child(1)");
//   let bar2 = toggleBarsWrapper.find("b:nth-child(2)");
//   let bar3 = toggleBarsWrapper.find("b:nth-child(3)");
//   let overlayNavContent = $(".overlay-nav-content");
//   let overlayNavContent2 = $(".overlay-nav-content-2");
//   let overlayBlock = $(".overlay-block");

//     let tl = new TimelineMax({ paused:true, reversed:true });

//     tl.to(bar1, 0.3, { y: 10,})
//       .to(bar1, 0.6, { rotation: -135, ease: Back.easeOut});

//     tl.to(bar3, 0.3, { y: -10,}, 0)
//        .to(bar3, 0.6, { rotation: 135, ease: Back.easeOut}, "-=0.6");

//     tl.to(bar2, 0.6, { x: 100, opacity: 0, ease: Back.easeIn}, -0.6);
//     tl.to(navMenuText, 0.6, { x: 150, opacity: 0, ease: Back.easeIn}, -0.6);

//     tl.to(overlayNavContent, 1, { x: "0", ease: Back.easeOut }, 0.5);
//     tl.to(overlayNavContent2, 1, { x: "0", ease: Back.easeOut }, 0.5);
//     tl.to(overlayBlock, 1, { x: "0", }, 0.5);

//   toggleBarsWrapper.click(function(){
//     if(tl.reversed()){
//        tl.play();
//      }else{
//        tl.reverse();
//      };
//   });
// }

// export default navigation;
