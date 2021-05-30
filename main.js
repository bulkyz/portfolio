// Hamburger menu consts
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

console.log("Home background thanks to https://unsplash.com/@orwhat");

// Hamburger menu toggle
toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active');
})
