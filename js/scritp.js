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
