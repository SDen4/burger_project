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
})();(function() {
    const feedOpen = document.getElementsByClassName('feedback__button'),
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
    });
})();(function() {
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
})();(function() {
    const open = document.querySelector(".gamburger-menu__link"),
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
    };
})();(function() {
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
            myMap.geoObjects.add(new ymaps.Placemark(coordPoint, {}, {iconLayout: 'default#image', iconImageHref: "img/map-point.png", iconImageSize: [46, 57]}));
        };
    };
    ymaps.ready(init);
})();(function() {
    const sections = $('.section');
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
    };
})();(function() {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjYy1nb3Jpem9udC5qcyIsImFjYy12ZXJ0aWNhbC5qcyIsImRvdC1nZW5lcmF0b3IuanMiLCJmZWVkYmFjay1tb2RhbC5qcyIsImZvcm0uanMiLCJmdWxsLXNjcmVlbi1tZW51LmpzIiwibWFwLmpzIiwicGFnaW5hdGlvbi1qUS5qcyIsInBsYXllci5qcyIsInNsaWRlci1qUS5qcyIsInRleHQtaW4tYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0N0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzFGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDN0dBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0MzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgdXNlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY29yZGVvbl9fdXNlcm5hbWUnKSxcbiAgICAgICAgY2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2FjY29yZGVvbl9faXRlbScpO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPHVzZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgdXNlckVsID0gdXNlcltpXSwgY2FyZEVsID0gY2FyZFtpXTtcbiAgICAgICAgdXNlckVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPHVzZXIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjYXJkUmVtID0gY2FyZFtqXTtcbiAgICAgICAgICAgICAgICBpZiAoaiAhPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICBjYXJkUmVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGVvbl9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChjYXJkRWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY2NvcmRlb25fX2l0ZW1fYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBjYXJkRWwuY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkZW9uX19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYXJkRWwuY2xhc3NMaXN0LmFkZCgnYWNjb3JkZW9uX19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgbWVudUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRlb24tdmVydF9fc3VidGl0bGUnKSxcbiAgICAgICAgbWVudUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRlb24tdmVydF9faXRlbScpO1xuXG4gICAgZm9yIChsZXQgaT0wOyBpPG1lbnVMaW5rLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG1lbnVMaW5rRWwgPSBtZW51TGlua1tpXSwgbWVudUl0ZW1FbCA9IG1lbnVJdGVtW2ldO1xuICAgICAgICBtZW51TGlua0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgZm9yIChsZXQgaj0wOyBqPG1lbnVMaW5rLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1SZW0gPSBtZW51SXRlbVtqXTtcbiAgICAgICAgICAgICAgICBpZiAoaiAhPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICBtZW51SXRlbVJlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRlb24tdmVydF9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChtZW51SXRlbUVsLmNsYXNzTGlzdC5jb250YWlucygnYWNjb3JkZW9uLXZlcnRfX2l0ZW1fYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGVvbi12ZXJ0X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtZW51SXRlbUVsLmNsYXNzTGlzdC5hZGQoJ2FjY29yZGVvbi12ZXJ0X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfTtcbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgbGV0IHNlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdzZWN0aW9uJyk7XG4gICAgbGV0IGdlbmVyYXRlRG90cyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaTxzZWN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZG90ID0gJCgnPGE+Jywge1xuICAgICAgICAgICAgICAgIGF0dHIgOiB7IFxuICAgICAgICAgICAgICAgICAgICBocmVmIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3MgOiAncGFnaW5hdGlvbl9fbGluaycsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfc2Nyb2xsX3RvIDogaSBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgZG90ID0gJCgnPGE+Jywge1xuICAgICAgICAgICAgICAgIGF0dHIgOiB7IFxuICAgICAgICAgICAgICAgICAgICBjbGFzcyA6ICdwYWdpbmF0aW9uX19saW5rIHBhZ2luYXRpb25fX2xpbmtfYWN0aXZlJyxcbiAgICAgICAgICAgICAgICAgICAgZGF0YV9zY3JvbGxfdG8gOiBpIC8vaW5kXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcucGFnaW5hdGlvbicpLmFwcGVuZChkb3QpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgZ2VuZXJhdGVEb3RzKCk7XG59KSgpIiwiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZlZWRPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmVlZGJhY2tfX2J1dHRvbicpLFxuICAgICAgICBmZWVkQ2xvc2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlZGJhY2tfX2Nsb3NlJyksXG4gICAgICAgIGZlZWRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1mZWVkYmFjaycpLFxuICAgICAgICB1c2VySW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVkYmFja19fdXNlcm5hbWUtaW4tbW9kYWwnKSxcbiAgICAgICAgdGV4dEluTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmVlZGJhY2tfX3RleHRfbW9kYWwnKSxcbiAgICAgICAgdXNlckluTGlzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2ZlZWRiYWNrX191c2VybmFtZScpLFxuICAgICAgICB0ZXh0SW5MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmVlZGJhY2tfX3RleHQnKTtcblxuXG4gICAgZm9yIChsZXQgaSA9IDA7IGk8ZmVlZE9wZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZmVlZE9wZW5baV0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGZsYWdTY3JvbGwgPSB0cnVlO1xuICAgICAgICAgICAgZmVlZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB1c2VySW5Nb2RhbC50ZXh0Q29udGVudCA9IHVzZXJJbkxpc3RbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgICAgICB0ZXh0SW5Nb2RhbC50ZXh0Q29udGVudCA9IHRleHRJbkxpc3RbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIH0pXG4gICAgfTtcblxuICAgIGZlZWRDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZsYWdTY3JvbGwgPSBmYWxzZTtcbiAgICAgICAgZmVlZE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBmZWVkTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBmZWVkTW9kYWwpIHtcbiAgICAgICAgICAgIGZlZWRDbG9zZS5jbGljaygpO1xuICAgICAgICB9XG4gICAgfSk7XG59KSgpIiwiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IGZvcm1EZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZm9ybV9fZGVsaXZlcnknKSxcbiAgICAgICAgYnRuRGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J1dHRvbl9fZGVsaXZlcnknKSxcbiAgICAgICAgbW9kYWxUZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsX190ZXh0JyksXG4gICAgICAgIG1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWRlbGl2ZXJ5JyksXG4gICAgICAgIGNsb3NlTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnV0dG9uX2Nsb3NlJyk7XG5cbiAgICBidG5EZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKHZhbGlkYXRlRm9ybShmb3JtRGVsKSkge1xuXG4gICAgICAgICAgICBsZXQgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZm9ybURlbCk7XG4gICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3RvJywgJ2FzdzMyNUB5YW5kZXgucnUnKTtcblxuICAgICAgICAgICAgY29uc3Qgc2VuZFRvU2VydiA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgc2VuZFRvU2Vydi5yZXNwb25zZVR5cGUgPSAnanNvbic7XG4gICAgICAgICAgICBzZW5kVG9TZXJ2Lm9wZW4oJ1BPU1QnLCAnaHR0cHM6Ly93ZWJkZXYtYXBpLmxvZnRzY2hvb2wuY29tL3NlbmRtYWlsJyk7XG4gICAgICAgICAgICBzZW5kVG9TZXJ2LnNlbmQoZm9ybURhdGEpO1xuXG4gICAgICAgICAgICBzZW5kVG9TZXJ2LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzZW5kVG9TZXJ2LnJlc3BvbnNlKTtcblxuICAgICAgICAgICAgICAgIGlmIChzZW5kVG9TZXJ2LnJlc3BvbnNlLnN0YXR1cyA9PSAnMScpIHtcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxUZXh0LnRleHRDb250ZW50ID0gXCLQodC+0L7QsdGJ0LXQvdC40LUg0L7RgtC/0YDQsNCy0LvQtdC90L5cIjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSBcItCh0L7QvtCx0YnQtdC90LjQtSDQvdC1INC+0YLQv9GA0LDQstC70LXQvdC+LiDQn9C+0L/RgNC+0LHRg9C50YLQtSDQtdGJ0LUg0YDQsNC3IVwiO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICAgICAgICAgIGJvZHlGaXhlZC5jbGFzc0xpc3QuYWRkKCdib2R5X19maXhlZCcpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUZvcm0oZm9ybSkge1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuXG4gICAgICAgIGlmICghdmFsaWRhdGVGaWVsZChmb3JtLmVsZW1lbnRzLm5hbWUpKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIXZhbGlkYXRlRmllbGQoZm9ybS5lbGVtZW50cy5waG9uZSkpIHtcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghdmFsaWRhdGVGaWVsZChmb3JtLmVsZW1lbnRzLmNvbW1lbnQpKSB7XG4gICAgICAgICAgICB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gdmFsaWQ7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRmllbGQoZmllbGQpIHtcbiAgICAgICAgaWYgKCAhZmllbGQuY2hlY2tWYWxpZGl0eSgpICkge1xuICAgICAgICAgICAgZmllbGQubmV4dEVsZW1lbnRTaWJsaW5nLnRleHRDb250ZW50ID0gZmllbGQudmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBcIlwiO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGNsb3NlTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgYm9keUZpeGVkLmNsYXNzTGlzdC5yZW1vdmUoJ2JvZHlfX2ZpeGVkJyk7XG4gICAgfSk7XG5cbiAgICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBjbG9zZU1vZGFsLmNsaWNrKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG59KSgpIiwiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IG9wZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWJ1cmdlci1tZW51X19saW5rXCIpLFxuICAgICAgICBjbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtYnVyZ2VyLW1lbnVfX2Nsb3NlXCIpLFxuICAgICAgICBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1idXJnZXItbWVudV9fY29udGVudFwiKSxcbiAgICAgICAgbmF2TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ25hdmlnYXRpb25fX2xpbmsnKTtcblxuICAgIG9wZW4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZsYWdTY3JvbGwgPSB0cnVlO1xuICAgICAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWJ1cmdlci1tZW51X19jb250ZW50X2FjdGl2ZScpO1xuICAgICAgICAvL29wZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgb3Blbi5jbGFzc0xpc3QucmVtb3ZlKCdnYW1idXJnZXItbWVudV9fbGlua19hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBmbGFnU2Nyb2xsID0gZmFsc2U7XG4gICAgICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtYnVyZ2VyLW1lbnVfX2NvbnRlbnRfYWN0aXZlJyk7XG4gICAgICAgIC8vb3Blbi5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgb3Blbi5jbGFzc0xpc3QuYWRkKCdnYW1idXJnZXItbWVudV9fbGlua19hY3RpdmUnKTtcbiAgICB9KTtcblxuICAgIGNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLnRhcmdldCA9PSBjb250ZW50KSB7XG4gICAgICAgICAgICBjbG9zZS5jbGljaygpO1xuICAgICAgICB9O1xuICAgIH0pO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGk8bmF2TGluay5sZW5ndGg7IGkrKykge1xuICAgICAgICBuYXZMaW5rW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBjbG9zZS5jbGljaygpO1xuICAgICAgICB9KTtcbiAgICB9O1xufSkoKSIsIihmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcbiAgICAgICAgICAgIGNlbnRlcjogWzU5LjkzODUzMCwgMzAuMjg4ODUzXSxcbiAgICAgICAgICAgIHpvb206IDExLjVcbiAgICAgICAgfSk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZ2VvbG9jYXRpb25Db250cm9sJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnem9vbUNvbnRyb2wnKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuXG4gICAgICAgIGxldCBjb29yZHMgPSBbXG4gICAgICAgICAgICBbNTkuOTg2MzIwLCAzMC4yMDE4NzVdLFxuICAgICAgICAgICAgWzU5Ljk2MDIyNCwgMzAuMzQ4NjY1XSxcbiAgICAgICAgICAgIFs1OS44Nzg2OTIsIDMwLjM4NzYxMV0sXG4gICAgICAgICAgICBbNTkuOTExNDY4LCAzMC4yMTU0NjRdXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvb3JkUG9pbnQgPSBjb29yZHNbal07XG4gICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKGNvb3JkUG9pbnQsIHt9LCB7aWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLCBpY29uSW1hZ2VIcmVmOiBcImltZy9tYXAtcG9pbnQucG5nXCIsIGljb25JbWFnZVNpemU6IFs0NiwgNTddfSkpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgeW1hcHMucmVhZHkoaW5pdCk7XG59KSgpIiwiKGZ1bmN0aW9uKCkge1xuICAgIGNvbnN0IHNlY3Rpb25zID0gJCgnLnNlY3Rpb24nKTtcbiAgICBjb25zdCBkaXNwbGF5ID0gJCgnLm1haW4tY29udGVudCcpO1xuICAgIGxldCBmbGFnU2Nyb2xsID0gZmFsc2U7XG5cbiAgICBjb25zdCBtZCA9IG5ldyBNb2JpbGVEZXRlY3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIGNvbnN0IGlzTW9iaWxlID0gbWQubW9iaWxlKCk7XG5cbiAgICBjb25zdCBwZXJmb3JtID0gc2VjdGlvbk51bSA9PiB7XG4gICAgICAgIGlmIChmbGFnU2Nyb2xsKSByZXR1cm47XG5cbiAgICAgICAgZmxhZ1Njcm9sbCA9IHRydWU7XG4gICAgICAgIGNvbnN0IG51bSA9IC0xMDAqc2VjdGlvbk51bTtcbiAgICAgICAgY29uc3Qgc2Nyb2xsRHVyYXRpb24gPSA5MDA7IC8vNjAwIC0g0LXQtNC40L3QsNGPINC00LvQuNGC0LXQu9GM0L3QvtGB0YLRjCDQsNC90LjQvNCw0YbQuNC4ICsgMzAwIC0g0LjQvdC10YDRhtC40Y9cblxuICAgICAgICBpZihpc05hTihudW0pKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQn9C10YDQtdC00LDQvdC+INC90LXQstC10YDQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQsiBwZXJmb3JtKCknKTtcbiAgICAgICAgfTtcblxuICAgICAgICBzZWN0aW9ucy5lcShzZWN0aW9uTnVtKS5hZGRDbGFzcygnc2VjdGlvbl9hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdzZWN0aW9uX2FjdGl2ZScpO1xuXG4gICAgICAgIGRpc3BsYXkuY3NzKHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtudW19JSlgXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb25fX2xpbmsnKS5lcShzZWN0aW9uTnVtKS5hZGRDbGFzcygncGFnaW5hdGlvbl9fbGlua19hY3RpdmUnKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdwYWdpbmF0aW9uX19saW5rX2FjdGl2ZScpO1xuXG4gICAgICAgIH0sIHNjcm9sbER1cmF0aW9uKVxuICAgIH07XG5cbiAgICBjb25zdCBzY3JvbGxUb1NlY3Rpb24gPSBkaXJlY3Rpb25Ub1Njcm9sbCA9PiB7XG4gICAgICAgIGNvbnN0IGFjdGl2ZVNlY3Rpb24gPSBzZWN0aW9ucy5maWx0ZXIoJy5zZWN0aW9uX2FjdGl2ZScpO1xuICAgICAgICBjb25zdCBuZXh0U2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24ubmV4dCgpO1xuICAgICAgICBjb25zdCBwcmV2U2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24ucHJldigpO1xuXG4gICAgICAgIGlmIChkaXJlY3Rpb25Ub1Njcm9sbCA9PT0gJ25leHQnICYmIG5leHRTZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICAgICAgcGVyZm9ybShuZXh0U2VjdGlvbi5pbmRleCgpKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGRpcmVjdGlvblRvU2Nyb2xsID09PSAncHJldicgJiYgcHJldlNlY3Rpb24ubGVuZ3RoKSB7XG4gICAgICAgICAgICBwZXJmb3JtKHByZXZTZWN0aW9uLmluZGV4KCkpO1xuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAkKHdpbmRvdykub24oJ3doZWVsJywgZSA9PiB7XG4gICAgICAgIGNvbnN0IGRlbHRhWSA9IGUub3JpZ2luYWxFdmVudC5kZWx0YVk7XG5cbiAgICAgICAgaWYgKGRlbHRhWSA+IDApIHtcbiAgICAgICAgICAgIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChkZWx0YVkgPCAwKSB7XG4gICAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24oJ3ByZXYnKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgICQod2luZG93KS5vbigna2V5ZG93bicsIGUgPT4ge1xuXG4gICAgICAgIGNvbnN0IHRhZ05hbWUgPSBlLnRhcmdldC50YWdOYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHR5cGVJbkFyZWEgPSB0YWdOYW1lICE9PSAnaW5wdXQnICYmIHRhZ05hbWUgIT09ICd0ZXh0YXJlYSdcbiAgICAgICAgXG4gICAgICAgIGlmKCF0eXBlSW5BcmVhKSByZXR1cm47XG4gICAgICAgIHN3aXRjaCAoZS5rZXlDb2RlKSB7XG4gICAgICAgICAgICBjYXNlIDM4IDogcmV0dXJuIHNjcm9sbFRvU2VjdGlvbigncHJldicpO1xuICAgICAgICAgICAgY2FzZSA0MCA6IHJldHVybiBzY3JvbGxUb1NlY3Rpb24oJ25leHQnKTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgICQoJ1tkYXRhX3Njcm9sbF90b10nKS5vbignY2xpY2snLCBlID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgdmFyIHRhcmdldCA9ICR0aGlzLmF0dHIoJ2RhdGFfc2Nyb2xsX3RvJyk7XG5cbiAgICAgICAgcGVyZm9ybSh0YXJnZXQpO1xuICAgIH0pO1xuXG4gICAgJCgnLnNjcm9sbF9fbGluaycpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xuICAgIH0pO1xuXG4gICAgaWYoaXNNb2JpbGUpIHtcbiAgICAgICAgJCgnYm9keScpLnN3aXBlKHtcbiAgICAgICAgICAgIHN3aXBlOmZ1bmN0aW9uKGV2ZW50LCBkaXJlY3Rpb24sIGRpc3RhbmNlLCBkdXJhdGlvbiwgZmluZ2VyQ291bnQsIGZpbmdlckRhdGEpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBkaXJlY3Rpb25Td2lwZSA9IGRpcmVjdGlvbiA9PT0gJ3VwJyA/ICduZXh0JyA6ICdwcmV2JztcbiAgICAgICAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24gKGRpcmVjdGlvblN3aXBlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9O1xufSkoKSIsIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCB2aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvXCIpO1xuICAgIGNvbnN0IHBsYXllclN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3N0YXJ0XCIpO1xuICAgIGNvbnN0IHBsYXllclBhdXNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX19wYXVzZVwiKTtcbiAgICBjb25zdCBwbGF5ZXJWb2x1bWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fdm9sdW1lXCIpO1xuICAgIGNvbnN0IHBsYXllck11dGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fbXV0ZVwiKTtcbiAgICBjb25zdCBzY3JvbGxEdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fc2Nyb2xsX2R1cmF0aW9uXCIpO1xuICAgIGNvbnN0IGJpZ1d3aXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb19fYmlnLWJ1dHRvblwiKTtcblxuXG4gICAgcGxheWVyU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLnBsYXkoKTtcbiAgICAgICAgcGxheWVyUGF1c2VkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fcGF1c2VfYWN0aXZlJyk7XG4gICAgICAgIHBsYXllclN0YXJ0LmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcbiAgICAgICAgYmlnV3dpdGVCdG4uY2xhc3NMaXN0LmFkZCgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZHVyUGVyY2VudCA9ICh2aWQuY3VycmVudFRpbWUgLyB2aWQuZHVyYXRpb24pICogMTAwO1xuICAgICAgICAgICAgc2Nyb2xsRHVyLnN0eWxlLmxlZnQgPSBgJHtkdXJQZXJjZW50fSVgO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuICAgIHBsYXllclBhdXNlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWQucGF1c2UoKTtcbiAgICAgICAgcGxheWVyU3RhcnQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuICAgICAgICBwbGF5ZXJQYXVzZWQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19wYXVzZV9hY3RpdmUnKTtcbiAgICAgICAgYmlnV3dpdGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgYmlnV3dpdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLnBsYXkoKTtcbiAgICAgICAgcGxheWVyUGF1c2VkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fcGF1c2VfYWN0aXZlJyk7XG4gICAgICAgIHBsYXllclN0YXJ0LmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcbiAgICAgICAgYmlnV3dpdGVCdG4uY2xhc3NMaXN0LmFkZCgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZHVyUGVyY2VudCA9ICh2aWQuY3VycmVudFRpbWUgLyB2aWQuZHVyYXRpb24pICogMTAwO1xuICAgICAgICAgICAgc2Nyb2xsRHVyLnN0eWxlLmxlZnQgPSBgJHtkdXJQZXJjZW50fSVgO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuXG4gICAgcGxheWVyVm9sdW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZpZC5tdXRlZCA9IHRydWU7XG4gICAgICAgIHBsYXllck11dGUuY2xhc3NMaXN0LmFkZCgncGxheWVyX19tdXRlX2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgcGxheWVyTXV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWQubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyTXV0ZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXJfX211dGVfYWN0aXZlJyk7XG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgbGVuZ2h0bFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX192b2x1bWUtZHVyYXRpb25cIik7XG4gICAgY29uc3Qgc2Nyb2xsVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3Njcm9sbF92b2x1bWVcIik7XG4gICAgbGV0IGNvb3JkcyA9IHt9O1xuICAgIHZpZC52b2x1bWUgPSAxO1xuXG5cbiAgICBjb25zdCBtZWFzdXJlRWxlbSA9IChlbGVtLCBldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBtZWFzdXJlcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldFRvcDogbWVhc3VyZXMudG9wLFxuICAgICAgICAgICAgb2Zmc2V0TGVmdDogbWVhc3VyZXMubGVmdCxcbiAgICAgICAgICAgIHdpZHRoOiBtZWFzdXJlcy53aWR0aCxcbiAgICAgICAgICAgIGNsaWNrZWRYOiBldmVudC5sYXllclhcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldHVwTWVhc3VyZXMgPSBlID0+IHtcbiAgICAgICAgbGVuZ2h0bFZhbC5jbGFzc0xpc3QuYWRkKCdhbGxvdycpO1xuXG4gICAgICAgIGNvb3Jkcy5saW5lID0gbWVhc3VyZUVsZW0obGVuZ2h0bFZhbCwgZSk7XG4gICAgICAgIGNvb3Jkcy5idG4gPSBtZWFzdXJlRWxlbShzY3JvbGxWYWwsIGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRWRnZXMgPSAoYnRuLCBsaW5lKSA9PiB7XG4gICAgICAgIHZhciB4ID0gYnRuLng7XG5cbiAgICAgICAgaWYgKHg8MCkgeCA9IDA7XG5cbiAgICAgICAgaWYgKHg+bGluZS53aWR0aCAtIGJ0bi53aWR0aCkge1xuICAgICAgICAgICAgeCA9IGxpbmUud2lkdGggLSBidG4ud2lkdGhcbiAgICAgICAgfTtcblxuICAgICAgICBzY3JvbGxWYWwuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuXG4gICAgICAgIGxldCBtYXhWb2x1bWUgPSBsaW5lLndpZHRoIC0gYnRuLndpZHRoO1xuICAgICAgICBsZXQgY3VyVm9sdW1lID0geDtcblxuICAgICAgICB2aWQudm9sdW1lID0gY3VyVm9sdW1lL21heFZvbHVtZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0dXBCbG9ja1BvcyA9IGUgPT4ge1xuICAgICAgICBpZighbGVuZ2h0bFZhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbG93JykpIHJldHVybjtcblxuICAgICAgICB2YXIge2xpbmUsIGJ0bn0gPSBjb29yZHM7XG4gICAgICAgIGJ0bi54ID0gZS5wYWdlWCAtIGxpbmUub2Zmc2V0TGVmdCAtIGJ0bi5jbGlja2VkWDtcblxuICAgICAgICBjaGVja0VkZ2VzIChidG4sIGxpbmUpO1xuICAgIH07XG5cbiAgICBzY3JvbGxWYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2V0dXBNZWFzdXJlcyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc2V0dXBCbG9ja1Bvcyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGU9PiB7XG4gICAgICAgIGxlbmdodGxWYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWxsb3cnKTtcbiAgICB9KTtcbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgJChmdW5jdGlvbigpIHtcblxuICAgICAgICBsZXQgbW92ZVNsaWRlID0gZnVuY3Rpb24oY29udGFpbmVyLCBzbGlkZU51bSl7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9fY29udGFudCcpLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlID0gaXRlbXMuZmlsdGVyKCcuc2xpZGVyX19jb250YW50X2FjdGl2ZScpLFxuICAgICAgICAgICAgICAgIG51bU9mU2xpZGUgPSBpdGVtcy5lcShzbGlkZU51bSksXG4gICAgICAgICAgICAgICAgbnVtT2ZJbmRleCA9IG51bU9mU2xpZGUuaW5kZXgoKSxcbiAgICAgICAgICAgICAgICBsaXN0T2ZTbGlkZXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbXMnKSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IDYwMDtcblxuICAgICAgICAgICAgaWYobnVtT2ZTbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsaXN0T2ZTbGlkZXMuYW5pbWF0ZSAoe1xuICAgICAgICAgICAgICAgICAgICAnbGVmdCcgOiAtbnVtT2ZJbmRleCAqIDEwMCArICclJ1xuICAgICAgICAgICAgICAgIH0sIGR1cmF0aW9uLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTbGlkZS5yZW1vdmVDbGFzcygnc2xpZGVyX19jb250YW50X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBudW1PZlNsaWRlLmFkZENsYXNzKCdzbGlkZXJfX2NvbnRhbnRfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgICQoJy5zbGlkZXJfX2Fycm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gJHRoaXMuY2xvc2VzdCgnLnNsaWRlcicpLFxuICAgICAgICAgICAgICAgIGl0ZW1zID0gJCgnLnNsaWRlcl9fY29udGFudCcsIGNvbnRhaW5lciksXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLnNsaWRlcl9fY29udGFudF9hY3RpdmUnKSxcbiAgICAgICAgICAgICAgICBleEl0ZW0sIGVkSXRlbSwgcmVxSXRlbTtcblxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdzbGlkZXJfX3JpZ2h0JykpIHtcbiAgICAgICAgICAgICAgICBleEl0ZW0gPSBhY3RpdmVJdGVtLm5leHQoKTtcbiAgICAgICAgICAgICAgICBlZEl0ZW0gPSBpdGVtcy5maXJzdCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdzbGlkZXJfX2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIGV4SXRlbSA9IGFjdGl2ZUl0ZW0ucHJldigpO1xuICAgICAgICAgICAgICAgIGVkSXRlbSA9IGl0ZW1zLmxhc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcUl0ZW0gPSBleEl0ZW0ubGVuZ3RoID8gZXhJdGVtLmluZGV4KCkgOiBlZEl0ZW0uaW5kZXgoKTtcbiAgICAgICAgICAgIG1vdmVTbGlkZShjb250YWluZXIsIHJlcUl0ZW0pO1xuICAgICAgICB9KVxuICAgIH0pO1xufSkoKSIsIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmZWVkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fbGlzdCcpLFxuICAgICAgICBmZWVkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmVlZGJhY2tfX2J1dHRvbicpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlZWRCdG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJ0biA9IGZlZWRCdG5baV07XG4gICAgICAgIGxldCB3aWR0aFdpbiA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZmVlZExpc3QpLndpZHRoKTtcbiAgICAgICAgaWYgKHdpZHRoV2luIDw9IDQ4MCkge1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ9Cn0LjRgtCw0YLRjCDQvtGC0LfRi9CyJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICfQn9C+0LTRgNC+0LHQvdC10LUnO1xuICAgICAgICB9O1xuICAgIH07XG59KSgpIl19
