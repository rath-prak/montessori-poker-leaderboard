const fadeInElement = () => {
    let fadeInElement = document.getElementsByClassName('fade-in');

    // var tl = gsap.timeline({
    //     defaults:{duration: 1},
    //     scrollTrigger: {
    //         trigger: '.homeIntroSection,',
    //         start: "center bottom"
    //     }
    // });

    // tl.from(fadeInElement, {
    //     y: -70, 
    //     stagger: 0.2, 
    //     opacity: 0,
    //     ease: Back.easeInOut
    // })

    // let tl = gsap.timeline({
    //     scrollTrigger: {
    //     trigger: fadeInElement,
    //     start: "center bottom",
    //   },
    // });

    // tl.from(fadeInElement, {
    //     y: -70, 
    //     stagger: 0.2, 
    //     opacity: 0,
    //     ease: Back.easeInOut
    // })

    let tl = gsap.timeline({
        scrollTrigger: {
        trigger: ".fade-in",
        start: "center bottom",
        // markers: true,
        // scrub: 3,
        // toggleActions: "restart pause reverse pause",
      },
  });
  
      tl.from(".fade-in", {
          y: -70, 
          stagger: 0.2, 
          opacity: 0,
          ease: Back.easeInOut
      })

}
  
export default fadeInElement;
  
