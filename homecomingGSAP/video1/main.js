gsap.to('#box',{
    x: 800,
    y:300,
    duration: 4,
    delay: 1,
    backgroundColor:"blue",
    rotate: 360,
    scale:1.5,
    // repeat:1,
    
})

// gsap.from('#box',{
//     x: 800,
//     y:300,
//     duration: 4,
//     delay: 1,
//     backgroundColor:"crimson",
//     rotate: 360,
//     scale:1,
    
// })

//need repeat property for yoyo to work
gsap.to('h1',{
    x:200,
    duration:1.5,
    delay:1,
    yoyo:true,
    repeat:1
})
gsap.to('h2',{
    x:200,
    duration:1.5,
    delay:1,
    yoyo:true,
    repeat:1
})
gsap.to('h3',{
    x:200,
    duration:1.5,
    delay:1,
    repeat:1,
    yoyo:true,
})

// /*
gsap.to('h4',{
    x:200,
    duration:1.5,
    delay:1,
    stagger:1, //To effect same name of element 
})
// */

// /*
//to run synchornously
let tl = gsap.timeline()
tl.to('.a',{
    x:-200,
    duration:1.5,
})
tl.to('.b',{
    x:-200,
    duration:1.5,
})
tl.to('.c',{
    x:-200,
    duration:1.5,
})
// */