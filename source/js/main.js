const burger = document.querySelector('.burger');
const burgerLines = document.querySelector('.burger').children;
const navbar = document.querySelector('.navbar');
const mobileMenu = document.querySelector('.mobile-menu');
const html = document.getElementsByTagName('html')[0];
const headerContent = document.querySelector('.header__content');
const header = document.querySelector('.header');
const navbarLink = document.querySelectorAll('.navbar__link');

//menu burger
burger.addEventListener('click', function () {
    burger.classList.toggle('active');
    for (let i = 0; i < burgerLines.length; i++) {
        burgerLines[i].classList.toggle('active');
    }
    mobileMenu.classList.toggle('open');
    if (window.innerWidth <= 767) {
        html.classList.toggle('scroll-locked');
    }    
});

// close mobile menu if menu link get clicked
for (let i = 0; i < navbarLink.length; i++) {
    navbarLink[i].addEventListener('click', function() {
        if (burger.classList.contains('active')) {
            burger.classList.remove('active');
            mobileMenu.classList.remove('open');
            html.classList.remove('scroll-locked');
            for (let i = 0; i < burgerLines.length; i++) {
                burgerLines[i].classList.remove('active');
            }        
        }
    });
};

//toggle mobile menu  
function toggleMobileMenu () {
    if ( window.innerWidth <= 991 ){
        mobileMenu.appendChild(navbar);
    } else {
        headerContent.appendChild(navbar);
    } 
};

toggleMobileMenu();
window.addEventListener('resize', toggleMobileMenu);

// change header color and opacity on scrolling
function addHeaderBackgroundOnScroll() {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
      header.style.backgroundColor = "rgba(255, 213, 42, 0.9)";
    } else {
        header.style.backgroundColor = null;
    }
};

addHeaderBackgroundOnScroll();
window.addEventListener('scroll', addHeaderBackgroundOnScroll);


// parallax
//main section
let mainParallax = document.querySelector('.main-parallax');
let parallaxInstanceMain = new Parallax(mainParallax, {
    relativeInput: true
});
//where section
let whereParallax = document.querySelector('.where-parallax');
let parallaxInstanceWhere = new Parallax(whereParallax, {
    relativeInput: true
});

//toggle parallax on mobile and back  
function toggleParralax () {
    if ( window.innerWidth <= 991 ){
        parallaxInstanceMain.disable();
        parallaxInstanceWhere.disable();
    } else {
        parallaxInstanceMain.enable();
        parallaxInstanceWhere.enable();
    } 
};

toggleParralax();
window.addEventListener('resize', toggleParralax);


// JQuery scripts

$(function() {
    // add smooth scrolling
    $('.navbar__link').on('click', function(event) {
        if (this.hash !== '') {
            event.preventDefault();

            const hash = this.hash;
            const headerHeight = $('.header').outerHeight();            
            const target = $(hash).offset().top - headerHeight;

            $('html, body').animate (
                {
                    scrollTop: target
                },
                800
            );
        }
    });
    // accordion animation
    $('.faq-accordion__header').on('click', function(event) {
        $('.faq-accordion__header').not(this).removeClass('active').next().slideUp(300);
        $(this).toggleClass('active').next().slideToggle(300);
    });
    //mobile prices table
    $('.participant-btn').on('click', function(event) {
        let participant = $(this).attr('data-participant');
        let targetTableColumn = $('.table-status[data-participant="'+participant+'"]');
        $('.participant-btn').not(this).removeClass('active');
        $(this).addClass('active');
        $('.table-status').removeClass('active');
        targetTableColumn.addClass('active');
    });    
});

