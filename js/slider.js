const left = document.querySelector('.slider__left'),
      right = document.querySelector('.slider__right'),
      items = document.querySelector('.slider__items'),
      contWidth = document.querySelector('.slider__contant');


right.addEventListener("click", function(e) {
    e.preventDefault();
	let moveRight = rightCurr = parseInt(getComputedStyle(items).right) + parseInt(getComputedStyle(contWidth).width);
    if (moveRight < parseInt(getComputedStyle(contWidth).width)*5) {
        items.style.right = moveRight + 'px';
        items.style.left = -moveRight + 'px';
    };
});

left.addEventListener("click", function(e) {
    e.preventDefault();
	let moveLeft = parseInt(getComputedStyle(items).left) + parseInt(getComputedStyle(contWidth).width);
    if (moveLeft < parseInt(getComputedStyle(contWidth).width)) {
        items.style.left = moveLeft + 'px';
        items.style.right = -moveLeft + 'px';
    };
});