(function() {

    const menuLink = document.getElementsByClassName('accordeon-vert__subtitle'),
          menuItem = document.getElementsByClassName('accordeon-vert__item'),
          menuTitle = document.querySelector('.menu__title');


    for (let i=0; i<menuLink.length; i++) {
        const menuLinkEl = menuLink[i], menuItemEl = menuItem[i];
        menuLinkEl.addEventListener('click', function(e) {
            e.preventDefault();
            for (let j=0; j<menuLink.length; j++) {
                const menuItemRem = menuItem[j];
                if (j !== i) {
                    menuItemRem.classList.remove('accordeon-vert__item_active');

                    let winWidth = document.querySelector('.menu').offsetWidth;
                    let maxWidthWin = 565; //максимальная ширина окна не скрывать заголовок меню

                    if(winWidth < maxWidthWin) {
                        menuTitle.classList.add('menu_hide');
                    }

                };
            };
            if (menuItemEl.classList.contains('accordeon-vert__item_active')) {
                menuItemEl.classList.remove('accordeon-vert__item_active');

                menuTitle.classList.remove('menu_hide');

            } else {
                menuItemEl.classList.add('accordeon-vert__item_active');
            };
        });
    };

})()