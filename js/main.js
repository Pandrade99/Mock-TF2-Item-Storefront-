// Cart
let cartIcon = document.querySelector('#cart-icon')
let cart = document.querySelector('.cart')
let closeCart = document.querySelector('#close-cart')

// Opening Cart 
cartIcon.onclick = () =>{
    cart.classList.add('active')
};

// Closing Cart
closeCart.onclick = () =>{
    cart.classList.remove('active')
};