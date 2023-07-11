let tl = gsap.timeline();

tl.from('.nav ',{
    y: -100,
    duration: 1,
    delay:0.5,
    opacity:0,
})

tl.from('.container>h1',{
    // x: -200,
    y:100,
    duration:0.7,
    opacity:0,
    stagger: 0.2
})

tl.from('.container>img',{
    scale:0,
    opacity:0,
    stagger:0.2
})

tl.from('h5',{
    scale:0,
    opacity:0
})

tl.to('h5',{
    
    y:40,
    repeat:-1,
    duration:0.5,
    yoyo:1,
    // yoyo:true,
})