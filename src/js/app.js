document.addEventListener('DOMContentLoaded', (e)=>{
  menuFifo();
  animaciones();
  barraProgreso();
});

function menuFifo (){
  window.addEventListener("scroll", function() {
    let header = document.querySelector("header");
    header.classList.toggle("scroleado", window.scrollY > 0);
  });
  function menu_activo() {
    let menu = document.querySelector(".menu-main");
    menu.classList.toggle("activo");
    let menutoggle = document.querySelector(".menutoggle");
  }
}

function animaciones(){
  ScrollReveal().reveal('.imagen', {delay: 600});
  ScrollReveal().reveal('.main', { delay: 600});
  ScrollReveal().reveal('.html', { delay: 500});
  ScrollReveal().reveal('.css', { delay: 700});
  ScrollReveal().reveal('.javascript', { delay: 900});
  ScrollReveal().reveal('.git', { delay: 900});
  ScrollReveal().reveal('.php', { delay: 1100});
  ScrollReveal().reveal('.mysql', { delay: 1300});
  ScrollReveal().reveal('.ajax', { delay: 1500});
  ScrollReveal().reveal('.jquery', { delay: 1700});
}

function barraProgreso(){
  window.addEventListener("scroll", function(){
    progreso();
  });
}
function progreso(){
  let scroll = document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let proceso = (scroll / height)*100;
  document.querySelector('.progreso').style.width = proceso+"%";
}