$(document).ready(function(){

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        responsiveClass:true,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                nav:true,
                loop:true
            }
        }
    })

});

const btn_open_menu = document.querySelector('.btn_menu');
const btn_close_menu = document.querySelector('.btn_close_menu');
const menu = document.querySelector('nav.m-menu');

btn_open_menu.addEventListener('click', () => {

    menu.classList.add('open_menu');

});

btn_close_menu.addEventListener('click', () => {

    menu.classList.remove('open_menu');

});


const open_search = document.getElementById('open_search');
const search_over = document.querySelector('.search_over');
const btn_slose_search = document.getElementById('btn_slose_search');

open_search.addEventListener('click', () => {

    search_over.classList.add('open_search');

});

btn_slose_search.addEventListener('click', () => {

    search_over.classList.remove('open_search');

});

const item_has_children = document.querySelectorAll('li.menu-item-has-children > a');

item_has_children.forEach((item) => {

    item.addEventListener('click', (e) => {
        e.preventDefault();
    });

})