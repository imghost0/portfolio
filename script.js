// const scroll = new LocomotiveScroll({
//     el: document.querySelector('.main'),
//     smooth: true
// });



function locomotiveAnimation(){
  gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});





ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();

}
locomotiveAnimation()


Shery.imageEffect(".page2 .pic1 img", {
    style: 3, 
    // debug: true, 
    config: {
        "uFrequencyX":{"value":12,"range":[0,100]},
        "uFrequencyY":{"value":12,"range":[0,100]},
        "uFrequencyZ":{"value":10,"range":[0,100]},
        "geoVertex":{"range":[1,64],"value":31.78},
        "zindex":{"value":-9996999,"range":[-9999999,9999999]},
        "aspect":{"value":1},"ignoreShapeAspect":{"value":true},
        "shapePosition":{"value":{"x":0,"y":0}},
        "shapeScale":{"value":{"x":0.5,"y":0.5}},
        "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
        "shapeRadius":{"value":0,"range":[0,2]},
        "currentScroll":{"value":0},"scrollLerp":{"value":0.07},
        "gooey":{"value":false},"infiniteGooey":{"value":false},
        "growSize":{"value":4,"range":[1,15]},
        "durationOut":{"value":1,"range":[0.1,5]},
        "durationIn":{"value":1.5,"range":[0.1,5]},
        "displaceAmount":{"value":0.5},"masker":{"value":true},
        "maskVal":{"value":1.79,"range":[1,5]},
        "scrollType":{"value":0},"noEffectGooey":{"value":true},
        "onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},
        "metaball":{"value":0.2,"range":[0,2]},
        "discard_threshold":{"value":0.5,"range":[0,1]},
        "antialias_threshold":{"value":0.002,"range":[0,0.1]},
        "noise_height":{"value":0.5,"range":[0,2]},
        "noise_scale":{"value":10,"range":[0,100]}},
         
    
  });

  Shery.imageEffect(".page2 .pic2 img", {
    style: 1,
    config: {
      "a":{"value":0,
        "range":[0,30]},
        "b":{"value":-0.92,
          "range":[-1,1]},
          "zindex":{"value":-9996999,"range":[-9999999,9999999]},
          "aspect":{"value":0.42346423229066094},
          "ignoreShapeAspect":{"value":true},
          "shapePosition":{"value":{"x":0,"y":0}},
          "shapeScale":{"value":{"x":0.5,"y":0.5}},
          "shapeEdgeSoftness":{"value":0,"range":[0,0.5]},
          "shapeRadius":{"value":0,"range":[0,2]},
          "currentScroll":{"value":0},"scrollLerp":{"value":0.07},
          "gooey":{"value":false},"infiniteGooey":{"value":false},
          "growSize":{"value":4,"range":[1,15]},
          "durationOut":{"value":1,"range":[0.1,5]},
          "durationIn":{"value":1.5,"range":[0.1,5]},
          "displaceAmount":{"value":0.5},"masker":{"value":true},
          "maskVal":{"value":1.46,"range":[1,5]},
          "scrollType":{"value":0},"geoVertex":{"range":[1,64],
            "value":31.78},"noEffectGooey":{"value":true},
            "onMouse":{"value":1},
            "noise_speed":{"value":0.2,"range":[0,10]},
            "metaball":{"value":0.2,"range":[0,2]},
            "discard_threshold":{"value":0.5,"range":[0,1]},
            "antialias_threshold":{"value":0.002,"range":[0,0.1]},
            "noise_height":{"value":0.5,"range":[0,2]},
            "noise_scale":{"value":10,"range":[0,100]},
            "uFrequencyX":{"value":12,"range":[0,100]},
            "uFrequencyY":{"value":12,"range":[0,100]},
            "uFrequencyZ":{"value":10,"range":[0,100]}}
         
    
  });
  Shery.textAnimate(".nav-bar h2 .name ", {
    style: 1,
    y: 10,
    delay: 0.2,
    duration: 0.4,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.textAnimate(".nav-bar h2 .green ", {
    style: 1,
    y: 10,
    delay: 0.2,
    duration: 0.4,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.textAnimate(".nav-bar .right-nav a", {
    style: 2,
    y: 10,
    delay: 0.2,
    duration: 5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });

gsap.from(".page2 .pic1 h1",{
    x:-100,
    duration:2,
    delay:2,
    ease:"elastic",
    opacity:0

})
Shery.mouseFollower();
Shery.makeMagnet(".nav-bar .right-nav a",{
  ease: "cubic-bezier(0.23, 1, 0.320, 1)",
  duration: 1,
  zindex:99
});
Shery.hoverWithMediaCircle(".big-text1 h1 ", {
  images: ["https://img.freepik.com/free-vector/flat-magh-bihu-illustration_23-2149935766.jpg?t=st=1737820858~exp=1737824458~hmac=ebe8b3822b3c3724beb34c33ccd1d67375ac2c9c493b434bbe6b3450c99401e7&w=740", "image2.jpg", "image3.jpg"] /*OR*/,
  //videos: ["video1.mp4", "video2.mp4"],
});
function wheelAnimation() {
  window.addEventListener("wheel", function(dets) {
    if (dets.deltaY > 0) {
      gsap.to(".marque", {
        transform: "translateX(-100%)",
        duration: 20,
        repeat: -1,
        ease: 'none'
      });
      gsap.to(".marque img", {
        rotate: 180
      });
    } else {
      gsap.to(".marque", {
        transform: "translateX(0%)",
        duration: 10,
        repeat: -1,
        ease: 'none'
      });
      gsap.to(".marque img", {
        rotate: 0
      });
    }
  });
  let startTouch = 0;
  let endTouch = 0;

  function handleTouchStart(e) {
    startTouch = e.touches[0].clientY; 
  }
  function handleTouchMove(e) {
    endTouch = e.touches[0].clientY; 
    const distance = startTouch - endTouch;

    if (Math.abs(distance) > 10) {
            if (distance > 0) {
        gsap.to(".marque", {
          transform: "translateX(-100%)",
          duration: 20,
          repeat: -1,
          ease: 'none'
        });
        gsap.to(".marque img", {
          rotate: 180
        });
      }
      else {
        gsap.to(".marque", {
          transform: "translateX(0%)",
          duration: 10,
          repeat: -1,
          ease: 'none'
        });
        gsap.to(".marque img", {
          rotate: 0
        });
      }

      startTouch = endTouch;  
    }
  }
  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchmove', handleTouchMove);
}

wheelAnimation();


gsap.to(".page3 h1",{
  transform:"translateX(-300%)",
  scrollTrigger:{
    trigger:".page3",
    scroller:".main",
    // markers:true,
    start:"top -10%",
    end:"top -180%",
    scrub:6,
    pin:true
  }
})
