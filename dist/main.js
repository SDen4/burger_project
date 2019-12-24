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
        menuItem = document.getElementsByClassName('accordeon-vert__item');

    for (let i=0; i<menuLink.length; i++) {
        const menuLinkEl = menuLink[i], menuItemEl = menuItem[i];
        menuLinkEl.addEventListener('click', function(e) {
            e.preventDefault();
            for (let j=0; j<menuLink.length; j++) {
                const menuItemRem = menuItem[j];
                if (j !== i) {
                    menuItemRem.classList.remove('accordeon-vert__item_active');
                };
            };
            if (menuItemEl.classList.contains('accordeon-vert__item_active')) {
                menuItemEl.classList.remove('accordeon-vert__item_active');
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
                bodyFixed.classList.add('body__fixed');
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
        bodyFixed.classList.remove('body__fixed');
    });

    modal.addEventListener('click', function(e) {
        if (e.target == modal) {
            closeModal.click();
        };
    });
})();const open = document.querySelector(".gamburger-menu__link"),
close = document.querySelector(".gamburger-menu__close"),
content = document.querySelector(".gamburger-menu__content"),
navLink = document.getElementsByClassName('navigation__link');

open.addEventListener('click', function () {
    flagScroll = true;
    content.classList.add('gamburger-menu__content_active');
    //open.style.display = 'none';
    open.classList.remove('gamburger-menu__link_active');
});

close.addEventListener('click', function () {
    flagScroll = false;
    content.classList.remove('gamburger-menu__content_active');
    //open.style.display = 'block';
    open.classList.add('gamburger-menu__link_active');
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
    })
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
    $(function() {

        let moveSlide = function(container, slideNum){
            var items = container.find('.slider__contant'),
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
            event.preventDefault();
            var $this = $(this),
                container = $this.closest('.slider'),
                items = $('.slider__contant', container),
                activeItem = items.filter('.slider__contant_active'),
                exItem, edItem, reqItem;

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
    });
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjYy1nb3Jpem9udC5qcyIsImFjYy12ZXJ0aWNhbC5qcyIsImRvdC1nZW5lcmF0b3IuanMiLCJmZWVkYmFjay1tb2RhbC5qcyIsImZvcm0uanMiLCJmdWxsLXNjcmVlbi1tZW51LmpzIiwibWFwLmpzIiwicGFnaW5hdGlvbi1qUS5qcyIsInBsYXllci5qcyIsInNsaWRlci1qUS5qcyIsInRleHQtaW4tYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQ3RFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0M3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0MzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQ3hGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0MzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY29yZGVvbl9fdXNlcm5hbWUnKSxcbiAgICAgICAgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY29yZGVvbl9faXRlbScpO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPHVzZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdXNlckVsID0gdXNlcltpXSwgY2FyZEVsID0gY2FyZFtpXTtcbiAgICAgICAgdXNlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPHVzZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkUmVtID0gY2FyZFtqXTtcbiAgICAgICAgICAgICAgICBpZiAoaiAhPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICBjYXJkUmVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGVvbl9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjYXJkRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRlb25fX2l0ZW1fYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBjYXJkRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkZW9uX19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkRWwuY2xhc3NMaXN0LmFkZCgnYWNjb3JkZW9uX19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRlb24tdmVydF9fc3VidGl0bGUnKSxcbiAgICAgICAgbWVudUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRlb24tdmVydF9faXRlbScpO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPG1lbnVMaW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVMaW5rRWwgPSBtZW51TGlua1tpXSwgbWVudUl0ZW1FbCA9IG1lbnVJdGVtW2ldO1xuICAgICAgICBtZW51TGlua0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPG1lbnVMaW5rLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1SZW0gPSBtZW51SXRlbVtqXTtcbiAgICAgICAgICAgICAgICBpZiAoaiAhPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbVJlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRlb24tdmVydF9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChtZW51SXRlbUVsLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkZW9uLXZlcnRfX2l0ZW1fYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGVvbi12ZXJ0X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUVsLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGVvbi12ZXJ0X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWN0aW9uJyk7XG4gICAgbGV0IGdlbmVyYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxzZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZG90ID0gJCgnPGE+Jywge1xuICAgICAgICAgICAgICAgIGF0dHIgOiB7IFxuICAgICAgICAgICAgICAgICAgICBocmVmIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3MgOiAncGFnaW5hdGlvbl9fbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfc2Nyb2xsX3RvIDogaSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZG90ID0gJCgnPGE+Jywge1xuICAgICAgICAgICAgICAgIGF0dHIgOiB7IFxuICAgICAgICAgICAgICAgICAgICBjbGFzcyA6ICdwYWdpbmF0aW9uX19saW5rIHBhZ2luYXRpb25fX2xpbmtfYWN0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YV9zY3JvbGxfdG8gOiBpIC8vaW5kXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbicpLmFwcGVuZChkb3QpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgZ2VuZXJhdGVEb3RzKCk7XG59KSgpIiwiY29uc3QgZmVlZE9wZW4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fYnV0dG9uJyksXG5mZWVkQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlZGJhY2tfX2Nsb3NlJyksXG5mZWVkTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZmVlZGJhY2snKSxcbnVzZXJJbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWRiYWNrX191c2VybmFtZS1pbi1tb2RhbCcpLFxudGV4dEluTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlZGJhY2tfX3RleHRfbW9kYWwnKSxcbnVzZXJJbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fdXNlcm5hbWUnKSxcbnRleHRJbkxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fdGV4dCcpO1xuXG5cbmZvciAobGV0IGkgPSAwOyBpPGZlZWRPcGVuLmxlbmd0aDsgaSsrKSB7XG4gICAgZmVlZE9wZW5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBmbGFnU2Nyb2xsID0gdHJ1ZTtcbiAgICAgICAgZmVlZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgIHVzZXJJbk1vZGFsLnRleHRDb250ZW50ID0gdXNlckluTGlzdFtpXS50ZXh0Q29udGVudDtcbiAgICAgICAgdGV4dEluTW9kYWwudGV4dENvbnRlbnQgPSB0ZXh0SW5MaXN0W2ldLnRleHRDb250ZW50O1xuICAgIH0pXG59O1xuXG5mZWVkQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuICAgIGZlZWRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufSk7XG5cbmZlZWRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT0gZmVlZE1vZGFsKSB7XG4gICAgICAgIGZlZWRDbG9zZS5jbGljaygpO1xuICAgIH1cbn0pOyIsIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmb3JtRGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm1fX2RlbGl2ZXJ5JyksXG4gICAgICAgIGJ0bkRlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidXR0b25fX2RlbGl2ZXJ5JyksXG4gICAgICAgIG1vZGFsVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbF9fdGV4dCcpLFxuICAgICAgICBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1kZWxpdmVyeScpLFxuICAgICAgICBjbG9zZU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbl9jbG9zZScpO1xuXG4gICAgYnRuRGVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICh2YWxpZGF0ZUZvcm0oZm9ybURlbCkpIHtcblxuICAgICAgICAgICAgbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGZvcm1EZWwpO1xuICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCd0bycsICdhc3czMjVAeWFuZGV4LnJ1Jyk7XG5cbiAgICAgICAgICAgIGNvbnN0IHNlbmRUb1NlcnYgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHNlbmRUb1NlcnYucmVzcG9uc2VUeXBlID0gJ2pzb24nO1xuICAgICAgICAgICAgc2VuZFRvU2Vydi5vcGVuKCdQT1NUJywgJ2h0dHBzOi8vd2ViZGV2LWFwaS5sb2Z0c2Nob29sLmNvbS9zZW5kbWFpbCcpO1xuICAgICAgICAgICAgc2VuZFRvU2Vydi5zZW5kKGZvcm1EYXRhKTtcblxuICAgICAgICAgICAgc2VuZFRvU2Vydi5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coc2VuZFRvU2Vydi5yZXNwb25zZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VuZFRvU2Vydi5yZXNwb25zZS5zdGF0dXMgPT0gJzEnKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9IFwi0KHQvtC+0LHRidC10L3QuNC1INC+0YLQv9GA0LDQstC70LXQvdC+XCI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gXCLQodC+0L7QsdGJ0LXQvdC40LUg0L3QtSDQvtGC0L/RgNCw0LLQu9C10L3Qvi4g0J/QvtC/0YDQvtCx0YPQudGC0LUg0LXRidC1INGA0LDQtyFcIjtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgICAgICBib2R5Rml4ZWQuY2xhc3NMaXN0LmFkZCgnYm9keV9fZml4ZWQnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGb3JtKGZvcm0pIHtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcblxuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5uYW1lKSkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMucGhvbmUpKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5jb21tZW50KSkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHZhbGlkO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZpZWxkKGZpZWxkKSB7XG4gICAgICAgIGlmICggIWZpZWxkLmNoZWNrVmFsaWRpdHkoKSApIHtcbiAgICAgICAgICAgIGZpZWxkLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IGZpZWxkLnZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZmllbGQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gXCJcIjtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGJvZHlGaXhlZC5jbGFzc0xpc3QucmVtb3ZlKCdib2R5X19maXhlZCcpO1xuICAgIH0pO1xuXG4gICAgbW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBtb2RhbCkge1xuICAgICAgICAgICAgY2xvc2VNb2RhbC5jbGljaygpO1xuICAgICAgICB9O1xuICAgIH0pO1xufSkoKSIsImNvbnN0IG9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWJ1cmdlci1tZW51X19saW5rXCIpLFxuY2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWJ1cmdlci1tZW51X19jbG9zZVwiKSxcbmNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWJ1cmdlci1tZW51X19jb250ZW50XCIpLFxubmF2TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb25fX2xpbmsnKTtcblxub3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBmbGFnU2Nyb2xsID0gdHJ1ZTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWJ1cmdlci1tZW51X19jb250ZW50X2FjdGl2ZScpO1xuICAgIC8vb3Blbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIG9wZW4uY2xhc3NMaXN0LnJlbW92ZSgnZ2FtYnVyZ2VyLW1lbnVfX2xpbmtfYWN0aXZlJyk7XG59KTtcblxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtYnVyZ2VyLW1lbnVfX2NvbnRlbnRfYWN0aXZlJyk7XG4gICAgLy9vcGVuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIG9wZW4uY2xhc3NMaXN0LmFkZCgnZ2FtYnVyZ2VyLW1lbnVfX2xpbmtfYWN0aXZlJyk7XG59KTtcblxuY29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT0gY29udGVudCkge1xuICAgICAgICBjbG9zZS5jbGljaygpO1xuICAgIH07XG59KTtcblxuZm9yIChsZXQgaSA9IDA7IGk8bmF2TGluay5sZW5ndGg7IGkrKykge1xuICAgIG5hdkxpbmtbaV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY2xvc2UuY2xpY2soKTtcbiAgICB9KTtcbn07IiwiKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAoXCJtYXBcIiwge1xuICAgICAgICAgICAgY2VudGVyOiBbNTkuOTM4NTMwLCAzMC4yODg4NTNdLFxuICAgICAgICAgICAgem9vbTogMTEuNVxuICAgICAgICB9KTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdzZWFyY2hDb250cm9sJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHlwZVNlbGVjdG9yJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgncnVsZXJDb250cm9sJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgndHJhZmZpY0NvbnRyb2wnKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdnZW9sb2NhdGlvbkNvbnRyb2wnKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCd6b29tQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ2Z1bGxzY3JlZW5Db250cm9sJyk7XG5cbiAgICAgICAgbGV0IGNvb3JkcyA9IFtcbiAgICAgICAgICAgIFs1OS45ODYzMjAsIDMwLjIwMTg3NV0sXG4gICAgICAgICAgICBbNTkuOTYwMjI0LCAzMC4zNDg2NjVdLFxuICAgICAgICAgICAgWzU5Ljg3ODY5MiwgMzAuMzg3NjExXSxcbiAgICAgICAgICAgIFs1OS45MTE0NjgsIDMwLjIxNTQ2NF1cbiAgICAgICAgXTtcblxuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGNvb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29vcmRQb2ludCA9IGNvb3Jkc1tqXTtcbiAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG5ldyB5bWFwcy5QbGFjZW1hcmsoY29vcmRQb2ludCwge30sIHtpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZScsIGljb25JbWFnZUhyZWY6IFwiLi4vaW1nL21hcC1wb2ludC5wbmdcIiwgaWNvbkltYWdlU2l6ZTogWzQ2LCA1N119KSk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICB5bWFwcy5yZWFkeShpbml0KTtcbn0pKCkiLCJjb25zdCBzZWN0aW9ucyA9ICQoJy5zZWN0aW9uJyk7XG5jb25zdCBkaXNwbGF5ID0gJCgnLm1haW4tY29udGVudCcpO1xubGV0IGZsYWdTY3JvbGwgPSBmYWxzZTtcblxuY29uc3QgbWQgPSBuZXcgTW9iaWxlRGV0ZWN0KHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50KTtcbmNvbnN0IGlzTW9iaWxlID0gbWQubW9iaWxlKCk7XG5cbmNvbnN0IHBlcmZvcm0gPSBzZWN0aW9uTnVtID0+IHtcbiAgICBpZiAoZmxhZ1Njcm9sbCkgcmV0dXJuO1xuXG4gICAgZmxhZ1Njcm9sbCA9IHRydWU7XG4gICAgY29uc3QgbnVtID0gLTEwMCpzZWN0aW9uTnVtO1xuICAgIGNvbnN0IHNjcm9sbER1cmF0aW9uID0gOTAwOyAvLzYwMCAtINC10LTQuNC90LDRjyDQtNC70LjRgtC10LvRjNC90L7RgdGC0Ywg0LDQvdC40LzQsNGG0LjQuCArIDMwMCAtINC40L3QtdGA0YbQuNGPXG5cbiAgICBpZihpc05hTihudW0pKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cf0LXRgNC10LTQsNC90L4g0L3QtdCy0LXRgNC90L7QtSDQt9C90LDRh9C10L3QuNC1INCyIHBlcmZvcm0oKScpO1xuICAgIH07XG5cbiAgICBzZWN0aW9ucy5lcShzZWN0aW9uTnVtKS5hZGRDbGFzcygnc2VjdGlvbl9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzZWN0aW9uX2FjdGl2ZScpO1xuXG4gICAgZGlzcGxheS5jc3Moe1xuICAgICAgICB0cmFuc2Zvcm06IGB0cmFuc2xhdGVZKCR7bnVtfSUpYFxuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZsYWdTY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgJCgnLnBhZ2luYXRpb25fX2xpbmsnKS5lcShzZWN0aW9uTnVtKS5hZGRDbGFzcygncGFnaW5hdGlvbl9fbGlua19hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdwYWdpbmF0aW9uX19saW5rX2FjdGl2ZScpO1xuXG4gICAgfSwgc2Nyb2xsRHVyYXRpb24pXG59O1xuXG5jb25zdCBzY3JvbGxUb1NlY3Rpb24gPSBkaXJlY3Rpb25Ub1Njcm9sbCA9PiB7XG4gICAgY29uc3QgYWN0aXZlU2VjdGlvbiA9IHNlY3Rpb25zLmZpbHRlcignLnNlY3Rpb25fYWN0aXZlJyk7XG4gICAgY29uc3QgbmV4dFNlY3Rpb24gPSBhY3RpdmVTZWN0aW9uLm5leHQoKTtcbiAgICBjb25zdCBwcmV2U2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24ucHJldigpO1xuXG4gICAgaWYgKGRpcmVjdGlvblRvU2Nyb2xsID09PSAnbmV4dCcgJiYgbmV4dFNlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgIHBlcmZvcm0obmV4dFNlY3Rpb24uaW5kZXgoKSk7XG4gICAgfTtcbiAgICBpZiAoZGlyZWN0aW9uVG9TY3JvbGwgPT09ICdwcmV2JyAmJiBwcmV2U2VjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgcGVyZm9ybShwcmV2U2VjdGlvbi5pbmRleCgpKTtcbiAgICB9O1xufTtcblxuJCh3aW5kb3cpLm9uKCd3aGVlbCcsIGUgPT4ge1xuICAgIGNvbnN0IGRlbHRhWSA9IGUub3JpZ2luYWxFdmVudC5kZWx0YVk7XG5cbiAgICBpZiAoZGVsdGFZID4gMCkge1xuICAgICAgICBzY3JvbGxUb1NlY3Rpb24oJ25leHQnKTtcbiAgICB9O1xuXG4gICAgaWYgKGRlbHRhWSA8IDApIHtcbiAgICAgICAgc2Nyb2xsVG9TZWN0aW9uKCdwcmV2Jyk7XG4gICAgfTtcbn0pO1xuXG4kKHdpbmRvdykub24oJ2tleWRvd24nLCBlID0+IHtcblxuICAgIGNvbnN0IHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgY29uc3QgdHlwZUluQXJlYSA9IHRhZ05hbWUgIT09ICdpbnB1dCcgJiYgdGFnTmFtZSAhPT0gJ3RleHRhcmVhJ1xuICAgIFxuICAgIGlmKCF0eXBlSW5BcmVhKSByZXR1cm47XG4gICAgc3dpdGNoIChlLmtleUNvZGUpIHtcbiAgICAgICAgY2FzZSAzOCA6IHJldHVybiBzY3JvbGxUb1NlY3Rpb24oJ3ByZXYnKTtcbiAgICAgICAgY2FzZSA0MCA6IHJldHVybiBzY3JvbGxUb1NlY3Rpb24oJ25leHQnKTtcbiAgICB9O1xufSk7XG5cbiQoJ1tkYXRhX3Njcm9sbF90b10nKS5vbignY2xpY2snLCBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgJHRoaXMgPSAkKGUuY3VycmVudFRhcmdldCk7XG4gICAgdmFyIHRhcmdldCA9ICR0aGlzLmF0dHIoJ2RhdGFfc2Nyb2xsX3RvJyk7XG5cbiAgICBwZXJmb3JtKHRhcmdldCk7XG59KTtcblxuJCgnLnNjcm9sbF9fbGluaycpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBzY3JvbGxUb1NlY3Rpb24oJ25leHQnKTtcbn0pO1xuXG5pZihpc01vYmlsZSkge1xuICAgICQoJ2JvZHknKS5zd2lwZSh7XG4gICAgICAgIHN3aXBlOmZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEpIHtcbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGlvblN3aXBlID0gZGlyZWN0aW9uID09PSAndXAnID8gJ25leHQnIDogJ3ByZXYnO1xuICAgICAgICAgICAgc2Nyb2xsVG9TZWN0aW9uIChkaXJlY3Rpb25Td2lwZSk7XG4gICAgICAgIH1cbiAgICB9KVxufTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdmlkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb1wiKTtcbiAgICBjb25zdCBwbGF5ZXJTdGFydCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX19zdGFydFwiKTtcbiAgICBjb25zdCBwbGF5ZXJQYXVzZWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fcGF1c2VcIik7XG4gICAgY29uc3QgcGxheWVyVm9sdW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3ZvbHVtZVwiKTtcbiAgICBjb25zdCBwbGF5ZXJNdXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX211dGVcIik7XG4gICAgY29uc3Qgc2Nyb2xsRHVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3Njcm9sbF9kdXJhdGlvblwiKTtcbiAgICBjb25zdCBiaWdXd2l0ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9fX2JpZy1idXR0b25cIik7XG5cblxuICAgIHBsYXllclN0YXJ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZpZC5wbGF5KCk7XG4gICAgICAgIHBsYXllclBhdXNlZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX3BhdXNlX2FjdGl2ZScpO1xuICAgICAgICBwbGF5ZXJTdGFydC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX3N0YXJ0X3VuYWN0aXZlJyk7XG4gICAgICAgIGJpZ1d3aXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcblxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGR1clBlcmNlbnQgPSAodmlkLmN1cnJlbnRUaW1lIC8gdmlkLmR1cmF0aW9uKSAqIDEwMDtcbiAgICAgICAgICAgIHNjcm9sbER1ci5zdHlsZS5sZWZ0ID0gYCR7ZHVyUGVyY2VudH0lYDtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG5cbiAgICBwbGF5ZXJQYXVzZWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLnBhdXNlKCk7XG4gICAgICAgIHBsYXllclN0YXJ0LmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcbiAgICAgICAgcGxheWVyUGF1c2VkLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllcl9fcGF1c2VfYWN0aXZlJyk7XG4gICAgICAgIGJpZ1d3aXRlQnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGJpZ1d3aXRlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZpZC5wbGF5KCk7XG4gICAgICAgIHBsYXllclBhdXNlZC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX3BhdXNlX2FjdGl2ZScpO1xuICAgICAgICBwbGF5ZXJTdGFydC5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX3N0YXJ0X3VuYWN0aXZlJyk7XG4gICAgICAgIGJpZ1d3aXRlQnRuLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcblxuICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgbGV0IGR1clBlcmNlbnQgPSAodmlkLmN1cnJlbnRUaW1lIC8gdmlkLmR1cmF0aW9uKSAqIDEwMDtcbiAgICAgICAgICAgIHNjcm9sbER1ci5zdHlsZS5sZWZ0ID0gYCR7ZHVyUGVyY2VudH0lYDtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgfSk7XG5cblxuICAgIHBsYXllclZvbHVtZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWQubXV0ZWQgPSB0cnVlO1xuICAgICAgICBwbGF5ZXJNdXRlLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fbXV0ZV9hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIHBsYXllck11dGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLm11dGVkID0gZmFsc2U7XG4gICAgICAgIHBsYXllck11dGUuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19tdXRlX2FjdGl2ZScpO1xuICAgIH0pO1xuXG5cblxuICAgIGNvbnN0IGxlbmdodGxWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fdm9sdW1lLWR1cmF0aW9uXCIpO1xuICAgIGNvbnN0IHNjcm9sbFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX19zY3JvbGxfdm9sdW1lXCIpO1xuICAgIGxldCBjb29yZHMgPSB7fTtcbiAgICB2aWQudm9sdW1lID0gMTtcblxuXG4gICAgY29uc3QgbWVhc3VyZUVsZW0gPSAoZWxlbSwgZXZlbnQpID0+IHtcbiAgICAgICAgY29uc3QgbWVhc3VyZXMgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvZmZzZXRUb3A6IG1lYXN1cmVzLnRvcCxcbiAgICAgICAgICAgIG9mZnNldExlZnQ6IG1lYXN1cmVzLmxlZnQsXG4gICAgICAgICAgICB3aWR0aDogbWVhc3VyZXMud2lkdGgsXG4gICAgICAgICAgICBjbGlja2VkWDogZXZlbnQubGF5ZXJYXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzZXR1cE1lYXN1cmVzID0gZSA9PiB7XG4gICAgICAgIGxlbmdodGxWYWwuY2xhc3NMaXN0LmFkZCgnYWxsb3cnKTtcblxuICAgICAgICBjb29yZHMubGluZSA9IG1lYXN1cmVFbGVtKGxlbmdodGxWYWwsIGUpO1xuICAgICAgICBjb29yZHMuYnRuID0gbWVhc3VyZUVsZW0oc2Nyb2xsVmFsLCBlKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0VkZ2VzID0gKGJ0biwgbGluZSkgPT4ge1xuICAgICAgICB2YXIgeCA9IGJ0bi54O1xuXG4gICAgICAgIGlmICh4PDApIHggPSAwO1xuXG4gICAgICAgIGlmICh4PmxpbmUud2lkdGggLSBidG4ud2lkdGgpIHtcbiAgICAgICAgICAgIHggPSBsaW5lLndpZHRoIC0gYnRuLndpZHRoXG4gICAgICAgIH07XG5cbiAgICAgICAgc2Nyb2xsVmFsLnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcblxuICAgICAgICBsZXQgbWF4Vm9sdW1lID0gbGluZS53aWR0aCAtIGJ0bi53aWR0aDtcbiAgICAgICAgbGV0IGN1clZvbHVtZSA9IHg7XG5cbiAgICAgICAgdmlkLnZvbHVtZSA9IGN1clZvbHVtZS9tYXhWb2x1bWU7XG4gICAgfTtcblxuICAgIGNvbnN0IHNldHVwQmxvY2tQb3MgPSBlID0+IHtcbiAgICAgICAgaWYoIWxlbmdodGxWYWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbGxvdycpKSByZXR1cm47XG5cbiAgICAgICAgdmFyIHtsaW5lLCBidG59ID0gY29vcmRzO1xuICAgICAgICBidG4ueCA9IGUucGFnZVggLSBsaW5lLm9mZnNldExlZnQgLSBidG4uY2xpY2tlZFg7XG5cbiAgICAgICAgY2hlY2tFZGdlcyAoYnRuLCBsaW5lKTtcbiAgICB9O1xuXG4gICAgc2Nyb2xsVmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHNldHVwTWVhc3VyZXMpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHNldHVwQmxvY2tQb3MpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBlPT4ge1xuICAgICAgICBsZW5naHRsVmFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FsbG93Jyk7XG4gICAgfSk7XG59KSgpIiwiKGZ1bmN0aW9uKCkge1xuICAgICQoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgbGV0IG1vdmVTbGlkZSA9IGZ1bmN0aW9uKGNvbnRhaW5lciwgc2xpZGVOdW0pe1xuICAgICAgICAgICAgdmFyIGl0ZW1zID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2NvbnRhbnQnKSxcbiAgICAgICAgICAgICAgICBhY3RpdmVTbGlkZSA9IGl0ZW1zLmZpbHRlcignLnNsaWRlcl9fY29udGFudF9hY3RpdmUnKSxcbiAgICAgICAgICAgICAgICBudW1PZlNsaWRlID0gaXRlbXMuZXEoc2xpZGVOdW0pLFxuICAgICAgICAgICAgICAgIG51bU9mSW5kZXggPSBudW1PZlNsaWRlLmluZGV4KCksXG4gICAgICAgICAgICAgICAgbGlzdE9mU2xpZGVzID0gY29udGFpbmVyLmZpbmQoJy5zbGlkZXJfX2l0ZW1zJyksXG4gICAgICAgICAgICAgICAgZHVyYXRpb24gPSA2MDA7XG5cbiAgICAgICAgICAgIGlmKG51bU9mU2xpZGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGlzdE9mU2xpZGVzLmFuaW1hdGUgKHtcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnIDogLW51bU9mSW5kZXggKiAxMDAgKyAnJSdcbiAgICAgICAgICAgICAgICB9LCBkdXJhdGlvbiwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2xpZGUucmVtb3ZlQ2xhc3MoJ3NsaWRlcl9fY29udGFudF9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgbnVtT2ZTbGlkZS5hZGRDbGFzcygnc2xpZGVyX19jb250YW50X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICAkKCcuc2xpZGVyX19hcnJvdycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KXtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA9ICR0aGlzLmNsb3Nlc3QoJy5zbGlkZXInKSxcbiAgICAgICAgICAgICAgICBpdGVtcyA9ICQoJy5zbGlkZXJfX2NvbnRhbnQnLCBjb250YWluZXIpLFxuICAgICAgICAgICAgICAgIGFjdGl2ZUl0ZW0gPSBpdGVtcy5maWx0ZXIoJy5zbGlkZXJfX2NvbnRhbnRfYWN0aXZlJyksXG4gICAgICAgICAgICAgICAgZXhJdGVtLCBlZEl0ZW0sIHJlcUl0ZW07XG5cbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnc2xpZGVyX19yaWdodCcpKSB7XG4gICAgICAgICAgICAgICAgZXhJdGVtID0gYWN0aXZlSXRlbS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgZWRJdGVtID0gaXRlbXMuZmlyc3QoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGlmICgkdGhpcy5oYXNDbGFzcygnc2xpZGVyX19sZWZ0JykpIHtcbiAgICAgICAgICAgICAgICBleEl0ZW0gPSBhY3RpdmVJdGVtLnByZXYoKTtcbiAgICAgICAgICAgICAgICBlZEl0ZW0gPSBpdGVtcy5sYXN0KCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICByZXFJdGVtID0gZXhJdGVtLmxlbmd0aCA/IGV4SXRlbS5pbmRleCgpIDogZWRJdGVtLmluZGV4KCk7XG4gICAgICAgICAgICBtb3ZlU2xpZGUoY29udGFpbmVyLCByZXFJdGVtKTtcbiAgICAgICAgfSlcbiAgICB9KTtcbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZmVlZExpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZmVlZGJhY2tfX2xpc3QnKSxcbiAgICAgICAgZmVlZEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZlZWRiYWNrX19idXR0b24nKTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmZWVkQnRuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBidG4gPSBmZWVkQnRuW2ldO1xuICAgICAgICBsZXQgd2lkdGhXaW4gPSBwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKGZlZWRMaXN0KS53aWR0aCk7XG4gICAgICAgIGlmICh3aWR0aFdpbiA8PSA0ODApIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICfQp9C40YLQsNGC0Ywg0L7RgtC30YvQsic7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAn0J/QvtC00YDQvtCx0L3QtdC1JztcbiAgICAgICAgfTtcbiAgICB9O1xufSkoKSJdfQ==
