const feedOpen = document.getElementsByClassName('feedback__button');
const feedClose = document.querySelector('#feedback__close');
const feedModal = document.querySelector('#modal-feedback');
const userInModal = document.querySelector('#feedback__username-in-modal');
const textInModal = document.querySelector('#feedback__text_modal');
const userInList = document.getElementsByClassName('feedback__username');
const textInList = document.getElementsByClassName('feedback__text');


for (let i = 0; i<feedOpen.length; i++) {
    feedOpen[i].addEventListener('click', function(e) {
        e.preventDefault();
        bodyFixed.classList.add('body__fixed');
        feedModal.style.display = 'flex';
        userInModal.textContent = userInList[i].textContent;
        textInModal.textContent = textInList[i].textContent;
    })
};

feedClose.addEventListener('click', function(e) {
    e.preventDefault();
    feedModal.style.display = 'none';
    bodyFixed.classList.remove('body__fixed');
});

feedModal.addEventListener('click', function(e) {
    if (e.target == feedModal) {
        feedClose.click();
    }
});