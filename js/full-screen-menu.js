const open = document.querySelector(".gamburger-menu__link");
const close = document.querySelector(".gamburger-menu__close");
const content = document.querySelector(".gamburger-menu__content");
const bodyFixed = document.querySelector('body');

open.addEventListener('click', function () {
    content.classList.add('gamburger-menu__content_active');
    bodyFixed.classList.add('body__fixed');
});

close.addEventListener('click', function () {
    content.classList.remove('gamburger-menu__content_active');
    bodyFixed.classList.remove('body__fixed');
});