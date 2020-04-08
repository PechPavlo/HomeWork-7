'use strict';

// // task 1
// let ourElem = document.querySelector('#mouseMove');
// ourElem.style.display = "block";
// ourElem.addEventListener('mousemove',
//  (event) => ourElem.innerHTML = 'X:' + event.clientX + ' Y:' + event.clientY);


// // task 2
// let ourElem = document.querySelector('#divMoveSquare');
// ourElem.style.display = "block";
// ourElem.addEventListener('click', function (event) {
//     let ourInerElem = document.querySelector('#moveSquare');
//     ourInerElem.style.left = event.clientX +'px';
//     ourInerElem.style.top = event.clientY +'px';
// });


// // task 3
// let ourElem = document.querySelector('#divMoveSquare');
// ourElem.style.display = "block";
// ourElem.addEventListener('click', function (event) {
//     let ourInerElem = document.querySelector('#moveSquare');
//     ourInerElem.style.left = (event.clientX - ourInerElem.offsetWidth/2)+'px';
//     ourInerElem.style.top = (event.clientY - ourInerElem.offsetHeight/2) +'px';
// });


// // task 4
// buttonCodeDiv.style.display = "block";
// buttonCodeInput.onkeydown = (e) => buttonCodeSpan.innerHTML = e.code;
//  /* с использованием глобальных переменных и стрелочных функций код получился очень короткий
// и вместился в одну строку!!!
//  а также я узнал что keypress, и keyCode с charCode, и which устарели и 
// я использовал keydown и event.code
//  */


//  // task 5
// buttonCodeDiv.style.display = "block";
// buttonCodeInput.onkeydown = (e) => buttonCodeSpan.innerHTML = e.key;


// // task 6
// /* Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, 
// но только если в момент клика нажата клавиша Ctrl. */
// redOnClick.style.display = "block";
// redOnClick.onclick = (e) => {
//     if (e.ctrlKey) {redOnClick.style.background = 'red'}
// }


// // task 7
// /* Дан элемент. Сделайте так, чтобы при клике на него
//  и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2',
//   а при нажатой клавише Shift - '3'. */
// redOnClick.style.display = "block";
// redOnClick.onclick = (e) => {
//     redOnClick.style.fontSize = '40px';
//     if (e.ctrlKey) {redOnClick.innerHTML = '1'};
//     if (e.altKey) {redOnClick.innerHTML = '2'};
//     if (e.shiftKey) {redOnClick.innerHTML = '3'};
// }


// // task 8
// /* Дан инпут. В него вводится текст и нажимается клавиша Enter (ее код имеет номер 13).
//  Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось. */
// inputTextDiv.style.display = "block";
// inputText.onkeydown = (e) => {
//     if(e.code == "Enter" || e.code == "NumpadEnter" ){
//         pUnderInputText.innerHTML = inputText.value;
//         inputText.value = '';};
//      };


