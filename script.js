// gsap.from("#box",{
//     x:0,
//     duration:2,
//     delay:1,
//     backgroundColor:'yellow',
//     // rotate:360,
    
// })
// gsap.to("#box",{
//      x:500,
//      rotate:360,
//      duration:2,
//      delay:1,
//      backgroundColor:'red',
//      rotate:360,
//      borderRadius:'50%',
//      scale:0.5,
//      repeat:1,
//      yoyo:true,
// })

// gsap.from('h1',{
//     y:50,
//    duretion:2,
//    opacity:0,
//    delay:1,
//    stagger:0.2,
//    repeat:- 1,
//    yoyo:true,
// })


gsap.from("#page1 #box",{
    scale:0,
    rotate:360,
    duration:2,
    delay:1,

})
gsap.from("#page2 #box", {
  scale: 0,
  rotate: 360,
  duration: 2,
  delay: 1,
  scrollTrigger: {
    trigger: "#page2 #box",
    scroller: "body",   // optional unless you're using smooth-scroll libraries
    start: "top 80%",   // when #box top hits 80% of viewport
    end: "bottom 20%",
    markers: true,
    scrub:  5      
  }
});


 
gsap.from("#page3 #box",{
    scale:0,
    rotate:360,
    duration:2,
    delay:1,

})

