const open = document.querySelector(".gamburger-menu__link"),
      close = document.querySelector(".gamburger-menu__close"),
      content = document.querySelector(".gamburger-menu__content"),
      bodyFixed = document.querySelector('body'),
      navLink = document.getElementsByClassName('navigation__link');

open.addEventListener('click', function () {
    content.classList.add('gamburger-menu__content_active');
    bodyFixed.classList.add('body__fixed');
});

close.addEventListener('click', function () {
    content.classList.remove('gamburger-menu__content_active');
    bodyFixed.classList.remove('body__fixed');
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