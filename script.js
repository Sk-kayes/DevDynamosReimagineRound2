let main = document.querySelector(".main")
function mainAni() {
    Shery.imageEffect(".back", {style: 5, config: {"a":{"value":1.5,"range":[0,30]},"b":{"value":-0.39,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":2.022411878819765},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":3.35,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.53,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.37,"range":[0,2]},"noise_scale":{"value":10.69,"range":[0,100]}}, gooey:true});
}
mainAni()

function pageAni() {
let containers = document.querySelectorAll(".container")
containers.forEach(function(ele) {
    let h1s = ele.querySelectorAll("h1")
    let idx = 0
    main.addEventListener("click", function() {
        let ani = false
        if(!ani) {
            ani = true
            gsap.to(h1s[idx], {
                top: "-=100%",
                duration: 1,
                ease: Expo.easeInOut,
                onComplete: function() {
                    gsap.set(this._targets[0], {top: "100%"}),
                    ani = false
                }
            })
            idx === h1s.length - 1 ? idx=0 : idx++
            gsap.to(h1s[idx], {
                top: "-=100%",
                duration: 1,
                ease: Expo.easeInOut
            })
        }
        
    })
})
}
pageAni()

function photoAni() {
    let photos = document.querySelectorAll(".img-container img")
    let idx = 0
    main.addEventListener("click", function() {
        gsap.to(photos[idx], {
            top: "-=100%",
            ease: "Expo.easeInOut",
            duration: 1,
            onComplete: function() {
                gsap.set(this._targets[0], {top: "100%"});
            }
        })
        idx === photos.length-1 ? idx = 0 : idx++
        gsap.to(photos[idx], {
            top: "-=100%",
            ease: "Expo.easeInOut",
            duration: 1
        })
    })
}
photoAni()