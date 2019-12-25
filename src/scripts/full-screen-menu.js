const open = document.querySelector(".gamburger-menu__link"),
close = document.querySelector(".gamburger-menu__close"),
content = document.querySelector(".gamburger-menu__content"),
navLink = document.getElementsByClassName('navigation__link');

open.addEventListener('click', function () {
    flagScroll = true;
    content.classList.add('gamburger-menu__content_active');
    open.style.display = 'none';
    //open.classList.remove('gamburger-menu__link_active');
});

close.addEventListener('click', function () {
    flagScroll = false;
    content.classList.remove('gamburger-menu__content_active');
    open.style.display = 'block';
    //open.classList.add('gamburger-menu__link_active');
});

content.addEventListener('click', function(e) {
    if (e.target == content) {
        close.click();
    };
});

for (let i = 0; i<navLink.length; i++) {
    navLink[i].addEventListener('click', function() {
        close.click();
    });
};