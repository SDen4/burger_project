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