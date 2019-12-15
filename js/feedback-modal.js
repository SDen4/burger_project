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
        bodyFixed.classList.add('body__fixed');
        feedModal.style.display = 'flex';
        userInModal.textContent = userInList[i].textContent;
        textInModal.textContent = textInList[i].textContent;
    })
};

feedClose.addEventListener('click', function(event) {
    event.preventDefault();
    feedModal.style.display = 'none';
    bodyFixed.classList.remove('body__fixed');
});

feedModal.addEventListener('click', function(e) {
    if (e.target == feedModal) {
        feedClose.click();
    }
});