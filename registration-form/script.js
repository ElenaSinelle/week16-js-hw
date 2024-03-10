'use strict'
//switching forms

const toRegBtn = document.querySelector('.toReg');
const toLoginBtn = document.querySelector('.toLogin');
const regForm = document.forms.regForm;
const loginForm = document.forms.loginForm;

toRegBtn.addEventListener('click', function() {
  toggleForms(loginForm, regForm);
});

toLoginBtn.addEventListener('click', function() {
  toggleForms(regForm, loginForm);
});

function toggleForms(formToHide, formToShow) {
  formToHide.classList.remove('active');
  formToShow.classList.add('active');
}


//validation and sending forms
//listeners
loginForm.addEventListener('submit', function(event) {
  formSend(event, loginForm);

});

regForm.addEventListener('submit', function(event) {
  formSend(event, regForm);

});


//sending form
async function formSend(event, form) {
  event.preventDefault();

  let error = formValidate(form);
  let formData = new FormData(form);

  if(error === 0) {
    let response = await fetch('sendmail.php', {
      method: 'POST',
      body: formData
    });

    if(response.ok) {
      let result = await response.json();
      alert(result.message);
      form.reset();

    } else {
      alert('Всё отлично! Но вы не подключились к серверу)');
    }
  } else {
    alert ('Заполните обязательные поля');
  }
}

//validation
function formValidate(form) {
  let error = 0;

  let formReq;
  if (form === loginForm) {
    formReq = Array.from(document.querySelectorAll('._req')).slice(0, 2);
  } else if (form === regForm) {
    formReq = Array.from(document.querySelectorAll('._req')).slice(2);
  }

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index];
    formRemoveError(input);

    if (input.type === 'email') {
      if (input.value === '') {
        alert('Введите email');
        formAddError(input);
        error++;
      } else if (!testEmail(input.value)) {
        formAddError(input);
        alert('Неправильно заполнено поле email');
        error++;
      }
    }

    if (input.type === 'password') {
      if (input.value === '') {
        formAddError(input);
        alert('Введите пароль');
        error++;
      } else if (!testPassword(input.value)) {
        formAddError(input);
        alert('Неправильно введён пароль');
        error++;
      }
    }

    if (input.id === 'username') {
      if (input.value === '') {
        formAddError(input);
        alert('Введите ваше имя');
        error++;
      } else if (!testName(input.value)) {
        formAddError(input);
        alert('Слишком короткое имя');
        error++;
      }
    }

    if (input.id === 'age') {
      if (input.value === '') {
        formAddError(input);
        alert('Введите ваш возраст');
        error++;
      } else if (input.value < 18) {
        formAddError(input);e
        alert('Вам ещё нет 18 лет, вам сюда нельзя(');
        error++;
      }
    }

    if (input.id === 'profession') {
      if (input.value === '') {
        formAddError(input);
        alert('Укажите вашу профессию');
        error++;
      }
    }
  }
  return error;
}

//checking functions
function testEmail(email) {
  const regexp = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  return regexp.test(email);
}

function testPassword(password) {
  const regexp = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[\w]).{8,}/;
  return regexp.test(password);
}

function testName(name) {
  const regexp = /^[A-Za-zА-Яа-яЁё\s]{2,20}$/;
  return regexp.test(name);
}

//add class functions
function formAddError(input) {
  input.classList.add('error');
}

function formRemoveError(input) {
  input.classList.remove('error');
}

//controlling submit
function controlSubmit(form) {
  let formInputs;
  if (form === loginForm) {
    formInputs = Array.from(document.querySelectorAll('._req')).slice(0, 2);
  } else if (form === regForm) {
    formInputs = [...Array.from(document.querySelectorAll('._req')).slice(2), document.getElementById('regConcent')];
  }

  let inputCount = 0;
  formInputs.forEach(input => {
    if(input.value !== '' || input.checked === true ) {
      inputCount++;
      console.log(input);
    }
  });
  console.log(inputCount);
  //if formInputs.length == inputCount => submit button enabled, otherwise - disabled
}

loginForm.addEventListener('change', function(){
  controlSubmit(loginForm);
})

regForm.addEventListener('change', function(){
  controlSubmit(regForm);
})


//     submitBtn.setAttribute('disabled', true);
//     submitBtn.classList.remove('.hover');
//     submitBtn.classList.remove('.active');
//   } else {
//     submitBtn.removeAttribute('disabled');
//     submitBtn.classList.add('.hover');
//     submitBtn.classList.add('.active');
