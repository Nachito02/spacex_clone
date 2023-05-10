
window.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('menu-btn')
const overlay = document.getElementById('overlay')
const menu = document.getElementById('mobile-menu')
btn.addEventListener('click', navToogle)
let scrollStarted = false
function navToogle() {
    btn.classList.toggle('open');

    overlay.classList.toggle('overlay-show')
    document.body.classList.toggle('stop-scrolling')
    menu.classList.toggle('show-menu')
}


function scrollPage(){ 
    const scrollPos = window.scrollY

    if(scrollPos > 100 &&  !scrollStarted){

    }
}

// Inicializar gsap
// var tween = gsap.to(window, 1, {
//     scrollTo: {
//       top:0,
//       left:0,
//       y: "#section-b", // Cambiar esto por el identificador de la sección a la que se desee desplazar suavemente
//       offsetY: 0 // Cambiar esto por la cantidad de desplazamiento vertical deseada
//     },
//     ease: Power1.easeInOut // Cambiar esto para ajustar la velocidad del desplazamiento
    
//   });
  
//   // Agregar un evento para que el efecto se active al hacer scroll con la rueda del mouse
//   window.addEventListener("wheel", function(e) {
//     e.preventDefault(); // Evita que la página se desplace bruscamente
//     tween.kill(); // Detener cualquier animación gsap anterior
//     tween = gsap.to(window, 1, {
//       scrollTo: {
//         y: 0,
//         left:0,
//         top: window.pageYOffset - e.deltaY,
//         behavior: 'smooth'
//       },
//       autoKill: false,
//       ease: Power1.easeInOut
//     });
//     ;
//   });

gsap.registerPlugin(ScrollToPlugin);

let lastScrollPosition = 0;

window.addEventListener("wheel", function (event) {
  const currentScrollPosition = window.pageYOffset;
  const scrollDifference = currentScrollPosition - lastScrollPosition;
  const scrollDirection = scrollDifference > 0 ? "down" : "up";
  lastScrollPosition = currentScrollPosition;

  if (scrollDirection === "down") {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const remainingScroll = documentHeight - currentScrollPosition - windowHeight;
    if (remainingScroll > 0) {
      gsap.to(window, {
        duration: 1,
        scrollTo: { y: "+=100", autoKill: true },
        ease: Power1.out,
      });
    }
  } else {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: "-=100", autoKill: true },
      ease: Power1.out,
    });
  }
});



})