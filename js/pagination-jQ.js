$(function(){
    let generateDots = function(){
        $('.section').each(function() {
            var dot = $('<a>', {
                attr : {
                    class : 'pagination__link'
                }
            });
            $('.pagination').append(dot);
            
        })
    };

    generateDots();

    // $(window).scroll(function() {
    // })
    // var wTop = $(window).scrollTop();
    // var $this = $(this);
    // var container = $this.closest('.wrapper');
    // var best = $('.section').offset().top;
    // $('body').on('wheel', function(){
    // $('html, body').animate({
    //     'scrollTop' : best
    // }, 1000)
    // })

let sections = $('.section'); //все секции
let heightWindow = $('.section').height(); //высота окна
console.log(sections);
console.log(heightWindow);

$('body').on('click', '.pagination__link', function(event) {
    //event.preventDefault();
    $('.pagination__link').removeClass('pagination__link_active');
    $(this).addClass('pagination__link_active');

    let ind = $(this).index();
    let res = ind*heightWindow;
console.log(res)
    $('html, body').animate({
        'scrollTop' : res
    }, 600)


console.log($(this).index());
})


})



