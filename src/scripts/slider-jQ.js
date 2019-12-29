(function() {

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

})()