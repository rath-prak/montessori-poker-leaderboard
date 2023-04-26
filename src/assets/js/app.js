gsap.registerPlugin( ScrollTrigger );
gsap.registerPlugin( MotionPathPlugin );
// gsap.registerPlugin( DrawSVGPlugin );

// import bodymovin from 'bodymovin';

import navAutoHide from './lib/navAutoHide';
import navigation from './lib/navigation';
import menuUnderline from './lib/menuUnderline';
import fadeInElement from './lib/fadeInElement';
import floatElement from './lib/floatElement';
import serviceAnimations from './lib/serviceAnimations';
import pageTransition from './lib/pageTransition';



// const cursor = document.querySelector('.custom-cursor');

// document.addEventListener('mousemove', e => {
//   cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
// })


$(document).ready(function(){

  // pageTransition();
  navigation();
  navAutoHide();
  // menuUnderline();
  // serviceAnimations();
  // floatElement();

 


 
      TweenMax.to('.pulse-button circle:nth-child(1)', 4, {
      attr: {
        r: 30,
        "stroke-width": 1,
        "stroke-opacity": 1,
      },
        opacity: 0,
        repeat: -1,
        delay: 1,
      });
  
      TweenMax.to('.pulse-button circle:nth-child(2)', 4, {
      attr: {
        r: 30,
        "stroke-width": 1,
        "stroke-opacity": 1
      },
      opacity: 0,
      repeat: -1,
      });
  
      TweenMax.to('.pulse-button circle:nth-child(3)', 2, {
      attr: {
        r: 2
      },
        repeat: -1,
        yoyo: true,
        ease: Power2.easeOut,
      });
      

});






