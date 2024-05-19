gsap.registerPlugin(ScrollTrigger);


const text = new SplitType('#text')

gsap.from(text.chars, {
    scrollTrigger: {
trigger: '#text',
scroller: 'body',
toggleActions: "restart reset restart reset",

    },
y: 100,
x: 100,
opacity: 0,
stagger: 0.1,
duration: 0.2
})

gsap.from(".about-text", {
    scrollTrigger: {
        scroller: 'body',
        trigger: '.about-text',
        toggleActions: "restart reset restart reset",

    },
    opacity: 0,
    yPercent: 100,
    delay: 0.1,
    duration: 0.7

})


gsap.from(".card", {
    scrollTrigger: {
        scroller: 'body',
        trigger: '.card',
        toggleActions: "restart reset restart reset",

    },
    opacity: 0,
    delay: 0.1,
    duration: 1,
    stagger: 0.5,

})


document.addEventListener("mousemove", (mouse) => {
    const xPos = mouse.pageX + -670+"px"
    const yPos = mouse.pageY + -340+"px"

gsap.to(".circle", {
    x: xPos,
    y: yPos,
})
})

gsap.to('.flower1', {
    rotation: 360, 
    transformOrigin:"center",
    scale:1.2,
    duration: 5,
    ease: Power0.easeNone,  
    repeat:-1
})

gsap.to('.flower', {
    scrollTrigger: {
        trigger: '.flower',
        scroller: 'body',
        toggleActions: "restart reset restart reset",
    },
    rotation: 360, 
    delay: 0.5,
    transformOrigin:"center",
    scale: 0.8,
    duration: 1,
    ease: Power0.easeNone,  
    stagger: 0.5,
})


const lenis = new Lenis({
    duration: 3.5

})




lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time)=>{
  lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)


const nav = document.querySelector('nav')

