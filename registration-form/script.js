'use strict';

const loginForm = document.forms.loginForm;
const regForm = document.forms.regForm;
const submitBtns = document.querySelectorAll('.form__submit-btn');

//disabling submit button of first form on load
loginForm.addEventListener('DOMContentLoaded', controlSubmit(loginForm));

//switching between forms
const toRegBtn = document.querySelector('.toReg');
const toLoginBtn = document.querySelector('.toLogin');

toRegBtn.addEventListener('click', function () {
  toggleForms(loginForm, regForm);
});

toLoginBtn.addEventListener('click', function () {
  toggleForms(regForm, loginForm);
});

function toggleForms(formToHide, formToShow) {
  formToHide.classList.remove('active');
  formToShow.classList.add('active');
  controlSubmit(formToShow);
}

//----------------------------------------------------------------

//listeners on focus / blur
let inputs = [...document.querySelectorAll('input'), document.querySelector('select')];
inputs.forEach(input => {
  input.addEventListener('focus', function() {
    input.classList.add('focus');
    formRemoveError(input);
  })
});

inputs.forEach(input => {
  input.addEventListener('blur', function() {
    input.classList.remove('focus');
  })
})

//----------------------------------------------------------------

//controlling submit
function controlSubmit(form) {
  let formInputs = Array.from(form.querySelectorAll('._req'));

  let isValid = true;

  formInputs.forEach(input => {
    if (!validateInput(input)) {
      isValid = false;
    }
  });

  if(form === regForm) {
    const checkBox = form.querySelector('input[name="regConcent"]');
    if (!checkBox.checked) {
      isValid = false;
    }
  }

  submitBtns.forEach(btn => {
    btn.disabled = !isValid;
  });
}

// checking if input is empty / unchecked
function validateInput(input) {
  if (input.value.trim() === '') {
    showError(input, 'Это поле обязательно для заполнения');
    return false;
  } else {
    clearError(input);
    return true;
  }
}

// Show error message next to input
function showError(input, message) {
  const errorEl = input.parentElement.querySelector('.form__error');
  if (errorEl) {
    errorEl.textContent = message;
  } else {
    const errorDiv = document.createElement('div');
    errorDiv.classList.add('form__error');
    errorDiv.textContent = message;
    input.parentElement.appendChild(errorDiv);
  }
}

// Clear error message
function clearError(input) {
  const errorEl = input.parentElement.querySelector('.form__error');
  if (errorEl) {
    errorEl.remove();
  }
}

// listeners on change
loginForm.addEventListener('change', function () {
  controlSubmit(loginForm);
});

regForm.addEventListener('change', function () {
  controlSubmit(regForm);
});

//-----------------------------------------------------------

//extended validation
function formValidate(form) {
let isValid = true;

let formInputs = Array.from(form.querySelectorAll('._req'));

formInputs.forEach(input => {
  formRemoveError(input);
  clearError(input);

  if (input.type === 'email') {
    if (!testEmail(input.value)) {
      formAddError(input);
      showError(input, 'Неправильно заполнено поле email');
      isValid = false;
    }
  }

  if (input.type === 'password') {
    if (!testPassword(input.value)) {
      formAddError(input);
      showError(input, 'Неправильно введён пароль');
      isValid = false;
    }
  }

  if (input.id === 'username') {
    if (!testName(input.value)) {
      formAddError(input);
      showError(input, 'Слишком короткое имя');
      isValid = false;
    }
  }

  if (input.id === 'age') {
    if (input.value < 18) {
      formAddError(input);
      showError(input, 'Вам ещё нет 18 лет, вам сюда нельзя(');
      isValid = false;
    }
  }

  if (input.id === 'profession') {
    if (input.value === '') {
      formAddError(input);
      showError(input, 'Укажите вашу профессию');
      isValid = false;
    }
  }
  });

  return isValid;
}

//functions for inputs validation
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

//add / remove error class functions
function formAddError(input) {
  input.classList.add('error');
}

function formRemoveError(input) {
  input.classList.remove('error');
}

//----------------------------------------------------------------------

//validation and sending forms
//function sending form
async function formSend(event, form) {
  event.preventDefault();

  let error = formValidate(form);

  let formData = new FormData(form);

  if(error) {
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
    alert ('Некоторые поля заполнены неправильно');
  }
}

//listeners of submit
loginForm.addEventListener('submit', function(event) {
  formSend(event, loginForm);

});

regForm.addEventListener('submit', function(event) {
  formSend(event, regForm);

});
