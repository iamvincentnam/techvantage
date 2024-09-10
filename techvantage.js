
gsap.from('.anim1',{ duration:1, x:-100, ease: "ease"});

gsap.from('.hero_item', { duration:1.5, 
  opacity:0,
   scale:0,
    rotate:180,
     ease:  "power1.in"});






const middle_nav = document.querySelectorAll('.middle_nav li  a');
middle_nav.forEach((link)=>{
  link.addEventListener('click',(event)=>{

    middle_nav.forEach((link =>
       link.classList.remove('active')));
        link.classList.add('active');
    
});

});

const hero_item1 = document.querySelector('.hero_item1');
const hero_item = document.querySelector('.hero_item');
const left_hand_side = document.querySelector('.left_hand_side');
const contact_hero_image = document.querySelector('.contact_hero_image');


const hamburger_button= document.querySelector('#hamburger');
hamburger_button.addEventListener('click', ()=>{
 
  document.querySelector('.middle_nav').classList.toggle('active');
  document.querySelector('.login_nav').classList.toggle('active');
  gsap.from('.active .nav_anim',{opacity:0, duration:1, y:-20, ease:  "sine.inOut", stagger:.10});

})



gsap.registerPlugin(ScrollTrigger);

gsap.from('.testimonials_div',{
  y:100,
  opacity:0,
  duration:.5,
  stagger: .61,
  scrollTrigger: {
    trigger: '.testimonials_div', 
    start: 'top 90%', 
    end: 'bottom 50%', 
    // scrub:.2, 
  
  }
})
gsap.from('.card',{
  y:50,
  opacity:0,
  duration:1,
  stagger: .5,
  scrollTrigger: {
    trigger: '.card',
    start:"top 80%",
 
  
  }
})
gsap.from('.our-clients',{
  x:-100,
  rotate:-90,
  opacity:0,
  duration:1,
  stagger: .60,
  scrollTrigger: {
    trigger: '.our-clients',
    start:"top 80%",
 
  
  }
})

