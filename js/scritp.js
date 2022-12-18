'use strict'

/* 
    # preload
    # loading will be after document is loaded
*/


const preloader = document.querySelector('[data-preload]');

window.addEventListener("load", () => {
    preloader.classList.add("loaded");
    document.body.classList.add("loaded");
});

/* 
    # menu
    # Add event listener on multiple elements 
*/

const addEventOnElements = function (elements, enventType, callBack) {
    for (let i = 0, len = elements.length; i < len; i++) {
        elements[i].addEventListener(enventType, callBack);
    }
}

/* 
    #Navbar
    #Variables
*/
const navbar = document.querySelector("[data-navbar]");
const navbarToggler = document.querySelectorAll("[data-menu-toggle]");
const overlay = document.querySelector("[data-overlay]");
const menuLinks = document.querySelectorAll("[data-links]");



/* 
    #Navbar
    #Function
*/

const toggleNavbar = function () {
    navbar.classList.toggle("active");
    overlay.classList.toggle("active");
    document.body.classList.toggle("nav__active");
}

addEventOnElements(navbarToggler, "click", toggleNavbar);
addEventOnElements(menuLinks, "click", toggleNavbar)

/* 
    #Header
    #when you do scroll 
*/

const header = document.querySelector("[data-header]");

let lasScrollPos = 0;

const hideHeader = function () {
    const isScrollBottom = lasScrollPos < window.scrollY;

    if (isScrollBottom) {
        header.classList.add("hide")
    } else {
        header.classList.remove("hide")
    }

    lasScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
    if (this.window.scrollY >= 50) {
        header.classList.add("active")
        hideHeader();
    } else {
        header.classList.remove("active")
    }
})

/* 
    #Hero selider
*/

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItem = document.querySelectorAll("[data-slider-item]");
const heroSliderPrev = document.querySelector("[data-prev-btn]");
const heroSlidernext = document.querySelector("[data-next-btn]");

let currentSliderPos = 0;
let lastAtiveSliderItem = heroSliderItem[0];

const updateSliderPos = function () {
    lastAtiveSliderItem.classList.remove("active");
    heroSliderItem[currentSliderPos].classList.add("active");
    lastAtiveSliderItem = heroSliderItem[currentSliderPos];
}

const sliderNext = function () {
    if (currentSliderPos >= heroSliderItem.length - 1) {
        currentSliderPos = 0;
    } else {
        currentSliderPos++;
    }
    updateSliderPos();
}

heroSlidernext.addEventListener("click", sliderNext);


const sliderprev = function () {
    if (currentSliderPos <= heroSliderItem.length - 1) {
        currentSliderPos = heroSliderItem.length - 1;
    } else {
        currentSliderPos--;
    }
    updateSliderPos();
}

heroSliderPrev.addEventListener("click", sliderprev);


/* 
    #Auto slider
*/

let autoSliderIterval;

const sutoSlider = function () {
    autoSliderIterval = setInterval(function () {
        sliderNext();
    }, 7000)
}

addEventOnElements([heroSlidernext, heroSliderPrev], "mouseover", function () {
    clearInterval(autoSliderIterval);
});

addEventOnElements([heroSlidernext, heroSliderPrev], "mouseout", sutoSlider);

window.addEventListener("load", sutoSlider)

