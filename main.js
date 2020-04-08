'use strict';

// task 1
let ourElem = document.querySelector('#mouseMove');
ourElem.addEventListener('mousemove',
 (event) => ourElem.innerHTML = 'X:' + event.offsetX + ' Y:' + event.offsetY);


// task 2
let ourElem1 = document.querySelector('#divMoveSquare');
ourElem1.addEventListener('click', moves);
function moves (event) {
    let ourInerElem1 = document.querySelector('#moveSquare');
    ourInerElem1.style.left = event.pageX +'px';
    ourInerElem1.style.top = event.pageY +'px';
};


// task 3
let ourElem2 = document.querySelector('#divMoveSquare1');
ourElem2.addEventListener('click', function (event) {
    let ourInerElem2 = document.querySelector('#moveSquare');
    ourInerElem2.style.left = (event.pageX - ourInerElem2.offsetWidth/2)+'px';
    ourInerElem2.style.top = (event.pageY - ourInerElem2.offsetHeight/2) +'px';
});


// // task 4
buttonCodeInput.onkeydown = (e) => buttonCodeSpan.innerHTML = e.code;
 /* с использованием глобальных переменных и стрелочных функций код получился очень короткий
и вместился в одну строку!!!
 а также я узнал что keypress, и keyCode с charCode, и which устарели и 
я использовал keydown и event.code
 */


 // task 5
buttonCodeInput1.onkeydown = (e) => buttonCodeSpan1.innerHTML = e.key;


// task 6
/* Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, 
но только если в момент клика нажата клавиша Ctrl. */

redOnClick.onclick = (e) => {
    if (e.ctrlKey) {redOnClick.style.background = 'red'}
};


// task 7
/* Дан элемент. Сделайте так, чтобы при клике на него
 и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2',
  а при нажатой клавише Shift - '3'. */

  redOnClick1.onclick = (e) => {
    if (e.ctrlKey) {redOnClick1.innerHTML = '1'};
    if (e.altKey) {redOnClick1.innerHTML = '2'};
    if (e.shiftKey) {redOnClick1.innerHTML = '3'};
};


// task 8
/* Дан инпут. В него вводится текст и нажимается клавиша Enter (ее код имеет номер 13).
 Сделайте так, чтобы по нажатию Enter введенный текст попадал в абзац под инпутом, а содержимое инпута очищалось. */

 inputText.onkeydown = (e) => {
    if(e.key == "Enter"){
        pUnderInputText.innerHTML = inputText.value;
        inputText.value = '';};
     };


// task 9
/* Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет
 добавляться новый li с текстом 'пункт'. Сделайте так, чтобы при клике на каждый li, ему 
 в конец добавлялся '!'. Это должно работать и для вновь добавленных li. Задачу решите
  с помощью делегирования (то есть событие должно быть навешано на ul) */

  targetUlDiv.style.display = "block";
  targetUl.onclick = () => {
    event.target.innerHTML = event.target.innerHTML + '!';
  };
  targetUlBtn.onclick = () => {
      let newLi = document.createElement('li');
      newLi.innerHTML = "пункт";
      targetUl.append(newLi);
  };


// // task 10
// /* Дана таблица с юзерами с двумя колонками: имя и фамилия. Под таблицей сделайте форму,
//  с помощью которой можно будет добавить нового юзера в таблицу. Сделайте так, чтобы при
//   клике на любую ячейку появлялся prompt, с помощью которого можно изменить текст ячейки.
//    Задачу решите с помощью делегирования (то есть событие должно быть навешано на table). */

tableUser.onclick = () => {
    if (event.target.tagName == 'TD') {
        let newTdValue = prompt('tape new value'," ");
        event.target.innerHTML = newTdValue;
    };
};
addNewUser.onclick = () => {
    let newNameTd = document.createElement('td');
    let newSurnameTd = document.createElement('td');
    let newUserTableTr = document.createElement('tr');
    newNameTd.innerHTML = nameInput.value;
    newSurnameTd.innerHTML = surNameInput.value;
    newUserTableTr.appendChild(newNameTd);
    newUserTableTr.appendChild(newSurnameTd);
    tableUser.appendChild(newUserTableTr);
    nameInput.value = '';
    surNameInput.value = '';
}
