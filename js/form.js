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