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

        flagScroll = false;
        $('.pagination__link').eq(sectionNum).addClass('pagination__link_active ').siblings().removeClass('pagination__link_active');

    }, scrollDuration)

    //color of dots
    if(sectionNum == 1 || sectionNum == 6 || sectionNum == 8) {
        console.log(sectionNum + typeof(sectionNum));
        $('.pagination__link').addClass('pagination__link_black');
    } else {
        $('.pagination__link').removeClass('pagination__link_black');
    };
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjYy1nb3Jpem9udC5qcyIsImFjYy12ZXJ0aWNhbC5qcyIsImRvdC1nZW5lcmF0b3IuanMiLCJmZWVkYmFjay1tb2RhbC5qcyIsImZvcm0uanMiLCJmdWxsLXNjcmVlbi1tZW51LmpzIiwibWFwLmpzIiwicGFnaW5hdGlvbi1qUS5qcyIsInBsYXllci5qcyIsInNsaWRlci1qUS5qcyIsInRleHQtaW4tYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0NsR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCB1c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkZW9uX191c2VybmFtZScpLFxuICAgICAgICBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkZW9uX19pdGVtJyk7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8dXNlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB1c2VyRWwgPSB1c2VyW2ldLCBjYXJkRWwgPSBjYXJkW2ldO1xuICAgICAgICB1c2VyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8dXNlci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRSZW0gPSBjYXJkW2pdO1xuICAgICAgICAgICAgICAgIGlmIChqICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRSZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkZW9uX19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNhcmRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGVvbl9faXRlbV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGNhcmRFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRlb25fX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRFbC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRlb25fX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xufSkoKSIsIihmdW5jdGlvbigpIHtcblxuICAgIGNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkZW9uLXZlcnRfX3N1YnRpdGxlJyksXG4gICAgICAgICAgbWVudUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRlb24tdmVydF9faXRlbScpLFxuICAgICAgICAgIG1lbnVUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51X190aXRsZScpO1xuXG5cbiAgICBmb3IgKGxldCBpPTA7IGk8bWVudUxpbmsubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWVudUxpbmtFbCA9IG1lbnVMaW5rW2ldLCBtZW51SXRlbUVsID0gbWVudUl0ZW1baV07XG4gICAgICAgIG1lbnVMaW5rRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8bWVudUxpbmsubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtZW51SXRlbVJlbSA9IG1lbnVJdGVtW2pdO1xuICAgICAgICAgICAgICAgIGlmIChqICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtUmVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGVvbi12ZXJ0X19pdGVtX2FjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgICAgIGxldCB3aW5XaWR0aCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jykub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtYXhXaWR0aFdpbiA9IDU2NTsgLy/QvNCw0LrRgdC40LzQsNC70YzQvdCw0Y8g0YjQuNGA0LjQvdCwINC+0LrQvdCwINC90LUg0YHQutGA0YvQstCw0YLRjCDQt9Cw0LPQvtC70L7QstC+0Log0LzQtdC90Y5cblxuICAgICAgICAgICAgICAgICAgICBpZih3aW5XaWR0aCA8IG1heFdpZHRoV2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWVudV9oaWRlJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKG1lbnVJdGVtRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRlb24tdmVydF9faXRlbV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIG1lbnVJdGVtRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkZW9uLXZlcnRfX2l0ZW1fYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICBtZW51VGl0bGUuY2xhc3NMaXN0LnJlbW92ZSgnbWVudV9oaWRlJyk7XG5cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1FbC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRlb24tdmVydF9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG5cbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWN0aW9uJyk7XG4gICAgbGV0IGdlbmVyYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxzZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZG90ID0gJCgnPGE+Jywge1xuICAgICAgICAgICAgICAgIGF0dHIgOiB7IFxuICAgICAgICAgICAgICAgICAgICBocmVmIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3MgOiAncGFnaW5hdGlvbl9fbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfc2Nyb2xsX3RvIDogaSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZG90ID0gJCgnPGE+Jywge1xuICAgICAgICAgICAgICAgIGF0dHIgOiB7IFxuICAgICAgICAgICAgICAgICAgICBjbGFzcyA6ICdwYWdpbmF0aW9uX19saW5rIHBhZ2luYXRpb25fX2xpbmtfYWN0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YV9zY3JvbGxfdG8gOiBpIC8vaW5kXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbicpLmFwcGVuZChkb3QpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgZ2VuZXJhdGVEb3RzKCk7XG59KSgpIiwiY29uc3QgZmVlZE9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fYnV0dG9uJyksXG5mZWVkQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlZGJhY2tfX2Nsb3NlJyksXG5mZWVkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZmVlZGJhY2snKSxcbnVzZXJJbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWRiYWNrX191c2VybmFtZS1pbi1tb2RhbCcpLFxudGV4dEluTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlZGJhY2tfX3RleHRfbW9kYWwnKSxcbnVzZXJJbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fdXNlcm5hbWUnKSxcbnRleHRJbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fdGV4dCcpO1xuXG5cbmZvciAobGV0IGkgPSAwOyBpPGZlZWRPcGVuLmxlbmd0aDsgaSsrKSB7XG4gICAgZmVlZE9wZW5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmbGFnU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgZmVlZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHVzZXJJbk1vZGFsLnRleHRDb250ZW50ID0gdXNlckluTGlzdFtpXS50ZXh0Q29udGVudDtcbiAgICAgICAgdGV4dEluTW9kYWwudGV4dENvbnRlbnQgPSB0ZXh0SW5MaXN0W2ldLnRleHRDb250ZW50O1xuICAgIH0pXG59O1xuXG5mZWVkQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuICAgIGZlZWRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbmZlZWRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT0gZmVlZE1vZGFsKSB7XG4gICAgICAgIGZlZWRDbG9zZS5jbGljaygpO1xuICAgIH1cbn0pOyIsIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmb3JtRGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX2RlbGl2ZXJ5JyksXG4gICAgICAgIGJ0bkRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25fX2RlbGl2ZXJ5JyksXG4gICAgICAgIG1vZGFsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGV4dCcpLFxuICAgICAgICBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZWxpdmVyeScpLFxuICAgICAgICBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9jbG9zZScpO1xuXG4gICAgYnRuRGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh2YWxpZGF0ZUZvcm0oZm9ybURlbCkpIHtcblxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1EZWwpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0bycsICdhc3czMjVAeWFuZGV4LnJ1Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbmRUb1NlcnYgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHNlbmRUb1NlcnYucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICAgICAgc2VuZFRvU2Vydi5vcGVuKCdQT1NUJywgJ2h0dHBzOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9zZW5kbWFpbCcpO1xuICAgICAgICAgICAgc2VuZFRvU2Vydi5zZW5kKGZvcm1EYXRhKTtcblxuICAgICAgICAgICAgc2VuZFRvU2Vydi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VuZFRvU2Vydi5yZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VuZFRvU2Vydi5yZXNwb25zZS5zdGF0dXMgPT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9IFwi0KHQvtC+0LHRidC10L3QuNC1INC+0YLQv9GA0LDQstC70LXQvdC+XCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gXCLQodC+0L7QsdGJ0LXQvdC40LUg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L3Qvi4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQtyFcIjtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZvcm0pIHtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5uYW1lKSkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMucGhvbmUpKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5jb21tZW50KSkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICggIWZpZWxkLmNoZWNrVmFsaWRpdHkoKSApIHtcbiAgICAgICAgICAgIGZpZWxkLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmllbGQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsLmNsaWNrKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59KSgpIiwiY29uc3Qgb3BlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtYnVyZ2VyLW1lbnVfX2xpbmtcIiksXG5jbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtYnVyZ2VyLW1lbnVfX2Nsb3NlXCIpLFxuY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtYnVyZ2VyLW1lbnVfX2NvbnRlbnRcIiksXG5uYXZMaW5rRyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb25fX2xpbmtfZ2FtYnVyZ2VyJyk7IC8vbmF2aWdhdGlvbl9fbGlua1xuXG5cbm9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZmxhZ1Njcm9sbCA9IHRydWU7XG4gICAgY29udGVudC5jbGFzc0xpc3QuYWRkKCdnYW1idXJnZXItbWVudV9fY29udGVudF9hY3RpdmUnKTtcbiAgICBvcGVuLnN0eWxlLmxlZnQgPSAnLTk5OTBweCc7XG4gICAgLy9vcGVuLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgLy9vcGVuLmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWJ1cmdlci1tZW51X19saW5rX2FjdGl2ZScpO1xufSk7XG5cbmNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgIGZsYWdTY3JvbGwgPSBmYWxzZTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2dhbWJ1cmdlci1tZW51X19jb250ZW50X2FjdGl2ZScpO1xuICAgIG9wZW4uc3R5bGUubGVmdCA9ICc5MiUnO1xuICAgIC8vb3Blbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAvL29wZW4uY2xhc3NMaXN0LmFkZCgnZ2FtYnVyZ2VyLW1lbnVfX2xpbmtfYWN0aXZlJyk7XG59KTtcblxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT0gY29udGVudCkge1xuICAgICAgICBjbG9zZS5jbGljaygpO1xuICAgIH07XG59KTtcblxuZm9yIChsZXQgaSA9IDA7IGk8bmF2TGlua0cubGVuZ3RoOyBpKyspIHtcbiAgICBuYXZMaW5rR1tpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICBjbG9zZS5jbGljaygpO1xuICAgIH0pO1xufTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcChcIm1hcFwiLCB7XG4gICAgICAgICAgICBjZW50ZXI6IFs1OS45Mzg1MzAsIDMwLjI4ODg1M10sXG4gICAgICAgICAgICB6b29tOiAxMS41XG4gICAgICAgIH0pO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3NlYXJjaENvbnRyb2wnKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0eXBlU2VsZWN0b3InKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdydWxlckNvbnRyb2wnKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd0cmFmZmljQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2dlb2xvY2F0aW9uQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3pvb21Db250cm9sJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZnVsbHNjcmVlbkNvbnRyb2wnKTtcblxuICAgICAgICBsZXQgY29vcmRzID0gW1xuICAgICAgICAgICAgWzU5Ljk4NjMyMCwgMzAuMjAxODc1XSxcbiAgICAgICAgICAgIFs1OS45NjAyMjQsIDMwLjM0ODY2NV0sXG4gICAgICAgICAgICBbNTkuODc4NjkyLCAzMC4zODc2MTFdLFxuICAgICAgICAgICAgWzU5LjkxMTQ2OCwgMzAuMjE1NDY0XVxuICAgICAgICBdO1xuXG4gICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgY29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICBjb29yZFBvaW50ID0gY29vcmRzW2pdO1xuICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobmV3IHltYXBzLlBsYWNlbWFyayhjb29yZFBvaW50LCB7fSwge2ljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlJywgaWNvbkltYWdlSHJlZjogXCIuLi9pbWcvbWFwLXBvaW50LnBuZ1wiLCBpY29uSW1hZ2VTaXplOiBbNDYsIDU3XX0pKTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIHltYXBzLnJlYWR5KGluaXQpO1xufSkoKSIsImNvbnN0IHNlY3Rpb25zID0gJCgnLnNlY3Rpb24nKTtcbmNvbnN0IGRpc3BsYXkgPSAkKCcubWFpbi1jb250ZW50Jyk7XG5sZXQgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuXG5jb25zdCBtZCA9IG5ldyBNb2JpbGVEZXRlY3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuY29uc3QgaXNNb2JpbGUgPSBtZC5tb2JpbGUoKTtcblxuY29uc3QgcGVyZm9ybSA9IHNlY3Rpb25OdW0gPT4ge1xuICAgIGlmIChmbGFnU2Nyb2xsKSByZXR1cm47XG5cbiAgICBmbGFnU2Nyb2xsID0gdHJ1ZTtcbiAgICBjb25zdCBudW0gPSAtMTAwKnNlY3Rpb25OdW07XG4gICAgY29uc3Qgc2Nyb2xsRHVyYXRpb24gPSA5MDA7IC8vNjAwIC0g0LXQtNC40L3QsNGPINC00LvQuNGC0LXQu9GM0L3QvtGB0YLRjCDQsNC90LjQvNCw0YbQuNC4ICsgMzAwIC0g0LjQvdC10YDRhtC40Y9cblxuICAgIGlmKGlzTmFOKG51bSkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcign0J/QtdGA0LXQtNCw0L3QviDQvdC10LLQtdGA0L3QvtC1INC30L3QsNGH0LXQvdC40LUg0LIgcGVyZm9ybSgpJyk7XG4gICAgfTtcblxuXG4gICAgc2VjdGlvbnMuZXEoc2VjdGlvbk51bSkuYWRkQ2xhc3MoJ3NlY3Rpb25fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2VjdGlvbl9hY3RpdmUnKTtcblxuICAgIGRpc3BsYXkuY3NzKHtcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke251bX0lKWBcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuXG4gICAgICAgIGZsYWdTY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgJCgnLnBhZ2luYXRpb25fX2xpbmsnKS5lcShzZWN0aW9uTnVtKS5hZGRDbGFzcygncGFnaW5hdGlvbl9fbGlua19hY3RpdmUgJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygncGFnaW5hdGlvbl9fbGlua19hY3RpdmUnKTtcblxuICAgIH0sIHNjcm9sbER1cmF0aW9uKVxuXG4gICAgLy9jb2xvciBvZiBkb3RzXG4gICAgaWYoc2VjdGlvbk51bSA9PSAxIHx8IHNlY3Rpb25OdW0gPT0gNiB8fCBzZWN0aW9uTnVtID09IDgpIHtcbiAgICAgICAgY29uc29sZS5sb2coc2VjdGlvbk51bSArIHR5cGVvZihzZWN0aW9uTnVtKSk7XG4gICAgICAgICQoJy5wYWdpbmF0aW9uX19saW5rJykuYWRkQ2xhc3MoJ3BhZ2luYXRpb25fX2xpbmtfYmxhY2snKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkKCcucGFnaW5hdGlvbl9fbGluaycpLnJlbW92ZUNsYXNzKCdwYWdpbmF0aW9uX19saW5rX2JsYWNrJyk7XG4gICAgfTtcbn07XG5cbmNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IGRpcmVjdGlvblRvU2Nyb2xsID0+IHtcbiAgICBjb25zdCBhY3RpdmVTZWN0aW9uID0gc2VjdGlvbnMuZmlsdGVyKCcuc2VjdGlvbl9hY3RpdmUnKTtcbiAgICBjb25zdCBuZXh0U2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24ubmV4dCgpO1xuICAgIGNvbnN0IHByZXZTZWN0aW9uID0gYWN0aXZlU2VjdGlvbi5wcmV2KCk7XG5cbiAgICBpZiAoZGlyZWN0aW9uVG9TY3JvbGwgPT09ICduZXh0JyAmJiBuZXh0U2VjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgcGVyZm9ybShuZXh0U2VjdGlvbi5pbmRleCgpKTtcbiAgICB9O1xuICAgIGlmIChkaXJlY3Rpb25Ub1Njcm9sbCA9PT0gJ3ByZXYnICYmIHByZXZTZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICBwZXJmb3JtKHByZXZTZWN0aW9uLmluZGV4KCkpO1xuICAgIH07XG59O1xuXG4kKHdpbmRvdykub24oJ3doZWVsJywgZSA9PiB7XG4gICAgY29uc3QgZGVsdGFZID0gZS5vcmlnaW5hbEV2ZW50LmRlbHRhWTtcblxuICAgIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICAgIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xuICAgIH07XG5cbiAgICBpZiAoZGVsdGFZIDwgMCkge1xuICAgICAgICBzY3JvbGxUb1NlY3Rpb24oJ3ByZXYnKTtcbiAgICB9O1xufSk7XG5cbiQod2luZG93KS5vbigna2V5ZG93bicsIGUgPT4ge1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB0eXBlSW5BcmVhID0gdGFnTmFtZSAhPT0gJ2lucHV0JyAmJiB0YWdOYW1lICE9PSAndGV4dGFyZWEnXG4gICAgXG4gICAgaWYoIXR5cGVJbkFyZWEpIHJldHVybjtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM4IDogcmV0dXJuIHNjcm9sbFRvU2VjdGlvbigncHJldicpO1xuICAgICAgICBjYXNlIDQwIDogcmV0dXJuIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xuICAgIH07XG59KTtcblxuJCgnW2RhdGFfc2Nyb2xsX3RvXScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICB2YXIgdGFyZ2V0ID0gJHRoaXMuYXR0cignZGF0YV9zY3JvbGxfdG8nKTtcblxuICAgIHBlcmZvcm0odGFyZ2V0KTtcbn0pO1xuXG4kKCcuc2Nyb2xsX19saW5rJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xufSk7XG5cbmlmKGlzTW9iaWxlKSB7XG4gICAgJCgnYm9keScpLnN3aXBlKHtcbiAgICAgICAgc3dpcGU6ZnVuY3Rpb24oZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uU3dpcGUgPSBkaXJlY3Rpb24gPT09ICd1cCcgPyAnbmV4dCcgOiAncHJldic7XG4gICAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24gKGRpcmVjdGlvblN3aXBlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb1wiKTtcbiAgICBjb25zdCBwbGF5ZXJTdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX19zdGFydFwiKTtcbiAgICBjb25zdCBwbGF5ZXJQYXVzZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fcGF1c2VcIik7XG4gICAgY29uc3QgcGxheWVyVm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3ZvbHVtZVwiKTtcbiAgICBjb25zdCBwbGF5ZXJNdXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX211dGVcIik7XG4gICAgY29uc3Qgc2Nyb2xsRHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3Njcm9sbF9kdXJhdGlvblwiKTtcbiAgICBjb25zdCBiaWdXd2l0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9fX2JpZy1idXR0b25cIik7XG5cblxuICAgIHBsYXllclN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZpZC5wbGF5KCk7XG4gICAgICAgIHBsYXllclBhdXNlZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX3BhdXNlX2FjdGl2ZScpO1xuICAgICAgICBwbGF5ZXJTdGFydC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX3N0YXJ0X3VuYWN0aXZlJyk7XG4gICAgICAgIGJpZ1d3aXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcblxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGR1clBlcmNlbnQgPSAodmlkLmN1cnJlbnRUaW1lIC8gdmlkLmR1cmF0aW9uKSAqIDEwMDtcbiAgICAgICAgICAgIHNjcm9sbER1ci5zdHlsZS5sZWZ0ID0gYCR7ZHVyUGVyY2VudH0lYDtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICBwbGF5ZXJQYXVzZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLnBhdXNlKCk7XG4gICAgICAgIHBsYXllclN0YXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcbiAgICAgICAgcGxheWVyUGF1c2VkLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllcl9fcGF1c2VfYWN0aXZlJyk7XG4gICAgICAgIGJpZ1d3aXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGJpZ1d3aXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZpZC5wbGF5KCk7XG4gICAgICAgIHBsYXllclBhdXNlZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX3BhdXNlX2FjdGl2ZScpO1xuICAgICAgICBwbGF5ZXJTdGFydC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX3N0YXJ0X3VuYWN0aXZlJyk7XG4gICAgICAgIGJpZ1d3aXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcblxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGR1clBlcmNlbnQgPSAodmlkLmN1cnJlbnRUaW1lIC8gdmlkLmR1cmF0aW9uKSAqIDEwMDtcbiAgICAgICAgICAgIHNjcm9sbER1ci5zdHlsZS5sZWZ0ID0gYCR7ZHVyUGVyY2VudH0lYDtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG5cblxuICAgIHBsYXllclZvbHVtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWQubXV0ZWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXJNdXRlLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fbXV0ZV9hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIHBsYXllck11dGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLm11dGVkID0gZmFsc2U7XG4gICAgICAgIHBsYXllck11dGUuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19tdXRlX2FjdGl2ZScpO1xuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGxlbmdodGxWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fdm9sdW1lLWR1cmF0aW9uXCIpO1xuICAgIGNvbnN0IHNjcm9sbFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX19zY3JvbGxfdm9sdW1lXCIpO1xuICAgIGxldCBjb29yZHMgPSB7fTtcbiAgICB2aWQudm9sdW1lID0gMTtcblxuXG4gICAgY29uc3QgbWVhc3VyZUVsZW0gPSAoZWxlbSwgZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVhc3VyZXMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRUb3A6IG1lYXN1cmVzLnRvcCxcbiAgICAgICAgICAgIG9mZnNldExlZnQ6IG1lYXN1cmVzLmxlZnQsXG4gICAgICAgICAgICB3aWR0aDogbWVhc3VyZXMud2lkdGgsXG4gICAgICAgICAgICBjbGlja2VkWDogZXZlbnQubGF5ZXJYXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXR1cE1lYXN1cmVzID0gZSA9PiB7XG4gICAgICAgIGxlbmdodGxWYWwuY2xhc3NMaXN0LmFkZCgnYWxsb3cnKTtcblxuICAgICAgICBjb29yZHMubGluZSA9IG1lYXN1cmVFbGVtKGxlbmdodGxWYWwsIGUpO1xuICAgICAgICBjb29yZHMuYnRuID0gbWVhc3VyZUVsZW0oc2Nyb2xsVmFsLCBlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0VkZ2VzID0gKGJ0biwgbGluZSkgPT4ge1xuICAgICAgICB2YXIgeCA9IGJ0bi54O1xuXG4gICAgICAgIGlmICh4PDApIHggPSAwO1xuXG4gICAgICAgIGlmICh4PmxpbmUud2lkdGggLSBidG4ud2lkdGgpIHtcbiAgICAgICAgICAgIHggPSBsaW5lLndpZHRoIC0gYnRuLndpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgc2Nyb2xsVmFsLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcblxuICAgICAgICBsZXQgbWF4Vm9sdW1lID0gbGluZS53aWR0aCAtIGJ0bi53aWR0aDtcbiAgICAgICAgbGV0IGN1clZvbHVtZSA9IHg7XG5cbiAgICAgICAgdmlkLnZvbHVtZSA9IGN1clZvbHVtZS9tYXhWb2x1bWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwQmxvY2tQb3MgPSBlID0+IHtcbiAgICAgICAgaWYoIWxlbmdodGxWYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGxvdycpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHtsaW5lLCBidG59ID0gY29vcmRzO1xuICAgICAgICBidG4ueCA9IGUucGFnZVggLSBsaW5lLm9mZnNldExlZnQgLSBidG4uY2xpY2tlZFg7XG5cbiAgICAgICAgY2hlY2tFZGdlcyAoYnRuLCBsaW5lKTtcbiAgICB9O1xuXG4gICAgc2Nyb2xsVmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNldHVwTWVhc3VyZXMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHNldHVwQmxvY2tQb3MpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlPT4ge1xuICAgICAgICBsZW5naHRsVmFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbG93Jyk7XG4gICAgfSk7XG59KSgpIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgbGV0IG1vdmVTbGlkZSA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgc2xpZGVOdW0pe1xuICAgICAgICBsZXQgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9fY29udGFudCcpLFxuICAgICAgICAgICAgYWN0aXZlU2xpZGUgPSBpdGVtcy5maWx0ZXIoJy5zbGlkZXJfX2NvbnRhbnRfYWN0aXZlJyksXG4gICAgICAgICAgICBudW1PZlNsaWRlID0gaXRlbXMuZXEoc2xpZGVOdW0pLFxuICAgICAgICAgICAgbnVtT2ZJbmRleCA9IG51bU9mU2xpZGUuaW5kZXgoKSxcbiAgICAgICAgICAgIGxpc3RPZlNsaWRlcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtcycpLFxuICAgICAgICAgICAgZHVyYXRpb24gPSA2MDA7XG5cbiAgICAgICAgaWYobnVtT2ZTbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGxpc3RPZlNsaWRlcy5hbmltYXRlICh7XG4gICAgICAgICAgICAgICAgJ2xlZnQnIDogLW51bU9mSW5kZXggKiAxMDAgKyAnJSdcbiAgICAgICAgICAgIH0sIGR1cmF0aW9uLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2NvbnRhbnRfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgbnVtT2ZTbGlkZS5hZGRDbGFzcygnc2xpZGVyX19jb250YW50X2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgICQoJy5zbGlkZXJfX2Fycm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICB2YXIgZXhJdGVtLCBlZEl0ZW0sIHJlcUl0ZW07XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICBjb250YWluZXIgPSAkdGhpcy5jbG9zZXN0KCcuc2xpZGVyJyksXG4gICAgICAgICAgICBpdGVtcyA9ICQoJy5zbGlkZXJfX2NvbnRhbnQnLCBjb250YWluZXIpLFxuICAgICAgICAgICAgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLnNsaWRlcl9fY29udGFudF9hY3RpdmUnKTtcblxuICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ3NsaWRlcl9fcmlnaHQnKSkge1xuICAgICAgICAgICAgZXhJdGVtID0gYWN0aXZlSXRlbS5uZXh0KCk7XG4gICAgICAgICAgICBlZEl0ZW0gPSBpdGVtcy5maXJzdCgpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnc2xpZGVyX19sZWZ0JykpIHtcbiAgICAgICAgICAgIGV4SXRlbSA9IGFjdGl2ZUl0ZW0ucHJldigpO1xuICAgICAgICAgICAgZWRJdGVtID0gaXRlbXMubGFzdCgpO1xuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgcmVxSXRlbSA9IGV4SXRlbS5sZW5ndGggPyBleEl0ZW0uaW5kZXgoKSA6IGVkSXRlbS5pbmRleCgpO1xuICAgICAgICBtb3ZlU2xpZGUoY29udGFpbmVyLCByZXFJdGVtKTtcbiAgICB9KVxuXG59KSgpIiwiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZlZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19saXN0JyksXG4gICAgICAgIGZlZWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fYnV0dG9uJyk7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVlZEJ0bi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYnRuID0gZmVlZEJ0bltpXTtcbiAgICAgICAgbGV0IHdpZHRoV2luID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShmZWVkTGlzdCkud2lkdGgpO1xuICAgICAgICBpZiAod2lkdGhXaW4gPD0gNDgwKSB7XG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAn0KfQuNGC0LDRgtGMINC+0YLQt9GL0LInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ9Cf0L7QtNGA0L7QsdC90LXQtSc7XG4gICAgICAgIH07XG4gICAgfTtcbn0pKCkiXX0=
