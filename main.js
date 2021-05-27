// Parallax variables
let controller = new ScrollMagic.Controller();
let timeline = new TimelineMax();

// Hamburger menu consts
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

console.log("Home background thanks to https://unsplash.com/@orwhat");

// Hamburger menu toggle
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})

// Animations
timeline
    .to('.bg1', 3, {y: -500})
    .to('.content', 3, {top: '0%'}, '-=3')
    .fromTo('.my-story', {opacity: 0}, {opacity: 1, duration: 1})

// What triggers the animations
let scene = new ScrollMagic.Scene({
    triggerElement: 'section',
    duration: '200%',
    triggerHook: 0,

})

// Hooking up animation to the scene
    .setTween(timeline)
    .setPin('section')
    .addTo(controller)
