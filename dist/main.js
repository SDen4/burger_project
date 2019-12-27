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
})();const menuLink = document.getElementsByClassName('accordeon-vert__subtitle'),
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
};;(function() {
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjYy1nb3Jpem9udC5qcyIsImFjYy12ZXJ0aWNhbC5qcyIsImRvdC1nZW5lcmF0b3IuanMiLCJmZWVkYmFjay1tb2RhbC5qcyIsImZvcm0uanMiLCJmdWxsLXNjcmVlbi1tZW51LmpzIiwibWFwLmpzIiwicGFnaW5hdGlvbi1qUS5qcyIsInBsYXllci5qcyIsInNsaWRlci1qUS5qcyIsInRleHQtaW4tYnV0dG9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0NuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdDOUZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0M3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCB1c2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkZW9uX191c2VybmFtZScpLFxuICAgICAgICBjYXJkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkZW9uX19pdGVtJyk7XG5cbiAgICBmb3IgKGxldCBpPTA7IGk8dXNlci5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCB1c2VyRWwgPSB1c2VyW2ldLCBjYXJkRWwgPSBjYXJkW2ldO1xuICAgICAgICB1c2VyRWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBqPTA7IGo8dXNlci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcmRSZW0gPSBjYXJkW2pdO1xuICAgICAgICAgICAgICAgIGlmIChqICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhcmRSZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkZW9uX19pdGVtX2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGNhcmRFbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGVvbl9faXRlbV9hY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIGNhcmRFbC5jbGFzc0xpc3QucmVtb3ZlKCdhY2NvcmRlb25fX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhcmRFbC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRlb25fX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9O1xufSkoKSIsImNvbnN0IG1lbnVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnYWNjb3JkZW9uLXZlcnRfX3N1YnRpdGxlJyksXG4gICAgbWVudUl0ZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdhY2NvcmRlb24tdmVydF9faXRlbScpO1xuXG5mb3IgKGxldCBpPTA7IGk8bWVudUxpbmsubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBtZW51TGlua0VsID0gbWVudUxpbmtbaV0sIG1lbnVJdGVtRWwgPSBtZW51SXRlbVtpXTtcbiAgICBtZW51TGlua0VsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGZvciAobGV0IGo9MDsgajxtZW51TGluay5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgY29uc3QgbWVudUl0ZW1SZW0gPSBtZW51SXRlbVtqXTtcbiAgICAgICAgICAgIGlmIChqICE9PSBpKSB7XG4gICAgICAgICAgICAgICAgbWVudUl0ZW1SZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWNjb3JkZW9uLXZlcnRfX2l0ZW1fYWN0aXZlJyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgICBpZiAobWVudUl0ZW1FbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjY29yZGVvbi12ZXJ0X19pdGVtX2FjdGl2ZScpKSB7XG4gICAgICAgICAgICBtZW51SXRlbUVsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjY29yZGVvbi12ZXJ0X19pdGVtX2FjdGl2ZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbWVudUl0ZW1FbC5jbGFzc0xpc3QuYWRkKCdhY2NvcmRlb24tdmVydF9faXRlbV9hY3RpdmUnKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn07IiwiKGZ1bmN0aW9uKCkge1xuICAgIGxldCBzZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc2VjdGlvbicpO1xuICAgIGxldCBnZW5lcmF0ZURvdHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGk8c2VjdC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRvdCA9ICQoJzxhPicsIHtcbiAgICAgICAgICAgICAgICBhdHRyIDogeyBcbiAgICAgICAgICAgICAgICAgICAgaHJlZiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzIDogJ3BhZ2luYXRpb25fX2xpbmsnLFxuICAgICAgICAgICAgICAgICAgICBkYXRhX3Njcm9sbF90byA6IGkgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIGRvdCA9ICQoJzxhPicsIHtcbiAgICAgICAgICAgICAgICBhdHRyIDogeyBcbiAgICAgICAgICAgICAgICAgICAgY2xhc3MgOiAncGFnaW5hdGlvbl9fbGluayBwYWdpbmF0aW9uX19saW5rX2FjdGl2ZScsXG4gICAgICAgICAgICAgICAgICAgIGRhdGFfc2Nyb2xsX3RvIDogaSAvL2luZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnLnBhZ2luYXRpb24nKS5hcHBlbmQoZG90KTtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGdlbmVyYXRlRG90cygpO1xufSkoKSIsImNvbnN0IGZlZWRPcGVuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmVlZGJhY2tfX2J1dHRvbicpLFxuZmVlZENsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWRiYWNrX19jbG9zZScpLFxuZmVlZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLWZlZWRiYWNrJyksXG51c2VySW5Nb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmZWVkYmFja19fdXNlcm5hbWUtaW4tbW9kYWwnKSxcbnRleHRJbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ZlZWRiYWNrX190ZXh0X21vZGFsJyksXG51c2VySW5MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmVlZGJhY2tfX3VzZXJuYW1lJyksXG50ZXh0SW5MaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmVlZGJhY2tfX3RleHQnKTtcblxuXG5mb3IgKGxldCBpID0gMDsgaTxmZWVkT3Blbi5sZW5ndGg7IGkrKykge1xuICAgIGZlZWRPcGVuW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZmxhZ1Njcm9sbCA9IHRydWU7XG4gICAgICAgIGZlZWRNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xuICAgICAgICB1c2VySW5Nb2RhbC50ZXh0Q29udGVudCA9IHVzZXJJbkxpc3RbaV0udGV4dENvbnRlbnQ7XG4gICAgICAgIHRleHRJbk1vZGFsLnRleHRDb250ZW50ID0gdGV4dEluTGlzdFtpXS50ZXh0Q29udGVudDtcbiAgICB9KVxufTtcblxuZmVlZENsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZsYWdTY3JvbGwgPSBmYWxzZTtcbiAgICBmZWVkTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn0pO1xuXG5mZWVkTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09IGZlZWRNb2RhbCkge1xuICAgICAgICBmZWVkQ2xvc2UuY2xpY2soKTtcbiAgICB9XG59KTsiLCIoZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgZm9ybURlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtX19kZWxpdmVyeScpLFxuICAgICAgICBidG5EZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnV0dG9uX19kZWxpdmVyeScpLFxuICAgICAgICBtb2RhbFRleHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWxfX3RleHQnKSxcbiAgICAgICAgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbW9kYWwtZGVsaXZlcnknKSxcbiAgICAgICAgY2xvc2VNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25fY2xvc2UnKTtcblxuICAgIGJ0bkRlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAodmFsaWRhdGVGb3JtKGZvcm1EZWwpKSB7XG5cbiAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YShmb3JtRGVsKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgndG8nLCAnYXN3MzI1QHlhbmRleC5ydScpO1xuXG4gICAgICAgICAgICBjb25zdCBzZW5kVG9TZXJ2ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICBzZW5kVG9TZXJ2LnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgICAgICAgIHNlbmRUb1NlcnYub3BlbignUE9TVCcsICdodHRwczovL3dlYmRldi1hcGkubG9mdHNjaG9vbC5jb20vc2VuZG1haWwnKTtcbiAgICAgICAgICAgIHNlbmRUb1NlcnYuc2VuZChmb3JtRGF0YSk7XG5cbiAgICAgICAgICAgIHNlbmRUb1NlcnYuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHNlbmRUb1NlcnYucmVzcG9uc2UpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNlbmRUb1NlcnYucmVzcG9uc2Uuc3RhdHVzID09ICcxJykge1xuICAgICAgICAgICAgICAgICAgICBtb2RhbFRleHQudGV4dENvbnRlbnQgPSBcItCh0L7QvtCx0YnQtdC90LjQtSDQvtGC0L/RgNCw0LLQu9C10L3QvlwiO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGFsVGV4dC50ZXh0Q29udGVudCA9IFwi0KHQvtC+0LHRidC10L3QuNC1INC90LUg0L7RgtC/0YDQsNCy0LvQtdC90L4uINCf0L7Qv9GA0L7QsdGD0LnRgtC1INC10YnQtSDRgNCw0LchXCI7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICAgICAgYm9keUZpeGVkLmNsYXNzTGlzdC5hZGQoJ2JvZHlfX2ZpeGVkJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRm9ybShmb3JtKSB7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG5cbiAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMubmFtZSkpIHtcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIGlmICghdmFsaWRhdGVGaWVsZChmb3JtLmVsZW1lbnRzLnBob25lKSkge1xuICAgICAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUZpZWxkKGZvcm0uZWxlbWVudHMuY29tbWVudCkpIHtcbiAgICAgICAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiB2YWxpZDtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVGaWVsZChmaWVsZCkge1xuICAgICAgICBpZiAoICFmaWVsZC5jaGVja1ZhbGlkaXR5KCkgKSB7XG4gICAgICAgICAgICBmaWVsZC5uZXh0RWxlbWVudFNpYmxpbmcudGV4dENvbnRlbnQgPSBmaWVsZC52YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkLm5leHRFbGVtZW50U2libGluZy50ZXh0Q29udGVudCA9IFwiXCI7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgY2xvc2VNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBib2R5Rml4ZWQuY2xhc3NMaXN0LnJlbW92ZSgnYm9keV9fZml4ZWQnKTtcbiAgICB9KTtcblxuICAgIG1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS50YXJnZXQgPT0gbW9kYWwpIHtcbiAgICAgICAgICAgIGNsb3NlTW9kYWwuY2xpY2soKTtcbiAgICAgICAgfTtcbiAgICB9KTtcbn0pKCkiLCJjb25zdCBvcGVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1idXJnZXItbWVudV9fbGlua1wiKSxcbmNsb3NlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1idXJnZXItbWVudV9fY2xvc2VcIiksXG5jb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1idXJnZXItbWVudV9fY29udGVudFwiKSxcbm5hdkxpbmtHID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnbmF2aWdhdGlvbl9fbGlua19nYW1idXJnZXInKTsgLy9uYXZpZ2F0aW9uX19saW5rXG5cblxub3Blbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICBmbGFnU2Nyb2xsID0gdHJ1ZTtcbiAgICBjb250ZW50LmNsYXNzTGlzdC5hZGQoJ2dhbWJ1cmdlci1tZW51X19jb250ZW50X2FjdGl2ZScpO1xuICAgIG9wZW4uc3R5bGUubGVmdCA9ICctOTk5MHB4JztcbiAgICAvL29wZW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAvL29wZW4uY2xhc3NMaXN0LnJlbW92ZSgnZ2FtYnVyZ2VyLW1lbnVfX2xpbmtfYWN0aXZlJyk7XG59KTtcblxuY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbiAoKSB7XG4gICAgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuICAgIGNvbnRlbnQuY2xhc3NMaXN0LnJlbW92ZSgnZ2FtYnVyZ2VyLW1lbnVfX2NvbnRlbnRfYWN0aXZlJyk7XG4gICAgb3Blbi5zdHlsZS5sZWZ0ID0gJzkyJSc7XG4gICAgLy9vcGVuLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIC8vb3Blbi5jbGFzc0xpc3QuYWRkKCdnYW1idXJnZXItbWVudV9fbGlua19hY3RpdmUnKTtcbn0pO1xuXG5jb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLnRhcmdldCA9PSBjb250ZW50KSB7XG4gICAgICAgIGNsb3NlLmNsaWNrKCk7XG4gICAgfTtcbn0pO1xuXG5mb3IgKGxldCBpID0gMDsgaTxuYXZMaW5rRy5sZW5ndGg7IGkrKykge1xuICAgIG5hdkxpbmtHW2ldLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIGNsb3NlLmNsaWNrKCk7XG4gICAgfSk7XG59OyIsIihmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKFwibWFwXCIsIHtcbiAgICAgICAgICAgIGNlbnRlcjogWzU5LjkzODUzMCwgMzAuMjg4ODUzXSxcbiAgICAgICAgICAgIHpvb206IDExLjVcbiAgICAgICAgfSk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnc2VhcmNoQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3R5cGVTZWxlY3RvcicpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3J1bGVyQ29udHJvbCcpO1xuICAgICAgICBteU1hcC5jb250cm9scy5yZW1vdmUoJ3RyYWZmaWNDb250cm9sJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnZ2VvbG9jYXRpb25Db250cm9sJyk7XG4gICAgICAgIG15TWFwLmNvbnRyb2xzLnJlbW92ZSgnem9vbUNvbnRyb2wnKTtcbiAgICAgICAgbXlNYXAuY29udHJvbHMucmVtb3ZlKCdmdWxsc2NyZWVuQ29udHJvbCcpO1xuXG4gICAgICAgIGxldCBjb29yZHMgPSBbXG4gICAgICAgICAgICBbNTkuOTg2MzIwLCAzMC4yMDE4NzVdLFxuICAgICAgICAgICAgWzU5Ljk2MDIyNCwgMzAuMzQ4NjY1XSxcbiAgICAgICAgICAgIFs1OS44Nzg2OTIsIDMwLjM4NzYxMV0sXG4gICAgICAgICAgICBbNTkuOTExNDY4LCAzMC4yMTU0NjRdXG4gICAgICAgIF07XG5cbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBjb29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGNvb3JkUG9pbnQgPSBjb29yZHNbal07XG4gICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChuZXcgeW1hcHMuUGxhY2VtYXJrKGNvb3JkUG9pbnQsIHt9LCB7aWNvbkxheW91dDogJ2RlZmF1bHQjaW1hZ2UnLCBpY29uSW1hZ2VIcmVmOiBcIi4uL2ltZy9tYXAtcG9pbnQucG5nXCIsIGljb25JbWFnZVNpemU6IFs0NiwgNTddfSkpO1xuICAgICAgICB9O1xuICAgIH07XG4gICAgeW1hcHMucmVhZHkoaW5pdCk7XG59KSgpIiwiY29uc3Qgc2VjdGlvbnMgPSAkKCcuc2VjdGlvbicpO1xuY29uc3QgZGlzcGxheSA9ICQoJy5tYWluLWNvbnRlbnQnKTtcbmxldCBmbGFnU2Nyb2xsID0gZmFsc2U7XG5cbmNvbnN0IG1kID0gbmV3IE1vYmlsZURldGVjdCh3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudCk7XG5jb25zdCBpc01vYmlsZSA9IG1kLm1vYmlsZSgpO1xuXG5jb25zdCBwZXJmb3JtID0gc2VjdGlvbk51bSA9PiB7XG4gICAgaWYgKGZsYWdTY3JvbGwpIHJldHVybjtcblxuICAgIGZsYWdTY3JvbGwgPSB0cnVlO1xuICAgIGNvbnN0IG51bSA9IC0xMDAqc2VjdGlvbk51bTtcbiAgICBjb25zdCBzY3JvbGxEdXJhdGlvbiA9IDkwMDsgLy82MDAgLSDQtdC00LjQvdCw0Y8g0LTQu9C40YLQtdC70YzQvdC+0YHRgtGMINCw0L3QuNC80LDRhtC40LggKyAzMDAgLSDQuNC90LXRgNGG0LjRj1xuXG4gICAgaWYoaXNOYU4obnVtKSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCfQn9C10YDQtdC00LDQvdC+INC90LXQstC10YDQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQsiBwZXJmb3JtKCknKTtcbiAgICB9O1xuXG4gICAgc2VjdGlvbnMuZXEoc2VjdGlvbk51bSkuYWRkQ2xhc3MoJ3NlY3Rpb25fYWN0aXZlJykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnc2VjdGlvbl9hY3RpdmUnKTtcblxuICAgIGRpc3BsYXkuY3NzKHtcbiAgICAgICAgdHJhbnNmb3JtOiBgdHJhbnNsYXRlWSgke251bX0lKWBcbiAgICB9KTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyAvLyEhIVxuICAgICAgICAvLyBpZihzZWN0aW9uTnVtID09ICcxJykge1xuICAgICAgICAvLyAgICAgY29uc29sZS5sb2coc2VjdGlvbk51bSArIHR5cGVvZihzZWN0aW9uTnVtKSk7XG4gICAgICAgIC8vICAgICAkKCcucGFnaW5hdGlvbi1saW5rJykuZXEoc2VjdGlvbk51bSkuYWRkQ2xhc3MoJ3BhZ2luYXRpb25fX2xpbmtfYmxhY2snKTsgXG4gICAgICAgIC8vIH07XG5cbiAgICAgICAgZmxhZ1Njcm9sbCA9IGZhbHNlO1xuICAgICAgICAkKCcucGFnaW5hdGlvbl9fbGluaycpLmVxKHNlY3Rpb25OdW0pLmFkZENsYXNzKCdwYWdpbmF0aW9uX19saW5rX2FjdGl2ZScpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ3BhZ2luYXRpb25fX2xpbmtfYWN0aXZlJyk7XG5cbiAgICB9LCBzY3JvbGxEdXJhdGlvbilcbn07XG5cbmNvbnN0IHNjcm9sbFRvU2VjdGlvbiA9IGRpcmVjdGlvblRvU2Nyb2xsID0+IHtcbiAgICBjb25zdCBhY3RpdmVTZWN0aW9uID0gc2VjdGlvbnMuZmlsdGVyKCcuc2VjdGlvbl9hY3RpdmUnKTtcbiAgICBjb25zdCBuZXh0U2VjdGlvbiA9IGFjdGl2ZVNlY3Rpb24ubmV4dCgpO1xuICAgIGNvbnN0IHByZXZTZWN0aW9uID0gYWN0aXZlU2VjdGlvbi5wcmV2KCk7XG5cbiAgICBpZiAoZGlyZWN0aW9uVG9TY3JvbGwgPT09ICduZXh0JyAmJiBuZXh0U2VjdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgcGVyZm9ybShuZXh0U2VjdGlvbi5pbmRleCgpKTtcbiAgICB9O1xuICAgIGlmIChkaXJlY3Rpb25Ub1Njcm9sbCA9PT0gJ3ByZXYnICYmIHByZXZTZWN0aW9uLmxlbmd0aCkge1xuICAgICAgICBwZXJmb3JtKHByZXZTZWN0aW9uLmluZGV4KCkpO1xuICAgIH07XG59O1xuXG4kKHdpbmRvdykub24oJ3doZWVsJywgZSA9PiB7XG4gICAgY29uc3QgZGVsdGFZID0gZS5vcmlnaW5hbEV2ZW50LmRlbHRhWTtcblxuICAgIGlmIChkZWx0YVkgPiAwKSB7XG4gICAgICAgIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xuICAgIH07XG5cbiAgICBpZiAoZGVsdGFZIDwgMCkge1xuICAgICAgICBzY3JvbGxUb1NlY3Rpb24oJ3ByZXYnKTtcbiAgICB9O1xufSk7XG5cbiQod2luZG93KS5vbigna2V5ZG93bicsIGUgPT4ge1xuXG4gICAgY29uc3QgdGFnTmFtZSA9IGUudGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKTtcbiAgICBjb25zdCB0eXBlSW5BcmVhID0gdGFnTmFtZSAhPT0gJ2lucHV0JyAmJiB0YWdOYW1lICE9PSAndGV4dGFyZWEnXG4gICAgXG4gICAgaWYoIXR5cGVJbkFyZWEpIHJldHVybjtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgICBjYXNlIDM4IDogcmV0dXJuIHNjcm9sbFRvU2VjdGlvbigncHJldicpO1xuICAgICAgICBjYXNlIDQwIDogcmV0dXJuIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xuICAgIH07XG59KTtcblxuJCgnW2RhdGFfc2Nyb2xsX3RvXScpLm9uKCdjbGljaycsIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCAkdGhpcyA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcbiAgICB2YXIgdGFyZ2V0ID0gJHRoaXMuYXR0cignZGF0YV9zY3JvbGxfdG8nKTtcblxuICAgIHBlcmZvcm0odGFyZ2V0KTtcbn0pO1xuXG4kKCcuc2Nyb2xsX19saW5rJykub24oJ2NsaWNrJywgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNjcm9sbFRvU2VjdGlvbignbmV4dCcpO1xufSk7XG5cbmlmKGlzTW9iaWxlKSB7XG4gICAgJCgnYm9keScpLnN3aXBlKHtcbiAgICAgICAgc3dpcGU6ZnVuY3Rpb24oZXZlbnQsIGRpcmVjdGlvbiwgZGlzdGFuY2UsIGR1cmF0aW9uLCBmaW5nZXJDb3VudCwgZmluZ2VyRGF0YSkge1xuICAgICAgICAgICAgY29uc3QgZGlyZWN0aW9uU3dpcGUgPSBkaXJlY3Rpb24gPT09ICd1cCcgPyAnbmV4dCcgOiAncHJldic7XG4gICAgICAgICAgICBzY3JvbGxUb1NlY3Rpb24gKGRpcmVjdGlvblN3aXBlKTtcbiAgICAgICAgfVxuICAgIH0pXG59OyIsIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCB2aWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpZGVvXCIpO1xuICAgIGNvbnN0IHBsYXllclN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3N0YXJ0XCIpO1xuICAgIGNvbnN0IHBsYXllclBhdXNlZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX19wYXVzZVwiKTtcbiAgICBjb25zdCBwbGF5ZXJWb2x1bWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fdm9sdW1lXCIpO1xuICAgIGNvbnN0IHBsYXllck11dGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fbXV0ZVwiKTtcbiAgICBjb25zdCBzY3JvbGxEdXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnBsYXllcl9fc2Nyb2xsX2R1cmF0aW9uXCIpO1xuICAgIGNvbnN0IGJpZ1d3aXRlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aWRlb19fYmlnLWJ1dHRvblwiKTtcblxuXG4gICAgcGxheWVyU3RhcnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLnBsYXkoKTtcbiAgICAgICAgcGxheWVyUGF1c2VkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fcGF1c2VfYWN0aXZlJyk7XG4gICAgICAgIHBsYXllclN0YXJ0LmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcbiAgICAgICAgYmlnV3dpdGVCdG4uY2xhc3NMaXN0LmFkZCgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZHVyUGVyY2VudCA9ICh2aWQuY3VycmVudFRpbWUgLyB2aWQuZHVyYXRpb24pICogMTAwO1xuICAgICAgICAgICAgc2Nyb2xsRHVyLnN0eWxlLmxlZnQgPSBgJHtkdXJQZXJjZW50fSVgO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuICAgIHBsYXllclBhdXNlZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWQucGF1c2UoKTtcbiAgICAgICAgcGxheWVyU3RhcnQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuICAgICAgICBwbGF5ZXJQYXVzZWQuY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19wYXVzZV9hY3RpdmUnKTtcbiAgICAgICAgYmlnV3dpdGVCdG4uY2xhc3NMaXN0LnJlbW92ZSgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgYmlnV3dpdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAgICAgdmlkLnBsYXkoKTtcbiAgICAgICAgcGxheWVyUGF1c2VkLmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fcGF1c2VfYWN0aXZlJyk7XG4gICAgICAgIHBsYXllclN0YXJ0LmNsYXNzTGlzdC5hZGQoJ3BsYXllcl9fc3RhcnRfdW5hY3RpdmUnKTtcbiAgICAgICAgYmlnV3dpdGVCdG4uY2xhc3NMaXN0LmFkZCgncGxheWVyX19zdGFydF91bmFjdGl2ZScpO1xuXG4gICAgICAgIGludGVydmFsID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBsZXQgZHVyUGVyY2VudCA9ICh2aWQuY3VycmVudFRpbWUgLyB2aWQuZHVyYXRpb24pICogMTAwO1xuICAgICAgICAgICAgc2Nyb2xsRHVyLnN0eWxlLmxlZnQgPSBgJHtkdXJQZXJjZW50fSVgO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9KTtcblxuXG4gICAgcGxheWVyVm9sdW1lLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHZpZC5tdXRlZCA9IHRydWU7XG4gICAgICAgIHBsYXllck11dGUuY2xhc3NMaXN0LmFkZCgncGxheWVyX19tdXRlX2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgcGxheWVyTXV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgICAgICB2aWQubXV0ZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheWVyTXV0ZS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5ZXJfX211dGVfYWN0aXZlJyk7XG4gICAgfSk7XG5cblxuXG4gICAgY29uc3QgbGVuZ2h0bFZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucGxheWVyX192b2x1bWUtZHVyYXRpb25cIik7XG4gICAgY29uc3Qgc2Nyb2xsVmFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wbGF5ZXJfX3Njcm9sbF92b2x1bWVcIik7XG4gICAgbGV0IGNvb3JkcyA9IHt9O1xuICAgIHZpZC52b2x1bWUgPSAxO1xuXG5cbiAgICBjb25zdCBtZWFzdXJlRWxlbSA9IChlbGVtLCBldmVudCkgPT4ge1xuICAgICAgICBjb25zdCBtZWFzdXJlcyA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG9mZnNldFRvcDogbWVhc3VyZXMudG9wLFxuICAgICAgICAgICAgb2Zmc2V0TGVmdDogbWVhc3VyZXMubGVmdCxcbiAgICAgICAgICAgIHdpZHRoOiBtZWFzdXJlcy53aWR0aCxcbiAgICAgICAgICAgIGNsaWNrZWRYOiBldmVudC5sYXllclhcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHNldHVwTWVhc3VyZXMgPSBlID0+IHtcbiAgICAgICAgbGVuZ2h0bFZhbC5jbGFzc0xpc3QuYWRkKCdhbGxvdycpO1xuXG4gICAgICAgIGNvb3Jkcy5saW5lID0gbWVhc3VyZUVsZW0obGVuZ2h0bFZhbCwgZSk7XG4gICAgICAgIGNvb3Jkcy5idG4gPSBtZWFzdXJlRWxlbShzY3JvbGxWYWwsIGUpO1xuICAgIH1cblxuICAgIGNvbnN0IGNoZWNrRWRnZXMgPSAoYnRuLCBsaW5lKSA9PiB7XG4gICAgICAgIHZhciB4ID0gYnRuLng7XG5cbiAgICAgICAgaWYgKHg8MCkgeCA9IDA7XG5cbiAgICAgICAgaWYgKHg+bGluZS53aWR0aCAtIGJ0bi53aWR0aCkge1xuICAgICAgICAgICAgeCA9IGxpbmUud2lkdGggLSBidG4ud2lkdGhcbiAgICAgICAgfTtcblxuICAgICAgICBzY3JvbGxWYWwuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuXG4gICAgICAgIGxldCBtYXhWb2x1bWUgPSBsaW5lLndpZHRoIC0gYnRuLndpZHRoO1xuICAgICAgICBsZXQgY3VyVm9sdW1lID0geDtcblxuICAgICAgICB2aWQudm9sdW1lID0gY3VyVm9sdW1lL21heFZvbHVtZTtcbiAgICB9O1xuXG4gICAgY29uc3Qgc2V0dXBCbG9ja1BvcyA9IGUgPT4ge1xuICAgICAgICBpZighbGVuZ2h0bFZhbC5jbGFzc0xpc3QuY29udGFpbnMoJ2FsbG93JykpIHJldHVybjtcblxuICAgICAgICB2YXIge2xpbmUsIGJ0bn0gPSBjb29yZHM7XG4gICAgICAgIGJ0bi54ID0gZS5wYWdlWCAtIGxpbmUub2Zmc2V0TGVmdCAtIGJ0bi5jbGlja2VkWDtcblxuICAgICAgICBjaGVja0VkZ2VzIChidG4sIGxpbmUpO1xuICAgIH07XG5cbiAgICBzY3JvbGxWYWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgc2V0dXBNZWFzdXJlcyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgc2V0dXBCbG9ja1Bvcyk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGU9PiB7XG4gICAgICAgIGxlbmdodGxWYWwuY2xhc3NMaXN0LnJlbW92ZSgnYWxsb3cnKTtcbiAgICB9KTtcbn0pKCkiLCIoZnVuY3Rpb24oKSB7XG4gICAgJChmdW5jdGlvbigpIHtcblxuICAgICAgICBsZXQgbW92ZVNsaWRlID0gZnVuY3Rpb24oY29udGFpbmVyLCBzbGlkZU51bSl7XG4gICAgICAgICAgICB2YXIgaXRlbXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9fY29udGFudCcpLFxuICAgICAgICAgICAgICAgIGFjdGl2ZVNsaWRlID0gaXRlbXMuZmlsdGVyKCcuc2xpZGVyX19jb250YW50X2FjdGl2ZScpLFxuICAgICAgICAgICAgICAgIG51bU9mU2xpZGUgPSBpdGVtcy5lcShzbGlkZU51bSksXG4gICAgICAgICAgICAgICAgbnVtT2ZJbmRleCA9IG51bU9mU2xpZGUuaW5kZXgoKSxcbiAgICAgICAgICAgICAgICBsaXN0T2ZTbGlkZXMgPSBjb250YWluZXIuZmluZCgnLnNsaWRlcl9faXRlbXMnKSxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IDYwMDtcblxuICAgICAgICAgICAgaWYobnVtT2ZTbGlkZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsaXN0T2ZTbGlkZXMuYW5pbWF0ZSAoe1xuICAgICAgICAgICAgICAgICAgICAnbGVmdCcgOiAtbnVtT2ZJbmRleCAqIDEwMCArICclJ1xuICAgICAgICAgICAgICAgIH0sIGR1cmF0aW9uLCBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgICBhY3RpdmVTbGlkZS5yZW1vdmVDbGFzcygnc2xpZGVyX19jb250YW50X2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBudW1PZlNsaWRlLmFkZENsYXNzKCdzbGlkZXJfX2NvbnRhbnRfYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgICQoJy5zbGlkZXJfX2Fycm93Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpe1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyksXG4gICAgICAgICAgICAgICAgY29udGFpbmVyID0gJHRoaXMuY2xvc2VzdCgnLnNsaWRlcicpLFxuICAgICAgICAgICAgICAgIGl0ZW1zID0gJCgnLnNsaWRlcl9fY29udGFudCcsIGNvbnRhaW5lciksXG4gICAgICAgICAgICAgICAgYWN0aXZlSXRlbSA9IGl0ZW1zLmZpbHRlcignLnNsaWRlcl9fY29udGFudF9hY3RpdmUnKSxcbiAgICAgICAgICAgICAgICBleEl0ZW0sIGVkSXRlbSwgcmVxSXRlbTtcblxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdzbGlkZXJfX3JpZ2h0JykpIHtcbiAgICAgICAgICAgICAgICBleEl0ZW0gPSBhY3RpdmVJdGVtLm5leHQoKTtcbiAgICAgICAgICAgICAgICBlZEl0ZW0gPSBpdGVtcy5maXJzdCgpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKCR0aGlzLmhhc0NsYXNzKCdzbGlkZXJfX2xlZnQnKSkge1xuICAgICAgICAgICAgICAgIGV4SXRlbSA9IGFjdGl2ZUl0ZW0ucHJldigpO1xuICAgICAgICAgICAgICAgIGVkSXRlbSA9IGl0ZW1zLmxhc3QoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJlcUl0ZW0gPSBleEl0ZW0ubGVuZ3RoID8gZXhJdGVtLmluZGV4KCkgOiBlZEl0ZW0uaW5kZXgoKTtcbiAgICAgICAgICAgIG1vdmVTbGlkZShjb250YWluZXIsIHJlcUl0ZW0pO1xuICAgICAgICB9KVxuICAgIH0pO1xufSkoKSIsIihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBmZWVkTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5mZWVkYmFja19fbGlzdCcpLFxuICAgICAgICBmZWVkQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnZmVlZGJhY2tfX2J1dHRvbicpO1xuXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZlZWRCdG4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IGJ0biA9IGZlZWRCdG5baV07XG4gICAgICAgIGxldCB3aWR0aFdpbiA9IHBhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZmVlZExpc3QpLndpZHRoKTtcbiAgICAgICAgaWYgKHdpZHRoV2luIDw9IDQ4MCkge1xuICAgICAgICAgICAgYnRuLnRleHRDb250ZW50ID0gJ9Cn0LjRgtCw0YLRjCDQvtGC0LfRi9CyJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0bi50ZXh0Q29udGVudCA9ICfQn9C+0LTRgNC+0LHQvdC10LUnO1xuICAgICAgICB9O1xuICAgIH07XG59KSgpIl19
