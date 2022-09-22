/*=============== SHOW MENU ===============*/

const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* ===== MENU SHOW ===== */
/* Validate if constant exists */

if (navToggle) {

    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });
}
/* ===== MENU HIDDEN ===== */
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
    });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    this.scrollY >= 50 ? header.classList.add('header-bg') 
                       : header.classList.remove('header-bg')
}
window.addEventListener('scroll', scrollHeader)


/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 2500,
})

sr.reveal(`.home__images`, {distance: '120px', delay: 400})
sr.reveal(`.home__title`, {delay: 1000})
sr.reveal(`.home__description`, {delay: 1200})
sr.reveal(`.home__button`, {delay: 1400})
sr.reveal(`.home__footer`, {delay: 1600})
sr.reveal(`.home__data div`, {origin: 'top', interval: 100, delay: 1800})
sr.reveal(`.price__title`, {origin: 'left', interval: 100, delay: 200})
sr.reveal(`.box-3`, {origin: 'top', interval: 50, delay: 200})
sr.reveal(`.box-2`, {origin: 'bottom', interval: 50, delay: 200})
sr.reveal(`.box-1`, {origin: 'left', interval: 50, delay: 200})
sr.reveal(`.all-plans-title`, {origin: 'left', interval: 50, delay: 200})
sr.reveal(`.all-plans-button`, {origin: 'right', interval: 50, delay: 1000})
sr.reveal(`.faq-area-title`, {origin: 'left', interval: 50, delay: 200})
sr.reveal(`.faq-area-description`, {origin: 'bottom', interval: 50, delay: 1000})
sr.reveal(`.resource-title`, {origin: 'left', interval: 50, delay: 200})
sr.reveal(`.vps-title`, {origin: 'left', interval: 50, delay: 200})
sr.reveal(`.email-title-ex`, {origin: 'left', interval: 50, delay: 200})
sr.reveal(`.box-email`, {origin: 'bottom', interval: 50, delay: 200})
sr.reveal(`.card-one-1`, {origin: 'bottom', interval: 50, delay: 200})

/*=============== FAQ SECTION SCRIPT ===============*/

let toggles = document.getElementsByClassName('faq-toggle');
let contentDiv = document.getElementsByClassName('faq-content');
let icons = document.getElementsByClassName('faq-icon');

for(let i=0; i<toggles.length; i++){
    toggles[i].addEventListener('click', ()=>{
        if( parseInt(contentDiv[i].style.height) != contentDiv[i].scrollHeight){
            contentDiv[i].style.height = contentDiv[i].scrollHeight + "px";
            icons[i].classList.add('faq-icons');
        }
        else{
            contentDiv[i].style.height = "0px";
            icons[i].classList.remove('faq-icons');
        }

        for(let j=0; j<contentDiv.length; j++){
            if(j!==i){
                contentDiv[j].style.height = "0px";
                icons[j].classList.remove('faq-icons');
            }
        }
    });
}


/*=============== FOR SCROLL TO TOP BUTTON ===============*/



let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let progressValue = document.getElementById("progress-value");
    let pos = document.documentElement.scrollTop;
    let calcHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100) / calcHeight);
    if (pos > 100) {
      scrollProgress.style.display = "grid";
    } else {
      scrollProgress.style.display = "none";
    }
    scrollProgress.addEventListener("click", () => {
      document.documentElement.scrollTop = 0;
    });
    scrollProgress.style.background = `conic-gradient(hsl(260, 27%, 22%) ${scrollValue}%, #777 ${scrollValue}%)`;
  };
  window.onscroll = calcScrollValue;
  window.onload = calcScrollValue;
