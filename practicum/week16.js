//Задание 1
//Найдите все формы на странице. При нажатии на кнопку выведите количество найденных форм.
//Подсказка: используйте коллекцию document.forms и свойство length

function makeOne() {
	const paragraph = document.getElementById('practicum');
	paragraph.textContent = document.forms.length;
}

document.querySelector('.b-1').addEventListener('click', makeOne);

//---------------------------------------------------------------------------------------

//Задание 2
//Найдите первую форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeTwo() {
	const paragraphTwo = document.getElementById('practicum2');
	paragraphTwo.textContent = document.forms[0].getAttribute('name');
}

document.querySelector('.b-2').addEventListener('click', makeTwo);

//---------------------------------------------------------------------------------------

//Задание 3
//Найдите последнюю форму на странице. При нажатии на кнопку выведите значение атрибута "name" этой формы.
//Подсказка: используйте коллекцию document.forms и метод getAttribute

function makeThree() {
	const paragraphThree = document.getElementById('practicum3');
	paragraphThree.textContent = document.forms[document.forms.length - 1].getAttribute('name');
}

document.querySelector('.b-3').addEventListener('click', makeThree);

//---------------------------------------------------------------------------------------

//Задание 4
//Найдите все формы на странице и выведите их названия
//При нажатии на кнопку выведите названия всех найденных форм, разделенных запятыми
//Подсказка: Для решения задания вы можете использовать следующую логику:
//- Получите все формы на странице, используя коллекцию document.forms
//- Создайте пустой массив formNames для хранения названий форм
//- Пройдитесь по каждой форме в коллекции и для каждой формы
//- Получите значение атрибута name с помощью метода getAttribute
//- Добавьте полученное название в массив formNames
//- Преобразуйте массив formNames в строку, разделив названия запятыми, с помощью метода join()
//- Выведите полученную строку названий форм в элемент с id practicum4 при нажатии на кнопку

function makeFour() {
	const paragraphFour = document.getElementById('practicum4');
  paragraphFour.textContent = Array.from(document.forms).map(form => form.getAttribute('name')).join(', ');
}

document.querySelector('.b-4').addEventListener('click', makeFour);

//---------------------------------------------------------------------------------------

//Задание 5
//Найдите третью форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements
//Подсказка: используйте коллекцию document.forms для получения формы по индексу и свойство form.elements.length для получения количества элементов в форме

function makeFive() {
	const paragraphFive = document.getElementById('practicum5');
  paragraphFive.textContent = document.forms[2].elements.length;
  //или так
	// paragraphFive.textContent = document.forms.formThree.elements.length;
}

document.querySelector('.b-5').addEventListener('click', makeFive);

//---------------------------------------------------------------------------------------

//Задание 6
//Найдите вторую форму на странице, используя document.forms и имя формы (которое вы знаете из задания 4)
//Выведите на страницу количество элементов в форме, используя коллекцию form.elements

function makeSix() {
	const paragraphSix = document.getElementById('practicum6');
	paragraphSix.textContent = document.forms.formTwo.elements.length;
}

document.querySelector('.b-6').addEventListener('click', makeSix);

//---------------------------------------------------------------------------------------

//Задание 7
//Выведите перечисление названий (name) всех элементов второй формы на экран. В задании 6 вы нашли их количество.
//Подсказка:
//- Используйте document.forms для получения коллекции всех форм на странице
//- Найдите вторую форму в коллекции форм, используя индекс 1 (индексы начинаются с 0)
//- Получите коллекцию элементов формы с помощью свойства elements у второй формы
//- Создайте пустую строку elementsList, которая будет хранить перечисление названий элементов
//- Используя цикл for, переберите элементы формы в коллекции formElements
//- Внутри цикла добавьте текущее название элемента формы (свойство name) в elementsList, добавляя дефис перед названием
//- После цикла выведите текст с перечислением элементов в элемент с id practicum7, используя свойство textContent

function makeSeven() {
	const paragraphSeven = document.getElementById('practicum7');
	let elementsList = ``;

  const form2elements = document.forms[1].elements;
  for (let i = 0; i < form2elements.length; i++) {
    elementsList += `- ${form2elements[i].name} `;
  }

  //или быстро и коротко вот так
  // [...document.forms[1].elements].forEach(item => elementsList += `- ${item.name} `);

  paragraphSeven.textContent = elementsList;
}

document.querySelector('.b-7').addEventListener('click', makeSeven);

//---------------------------------------------------------------------------------------

//Задание 8
//Выведите перечисление названий (name) всех элементов первой формы на экран. В задании 5 вы нашли их количество.

function makeEight() {
	const paragraphEight = document.getElementById('practicum8');
	paragraphEight.textContent = Array.from(document.forms[0].elements).map(element => `- ${element.name}`).join(' ');
}

document.querySelector('.b-8').addEventListener('click', makeEight);

//---------------------------------------------------------------------------------------

//Задание 9
//Найдите третью форму на странице. Выведите перечисление названий (name) всех элементов формы на экран.

function makeNine() {
	const paragraphNine = document.getElementById('practicum9');
	paragraphNine.textContent = [...document.forms[2].elements].map(element => `- ${element.name}`).join(' ');
}

document.querySelector('.b-9').addEventListener('click', makeNine);

//---------------------------------------------------------------------------------------

//Задание 10
//Выведите на экран значенеие radio кнопки третьей формы на странице
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения radio кнопки

function makeTen() {
	const paragraphTen = document.getElementById('practicum10');
	paragraphTen.textContent = document.forms.lastForm.elements.fourthName.value;
  //или
  // paragraphTen.textContent = document.lastForm.fourthName.value;
}

document.querySelector('.b-10').addEventListener('click', makeTen);

//---------------------------------------------------------------------------------------

//Задание 11
//Выведите значения всех опций из первой формы
//Подсказка: используйте коллекцию document.forms для доступа к формам, свойство elements для доступа к элементам формы и свойство value для получения значения выбранной опции
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Создайте пустую строку optionsValues, которая будет хранить значения всех опций
//- Используйте цикл для перебора опций в коллекции элемента select
//- Внутри цикла получите значение каждой опции с помощью свойства value и добавьте его в optionsValues
//- Выведите значения опций на страницу

function makeEleven() {
	const paragraphEleven = document.getElementById('practicum11');
	paragraphEleven.textContent = Array.from(document.forms[0].elements.firstSelect.options).map(option => option.value).join(', ');
}

document.querySelector('.b-11').addEventListener('click', makeEleven);

//---------------------------------------------------------------------------------------

//Задание 12
//Выведите значения атрибутов id всех чекбоксов (количество: 3) из второй формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к чекбоксам с помощью form.elements и сохраните их в переменные
//- Получите значения атрибутов id всех чекбоксов второй формы

function makeTwelve() {
	const paragraphTwelve = document.getElementById('practicum12');
  paragraphTwelve.textContent = Array.from(document.forms[1].querySelectorAll('.form__checkbox')).map(chbox => chbox.getAttribute('id')).join(', ');
}

document.querySelector('.b-12').addEventListener('click', makeTwelve);

//---------------------------------------------------------------------------------------

// Задание 13
//Проверьте была ли выбрана кнопка четвёртой формы
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к radio кнопке с помощью form.elements и сохраните её в переменную
//- Используйте условный оператор (if) для проверки выбранности кнопки
//- Если кнопка выбрана, выведите сообщение "Кнопка выбрана" на страницу
//- Если кнопка не выбрана, выведите сообщение "Кнопка не выбрана" на страницу

const paragraphThirteen = document.getElementById('practicum13');
const form4 = document.forms.lastForm;
const regBtn = form4.elements.fourthName;
const submitBtn = form4.elements.fourthButton;

function checkButton(event) {
	event.preventDefault();
	paragraphThirteen.textContent = regBtn.checked ? "Кнопка выбрана" : "Кнопка не выбрана";
}

submitBtn.addEventListener('click', checkButton);

//---------------------------------------------------------------------------------------

//Задание 14
//Выведите на экран название выбранного варианта в первой форме
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Установите выбранным любой вариант формы
//- Используйте свойство value выбранной опции для получения выбранного варианта
//- Напишите проверку, которая используя условный оператор (if) будет выводить в элемент paragraphFourteen название выбранного варианта

function checkOption() {
	const paragraphFourteen = document.getElementById('practicum14');
  // чтобы было интереснее, сделаем возможность множественного выбора опций)
  paragraphFourteen.textContent = [...document.forms[0].firstSelect.options].filter(option => option.selected).map(item => item.text).join(', ');
}

document.querySelector('.b-14').addEventListener('click', checkOption);

//---------------------------------------------------------------------------------------

//Задание 15
//Добавьте в первую форму выбранную Опцию 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу select с помощью form.elements и сохраните его в переменную
//- Используйте свойство selectedIndex элемента select, чтобы установить выбранный индекс опции по умолчанию
//- Установите значение selectedIndex равным индексу опции, которую вы хотите выбрать по умолчанию

function makeFifteen() {
	document.forms[0].firstSelect.options[2].setAttribute('selected', true);
}

makeFifteen();

//---------------------------------------------------------------------------------------

//Задание 16
//Добавьте во вторую форму выбранный Вариант 3 по умолчанию
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к элементу checkbox с помощью form.elements и сохраните его в переменную
//- Используйте свойство checked элемента checkbox, чтобы установить его выбранным по умолчанию
//- Установите значение checked равным true для выбранного варианта

function makeSixteen() {
  document.forms[1].querySelectorAll('.form__checkbox')[2].checked = true;
}

makeSixteen();

//---------------------------------------------------------------------------------------

//Задание 17
//Проверьте, заполнены ли все поля первой формы перед отправкой
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную formOne
//- Получите доступ к каждому полю формы с помощью form.elements и сохраните их в соответствующие переменные
//- Используйте условные операторы (if) для проверки каждого поля на заполненность
//- Если хотя бы одно поле не заполнено, выведите сообщение об ошибке на страницу (элемент для добавления ошибки создан: <p class="error-message" id="errorMessage"></p>)
//- Добавьте слушатель события submit к форме, чтобы выполнить проверку перед отправкой
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

formOne.addEventListener('submit', function (event) {
	const formOneElems = Array.from(document.forms.formOne.elements).filter(elem => elem.nodeName === 'INPUT' || elem.nodeName === 'SELECT');

  let errors = [];
  formOneElems.forEach((elem, index) => {
    if (elem.value.trim() === '') errors.push([elem, index]);
  });

  const errorMessage = document.querySelector('.error-message');

  if (errors.length) {
    event.preventDefault();
    errorMessage.textContent = errors
                              .map(item => `Заполните поле №${item[1] + 1}: "${item[0].previousElementSibling.textContent.slice(0, -1)}"`)
                              .join('; ');
  } else {
    errorMessage.textContent = '';
    document.forms.formOne.reset();
  }
});

//---------------------------------------------------------------------------------------

//Задание 18
//Очистите все поля первой формы после отправки
//Подсказка:
//- Получите доступ к форме с помощью document.forms и сохраните её в переменную
//- Используйте метод reset() формы, чтобы очистить все её поля после отправки
//- Добавьте слушатель события addEventListener на первую форму, как вы делали в задании 17
//- В обработчике события вызовите метод event.preventDefault() для отмены отправки формы в случае ошибки

//Добавлено в задание 17.

//---------------------------------------------------------------------------------------

//Задание 19
//При выборе определенной опции из выпадающего списка измените цвет фона страницы
//Подсказка:
//- Получите доступ к элементу select с помощью document.getElementById или другим методом выборки элементов и сохраните его в переменную
//- Используйте событие change для отслеживания изменений в выборе опции
//- В обработчике события, используя условные операторы (if), проверьте выбранную опцию
//- В зависимости от выбранной опции, измените цвет фона страницы, используя свойство document.body.style.backgroundColor

const select = document.formOne.firstSelect;
const toggleBtn = document.getElementById('toggle-multiple');

toggleBtn.addEventListener('click', function() {
  select.hasAttribute('multiple') ? select.removeAttribute('multiple') : select.setAttribute('multiple', true);
})

select.addEventListener('change', function() {
  switch(select.value) {
    case 'Опция 1':
      document.body.style.backgroundColor = '#9ec0f1';
      break;
    case 'Опция 2':
      document.body.style.backgroundColor = '#f6f9b1';
      break;
    case 'Опция 3':
      document.body.style.backgroundColor = '#fec7f5';
      break;
    default:
      document.body.style.backgroundColor = '';
      break;
  }
})

//---------------------------------------------------------------------------------------

//Задание 20
//Добавьте валидацию для поля Email
//Подсказка:
//- Получите доступ к первой форме с помощью document.forms и сохраните её в переменную
//- Получите доступ к полю Email с помощью form.elements и сохраните его в переменную
//- Используйте событие input для отслеживания изменений в поле Email
//- В обработчике события, используя регулярное выражение (RegExp: /^[^\s@]+@[^\s@]+.[^\s@]+$/), проверьте введенное значение поля Email
//- В зависимости от результата проверки, измените стиль поля Email (например, установите класс с ошибкой) и отобразите сообщение об ошибке в элементе <p> (добавьте элемент самостоятельно) с помощью свойства textContent.

const emailInput = document.forms.formOne.elements.firstEmail;
const emailErrorMessage = document.getElementById('emailErrorMessage');

//наверное лучше проверять правильность email после введения всего выражения, а не после введения каждого символа,
//поэтому использую событие input, а не change
emailInput.addEventListener('input', function() {
  const regexp = /^[-.\w]+@([\w-]+\.)+[\w-]+$/;
  if(regexp.test(emailInput.value)) {
    emailErrorMessage.textContent = 'с вашим email-адресом всё хорошо';
    emailErrorMessage.style.color = 'green';
  } else {
    emailErrorMessage.textContent = 'упс! с вашим email-адресом всё плохо';
    emailErrorMessage.style.color = 'red';
  }
});

//---------------------------------------------------------------------------------------

//Задание 21
//При отправке второй формы выполните проверку всех чекбоксов. Если ни один из чекбоксов не выбран, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result21".

const form2= document.forms.formTwo;

//событие при сабмите
form2.addEventListener('submit', function (evt) {
	evt.preventDefault();

  const checkboxes = Array.from(form2.querySelectorAll('.form__checkbox'));
  const errorMessage = document.getElementById('result21');

  errorMessage.textContent = checkboxes.filter(item => item.checked).length ? '' : 'нужно хотя бы что-то выбрать, дорогой друг';
});

// такое же событие при нажатии на кнопку Задание 21
const btn21 = document.querySelector('.b-21');
btn21.addEventListener('click', function (evt) {
	evt.preventDefault();

  const checkboxes = Array.from(form2.querySelectorAll('.form__checkbox'));
  const errorMessage = document.getElementById('result21-1');
  errorMessage.style.color = 'red';

  errorMessage.textContent = checkboxes.filter(item => item.checked).length ? '' : 'нужно хотя бы что-то выбрать, дорогой друг';
})

//---------------------------------------------------------------------------------------

//Задание 22
//При отправке третьей формы выполните проверку поля Имя на заполненность. Если поле Имя пустое, отмените отправку формы и выведите сообщение об ошибке в элементе с id "result22".
const form3 = document.forms.formThree;

//событие при сабмите
form3.addEventListener('submit', function(event) {
	const nameInput = form3.elements.thirdName;
  const errorMessage = document.getElementById('result22');
  if (nameInput.value === '') {
    event.preventDefault();
    errorMessage.textContent = 'надо бы ввести ваше имя';
  } else {
    errorMessage.textContent = '';
    form3.reset();
  }
});

// такое же событие при нажатии на кнопку Задание 22
const btn22 = document.querySelector('.b-22');
btn22.addEventListener('click', function(event) {
	const nameInput = form3.elements.thirdName;
  const errorMessage = document.getElementById('result22-1');
  if (nameInput.value === '') {
    event.preventDefault();
    errorMessage.style.color = 'red';
    errorMessage.textContent = 'надо бы ввести ваше имя';
  } else {
    errorMessage.textContent = '';
    form3.reset();
  }
});

//---------------------------------------------------------------------------------------

//Задание 23
//При выборе опции "Я хочу зарегистрироваться" в четвёртой форме кнопка должна быть разблокирована. В противном случае, сделайте кнопку отправки формы заблокированной.
//Подсказка: используйте свойство disabled

//для проверки задания нужно нажать кнопку Toggle Checkbox, чтобы оно не конфликтовало с заданием 13

//const form4 = document.forms.lastForm; объявлена в задании 13
//const regBtn = form4.elements.fourthName; объявлена в задании 13
//const submitBtn = form4.elements.fourthButton; объявлена в задании 13
const toggleChboxBtn = form4.elements.toggleCheckbox;

toggleChboxBtn.addEventListener('click', function(event) {
  if (regBtn.getAttribute('type') === 'radio') {
    regBtn.setAttribute('type', 'checkbox');
    paragraphThirteen.textContent = '';
    regBtn.checked = false;
    setDisabled(submitBtn);
  } else {
    regBtn.setAttribute('type', 'radio');
    setEnabled(submitBtn);
  }
})

regBtn.addEventListener('change', function() {
  if (regBtn.checked === true) {
    setEnabled(submitBtn);
  } else {
    paragraphThirteen.textContent = '';
    setDisabled(submitBtn);
  }
})

function setDisabled(btn) {
  btn.setAttribute('disabled', true);
  btn.style.backgroundColor = 'grey';
}

function setEnabled(btn) {
  btn.removeAttribute('disabled');
  btn.style.backgroundColor = '';
}

//---------------------------------------------------------------------------------------

//Задание 24
//Найдите все поля ввода на странице (querySelectorAll) и установите им атрибут "placeholder" со значением "Введите данные" (используйте метод forEach).

document.querySelector('.b-24').addEventListener('click', function () {
  const formInputs = document.querySelectorAll('.form__input');
	formInputs.forEach(input => input.setAttribute('placeholder', 'Введите данные'));
})

//---------------------------------------------------------------------------------------

//Задание 25
//При фокусе на любом поле ввода измените его границу на цвет "#00ff00". При потере фокуса восстановите стандартную границу.

	const inputs = document.querySelectorAll('input');

	inputs.forEach(input => {
    input.addEventListener('focus', function() {
      input.style.borderColor = '#00ff00';
    });
    input.addEventListener('blur', function() {
      input.style.borderColor = '';
    });
	});

//---------------------------------------------------------------------------------------

//Задание 26
//При нажатии на кнопку "Задание 26" отобразите в элементе с id "result26" значение placeholder из поля имя в третьей форме

document.querySelector('.b-26').addEventListener('click', function (event) {
	event.preventDefault();
	const resultMessage = document.getElementById('result26');
  resultMessage.textContent = document.forms[2].elements.thirdName.placeholder;
});

//---------------------------------------------------------------------------------------

//Задание 27
//При изменении значения любого из полей второй формы отобразите сообщение с текстом "Изменение внесено" в элементе с id "result27"

const formTwoInputs = document.querySelectorAll('.secondForm input');

formTwoInputs.forEach(function (input) {
	input.addEventListener('input', function () {
    const resultMessage = document.getElementById('result27');
    resultMessage.textContent = 'Изменение внесено';
	});
});

//---------------------------------------------------------------------------------------

//Задание 28
//При выборе любой из опций выпадающего списка в третьей форме отобразите сообщение с текстом "Опция выбрана" в элементе с id "result28"
// возможно в первой форме?

const selectFormOne = document.getElementById('firstSelect');

selectFormOne.addEventListener('change', function () {
	const resultMessage = document.getElementById('result28');
  resultMessage.textContent =  "Опция выбрана";
});
