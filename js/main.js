const cartOpen = document.querySelector('.cart-icon')
const cartClose = document.querySelector('.cart-close')
const cart = document.querySelector('.cart')
const nav = document.querySelector('#navbar')


cartOpen.addEventListener('click',()=>{
    cart.classList.add('show-cart')
})
cartClose.addEventListener('click',()=>{
    cart.classList.remove('show-cart')
})


// onscroll changes
window.addEventListener('scroll', fixSearch)

function fixSearch() {
    if(window.scrollY > nav.offsetHeight + 40) {
        nav.classList.add('nav-active')
    } 
    
    else{
        nav.classList.remove('nav-active')
    }

}