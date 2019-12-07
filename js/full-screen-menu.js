const open = document.querySelector(".gamburger-menu__link");
const close = document.querySelector(".gamburger-menu__close");
const content = document.querySelector(".gamburger-menu__content");

open.addEventListener('click', function () {
    content.style.display = 'flex';
});

close.addEventListener('click', function () {
    content.style.display = 'none';
});