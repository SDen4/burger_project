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
})

$('body').on('click', '.pagination__link', function(){
    $('html, body').animate({
        'scrollTop' : '0'
    }, 1000);
})