const sidebarToggle = document.querySelector('#sidebar');
const navToggler = document.querySelector('.toggle');
const fullViewportScreen = document.querySelector('.fullViewport');
const darkMode = document.querySelector('#darkMode');
const pickupSearchbar = document.querySelector('.pic-del-in');
const arrow=document.querySelector('.arrow')
const newNav = document.querySelector('.new-nav')

// mapbox api
mapboxgl.accessToken = 'pk.eyJ1IjoibmF0bmFlbGJlbGF5bmVoMDIiLCJhIjoiY2t4MXd6dTJiMWx3NjJ0bGFnbndheTkxYyJ9.4LqFjo4D0jW9VoEV75whWw';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/streets-v11',
center:[39.535782,9.679854],
zoom:15  
});




// scroll to top

arrow.addEventListener('click',()=>{
    window.scrollTo({top:0,behavior:"smooth"})
})
// scroll to top end


//  sidebar toggle begin
navToggler.addEventListener('click',()=>{
    sidebarToggle.classList.toggle('sidebar-in');
    navToggler.classList.toggle('toggle-in');
})
fullViewportScreen.addEventListener('click',()=>{
    sidebarToggle.classList.remove('sidebar-in');
    navToggler.classList.remove('toggle-in');
})

// sidebar toggle end


// onscroll changes
window.addEventListener('scroll', fixSearch)

function fixSearch() {
    if(window.scrollY > nav.offsetHeight + 280) {
        pickupSearchbar.classList.add('active-nav-search')
    } 
    
    else{
        pickupSearchbar.classList.remove('active-nav-search')
    }

    if(window.scrollY > nav.offsetHeight + 200){
        arrow.classList.add("active")
    }
    else{
        arrow.classList.remove("active")
    }
}


// theme change begin

let sunPath="M3.55,18.54L4.96,19.95L6.76,18.16L5.34,16.74M11,22.45C11.32,22.45 13,22.45 13,22.45V19.5H11M12,5.5A6,6 0 0,0 6,11.5A6,6 0 0,0 12,17.5A6,6 0 0,0 18,11.5C18,8.18 15.31,5.5 12,5.5M20,12.5H23V10.5H20M17.24,18.16L19.04,19.95L20.45,18.54L18.66,16.74M20.45,4.46L19.04,3.05L17.24,4.84L18.66,6.26M13,0.55H11V3.5H13M4,10.5H1V12.5H4M6.76,4.84L4.96,3.05L3.55,4.46L5.34,6.26L6.76,4.84Z";
let moonPath="M17.75,4.09L15.22,6.03L16.13,9.09L13.5,7.28L10.87,9.09L11.78,6.03L9.25,4.09L12.44,4L13.5,1L14.56,4L17.75,4.09M21.25,11L19.61,12.25L20.2,14.23L18.5,13.06L16.8,14.23L17.39,12.25L15.75,11L17.81,10.95L18.5,9L19.19,10.95L21.25,11M18.97,15.95C19.8,15.87 20.69,17.05 20.16,17.8C19.84,18.25 19.5,18.67 19.08,19.07C15.17,23 8.84,23 4.94,19.07C1.03,15.17 1.03,8.83 4.94,4.93C5.34,4.53 5.76,4.17 6.21,3.85C6.96,3.32 8.14,4.21 8.06,5.04C7.79,7.9 8.75,10.87 10.95,13.06C13.14,15.26 16.1,16.22 18.97,15.95M17.33,17.97C14.5,17.81 11.7,16.64 9.53,14.5C7.36,12.31 6.2,9.5 6.04,6.68C3.23,9.82 3.34,14.64 6.35,17.66C9.37,20.67 14.19,20.78 17.33,17.97Z";


let toggle =false

darkMode.addEventListener('click',()=>{
    const timeline = anime.timeline({
        duration: 300,
        easing:"easeOutExpo"
    })

    timeline
    .add({
        targets:".sun",
        d:[
            {value: toggle ? sunPath:  moonPath}
        ]
    })

    .add({
        targets:'#darkMode',
        rotate:360
    })

    
    document.body.classList.toggle("dark-theme");
    if(!toggle){
        toggle= true;
    }else{
        toggle= false;
    }

     
})

// theme change end


// nav on scroll begin

const nav = document.querySelector('#navbar')
window.addEventListener('scroll', fixNav)

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 70) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
// nav on scroll end


// animation for phone and bike
window.addEventListener('load',init())

function init(){
ride();
hPage();

}


function ride(){
const tl= gsap.timeline()

tl
.from('.phone',{x:900,rotateZ:90,duration:2,ease:'power4'})
.from('.bike',{x:-1500,duration:4,ease:'power4.in'},"-=3")
.to('.bike',{rotateZ:-10,duration:.3,ease:'power4'})
.to('.bike',{rotateZ:0,duration:.3,ease:'bounce'})

}


// to   make the jobs on hero section
ScrollTrigger.create({
    trigger:'#hero',
    start:"top top",
    pin:true,
    pinSpacing:false,
})


function hPage(){
const jobPages = gsap.utils.toArray('.job')

    gsap.to(jobPages,{
        xPercent:-100 * (jobPages.length-1),
        ease:'none',
        scrollTrigger:{
            trigger:'.jobs',
            pin:true,
            scrub:1,
            snap:1/ (jobPages.length-1),
        }
        
    })


}


