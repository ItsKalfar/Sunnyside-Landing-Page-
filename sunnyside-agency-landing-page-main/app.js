let hamburger = document.querySelector('.hamburger_img');
let mobileMenu = document.querySelector('.menu_layout');


hamburger.addEventListener('click', () =>{
    hamburger.classList.toggle('hide');
    mobileMenu.classList.toggle('mobile_menu')
})