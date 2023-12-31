// Text edition
var typed = new Typed('#element', {
        strings: ['Full Stack Developer'],
        typeSpeed: 100,
        backSpeed:50,
        backDelay:1000,
        loop:true,

      });


// ScrollReveal edition
 ScrollReveal({
   reset: true,
   distance:'80px',
   duration:2000,
   delay:200
  });

 ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
 ScrollReveal().reveal('.home-txt,.service-container,.portfolio-box,.contact form', { origin:'bottom' });
 
 ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });
 
// select active edition
let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll=()=>{
  section.forEach(sec=>{
    let top=window.scrollY;
    let offset= sec.offsetTop-150;
    let height= sec.offsetHeight;
    let id=sec.getAttribute('id');

    if (top >= offset && top < offset + height) {
      navLinks.forEach(links=>{
        links.classList.remove('active');
        document.querySelector('header nav a[href*='+ id +']').classList.add('active');
      });
    }
  });
}





