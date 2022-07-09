console.log("1) 10\n2) 20\n3) 48\n4) 12\n5) 20");
//burger
// (function (){
// const header_burgerItem = document.querySelector('.header_burger');
// const menu = document.querySelector('.header_mobile_burger');
// const menu_close = document.querySelector('.burger_close_js');
// const menuLinks = document.querySelectorAll('.header_mobile_link');
// header_burgerItem.addEventListener('click', () => {
// menu.classList.add('header_mobile_burger_active');
// });
// menu_close.addEventListener('click', () => {
//  menu.classList.remove('header_mobile_burger_active');
// });
// if (window.innerWidth <= 391) {
//     for (let i = 0; i < menuLinks.length; i += 1) {
//         menuLinks[i].addEventListener('click', () => {
//             menu.classList.remove('header_mobile_burger_active');
//         });
//     }
// }
// }());

const btnMenu = document.querySelector(".header_burger");
const menu = document.querySelector(".header_mobile_burger");
const toggleMenu = function () {
    menu.classList.toggle("header_mobile_burger_active");
}
const menu_close = document.querySelector('.burger_close_js');
const menuLinks = document.querySelectorAll('.header_mobile_link');
menu_close.addEventListener('click', () => {
     menu.classList.remove('header_mobile_burger_active');
    });
    if (window.innerWidth <= 391) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header_mobile_burger_active');
            });
        }
    }
btnMenu.addEventListener("click", function (e) {
    e.stopPropagation();
    toggleMenu();
});

document.addEventListener("click", function (e) {
    const target = e.target;
    const its_menu = target == menu || menu.contains(target);
    const its_btnMenu = target == btnMenu;
    const menu_is_active = menu.classList.contains("header_mobile_burger_active");

    if (!its_menu && !its_btnMenu && menu_is_active) {
        toggleMenu();
    }
});