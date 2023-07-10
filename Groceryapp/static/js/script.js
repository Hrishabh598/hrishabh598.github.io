let searchF = document.querySelector('.search-form');
let shopCart = document.querySelector('.shopping-cart');
let login = document.querySelector('.info');
let nb = document.querySelector('.navbar');


document.querySelector('#search-btn').onclick = () =>{
    searchF.classList.toggle('active');
    shopCart.classList.remove('active');
    login.classList.remove('active');
    nb.classList.remove('active');
};

document.querySelector("#cart-btn").onclick = () =>{
    shopCart.classList.toggle('active');
    searchF.classList.remove('active');
    login.classList.remove('active');
    nb.classList.remove('active');
};


document.querySelector("#login-btn").onclick = () =>{
    login.classList.toggle('active');
    searchF.classList.remove('active');
    shopCart.classList.remove('active');
    nb.classList.remove('active');
};


document.querySelector("#menu-btn").onclick = () =>{
    nb.classList.toggle('active');
    searchF.classList.remove('active');
    shopCart.classList.remove('active');
    login.classList.remove('active');
};

window.onscroll = () =>{
    searchF.classList.remove('active');
    shopCart.classList.remove('active');
    login.classList.remove('active');
    nb.classList.remove('active');
}

var swiper = new Swiper(".product-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});

var swiper = new Swiper(".review-slider", {
    loop:true,
    spaceBetween: 20,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    centeredSlides: true,
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020: {
            slidesPerView: 3,
        },
    },
});