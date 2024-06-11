
// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs'

const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


const hamburger=document.querySelector('.hamburger');
const navbar=document.querySelector('.navbar');
const close=document.querySelector('.close')
 const Body=document.querySelector('body')
console.log(hamburger);
console.log(navbar);
console.log(close);

function show(){
    navbar.style.display="flex";
    navbar.style.top="0px";
    navbar.style.transition="5s ease-in-out";
    close.style.display="flex";
}

function fermer(){
    navbar.style.display="none";
    navbar.style.top="-70vh";
    navbar.style.transition="5s ease-in-out";
    close.style.display="none";

}

document.addEventListener('click',(e)=>{
console.log(e.target);

    if (!hamburger.contains(e.target) && !navbar.contains(e.target) ) {
       
        navbar.style.display="none";
        close.style.display="none";
    };
});




// function disapear(){
//     navbar.style.display="none";
// }

// hamburger.addEventListener( "click",()=>{
//     navbar.style.display="flex"
// navbar.classList.add('toogle');
// })