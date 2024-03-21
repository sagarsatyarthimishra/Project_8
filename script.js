var tm=gsap.timeline();

tm.from("#navbar h3",{
    y:-60,
    duration:1,
    opacity:0,
    delay:0.4,
    stagger:0.3//provide gap duration between elements
})

tm.from("#center h1",{
   x:-500,
   opacity:0,
   duration:1,
   stagger:0.6
})

tm.from("img",{
    x:100,
    rotate:95,
    opacity:0,
    duration:1,
    stagger:1,
    overflow:"hidden"
})
tm.from("footer",{
    y:60,
    duration:1,
    opacity:0,
    delay:0.4,
    stagger:0.3
})