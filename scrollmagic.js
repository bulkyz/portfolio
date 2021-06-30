// Parallax variables
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// Animations
timeline
    .to('.bg1', 3, {y: -500})
    .to('.content', 3, {top: '0%'}, '-=3')
    .fromTo('.my-story-wrapper', {opacity: 0}, {opacity: 1, duration: 1})
    .fromTo('.my-story-button-container', {opacity: 0}, {opacity: 1, duration: 1})

// What triggers the animations
let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '100%',
    triggerHook: 0,
})

// Hooking up animation to the scene
    .setTween(timeline)
    .setPin('section')
    .addTo(controller)
