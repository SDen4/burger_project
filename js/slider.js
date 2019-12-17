// const left = document.querySelector('.slider__left'),
//       right = document.querySelector('.slider__right'),
//       items = document.querySelector('.slider__items'),
//       contWidth = document.querySelector('.slider__contant');


// right.addEventListener("click", function(event) {
//     event.preventDefault();
//     let wdhR = parseInt(getComputedStyle(contWidth).width);
//     let curR = parseInt(getComputedStyle(items).right);
// 	let moveRight = curR + wdhR;
//     if (moveRight < wdhR*5) {
//         items.style.right = moveRight + 'px';
//         items.style.left = -moveRight + 'px';
//     };
// });

// left.addEventListener("click", function(event) {
//     event.preventDefault();
//     let wdhL = parseInt(getComputedStyle(contWidth).width);
//     let curL = parseInt(getComputedStyle(items).left);
// 	let moveLeft = curL + wdhL;
//     if (moveLeft < wdhL) {
//         items.style.left = moveLeft + 'px';
//         items.style.right = -moveLeft + 'px';
//     };
// });