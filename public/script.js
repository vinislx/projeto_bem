gsap.registerPlugin(ScrollTrigger,ScrollSmoother,SplitText)

ScrollSmoother.create({
smooth:1.5,
effects:true
})

function animarPagina() {

gsap.from(".hero", {
    opacity:0,
    duration:1
})

gsap.from("picture:nth-child(2)",{
    y:60,
    duration:1.5,
})

gsap.from("picture:nth-child(1)",{
    y:-60,
    duration:1.5,
})

gsap.from(".card",{
    opacity:0,
    duration:1,
    y:30,
    filter:"blur(10px)",
    stagger:0.3,
    scrollTrigger:{
        trigger:".cards",
        start:"top 70% 80%",
        end:"bottom 50% 70%",
        scrub:true,
    }
})

gsap.from(".secaoObrigado ul li",{
    opacity:0,
    filter:"blur(10px)",
    stagger:0.2,
    x:30,
    scrollTrigger:{
        trigger:".secaoObrigado",
        start:"top 90% 20%",
        end:"bottom 50% 70%",
        scrub:true,
    }
})

// animação do footer

gsap.from("footer",{
    opacity:1,
    y:"30%",
    immediateRender:false,
    scrollTrigger:{
        trigger:"footer",
        start:"top 90% 20%",
        end:"bottom 100% 100%",
        scrub:true,
        invalidateOnRefresh:true,
    }
})

//letras animadas - hero

const gruptextSplit = document.querySelectorAll(".textSplit");

gruptextSplit.forEach((textUnicoSplit) => {

    const split = SplitText.create(textUnicoSplit,
        {type:"lines, words, chars,",
        mask: "lines"
        }
    );
    
    gsap.from(split.chars, {
        y:40,
        opacity:0,
        duration:.3,
        stagger:.03,
        scrollTrigger:{
            trigger:textUnicoSplit,
        }
    });
});
}


//animação surgindo - pre looder

const tl = gsap.timeline ({
    onComplete(){
        animarPagina()
        gsap.to("#preloader", {
            duration:.3,
            opacity:0,
            display:"none",
        })
    }
})

tl.to("#preloader path", {
    duration:1.8,
    strokeDashoffset:0,
})

tl.to("#preloader path", {
    fill: '#901618',
    strokeDashoffset:.5,
})