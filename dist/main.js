(function() {
    const user = document.getElementsByClassName('accordeon__username'),
        card = document.getElementsByClassName('accordeon__item');

    for (let i=0; i<user.length; i++) {
        const userEl = user[i], cardEl = card[i];
        userEl.addEventListener('click', function(e) {
            e.preventDefault();
            for (let j=0; j<user.length; j++) {
                const cardRem = card[j];
                if (j !== i) {
                    cardRem.classList.remove('accordeon__item_active');
                };
            };
            if (cardEl.classList.contains('accordeon__item_active')) {
                cardEl.classList.remove('accordeon__item_active');
            } else {
                cardEl.classList.add('accordeon__item_active');
            };
        });
    };
})();(function() {

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

})();(function() {
    let sect = document.getElementsByClassName('section');
    let generateDots = function() {
        for (let i = 0; i<sect.length; i++) {
            let dot = $('<a>', {
                attr : { 
                    href : "",
                    class : 'pagination__link',
                    data_scroll_to : i 
                }
            });
            if (i === 0) {
                dot = $('<a>', {
                attr : { 
                    class : 'pagination__link pagination__link_active',
                    data_scroll_to : i //ind
                }
            });
            }
            $('.pagination').append(dot);
        };
    };
    generateDots();
})();const feedOpen = document.getElementsByClassName('feedback__button'),
feedClose = document.querySelector('#feedback__close'),
feedModal = document.querySelector('#modal-feedback'),
userInModal = document.querySelector('#feedback__username-in-modal'),
textInModal = document.querySelector('#feedback__text_modal'),
userInList = document.getElementsByClassName('feedback__username'),
textInList = document.getElementsByClassName('feedback__text');


for (let i = 0; i<feedOpen.length; i++) {
    feedOpen[i].addEventListener('click', function(event) {
        event.preventDefault();
        flagScroll = true;
        feedModal.style.display = 'flex';
        userInModal.textContent = userInList[i].textContent;
        textInModal.textContent = textInList[i].textContent;
    })
};

feedClose.addEventListener('click', function(event) {
    event.preventDefault();
    flagScroll = false;
    feedModal.style.display = 'none';
});

feedModal.addEventListener('click', function(e) {
    if (e.target == feedModal) {
        feedClose.click();
    }
});;(function() {
    const formDel = document.querySelector('#form__delivery'),
        btnDel = document.querySelector('#button__delivery'),
        modalText = document.querySelector('.modal__text'),
        modal = document.querySelector('#modal-delivery'),
        closeModal = document.querySelector('.button_close');

    btnDel.addEventListener('click', function(e) {
        e.preventDefault();
        if (validateForm(formDel)) {

            let formData = new FormData(formDel);
            formData.append('to', 'asw325@yandex.ru');

            const sendToServ = new XMLHttpRequest();
            sendToServ.responseType = 'json';
            sendToServ.open('POST', 'https://webdev-api.loftschool.com/sendmail');
            sendToServ.send(formData);

            sendToServ.addEventListener('load', function() {
                console.log(sendToServ.response);

                if (sendToServ.response.status == '1') {
                    modalText.textContent = "Сообщение отправлено";
                } else {
                    modalText.textContent = "Сообщение не отправлено. Попробуйте еще раз!";
                };

                modal.style.display = 'flex';
            });
        };
    });

    function validateForm(form) {
        let valid = true;

        if (!validateField(form.elements.name)) {
            valid = false;
        };
        if (!validateField(form.elements.phone)) {
            valid = false;
        };
        if (!validateField(form.elements.comment)) {
            valid = false;
        };
        return valid;
    };

    function validateField(field) {
        if ( !field.checkValidity() ) {
            field.nextElementSibling.textContent = field.validationMessage;
            return false;
        } else {
            field.nextElementSibling.textContent = "";
            return true;
        };
    };

    closeModal.addEventListener('click', function(e) {
        e.preventDefault();
        modal.style.display = 'none';
    });

    modal.addEventListener('click', function(e) {
        if (e.target == modal) {
            closeModal.click();
        };
    });
})();const open = document.querySelector(".gamburger-menu__link"),
close = document.querySelector(".gamburger-menu__close"),
content = document.querySelector(".gamburger-menu__content"),
navLinkG = document.getElementsByClassName('navigation__link_gamburger'); //navigation__link


open.addEventListener('click', function () {
    flagScroll = true;
    content.classList.add('gamburger-menu__content_active');
    open.style.left = '-9990px';
    //open.style.display = 'none';
    //open.classList.remove('gamburger-menu__link_active');
});

close.addEventListener('click', function () {
    flagScroll = false;
    content.classList.remove('gamburger-menu__content_active');
    open.style.left = '92%';
    //open.style.display = 'block';
    //open.classList.add('gamburger-menu__link_active');
});

content.addEventListener('click', function(e) {
    if (e.target == content) {
        close.click();
    };
});

for (let i = 0; i<navLinkG.length; i++) {
    navLinkG[i].addEventListener('click', function() {
        close.click();
    });
};;(function() {
    function init() {
        var myMap = new ymaps.Map("map", {
            center: [59.938530, 30.288853],
            zoom: 11.5
        });
        myMap.controls.remove('searchControl');
        myMap.controls.remove('typeSelector');
        myMap.controls.remove('rulerControl');
        myMap.controls.remove('trafficControl');
        myMap.controls.remove('geolocationControl');
        myMap.controls.remove('zoomControl');
        myMap.controls.remove('fullscreenControl');

        let coords = [
            [59.986320, 30.201875],
            [59.960224, 30.348665],
            [59.878692, 30.387611],
            [59.911468, 30.215464]
        ];

        for (let j = 0; j < coords.length; j++) {
            coordPoint = coords[j];
            myMap.geoObjects.add(new ymaps.Placemark(coordPoint, {}, {iconLayout: 'default#image', iconImageHref: "../img/map-point.png", iconImageSize: [46, 57]}));
        };
    };
    ymaps.ready(init);
})();const sections = $('.section');
const display = $('.main-content');
let flagScroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const perform = sectionNum => {
    if (flagScroll) return;

    flagScroll = true;
    const num = -100*sectionNum;
    const scrollDuration = 900; //600 - единая длительность анимации + 300 - инерция

    if(isNaN(num)) {
        console.error('Передано неверное значение в perform()');
    };

    sections.eq(sectionNum).addClass('section_active').siblings().removeClass('section_active');

    display.css({
        transform: `translateY(${num}%)`
    });

    setTimeout(() => {
        // //!!!
        // if(sectionNum == '1') {
        //     console.log(sectionNum + typeof(sectionNum));
        //     $('.pagination-link').eq(sectionNum).addClass('pagination__link_black'); 
        // };

        flagScroll = false;
        $('.pagination__link').eq(sectionNum).addClass('pagination__link_active').siblings().removeClass('pagination__link_active');

    }, scrollDuration)
};

const scrollToSection = directionToScroll => {
    const activeSection = sections.filter('.section_active');
    const nextSection = activeSection.next();
    const prevSection = activeSection.prev();

    if (directionToScroll === 'next' && nextSection.length) {
        perform(nextSection.index());
    };
    if (directionToScroll === 'prev' && prevSection.length) {
        perform(prevSection.index());
    };
};

$(window).on('wheel', e => {
    const deltaY = e.originalEvent.deltaY;

    if (deltaY > 0) {
        scrollToSection('next');
    };

    if (deltaY < 0) {
        scrollToSection('prev');
    };
});

$(window).on('keydown', e => {

    const tagName = e.target.tagName.toLowerCase();
    const typeInArea = tagName !== 'input' && tagName !== 'textarea'
    
    if(!typeInArea) return;
    switch (e.keyCode) {
        case 38 : return scrollToSection('prev');
        case 40 : return scrollToSection('next');
    };
});

$('[data_scroll_to]').on('click', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    var target = $this.attr('data_scroll_to');

    perform(target);
});

$('.scroll__link').on('click', e => {
    e.preventDefault();
    scrollToSection('next');
});

if(isMobile) {
    $('body').swipe({
        swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
            const directionSwipe = direction === 'up' ? 'next' : 'prev';
            scrollToSection (directionSwipe);
        }
    });
    console.log('swipe!');
};;(function() {
    const vid = document.querySelector(".video");
    const playerStart = document.querySelector(".player__start");
    const playerPaused = document.querySelector(".player__pause");
    const playerVolume = document.querySelector(".player__volume");
    const playerMute = document.querySelector(".player__mute");
    const scrollDur = document.querySelector(".player__scroll_duration");
    const bigWwiteBtn = document.querySelector(".video__big-button");


    playerStart.addEventListener('click', function() {
        vid.play();
        playerPaused.classList.add('player__pause_active');
        playerStart.classList.add('player__start_unactive');
        bigWwiteBtn.classList.add('player__start_unactive');

        interval = setInterval(function() {
            let durPercent = (vid.currentTime / vid.duration) * 100;
            scrollDur.style.left = `${durPercent}%`;
        }, 1000);
    });

    playerPaused.addEventListener('click', function() {
        vid.pause();
        playerStart.classList.remove('player__start_unactive');
        playerPaused.classList.remove('player__pause_active');
        bigWwiteBtn.classList.remove('player__start_unactive');
    });

    bigWwiteBtn.addEventListener('click', function() {
        vid.play();
        playerPaused.classList.add('player__pause_active');
        playerStart.classList.add('player__start_unactive');
        bigWwiteBtn.classList.add('player__start_unactive');

        interval = setInterval(function() {
            let durPercent = (vid.currentTime / vid.duration) * 100;
            scrollDur.style.left = `${durPercent}%`;
        }, 1000);
    });


    playerVolume.addEventListener('click', function() {
        vid.muted = true;
        playerMute.classList.add('player__mute_active');
    });

    playerMute.addEventListener('click', function() {
        vid.muted = false;
        playerMute.classList.remove('player__mute_active');
    });



    const lenghtlVal = document.querySelector(".player__volume-duration");
    const scrollVal = document.querySelector(".player__scroll_volume");
    let coords = {};
    vid.volume = 1;


    const measureElem = (elem, event) => {
        const measures = elem.getBoundingClientRect();

        return {
            offsetTop: measures.top,
            offsetLeft: measures.left,
            width: measures.width,
            clickedX: event.layerX
        }
    }

    const setupMeasures = e => {
        lenghtlVal.classList.add('allow');

        coords.line = measureElem(lenghtlVal, e);
        coords.btn = measureElem(scrollVal, e);
    }

    const checkEdges = (btn, line) => {
        var x = btn.x;

        if (x<0) x = 0;

        if (x>line.width - btn.width) {
            x = line.width - btn.width
        };

        scrollVal.style.left = `${x}px`;

        let maxVolume = line.width - btn.width;
        let curVolume = x;

        vid.volume = curVolume/maxVolume;
    };

    const setupBlockPos = e => {
        if(!lenghtlVal.classList.contains('allow')) return;

        var {line, btn} = coords;
        btn.x = e.pageX - line.offsetLeft - btn.clickedX;

        checkEdges (btn, line);
    };

    scrollVal.addEventListener('mousedown', setupMeasures);
    document.addEventListener('mousemove', setupBlockPos);
    document.addEventListener('mouseup', e=> {
        lenghtlVal.classList.remove('allow');
    });
})();(function() {

    let moveSlide = function(container, slideNum){
        let items = container.find('.slider__contant'),
            activeSlide = items.filter('.slider__contant_active'),
            numOfSlide = items.eq(slideNum),
            numOfIndex = numOfSlide.index(),
            listOfSlides = container.find('.slider__items'),
            duration = 600;

        if(numOfSlide.length) {
            listOfSlides.animate ({
                'left' : -numOfIndex * 100 + '%'
            }, duration, function(){
                activeSlide.removeClass('slider__contant_active');
                numOfSlide.addClass('slider__contant_active');
            });
        };
    };

    $('.slider__arrow').on('click', function(event){
        var exItem, edItem, reqItem;
        event.preventDefault();
        let $this = $(this),
            container = $this.closest('.slider'),
            items = $('.slider__contant', container),
            activeItem = items.filter('.slider__contant_active');

        if ($this.hasClass('slider__right')) {
            exItem = activeItem.next();
            edItem = items.first();
        };

        if ($this.hasClass('slider__left')) {
            exItem = activeItem.prev();
            edItem = items.last();
        };
        
        reqItem = exItem.length ? exItem.index() : edItem.index();
        moveSlide(container, reqItem);
    })

})();(function() {
    const feedList = document.querySelector('.feedback__list'),
        feedBtn = document.getElementsByClassName('feedback__button');


    for (let i = 0; i < feedBtn.length; i++) {
        let btn = feedBtn[i];
        let widthWin = parseInt(getComputedStyle(feedList).width);
        if (widthWin <= 480) {
            btn.textContent = 'Читать отзыв';
        } else {
            btn.textContent = 'Подробнее';
        };
    };
})()
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjYy1nb3Jpem9udC5qcyIsImFjYy12ZXJ0aWNhbC5qcyIsImRvdC1nZW5lcmF0b3IuanMiLCJmZWVkYmFjay1tb2RhbC5qcyIsImZvcm0uanMiLCJmdWxsLXNjcmVlbi1tZW51LmpzIiwibWFwLmpzIiwicGFnaW5hdGlvbi1qUS5qcyIsInBsYXllci5qcyIsInNsaWRlci1qUS5qcyIsInRleHQtaW4tYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0MvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCB1c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkZW9uX191c2VybmFtZScpLFxuICAgICAgICBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkZW9uX19pdGVtJyk7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8dXNlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB1c2VyRWwgPSB1c2VyW2ldLCBjYXJkRWwgPSBjYXJkW2ldO1xuICAgICAgICB1c2VyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8dXNlci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRSZW0gPSBjYXJkW2pdO1xuICAgICAgICAgICAgICAgIGlmIChqICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRSZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkZW9uX19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNhcmRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGVvbl9faXRlbV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGNhcmRFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRlb25fX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRFbC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRlb25fX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xufSkoKSIsIihmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkZW9uLXZlcnRfX3N1YnRpdGxlJyksXG4gICAgICAgICAgbWVudUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRlb24tdmVydF9faXRlbScpLFxuICAgICAgICAgIG1lbnVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X190aXRsZScpO1xuXG5cbiAgICBmb3IgKGxldCBpPTA7IGk8bWVudUxpbmsubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUxpbmtFbCA9IG1lbnVMaW5rW2ldLCBtZW51SXRlbUVsID0gbWVudUl0ZW1baV07XG4gICAgICAgIG1lbnVMaW5rRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8bWVudUxpbmsubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51SXRlbVJlbSA9IG1lbnVJdGVtW2pdO1xuICAgICAgICAgICAgICAgIGlmIChqICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtUmVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGVvbi12ZXJ0X19pdGVtX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aW5XaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jykub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXhXaWR0aFdpbiA9IDU2NTsgLy/QvNCw0LrRgdC40LzQsNC70YzQvdCw0Y8g0YjQuNGA0LjQvdCwINC+0LrQvdCwINC90LUg0YHQutGA0YvQstCw0YLRjCDQt9Cw0LPQvtC70L7QstC+0Log0LzQtdC90Y5cblxuICAgICAgICAgICAgICAgICAgICBpZih3aW5XaWR0aCA8IG1heFdpZHRoV2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudV9oaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKG1lbnVJdGVtRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRlb24tdmVydF9faXRlbV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkZW9uLXZlcnRfX2l0ZW1fYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBtZW51VGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9oaWRlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1FbC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRlb24tdmVydF9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWN0aW9uJyk7XG4gICAgbGV0IGdlbmVyYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxzZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZG90ID0gJCgnPGE+Jywge1xuICAgICAgICAgICAgICAgIGF0dHIgOiB7IFxuICAgICAgICAgICAgICAgICAgICBocmVmIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3MgOiAncGFnaW5hdGlvbl9fbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfc2Nyb2xsX3RvIDogaSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZG90ID0gJCgnPGE+Jywge1xuICAgICAgICAgICAgICAgIGF0dHIgOiB7IFxuICAgICAgICAgICAgICAgICAgICBjbGFzcyA6ICdwYWdpbmF0aW9uX19saW5rIHBhZ2luYXRpb25fX2xpbmtfYWN0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YV9zY3JvbGxfdG8gOiBpIC8vaW5kXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbicpLmFwcGVuZChkb3QpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgZ2VuZXJhdGVEb3RzKCk7XG59KSgpIiwiY29uc3QgZmVlZE9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fYnV0dG9uJyksXG5mZWVkQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlZGJhY2tfX2Nsb3NlJyksXG5mZWVkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZmVlZGJhY2snKSxcbnVzZXJJbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWRiYWNrX191c2VybmFtZS1pbi1tb2RhbCcpLFxudGV4dEluTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlZGJhY2tfX3RleHRfbW9kYWwnKSxcbnVzZXJJbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fdXNlcm5hbWUnKSxcbnRleHRJbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fdGV4dCcpO1xuXG5cbmZvciAobGV0IGkgPSAwOyBpPGZlZWRPcGVuLmxlbmd0aDsgaSsrKSB7XG4gICAgZmVlZE9wZW5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmbGFnU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgZmVlZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHVzZXJJbk1vZGFsLnRleHRDb250ZW50ID0gdXNlckluTGlzdFtpXS50ZXh0Q29udGVudDtcbiAgICAgICAgdGV4dEluTW9kYWwudGV4dENvbnRlbnQgPSB0ZXh0SW5MaXN0W2ldLnRleHRDb250ZW50O1xuICAgIH0pXG59O1xuXG5mZWVkQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuICAgIGZlZWRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbmZlZWRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT0gZmVlZE1vZGFsKSB7XG4gICAgICAgIGZlZWRDbG9zZS5jbGljaygpO1xuICAgIH1cbn0pOyIsIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmb3JtRGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX2RlbGl2ZXJ5JyksXG4gICAgICAgIGJ0bkRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25fX2RlbGl2ZXJ5JyksXG4gICAgICAgIG1vZGFsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGV4dCcpLFxuICAgICAgICBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZWxpdmVyeScpLFxuICAgICAgICBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9jbG9zZScpO1xuXG4gICAgYnRuRGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh2YWxpZGF0ZUZvcm0oZm9ybURlbCkpIHtcblxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1EZWwpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0bycsICdhc3czMjVAeWFuZGV4LnJ1Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbmRUb1NlcnYgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHNlbmRUb1NlcnYucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICAgICAgc2VuZFRvU2Vydi5vcGVuKCdQT1NUJywgJ2h0dHBzOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9zZW5kbWFpbCcpO1xuICAgICAgICAgICAgc2VuZFRvU2Vydi5zZW5kKGZvcm1EYXRhKTtcblxuICAgICAgICAgICAgc2VuZFRvU2Vydi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VuZFRvU2Vydi5yZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VuZFRvU2Vydi5yZXNwb25zZS5zdGF0dXMgPT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9IFwi0KHQvtC+0LHRidC10L3QuNC1INC+0YLQv9GA0LDQstC70LXQvdC+XCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gXCLQodC+0L7QsdGJ0LXQvdC40LUg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L3Qvi4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQtyFcIjtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZvcm0pIHtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5uYW1lKSkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMucGhvbmUpKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5jb21tZW50KSkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICggIWZpZWxkLmNoZWNrVmFsaWRpdHkoKSApIHtcbiAgICAgICAgICAgIGZpZWxkLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmllbGQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsLmNsaWNrKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59KSgpIiwiY29uc3Qgb3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtYnVyZ2VyLW1lbnVfX2xpbmtcIiksXG5jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtYnVyZ2VyLW1lbnVfX2Nsb3NlXCIpLFxuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtYnVyZ2VyLW1lbnVfX2NvbnRlbnRcIiksXG5uYXZMaW5rRyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb25fX2xpbmtfZ2FtYnVyZ2VyJyk7IC8vbmF2aWdhdGlvbl9fbGlua1xuXG5cbm9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZmxhZ1Njcm9sbCA9IHRydWU7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdnYW1idXJnZXItbWVudV9fY29udGVudF9hY3RpdmUnKTtcbiAgICBvcGVuLnN0eWxlLmxlZnQgPSAnLTk5OTBweCc7XG4gICAgLy9vcGVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy9vcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWJ1cmdlci1tZW51X19saW5rX2FjdGl2ZScpO1xufSk7XG5cbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGZsYWdTY3JvbGwgPSBmYWxzZTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWJ1cmdlci1tZW51X19jb250ZW50X2FjdGl2ZScpO1xuICAgIG9wZW4uc3R5bGUubGVmdCA9ICc5MiUnO1xuICAgIC8vb3Blbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAvL29wZW4uY2xhc3NMaXN0LmFkZCgnZ2FtYnVyZ2VyLW1lbnVfX2xpbmtfYWN0aXZlJyk7XG59KTtcblxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT0gY29udGVudCkge1xuICAgICAgICBjbG9zZS5jbGljaygpO1xuICAgIH07XG59KTtcblxuZm9yIChsZXQgaSA9IDA7IGk8bmF2TGlua0cubGVuZ3RoOyBpKyspIHtcbiAgICBuYXZMaW5rR1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjbG9zZS5jbGljaygpO1xuICAgIH0pO1xufTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XG4gICAgICAgICAgICBjZW50ZXI6IFs1OS45Mzg1MzAsIDMwLjI4ODg1M10sXG4gICAgICAgICAgICB6b29tOiAxMS41XG4gICAgICAgIH0pO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2dlb2xvY2F0aW9uQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3pvb21Db250cm9sJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcblxuICAgICAgICBsZXQgY29vcmRzID0gW1xuICAgICAgICAgICAgWzU5Ljk4NjMyMCwgMzAuMjAxODc1XSxcbiAgICAgICAgICAgIFs1OS45NjAyMjQsIDMwLjM0ODY2NV0sXG4gICAgICAgICAgICBbNTkuODc4NjkyLCAzMC4zODc2MTFdLFxuICAgICAgICAgICAgWzU5LjkxMTQ2OCwgMzAuMjE1NDY0XVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb29yZFBvaW50ID0gY29vcmRzW2pdO1xuICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobmV3IHltYXBzLlBsYWNlbWFyayhjb29yZFBvaW50LCB7fSwge2ljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJywgaWNvbkltYWdlSHJlZjogXCIuLi9pbWcvbWFwLXBvaW50LnBuZ1wiLCBpY29uSW1hZ2VTaXplOiBbNDYsIDU3XX0pKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHltYXBzLnJlYWR5KGluaXQpO1xufSkoKSIsImNvbnN0IHNlY3Rpb25zID0gJCgnLnNlY3Rpb24nKTtcbmNvbnN0IGRpc3BsYXkgPSAkKCcubWFpbi1jb250ZW50Jyk7XG5sZXQgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuXG5jb25zdCBtZCA9IG5ldyBNb2JpbGVEZXRlY3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuY29uc3QgaXNNb2JpbGUgPSBtZC5tb2JpbGUoKTtcblxuY29uc3QgcGVyZm9ybSA9IHNlY3Rpb25OdW0gPT4ge1xuICAgIGlmIChmbGFnU2Nyb2xsKSByZXR1cm47XG5cbiAgICBmbGFnU2Nyb2xsID0gdHJ1ZTtcbiAgICBjb25zdCBudW0gPSAtMTAwKnNlY3Rpb25OdW07XG4gICAgY29uc3Qgc2Nyb2xsRHVyYXRpb24gPSA5MDA7IC8vNjAwIC0g0LXQtNC40L3QsNGPINC00LvQuNGC0LXQu9GM0L3QvtGB0YLRjCDQsNC90LjQvNCw0YbQuNC4ICsgMzAwIC0g0LjQvdC10YDRhtC40Y9cblxuICAgIGlmKGlzTmFOKG51bSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign0J/QtdGA0LXQtNCw0L3QviDQvdC10LLQtdGA0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0LIgcGVyZm9ybSgpJyk7XG4gICAgfTtcblxuICAgIHNlY3Rpb25zLmVxKHNlY3Rpb25OdW0pLmFkZENsYXNzKCdzZWN0aW9uX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3NlY3Rpb25fYWN0aXZlJyk7XG5cbiAgICBkaXNwbGF5LmNzcyh7XG4gICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtudW19JSlgXG4gICAgfSk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gLy8hISFcbiAgICAgICAgLy8gaWYoc2VjdGlvbk51bSA9PSAnMScpIHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHNlY3Rpb25OdW0gKyB0eXBlb2Yoc2VjdGlvbk51bSkpO1xuICAgICAgICAvLyAgICAgJCgnLnBhZ2luYXRpb24tbGluaycpLmVxKHNlY3Rpb25OdW0pLmFkZENsYXNzKCdwYWdpbmF0aW9uX19saW5rX2JsYWNrJyk7IFxuICAgICAgICAvLyB9O1xuXG4gICAgICAgIGZsYWdTY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgJCgnLnBhZ2luYXRpb25fX2xpbmsnKS5lcShzZWN0aW9uTnVtKS5hZGRDbGFzcygncGFnaW5hdGlvbl9fbGlua19hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdwYWdpbmF0aW9uX19saW5rX2FjdGl2ZScpO1xuXG4gICAgfSwgc2Nyb2xsRHVyYXRpb24pXG59O1xuXG5jb25zdCBzY3JvbGxUb1NlY3Rpb24gPSBkaXJlY3Rpb25Ub1Njcm9sbCA9PiB7XG4gICAgY29uc3QgYWN0aXZlU2VjdGlvbiA9IHNlY3Rpb25zLmZpbHRlcignLnNlY3Rpb25fYWN0aXZlJyk7XG4gICAgY29uc3QgbmV4dFNlY3Rpb24gPSBhY3RpdmVTZWN0aW9uLm5leHQoKTtcbiAgICBjb25zdCBwcmV2U2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24ucHJldigpO1xuXG4gICAgaWYgKGRpcmVjdGlvblRvU2Nyb2xsID09PSAnbmV4dCcgJiYgbmV4dFNlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIHBlcmZvcm0obmV4dFNlY3Rpb24uaW5kZXgoKSk7XG4gICAgfTtcbiAgICBpZiAoZGlyZWN0aW9uVG9TY3JvbGwgPT09ICdwcmV2JyAmJiBwcmV2U2VjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgcGVyZm9ybShwcmV2U2VjdGlvbi5pbmRleCgpKTtcbiAgICB9O1xufTtcblxuJCh3aW5kb3cpLm9uKCd3aGVlbCcsIGUgPT4ge1xuICAgIGNvbnN0IGRlbHRhWSA9IGUub3JpZ2luYWxFdmVudC5kZWx0YVk7XG5cbiAgICBpZiAoZGVsdGFZID4gMCkge1xuICAgICAgICBzY3JvbGxUb1NlY3Rpb24oJ25leHQnKTtcbiAgICB9O1xuXG4gICAgaWYgKGRlbHRhWSA8IDApIHtcbiAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKCdwcmV2Jyk7XG4gICAgfTtcbn0pO1xuXG4kKHdpbmRvdykub24oJ2tleWRvd24nLCBlID0+IHtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgdHlwZUluQXJlYSA9IHRhZ05hbWUgIT09ICdpbnB1dCcgJiYgdGFnTmFtZSAhPT0gJ3RleHRhcmVhJ1xuICAgIFxuICAgIGlmKCF0eXBlSW5BcmVhKSByZXR1cm47XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzOCA6IHJldHVybiBzY3JvbGxUb1NlY3Rpb24oJ3ByZXYnKTtcbiAgICAgICAgY2FzZSA0MCA6IHJldHVybiBzY3JvbGxUb1NlY3Rpb24oJ25leHQnKTtcbiAgICB9O1xufSk7XG5cbiQoJ1tkYXRhX3Njcm9sbF90b10nKS5vbignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRoaXMgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgdmFyIHRhcmdldCA9ICR0aGlzLmF0dHIoJ2RhdGFfc2Nyb2xsX3RvJyk7XG5cbiAgICBwZXJmb3JtKHRhcmdldCk7XG59KTtcblxuJCgnLnNjcm9sbF9fbGluaycpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzY3JvbGxUb1NlY3Rpb24oJ25leHQnKTtcbn0pO1xuXG5pZihpc01vYmlsZSkge1xuICAgICQoJ2JvZHknKS5zd2lwZSh7XG4gICAgICAgIHN3aXBlOmZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvblN3aXBlID0gZGlyZWN0aW9uID09PSAndXAnID8gJ25leHQnIDogJ3ByZXYnO1xuICAgICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uIChkaXJlY3Rpb25Td2lwZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZygnc3dpcGUhJyk7XG59OyIsIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCB2aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvXCIpO1xuICAgIGNvbnN0IHBsYXllclN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3N0YXJ0XCIpO1xuICAgIGNvbnN0IHBsYXllclBhdXNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX19wYXVzZVwiKTtcbiAgICBjb25zdCBwbGF5ZXJWb2x1bWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fdm9sdW1lXCIpO1xuICAgIGNvbnN0IHBsYXllck11dGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fbXV0ZVwiKTtcbiAgICBjb25zdCBzY3JvbGxEdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fc2Nyb2xsX2R1cmF0aW9uXCIpO1xuICAgIGNvbnN0IGJpZ1d3aXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb19fYmlnLWJ1dHRvblwiKTtcblxuXG4gICAgcGxheWVyU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLnBsYXkoKTtcbiAgICAgICAgcGxheWVyUGF1c2VkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fcGF1c2VfYWN0aXZlJyk7XG4gICAgICAgIHBsYXllclN0YXJ0LmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcbiAgICAgICAgYmlnV3dpdGVCdG4uY2xhc3NMaXN0LmFkZCgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZHVyUGVyY2VudCA9ICh2aWQuY3VycmVudFRpbWUgLyB2aWQuZHVyYXRpb24pICogMTAwO1xuICAgICAgICAgICAgc2Nyb2xsRHVyLnN0eWxlLmxlZnQgPSBgJHtkdXJQZXJjZW50fSVgO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuICAgIHBsYXllclBhdXNlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWQucGF1c2UoKTtcbiAgICAgICAgcGxheWVyU3RhcnQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuICAgICAgICBwbGF5ZXJQYXVzZWQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19wYXVzZV9hY3RpdmUnKTtcbiAgICAgICAgYmlnV3dpdGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgYmlnV3dpdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLnBsYXkoKTtcbiAgICAgICAgcGxheWVyUGF1c2VkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fcGF1c2VfYWN0aXZlJyk7XG4gICAgICAgIHBsYXllclN0YXJ0LmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcbiAgICAgICAgYmlnV3dpdGVCdG4uY2xhc3NMaXN0LmFkZCgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZHVyUGVyY2VudCA9ICh2aWQuY3VycmVudFRpbWUgLyB2aWQuZHVyYXRpb24pICogMTAwO1xuICAgICAgICAgICAgc2Nyb2xsRHVyLnN0eWxlLmxlZnQgPSBgJHtkdXJQZXJjZW50fSVgO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuXG4gICAgcGxheWVyVm9sdW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZpZC5tdXRlZCA9IHRydWU7XG4gICAgICAgIHBsYXllck11dGUuY2xhc3NMaXN0LmFkZCgncGxheWVyX19tdXRlX2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgcGxheWVyTXV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWQubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyTXV0ZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXJfX211dGVfYWN0aXZlJyk7XG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgbGVuZ2h0bFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX192b2x1bWUtZHVyYXRpb25cIik7XG4gICAgY29uc3Qgc2Nyb2xsVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3Njcm9sbF92b2x1bWVcIik7XG4gICAgbGV0IGNvb3JkcyA9IHt9O1xuICAgIHZpZC52b2x1bWUgPSAxO1xuXG5cbiAgICBjb25zdCBtZWFzdXJlRWxlbSA9IChlbGVtLCBldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBtZWFzdXJlcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldFRvcDogbWVhc3VyZXMudG9wLFxuICAgICAgICAgICAgb2Zmc2V0TGVmdDogbWVhc3VyZXMubGVmdCxcbiAgICAgICAgICAgIHdpZHRoOiBtZWFzdXJlcy53aWR0aCxcbiAgICAgICAgICAgIGNsaWNrZWRYOiBldmVudC5sYXllclhcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldHVwTWVhc3VyZXMgPSBlID0+IHtcbiAgICAgICAgbGVuZ2h0bFZhbC5jbGFzc0xpc3QuYWRkKCdhbGxvdycpO1xuXG4gICAgICAgIGNvb3Jkcy5saW5lID0gbWVhc3VyZUVsZW0obGVuZ2h0bFZhbCwgZSk7XG4gICAgICAgIGNvb3Jkcy5idG4gPSBtZWFzdXJlRWxlbShzY3JvbGxWYWwsIGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRWRnZXMgPSAoYnRuLCBsaW5lKSA9PiB7XG4gICAgICAgIHZhciB4ID0gYnRuLng7XG5cbiAgICAgICAgaWYgKHg8MCkgeCA9IDA7XG5cbiAgICAgICAgaWYgKHg+bGluZS53aWR0aCAtIGJ0bi53aWR0aCkge1xuICAgICAgICAgICAgeCA9IGxpbmUud2lkdGggLSBidG4ud2lkdGhcbiAgICAgICAgfTtcblxuICAgICAgICBzY3JvbGxWYWwuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuXG4gICAgICAgIGxldCBtYXhWb2x1bWUgPSBsaW5lLndpZHRoIC0gYnRuLndpZHRoO1xuICAgICAgICBsZXQgY3VyVm9sdW1lID0geDtcblxuICAgICAgICB2aWQudm9sdW1lID0gY3VyVm9sdW1lL21heFZvbHVtZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0dXBCbG9ja1BvcyA9IGUgPT4ge1xuICAgICAgICBpZighbGVuZ2h0bFZhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbG93JykpIHJldHVybjtcblxuICAgICAgICB2YXIge2xpbmUsIGJ0bn0gPSBjb29yZHM7XG4gICAgICAgIGJ0bi54ID0gZS5wYWdlWCAtIGxpbmUub2Zmc2V0TGVmdCAtIGJ0bi5jbGlja2VkWDtcblxuICAgICAgICBjaGVja0VkZ2VzIChidG4sIGxpbmUpO1xuICAgIH07XG5cbiAgICBzY3JvbGxWYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2V0dXBNZWFzdXJlcyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc2V0dXBCbG9ja1Bvcyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGU9PiB7XG4gICAgICAgIGxlbmdodGxWYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWxsb3cnKTtcbiAgICB9KTtcbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG5cbiAgICBsZXQgbW92ZVNsaWRlID0gZnVuY3Rpb24oY29udGFpbmVyLCBzbGlkZU51bSl7XG4gICAgICAgIGxldCBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19jb250YW50JyksXG4gICAgICAgICAgICBhY3RpdmVTbGlkZSA9IGl0ZW1zLmZpbHRlcignLnNsaWRlcl9fY29udGFudF9hY3RpdmUnKSxcbiAgICAgICAgICAgIG51bU9mU2xpZGUgPSBpdGVtcy5lcShzbGlkZU51bSksXG4gICAgICAgICAgICBudW1PZkluZGV4ID0gbnVtT2ZTbGlkZS5pbmRleCgpLFxuICAgICAgICAgICAgbGlzdE9mU2xpZGVzID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW1zJyksXG4gICAgICAgICAgICBkdXJhdGlvbiA9IDYwMDtcblxuICAgICAgICBpZihudW1PZlNsaWRlLmxlbmd0aCkge1xuICAgICAgICAgICAgbGlzdE9mU2xpZGVzLmFuaW1hdGUgKHtcbiAgICAgICAgICAgICAgICAnbGVmdCcgOiAtbnVtT2ZJbmRleCAqIDEwMCArICclJ1xuICAgICAgICAgICAgfSwgZHVyYXRpb24sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgYWN0aXZlU2xpZGUucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9fY29udGFudF9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICBudW1PZlNsaWRlLmFkZENsYXNzKCdzbGlkZXJfX2NvbnRhbnRfYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgJCgnLnNsaWRlcl9fYXJyb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgIHZhciBleEl0ZW0sIGVkSXRlbSwgcmVxSXRlbTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0ICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgIGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoJy5zbGlkZXInKSxcbiAgICAgICAgICAgIGl0ZW1zID0gJCgnLnNsaWRlcl9fY29udGFudCcsIGNvbnRhaW5lciksXG4gICAgICAgICAgICBhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKCcuc2xpZGVyX19jb250YW50X2FjdGl2ZScpO1xuXG4gICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnc2xpZGVyX19yaWdodCcpKSB7XG4gICAgICAgICAgICBleEl0ZW0gPSBhY3RpdmVJdGVtLm5leHQoKTtcbiAgICAgICAgICAgIGVkSXRlbSA9IGl0ZW1zLmZpcnN0KCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdzbGlkZXJfX2xlZnQnKSkge1xuICAgICAgICAgICAgZXhJdGVtID0gYWN0aXZlSXRlbS5wcmV2KCk7XG4gICAgICAgICAgICBlZEl0ZW0gPSBpdGVtcy5sYXN0KCk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICByZXFJdGVtID0gZXhJdGVtLmxlbmd0aCA/IGV4SXRlbS5pbmRleCgpIDogZWRJdGVtLmluZGV4KCk7XG4gICAgICAgIG1vdmVTbGlkZShjb250YWluZXIsIHJlcUl0ZW0pO1xuICAgIH0pXG5cbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZmVlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2xpc3QnKSxcbiAgICAgICAgZmVlZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZlZWRiYWNrX19idXR0b24nKTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWVkQnRuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBidG4gPSBmZWVkQnRuW2ldO1xuICAgICAgICBsZXQgd2lkdGhXaW4gPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGZlZWRMaXN0KS53aWR0aCk7XG4gICAgICAgIGlmICh3aWR0aFdpbiA8PSA0ODApIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICfQp9C40YLQsNGC0Ywg0L7RgtC30YvQsic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAn0J/QvtC00YDQvtCx0L3QtdC1JztcbiAgICAgICAgfTtcbiAgICB9O1xufSkoKSJdfQ==
