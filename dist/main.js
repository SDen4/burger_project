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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjYy1nb3Jpem9udC5qcyIsImFjYy12ZXJ0aWNhbC5qcyIsImRvdC1nZW5lcmF0b3IuanMiLCJmZWVkYmFjay1tb2RhbC5qcyIsImZvcm0uanMiLCJmdWxsLXNjcmVlbi1tZW51LmpzIiwibWFwLmpzIiwicGFnaW5hdGlvbi1qUS5qcyIsInBsYXllci5qcyIsInNsaWRlci1qUS5qcyIsInRleHQtaW4tYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDcEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0MvRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHVzZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRlb25fX3VzZXJuYW1lJyksXG4gICAgICAgIGNhcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRlb25fX2l0ZW0nKTtcblxuICAgIGZvciAobGV0IGk9MDsgaTx1c2VyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHVzZXJFbCA9IHVzZXJbaV0sIGNhcmRFbCA9IGNhcmRbaV07XG4gICAgICAgIHVzZXJFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajx1c2VyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2FyZFJlbSA9IGNhcmRbal07XG4gICAgICAgICAgICAgICAgaWYgKGogIT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FyZFJlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRlb25fX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoY2FyZEVsLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkZW9uX19pdGVtX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgY2FyZEVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGVvbl9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2FyZEVsLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGVvbl9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH07XG59KSgpIiwiKGZ1bmN0aW9uKCkge1xuXG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRlb24tdmVydF9fc3VidGl0bGUnKSxcbiAgICAgICAgICBtZW51SXRlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY29yZGVvbi12ZXJ0X19pdGVtJyksXG4gICAgICAgICAgbWVudVRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnVfX3RpdGxlJyk7XG5cblxuICAgIGZvciAobGV0IGk9MDsgaTxtZW51TGluay5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBtZW51TGlua0VsID0gbWVudUxpbmtbaV0sIG1lbnVJdGVtRWwgPSBtZW51SXRlbVtpXTtcbiAgICAgICAgbWVudUxpbmtFbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZvciAobGV0IGo9MDsgajxtZW51TGluay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1lbnVJdGVtUmVtID0gbWVudUl0ZW1bal07XG4gICAgICAgICAgICAgICAgaWYgKGogIT09IGkpIHtcbiAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW1SZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkZW9uLXZlcnRfX2l0ZW1fYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpbldpZHRoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUnKS5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1heFdpZHRoV2luID0gNTY1OyAvL9C80LDQutGB0LjQvNCw0LvRjNC90LDRjyDRiNC40YDQuNC90LAg0L7QutC90LAg0L3QtSDRgdC60YDRi9Cy0LDRgtGMINC30LDQs9C+0LvQvtCy0L7QuiDQvNC10L3RjlxuXG4gICAgICAgICAgICAgICAgICAgIGlmKHdpbldpZHRoIDwgbWF4V2lkdGhXaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QuYWRkKCdtZW51X2hpZGUnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAobWVudUl0ZW1FbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGVvbi12ZXJ0X19pdGVtX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1FbC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRlb24tdmVydF9faXRlbV9hY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgIG1lbnVUaXRsZS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51X2hpZGUnKTtcblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUVsLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGVvbi12ZXJ0X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxufSkoKSIsIihmdW5jdGlvbigpIHtcbiAgICBsZXQgc2VjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3NlY3Rpb24nKTtcbiAgICBsZXQgZ2VuZXJhdGVEb3RzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpPHNlY3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBkb3QgPSAkKCc8YT4nLCB7XG4gICAgICAgICAgICAgICAgYXR0ciA6IHsgXG4gICAgICAgICAgICAgICAgICAgIGhyZWYgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzcyA6ICdwYWdpbmF0aW9uX19saW5rJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YV9zY3JvbGxfdG8gOiBpIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBkb3QgPSAkKCc8YT4nLCB7XG4gICAgICAgICAgICAgICAgYXR0ciA6IHsgXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzIDogJ3BhZ2luYXRpb25fX2xpbmsgcGFnaW5hdGlvbl9fbGlua19hY3RpdmUnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhX3Njcm9sbF90byA6IGkgLy9pbmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJy5wYWdpbmF0aW9uJykuYXBwZW5kKGRvdCk7XG4gICAgICAgIH07XG4gICAgfTtcbiAgICBnZW5lcmF0ZURvdHMoKTtcbn0pKCkiLCJjb25zdCBmZWVkT3BlbiA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZlZWRiYWNrX19idXR0b24nKSxcbmZlZWRDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVkYmFja19fY2xvc2UnKSxcbmZlZWRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1mZWVkYmFjaycpLFxudXNlckluTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlZGJhY2tfX3VzZXJuYW1lLWluLW1vZGFsJyksXG50ZXh0SW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVkYmFja19fdGV4dF9tb2RhbCcpLFxudXNlckluTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZlZWRiYWNrX191c2VybmFtZScpLFxudGV4dEluTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZlZWRiYWNrX190ZXh0Jyk7XG5cblxuZm9yIChsZXQgaSA9IDA7IGk8ZmVlZE9wZW4ubGVuZ3RoOyBpKyspIHtcbiAgICBmZWVkT3BlbltpXS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZsYWdTY3JvbGwgPSB0cnVlO1xuICAgICAgICBmZWVkTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgdXNlckluTW9kYWwudGV4dENvbnRlbnQgPSB1c2VySW5MaXN0W2ldLnRleHRDb250ZW50O1xuICAgICAgICB0ZXh0SW5Nb2RhbC50ZXh0Q29udGVudCA9IHRleHRJbkxpc3RbaV0udGV4dENvbnRlbnQ7XG4gICAgfSlcbn07XG5cbmZlZWRDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBmbGFnU2Nyb2xsID0gZmFsc2U7XG4gICAgZmVlZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG59KTtcblxuZmVlZE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldCA9PSBmZWVkTW9kYWwpIHtcbiAgICAgICAgZmVlZENsb3NlLmNsaWNrKCk7XG4gICAgfVxufSk7IiwiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZvcm1EZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9fZGVsaXZlcnknKSxcbiAgICAgICAgYnRuRGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbl9fZGVsaXZlcnknKSxcbiAgICAgICAgbW9kYWxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX190ZXh0JyksXG4gICAgICAgIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlbGl2ZXJ5JyksXG4gICAgICAgIGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX2Nsb3NlJyk7XG5cbiAgICBidG5EZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHZhbGlkYXRlRm9ybShmb3JtRGVsKSkge1xuXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybURlbCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RvJywgJ2FzdzMyNUB5YW5kZXgucnUnKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VuZFRvU2VydiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgc2VuZFRvU2Vydi5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgICAgICBzZW5kVG9TZXJ2Lm9wZW4oJ1BPU1QnLCAnaHR0cHM6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL3NlbmRtYWlsJyk7XG4gICAgICAgICAgICBzZW5kVG9TZXJ2LnNlbmQoZm9ybURhdGEpO1xuXG4gICAgICAgICAgICBzZW5kVG9TZXJ2LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZW5kVG9TZXJ2LnJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZW5kVG9TZXJ2LnJlc3BvbnNlLnN0YXR1cyA9PSAnMScpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gXCLQodC+0L7QsdGJ0LXQvdC40LUg0L7RgtC/0YDQsNCy0LvQtdC90L5cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSBcItCh0L7QvtCx0YnQtdC90LjQtSDQvdC1INC+0YLQv9GA0LDQstC70LXQvdC+LiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQtdGJ0LUg0YDQsNC3IVwiO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZm9ybSkge1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICghdmFsaWRhdGVGaWVsZChmb3JtLmVsZW1lbnRzLm5hbWUpKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5waG9uZSkpIHtcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghdmFsaWRhdGVGaWVsZChmb3JtLmVsZW1lbnRzLmNvbW1lbnQpKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQoZmllbGQpIHtcbiAgICAgICAgaWYgKCAhZmllbGQuY2hlY2tWYWxpZGl0eSgpICkge1xuICAgICAgICAgICAgZmllbGQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gZmllbGQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICB9KTtcblxuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwuY2xpY2soKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn0pKCkiLCJjb25zdCBvcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1idXJnZXItbWVudV9fbGlua1wiKSxcbmNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1idXJnZXItbWVudV9fY2xvc2VcIiksXG5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1idXJnZXItbWVudV9fY29udGVudFwiKSxcbm5hdkxpbmtHID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2aWdhdGlvbl9fbGlua19nYW1idXJnZXInKTsgLy9uYXZpZ2F0aW9uX19saW5rXG5cblxub3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBmbGFnU2Nyb2xsID0gdHJ1ZTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWJ1cmdlci1tZW51X19jb250ZW50X2FjdGl2ZScpO1xuICAgIG9wZW4uc3R5bGUubGVmdCA9ICctOTk5MHB4JztcbiAgICAvL29wZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvL29wZW4uY2xhc3NMaXN0LnJlbW92ZSgnZ2FtYnVyZ2VyLW1lbnVfX2xpbmtfYWN0aXZlJyk7XG59KTtcblxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtYnVyZ2VyLW1lbnVfX2NvbnRlbnRfYWN0aXZlJyk7XG4gICAgb3Blbi5zdHlsZS5sZWZ0ID0gJzkyJSc7XG4gICAgLy9vcGVuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIC8vb3Blbi5jbGFzc0xpc3QuYWRkKCdnYW1idXJnZXItbWVudV9fbGlua19hY3RpdmUnKTtcbn0pO1xuXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldCA9PSBjb250ZW50KSB7XG4gICAgICAgIGNsb3NlLmNsaWNrKCk7XG4gICAgfTtcbn0pO1xuXG5mb3IgKGxldCBpID0gMDsgaTxuYXZMaW5rRy5sZW5ndGg7IGkrKykge1xuICAgIG5hdkxpbmtHW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsb3NlLmNsaWNrKCk7XG4gICAgfSk7XG59OyIsIihmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcbiAgICAgICAgICAgIGNlbnRlcjogWzU5LjkzODUzMCwgMzAuMjg4ODUzXSxcbiAgICAgICAgICAgIHpvb206IDExLjVcbiAgICAgICAgfSk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZ2VvbG9jYXRpb25Db250cm9sJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnem9vbUNvbnRyb2wnKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuXG4gICAgICAgIGxldCBjb29yZHMgPSBbXG4gICAgICAgICAgICBbNTkuOTg2MzIwLCAzMC4yMDE4NzVdLFxuICAgICAgICAgICAgWzU5Ljk2MDIyNCwgMzAuMzQ4NjY1XSxcbiAgICAgICAgICAgIFs1OS44Nzg2OTIsIDMwLjM4NzYxMV0sXG4gICAgICAgICAgICBbNTkuOTExNDY4LCAzMC4yMTU0NjRdXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvb3JkUG9pbnQgPSBjb29yZHNbal07XG4gICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKGNvb3JkUG9pbnQsIHt9LCB7aWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLCBpY29uSW1hZ2VIcmVmOiBcIi4uL2ltZy9tYXAtcG9pbnQucG5nXCIsIGljb25JbWFnZVNpemU6IFs0NiwgNTddfSkpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgeW1hcHMucmVhZHkoaW5pdCk7XG59KSgpIiwiY29uc3Qgc2VjdGlvbnMgPSAkKCcuc2VjdGlvbicpO1xuY29uc3QgZGlzcGxheSA9ICQoJy5tYWluLWNvbnRlbnQnKTtcbmxldCBmbGFnU2Nyb2xsID0gZmFsc2U7XG5cbmNvbnN0IG1kID0gbmV3IE1vYmlsZURldGVjdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5jb25zdCBpc01vYmlsZSA9IG1kLm1vYmlsZSgpO1xuXG5jb25zdCBwZXJmb3JtID0gc2VjdGlvbk51bSA9PiB7XG4gICAgaWYgKGZsYWdTY3JvbGwpIHJldHVybjtcblxuICAgIGZsYWdTY3JvbGwgPSB0cnVlO1xuICAgIGNvbnN0IG51bSA9IC0xMDAqc2VjdGlvbk51bTtcbiAgICBjb25zdCBzY3JvbGxEdXJhdGlvbiA9IDkwMDsgLy82MDAgLSDQtdC00LjQvdCw0Y8g0LTQu9C40YLQtdC70YzQvdC+0YHRgtGMINCw0L3QuNC80LDRhtC40LggKyAzMDAgLSDQuNC90LXRgNGG0LjRj1xuXG4gICAgaWYoaXNOYU4obnVtKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfQn9C10YDQtdC00LDQvdC+INC90LXQstC10YDQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQsiBwZXJmb3JtKCknKTtcbiAgICB9O1xuXG4gICAgc2VjdGlvbnMuZXEoc2VjdGlvbk51bSkuYWRkQ2xhc3MoJ3NlY3Rpb25fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2VjdGlvbl9hY3RpdmUnKTtcblxuICAgIGRpc3BsYXkuY3NzKHtcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke251bX0lKWBcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAvLyEhIVxuICAgICAgICAvLyBpZihzZWN0aW9uTnVtID09ICcxJykge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coc2VjdGlvbk51bSArIHR5cGVvZihzZWN0aW9uTnVtKSk7XG4gICAgICAgIC8vICAgICAkKCcucGFnaW5hdGlvbi1saW5rJykuZXEoc2VjdGlvbk51bSkuYWRkQ2xhc3MoJ3BhZ2luYXRpb25fX2xpbmtfYmxhY2snKTsgXG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuICAgICAgICAkKCcucGFnaW5hdGlvbl9fbGluaycpLmVxKHNlY3Rpb25OdW0pLmFkZENsYXNzKCdwYWdpbmF0aW9uX19saW5rX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3BhZ2luYXRpb25fX2xpbmtfYWN0aXZlJyk7XG5cbiAgICB9LCBzY3JvbGxEdXJhdGlvbilcbn07XG5cbmNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IGRpcmVjdGlvblRvU2Nyb2xsID0+IHtcbiAgICBjb25zdCBhY3RpdmVTZWN0aW9uID0gc2VjdGlvbnMuZmlsdGVyKCcuc2VjdGlvbl9hY3RpdmUnKTtcbiAgICBjb25zdCBuZXh0U2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24ubmV4dCgpO1xuICAgIGNvbnN0IHByZXZTZWN0aW9uID0gYWN0aXZlU2VjdGlvbi5wcmV2KCk7XG5cbiAgICBpZiAoZGlyZWN0aW9uVG9TY3JvbGwgPT09ICduZXh0JyAmJiBuZXh0U2VjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgcGVyZm9ybShuZXh0U2VjdGlvbi5pbmRleCgpKTtcbiAgICB9O1xuICAgIGlmIChkaXJlY3Rpb25Ub1Njcm9sbCA9PT0gJ3ByZXYnICYmIHByZXZTZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICBwZXJmb3JtKHByZXZTZWN0aW9uLmluZGV4KCkpO1xuICAgIH07XG59O1xuXG4kKHdpbmRvdykub24oJ3doZWVsJywgZSA9PiB7XG4gICAgY29uc3QgZGVsdGFZID0gZS5vcmlnaW5hbEV2ZW50LmRlbHRhWTtcblxuICAgIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICAgIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xuICAgIH07XG5cbiAgICBpZiAoZGVsdGFZIDwgMCkge1xuICAgICAgICBzY3JvbGxUb1NlY3Rpb24oJ3ByZXYnKTtcbiAgICB9O1xufSk7XG5cbiQod2luZG93KS5vbigna2V5ZG93bicsIGUgPT4ge1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB0eXBlSW5BcmVhID0gdGFnTmFtZSAhPT0gJ2lucHV0JyAmJiB0YWdOYW1lICE9PSAndGV4dGFyZWEnXG4gICAgXG4gICAgaWYoIXR5cGVJbkFyZWEpIHJldHVybjtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM4IDogcmV0dXJuIHNjcm9sbFRvU2VjdGlvbigncHJldicpO1xuICAgICAgICBjYXNlIDQwIDogcmV0dXJuIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xuICAgIH07XG59KTtcblxuJCgnW2RhdGFfc2Nyb2xsX3RvXScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICB2YXIgdGFyZ2V0ID0gJHRoaXMuYXR0cignZGF0YV9zY3JvbGxfdG8nKTtcblxuICAgIHBlcmZvcm0odGFyZ2V0KTtcbn0pO1xuXG4kKCcuc2Nyb2xsX19saW5rJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xufSk7XG5cbmlmKGlzTW9iaWxlKSB7XG4gICAgJCgnYm9keScpLnN3aXBlKHtcbiAgICAgICAgc3dpcGU6ZnVuY3Rpb24oZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uU3dpcGUgPSBkaXJlY3Rpb24gPT09ICd1cCcgPyAnbmV4dCcgOiAncHJldic7XG4gICAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24gKGRpcmVjdGlvblN3aXBlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGNvbnNvbGUubG9nKCdzd2lwZSEnKTtcbn07IiwiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHZpZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlkZW9cIik7XG4gICAgY29uc3QgcGxheWVyU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fc3RhcnRcIik7XG4gICAgY29uc3QgcGxheWVyUGF1c2VkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3BhdXNlXCIpO1xuICAgIGNvbnN0IHBsYXllclZvbHVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX192b2x1bWVcIik7XG4gICAgY29uc3QgcGxheWVyTXV0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX19tdXRlXCIpO1xuICAgIGNvbnN0IHNjcm9sbER1ciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX19zY3JvbGxfZHVyYXRpb25cIik7XG4gICAgY29uc3QgYmlnV3dpdGVCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvX19iaWctYnV0dG9uXCIpO1xuXG5cbiAgICBwbGF5ZXJTdGFydC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWQucGxheSgpO1xuICAgICAgICBwbGF5ZXJQYXVzZWQuY2xhc3NMaXN0LmFkZCgncGxheWVyX19wYXVzZV9hY3RpdmUnKTtcbiAgICAgICAgcGxheWVyU3RhcnQuY2xhc3NMaXN0LmFkZCgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuICAgICAgICBiaWdXd2l0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX3N0YXJ0X3VuYWN0aXZlJyk7XG5cbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBkdXJQZXJjZW50ID0gKHZpZC5jdXJyZW50VGltZSAvIHZpZC5kdXJhdGlvbikgKiAxMDA7XG4gICAgICAgICAgICBzY3JvbGxEdXIuc3R5bGUubGVmdCA9IGAke2R1clBlcmNlbnR9JWA7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuXG4gICAgcGxheWVyUGF1c2VkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZpZC5wYXVzZSgpO1xuICAgICAgICBwbGF5ZXJTdGFydC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXJfX3N0YXJ0X3VuYWN0aXZlJyk7XG4gICAgICAgIHBsYXllclBhdXNlZC5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXJfX3BhdXNlX2FjdGl2ZScpO1xuICAgICAgICBiaWdXd2l0ZUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXJfX3N0YXJ0X3VuYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBiaWdXd2l0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWQucGxheSgpO1xuICAgICAgICBwbGF5ZXJQYXVzZWQuY2xhc3NMaXN0LmFkZCgncGxheWVyX19wYXVzZV9hY3RpdmUnKTtcbiAgICAgICAgcGxheWVyU3RhcnQuY2xhc3NMaXN0LmFkZCgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuICAgICAgICBiaWdXd2l0ZUJ0bi5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX3N0YXJ0X3VuYWN0aXZlJyk7XG5cbiAgICAgICAgaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGxldCBkdXJQZXJjZW50ID0gKHZpZC5jdXJyZW50VGltZSAvIHZpZC5kdXJhdGlvbikgKiAxMDA7XG4gICAgICAgICAgICBzY3JvbGxEdXIuc3R5bGUubGVmdCA9IGAke2R1clBlcmNlbnR9JWA7XG4gICAgICAgIH0sIDEwMDApO1xuICAgIH0pO1xuXG5cbiAgICBwbGF5ZXJWb2x1bWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLm11dGVkID0gdHJ1ZTtcbiAgICAgICAgcGxheWVyTXV0ZS5jbGFzc0xpc3QuYWRkKCdwbGF5ZXJfX211dGVfYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICBwbGF5ZXJNdXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZpZC5tdXRlZCA9IGZhbHNlO1xuICAgICAgICBwbGF5ZXJNdXRlLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYXllcl9fbXV0ZV9hY3RpdmUnKTtcbiAgICB9KTtcblxuXG5cbiAgICBjb25zdCBsZW5naHRsVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3ZvbHVtZS1kdXJhdGlvblwiKTtcbiAgICBjb25zdCBzY3JvbGxWYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fc2Nyb2xsX3ZvbHVtZVwiKTtcbiAgICBsZXQgY29vcmRzID0ge307XG4gICAgdmlkLnZvbHVtZSA9IDE7XG5cblxuICAgIGNvbnN0IG1lYXN1cmVFbGVtID0gKGVsZW0sIGV2ZW50KSA9PiB7XG4gICAgICAgIGNvbnN0IG1lYXN1cmVzID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb2Zmc2V0VG9wOiBtZWFzdXJlcy50b3AsXG4gICAgICAgICAgICBvZmZzZXRMZWZ0OiBtZWFzdXJlcy5sZWZ0LFxuICAgICAgICAgICAgd2lkdGg6IG1lYXN1cmVzLndpZHRoLFxuICAgICAgICAgICAgY2xpY2tlZFg6IGV2ZW50LmxheWVyWFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY29uc3Qgc2V0dXBNZWFzdXJlcyA9IGUgPT4ge1xuICAgICAgICBsZW5naHRsVmFsLmNsYXNzTGlzdC5hZGQoJ2FsbG93Jyk7XG5cbiAgICAgICAgY29vcmRzLmxpbmUgPSBtZWFzdXJlRWxlbShsZW5naHRsVmFsLCBlKTtcbiAgICAgICAgY29vcmRzLmJ0biA9IG1lYXN1cmVFbGVtKHNjcm9sbFZhbCwgZSk7XG4gICAgfVxuXG4gICAgY29uc3QgY2hlY2tFZGdlcyA9IChidG4sIGxpbmUpID0+IHtcbiAgICAgICAgdmFyIHggPSBidG4ueDtcblxuICAgICAgICBpZiAoeDwwKSB4ID0gMDtcblxuICAgICAgICBpZiAoeD5saW5lLndpZHRoIC0gYnRuLndpZHRoKSB7XG4gICAgICAgICAgICB4ID0gbGluZS53aWR0aCAtIGJ0bi53aWR0aFxuICAgICAgICB9O1xuXG4gICAgICAgIHNjcm9sbFZhbC5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XG5cbiAgICAgICAgbGV0IG1heFZvbHVtZSA9IGxpbmUud2lkdGggLSBidG4ud2lkdGg7XG4gICAgICAgIGxldCBjdXJWb2x1bWUgPSB4O1xuXG4gICAgICAgIHZpZC52b2x1bWUgPSBjdXJWb2x1bWUvbWF4Vm9sdW1lO1xuICAgIH07XG5cbiAgICBjb25zdCBzZXR1cEJsb2NrUG9zID0gZSA9PiB7XG4gICAgICAgIGlmKCFsZW5naHRsVmFsLmNsYXNzTGlzdC5jb250YWlucygnYWxsb3cnKSkgcmV0dXJuO1xuXG4gICAgICAgIHZhciB7bGluZSwgYnRufSA9IGNvb3JkcztcbiAgICAgICAgYnRuLnggPSBlLnBhZ2VYIC0gbGluZS5vZmZzZXRMZWZ0IC0gYnRuLmNsaWNrZWRYO1xuXG4gICAgICAgIGNoZWNrRWRnZXMgKGJ0biwgbGluZSk7XG4gICAgfTtcblxuICAgIHNjcm9sbFZhbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBzZXR1cE1lYXN1cmVzKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBzZXR1cEJsb2NrUG9zKTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgZT0+IHtcbiAgICAgICAgbGVuZ2h0bFZhbC5jbGFzc0xpc3QucmVtb3ZlKCdhbGxvdycpO1xuICAgIH0pO1xufSkoKSIsIihmdW5jdGlvbigpIHtcbiAgICAkKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgIGxldCBtb3ZlU2xpZGUgPSBmdW5jdGlvbihjb250YWluZXIsIHNsaWRlTnVtKXtcbiAgICAgICAgICAgIHZhciBpdGVtcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19jb250YW50JyksXG4gICAgICAgICAgICAgICAgYWN0aXZlU2xpZGUgPSBpdGVtcy5maWx0ZXIoJy5zbGlkZXJfX2NvbnRhbnRfYWN0aXZlJyksXG4gICAgICAgICAgICAgICAgbnVtT2ZTbGlkZSA9IGl0ZW1zLmVxKHNsaWRlTnVtKSxcbiAgICAgICAgICAgICAgICBudW1PZkluZGV4ID0gbnVtT2ZTbGlkZS5pbmRleCgpLFxuICAgICAgICAgICAgICAgIGxpc3RPZlNsaWRlcyA9IGNvbnRhaW5lci5maW5kKCcuc2xpZGVyX19pdGVtcycpLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gNjAwO1xuXG4gICAgICAgICAgICBpZihudW1PZlNsaWRlLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxpc3RPZlNsaWRlcy5hbmltYXRlICh7XG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JyA6IC1udW1PZkluZGV4ICogMTAwICsgJyUnXG4gICAgICAgICAgICAgICAgfSwgZHVyYXRpb24sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlLnJlbW92ZUNsYXNzKCdzbGlkZXJfX2NvbnRhbnRfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIG51bU9mU2xpZGUuYWRkQ2xhc3MoJ3NsaWRlcl9fY29udGFudF9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgJCgnLnNsaWRlcl9fYXJyb3cnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCl7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKSxcbiAgICAgICAgICAgICAgICBjb250YWluZXIgPSAkdGhpcy5jbG9zZXN0KCcuc2xpZGVyJyksXG4gICAgICAgICAgICAgICAgaXRlbXMgPSAkKCcuc2xpZGVyX19jb250YW50JywgY29udGFpbmVyKSxcbiAgICAgICAgICAgICAgICBhY3RpdmVJdGVtID0gaXRlbXMuZmlsdGVyKCcuc2xpZGVyX19jb250YW50X2FjdGl2ZScpLFxuICAgICAgICAgICAgICAgIGV4SXRlbSwgZWRJdGVtLCByZXFJdGVtO1xuXG4gICAgICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ3NsaWRlcl9fcmlnaHQnKSkge1xuICAgICAgICAgICAgICAgIGV4SXRlbSA9IGFjdGl2ZUl0ZW0ubmV4dCgpO1xuICAgICAgICAgICAgICAgIGVkSXRlbSA9IGl0ZW1zLmZpcnN0KCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoJHRoaXMuaGFzQ2xhc3MoJ3NsaWRlcl9fbGVmdCcpKSB7XG4gICAgICAgICAgICAgICAgZXhJdGVtID0gYWN0aXZlSXRlbS5wcmV2KCk7XG4gICAgICAgICAgICAgICAgZWRJdGVtID0gaXRlbXMubGFzdCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgcmVxSXRlbSA9IGV4SXRlbS5sZW5ndGggPyBleEl0ZW0uaW5kZXgoKSA6IGVkSXRlbS5pbmRleCgpO1xuICAgICAgICAgICAgbW92ZVNsaWRlKGNvbnRhaW5lciwgcmVxSXRlbSk7XG4gICAgICAgIH0pXG4gICAgfSk7XG59KSgpIiwiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZlZWRMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZlZWRiYWNrX19saXN0JyksXG4gICAgICAgIGZlZWRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdmZWVkYmFja19fYnV0dG9uJyk7XG5cblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmVlZEJ0bi5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgYnRuID0gZmVlZEJ0bltpXTtcbiAgICAgICAgbGV0IHdpZHRoV2luID0gcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShmZWVkTGlzdCkud2lkdGgpO1xuICAgICAgICBpZiAod2lkdGhXaW4gPD0gNDgwKSB7XG4gICAgICAgICAgICBidG4udGV4dENvbnRlbnQgPSAn0KfQuNGC0LDRgtGMINC+0YLQt9GL0LInO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ9Cf0L7QtNGA0L7QsdC90LXQtSc7XG4gICAgICAgIH07XG4gICAgfTtcbn0pKCkiXX0=
