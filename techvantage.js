gsap.from('.anim1',{ duration:1, y:-20, ease: "ease"});
gsap.from('.hero_item', { duration:1, x:100, ease:  "power1.in"});

const middle_nav = document.querySelectorAll('.middle_nav li  a');
middle_nav.forEach((link)=>{
  link.addEventListener('click',(event)=>{

    middle_nav.forEach((link =>
       link.classList.remove('active')));
        link.classList.add('active');
    
});

});
// window.onload = function() {
//             window.scrollBy(0, 2); // Scroll 2 pixels down
//         };
const hero_item1 = document.querySelector('.hero_item1');
const hero_item = document.querySelector('.hero_item');
const left_hand_side = document.querySelector('.left_hand_side');
const contact_hero_image = document.querySelector('.contact_hero_image');


// gsap.from('.nav_anim',{opacity:0, duration:1, y:-20, ease:  "sine.inOut", stagger:.10});

const hamburger_button= document.querySelector('#hamburger');
hamburger_button.addEventListener('click', ()=>{
  console.log( document.querySelector('.middle_nav'))
  console.log(  document.querySelector('.login_nav'))
  document.querySelector('.middle_nav').classList.toggle('active');
  document.querySelector('.login_nav').classList.toggle('active');
  gsap.from('.active .nav_anim',{opacity:0, duration:1, y:-20, ease:  "sine.inOut", stagger:.10});

})




