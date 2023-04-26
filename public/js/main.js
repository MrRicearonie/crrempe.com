// Do this when page loads
$(document).ready(function () {
    animation();
});

function animation() {
    gsap.registerPlugin(ScrollTrigger);

    const timeline1 = gsap.timeline({
        scrollTrigger: {
            trigger: 'body',
            start: 'top top',
            endTrigger: '#human-done',
            end: 'bottom',
            scrub: true,
            pin: '#starting-page',
            markers: true
        }
    })

    // const timeline2 = gsap.timeline({
    //     scrollTrigger: {
    //         trigger: '#card-done',
    //         start: 'top top',
    //         endTrigger: '#human-done',
    //         end: 'bottom',
    //         scrub: true,
    //         markers: true
    //     }
    // })

    console.log($(window).innerHeight()*0.50)
    timeline1.to('#me-card', {     
        keyframes: {
            '0%': {y:(-$(window).innerHeight()*0.36)+($('#me-card').height()*0.53)},
            '8.33%': {y:(-$(window).innerHeight()*0.36)+($('#me-card').height()*0.53)+($('#hello').height()*0.75)},
            '12.5%': {y:(-$(window).innerHeight()*0.36)+($('#me-card').height()*0.53)+($('#hello').height()*0.75)},
            '20.83%': {y:(0)},
            '25%': {x: 0, rotation: 0},
            '33.33%': {x:(25*16), rotation:15},
            '37.5%': {x:(25*16), rotation:15},
            '50%': {x:(-25*16), rotation:-15},
            '54.167%': {x:(-25*16), rotation:-15},
            '66.67%': {x:(25*16), rotation:15},
            '70.83%': {x:(25*16), rotation:15},
            '78.4%': {x:(0), y:(0), rotation:0},
            '81%': {x:(0), y:(0), rotation:0},
            '100%': {x:(-160), y:(-$(window).innerHeight()), rotation:-10}
        },
        ease: 'none',
        duration: 1.2
    }, 0).to('#hi', {
        keyframes: {
            '0%': {x:(2.5*16)},
            '8.33%': {x:0},
            '100%': {x:0}
        },
        ease: 'none',
        duration: 1.2
    }, 0).to('#im', {
        keyframes: {
            '0%': {opacity:0},
            '8.33%': {opacity:100}
        },
        ease:Quad.easeInOut,
        duration: 1.2
    }, 0).to('#hello', {
        keyframes: {
            '0%': {y:(-$(window).innerHeight()*0.36), opacity:100},
            '12.5%': {y:(-$(window).innerHeight()*0.36), opacity:100},
            '20.83%': {y:(-$(window).innerHeight()*0.34), opacity:0}
        },
        ease: 'none',
        duration: 1.2
    }, 0).to('.hello-child', {
        keyframes: {
            '0%': {autoAlpha:1},
            '4.167%': {autoAlpha:1},
            '8.33%': {autoAlpha:0}
        },
        ease:Quad.easeInOut,
        duration: 1.2
    }, 0).to('#developer', {
        keyframes: {
            '0%': {autoAlpha:0},
            '25%': {autoAlpha:0},
            '25.1%': {autoAlpha:1},
            '43.67%': {autoAlpha:1},
            '43.75%': {autoAlpha:0}
        },
        duration: 1.2
    }, 0).to('#photographer', {
        keyframes: {
            '0%': {autoAlpha:0},
            '43.67%': {autoAlpha:0},
            '43.75%': {autoAlpha:1},
            '60.33%': {autoAlpha:1},
            '60.4%': {autoAlpha:0}
        },
        duration: 1.2
    }, 0).to('#snowboarder', {
        keyframes: {
            '0%': {autoAlpha:0},
            '60.33%': {autoAlpha:0},
            '60.4%': {autoAlpha:1},
            '78.33%': {autoAlpha:1},
            '78.4%': {autoAlpha: 0}
        },
        duration: 1.2
    }, 0).to('#human-black', {
        keyframes: {
            '0%': {autoAlpha:0},
            '78.3%': {autoAlpha:0},
            '78.4%': {autoAlpha: 1, scale: 1}
        },
        duration: 1.2
    }, 0).to('#human-white', {
        keyframes: {
            '0%': {scale:0, autoAlpha:1},
            '25%': {scale:1},
            '100%': {scale:250}
        },
        duration: 3
    }, '>').to('#human-red', {
        keyframes: {
            '0%': {scale:1, autoAlpha:1},
            '20%': {scale:1},
            '40%': {scale:250}
        },
        duration: 3
    }, '<').to('#human-orange', {
        keyframes: {
            '0%': {scale:1, autoAlpha:1},
            '30%': {scale:1},
            '50%': {scale:250}
        },
        duration: 3
    }, '<').to('#human-yellow', {
        keyframes: {
            '0%': {scale:1, autoAlpha:1},
            '40%': {scale:1},
            '60%': {scale:250}
        },
        duration: 3
    }, '<').to('#human-green', {
        keyframes: {
            '0%': {scale:1, autoAlpha:1},
            '50%': {scale:1},
            '70%': {scale:250}
        },
        duration: 3
    }, '<').to('#human-blue', {
        keyframes: {
            '0%': {scale:1, autoAlpha:1},
            '60%': {scale:1},
            '80%': {scale:250}
        },
        duration: 3
    }, '<').to('#human-purple', {
        keyframes: {
            '0%': {scale:1, autoAlpha:1},
            '70%': {scale:1},
            '90%': {scale:250}
        },
        duration: 3
    }, '<')
}