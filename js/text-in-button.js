const feedList = document.querySelector('.feedback__list');
const feedBtn = document.getElementsByClassName('feedback__button');

for (let i = 0; i < feedBtn.length; i++) {
    let btn = feedBtn[i];
    let widthWin = parseInt(getComputedStyle(feedList).width);
    if (widthWin <= 480) {
        btn.textContent = 'Читать отзыв';
    } else {
        btn.textContent = 'Подробнее';
    };
};