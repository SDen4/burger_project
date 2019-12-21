// let generateDots = function(){
//     $('.section').each(function() {

//         let ind = $('.pagination__link').index();
//         var dot = $('<a>', {
//             attr : {
//                 class : 'pagination__link',
//                 data_scroll_to : ind
//             }
//         });
//         $('.pagination').append(dot);


//     })
// };
// generateDots();


const sections = $('.section');
const display = $('.main-content');
let flagScroll = false;

const perform = sectionNum => {
    if (flagScroll === false) {
        flagScroll = true;
        const num = -100*sectionNum;

        sections.eq(sectionNum).addClass('section_active').siblings().removeClass('section_active');
    
        display.css({
            transform: `translateY(${num}%)`
        });

        setTimeout(() => {
            flagScroll = false;
            $('.pagination__link').eq(sectionNum).addClass('pagination__link_active').siblings().removeClass('pagination__link_active');

        }, 900)
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
    
    if(tagName !== 'input' && tagName !== 'textarea') {
        switch (e.keyCode) {
            case 38 : return scrollToSection('prev');
            case 40 : return scrollToSection('next');
        };
    };
})

$('[data_scroll_to]').on('click', e => {
    e.preventDefault();
    const $this = $(e.currentTarget);
    var target = $this.attr('data_scroll_to');

    perform(target);
})




// let ind = $('.section').index()
// console.log(ind);
// if(ind == 1 || ind == 6 || ind == 8) {
//     $('.pagination-link').addClass('pagination__link_black');
// }





//     let sections = $('.section');
//     let heightWindow = $('.section').height();

//     $('body').on('click', '.pagination__link', function() {

//         $('.pagination__link').removeClass('pagination__link_active');
//         $(this).addClass('pagination__link_active');

//         let ind = $(this).index();
//         let res = ind*heightWindow;

// console.log('res = ' + res);

//         $('html, body').animate({
//             'scrollTop' : res
//         }, 600);

// console.log("индекс = " + ind);

//     })

//     $('.pagination__link').first().addClass('pagination__link_active');