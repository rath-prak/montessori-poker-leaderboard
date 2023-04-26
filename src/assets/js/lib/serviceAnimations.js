/* =================
Service/precess section
================= */

const serviceAnimations = () => {

    //   let dataDiagram =  gsap.timeline({
    //     scrollTrigger: {
    //     trigger: ".data-diagram",
    //     start: "top 70%",
    //   },
    // });

    // dataDiagram.from(".data-diagram-03", 0.75, {
    //   drawSVG: 0,
    //   ease: "power1.in",
    // },"-=2");


    // // service section 01
    // let serviceSection01 =  gsap.timeline({
    //     scrollTrigger: {
    //     trigger: ".service-item-fade-01",
    //     start: "top 70%",
    //   },
    // });

    // serviceSection01.from(".service-item-fade-01", 0.75, {
    //   top: 40,
    //   autoAlpha: 0,
    //   stagger: 0.1,
    //     ease: Back.easeInOut,
    //     delay: 0.0
    // });

    // // service section 02
    // let serviceSection02 =  gsap.timeline({
    //   scrollTrigger: {
    //   trigger: ".service-item-fade-02",
    //   start: "top 70%",
    //   },
    // });

    // serviceSection02.from(".service-item-fade-02", 0.75, {
    //   top: 40,
    //   autoAlpha: 0,
    //   stagger: 0.1,
    //     ease: Back.easeInOut,
    //     delay: 0.0
    // });

    // // service section 03
    // let serviceSection03 =  gsap.timeline({
    //   scrollTrigger: {
    //   trigger: ".service-item-fade-03",
    //   start: "top 70%",
    //   },
    // });

    // serviceSection03.from(".service-item-fade-03", 0.75, {
    //   top: 40,
    //   autoAlpha: 0,
    //   stagger: 0.1,
    //     ease: Back.easeInOut,
    //     delay: 0.0
    // });

    //   // service section 04
    //   let serviceSection04 =  gsap.timeline({
    //     scrollTrigger: {
    //     trigger: ".service-item-fade-04",
    //     start: "top 70%",
    //     },
    //   });
  
    //   serviceSection04.from(".service-item-fade-04", 0.75, {
    //     top: 40,
    //     autoAlpha: 0,
    //     stagger: 0.1,
    //       ease: Back.easeInOut,
    //       delay: 0.0
    //   });

    //     // service section 05
    //     let serviceSection05 =  gsap.timeline({
    //       scrollTrigger: {
    //       trigger: ".service-item-fade-05",
    //       start: "top 70%",
    //       },
    //     });
    
    //     serviceSection05.from(".service-item-fade-05", 0.75, {
    //       top: 40,
    //       autoAlpha: 0,
    //       stagger: 0.1,
    //         ease: Back.easeInOut,
    //         delay: 0.0
    //     });

    //       // service section 05
    //       let serviceSection06 =  gsap.timeline({
    //         scrollTrigger: {
    //         trigger: ".service-item-fade-06",
    //         start: "top 70%",
    //         },
    //       });
      
    //       serviceSection06.from(".service-item-fade-06", 0.75, {
    //         top: 40,
    //         autoAlpha: 0,
    //         stagger: 0.1,
    //           ease: Back.easeInOut,
    //           delay: 0.0
    //       });

    // HORIZONTAL RULER GROW
    //THICK
    let rulerThick =  gsap.timeline({
        scrollTrigger: {
        trigger: ".ruler-anim",
        start: "top 70%",
      },
    });

    rulerThick.from('.ruler-anim', 4, {
      scaleX: 0,
      transformOrigin: "left",
      ease: "power2.out"
    });

    //THIN HORIZONTAL
    let rulerThin01 =  gsap.timeline({
        scrollTrigger: {
        trigger: ".service-ruler-thin-anim-01",
        start: "top 80%",
      },
    });

    rulerThin01.from('.service-ruler-thin-anim-01', 0.5, {
      autoAlpha: 0,
    });

    let rulerThin02 =  gsap.timeline({
        scrollTrigger: {
        trigger: ".service-ruler-thin-anim-02",
        start: "top 80%",
      },
    });

    rulerThin02.from('.service-ruler-thin-anim-02', 0.5, {
      autoAlpha: 0,
    });



    //SERVICE HIGHLIGHT
    const serviceItem = document.querySelectorAll('.service-item-wrapper');

    serviceItem.forEach((serviceItem, index) => {
      gsap.to(serviceItem, {
        scrollTrigger: {
          trigger: serviceItem,
          start: 'top bottom-=100',
          toggleActions: 'play none none reverse',
        }
      });
      
      ScrollTrigger.create({
        trigger: serviceItem,
        id: index+1,
        start: 'top center',
        end: () => `+=${serviceItem.clientHeight}`,
        toggleActions: 'play reverse none reverse',
        toggleClass: {targets: serviceItem, className: "is-active"},
      })
      
    })

  
  }
  
  export default serviceAnimations



  // serviceSection01.from(".service-item-fade-01", 0.75, {
  //   top: 40,
  //   autoAlpha: 0,
  //   stagger: 0.1,
  //     ease: Back.easeInOut,
  // });
  // serviceSection01.from(".data-icon-problem", 0.75, {
  //   drawSVG: 0,
  //   ease: "power1.in",
  // },"-=2");
  // serviceSection01.from(".data-icon-02", 1, {
  //   drawSVG: 0,
  //   ease: "power1.in",
  // },"-=1");
