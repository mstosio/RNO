jQuery(document).ready(function(){
    jQuery(".owl-carousel").owlCarousel({
        items: 1,
        mouseDrag: false,
        autoPlay: false,
        nav: true
    })
});

const nav = document.querySelector('.navbar');
const topNav = nav.offsetTop;

function fixedNavbar(){
    if(window.scrollY > 0){
        nav.style.transition = 'translate 2s';
        nav.classList.add ('fixed-nav');
    } else {
        nav.classList.remove('fixed-nav');
    }
}

window.addEventListener('scroll', fixedNavbar);