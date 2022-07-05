console.log("1) 10\n2) 20\n3) 48\n4) 12\n5) 20");
//burger
(function (){
const header_burgerItem = document.querySelector('.header_burger');
const menu = document.querySelector('.header_mobile_burger');
const menu_close = document.querySelector('.burger_close_js');
header_burgerItem.addEventListener('click', () => {
menu.classList.add('header_mobile_burger_active');
});
menu_close.addEventListener('click', () => {
 menu.classList.remove('header_mobile_burger_active');
});
}());