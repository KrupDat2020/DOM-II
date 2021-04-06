// Your code goes here
const mainHeader = document.querySelector('.main-navigation'); 
const firstContainer = document.querySelector('.container');
const h1Logo = document.querySelector('.logo-heading');
const links = document.querySelector('.nav-link');
const contHome = document.querySelector('.home');
const headIntro = document.querySelector('.intro');
const sectContent = document.querySelector('.content-section');
const sectText = document.querySelector('.text-content');
const sectContent2 = document.querySelector('.inverse-content');
const destContent = document.querySelector('.content-destination');

mainHeader.addEventListener('click', function(event) {
    document.body.style.backgroundColor = 'yellow';
});

firstContainer.addEventListener('mouseover', function (event) {
    alert('youre about to change this page');
});

h1Logo.addEventListener('keydown', function (event) {
 if (event.key === 'Space') {
console.log('you have hit the space bar');
 }
});