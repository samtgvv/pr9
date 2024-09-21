let form = document.forms.auth;
let nameInput = form.elements.name;
let yearInput = form.elements.year;
let labelName = document.getElementById('name');
let labelYear = document.getElementById('year');

form.addEventListener('submit', userAuth);

let flag = true;
let user;
function userAuth(event) {
    event.preventDefault();
    nameError.innerHTML = '';
    yearError.innerHTML = '';
    flag = true;
    if (nameInput.classList.contains('error_input')) {
        nameInput.classList.remove('error_input');
    }
    if (yearInput.classList.contains('error_input')) {
        yearInput.classList.remove('error_input');
    }
    if (!nameInput.value) {
        labelName.style.color = 'red';
        nameInput.classList.add('error_input');
        flag = false;
    }
    if (!yearInput.value) {
        labelYear.style.color = 'red';
        yearInput.classList.add('error_input');
        flag = false;
    }
    if (nameInput.value.length < 2) {
        nameError.innerHTML = 'Введите более, чем 1 символ';
        labelName.style.color = 'red';
        nameInput.classList.add('error_input');
        flag = false;
    }
    if (!yearInput.value) {
        labelYear.style.color = 'red';
        yearInput.classList.add('error_input');
        flag = false;
    }
    if (yearInput.value.length < 4) {
        yearError.innerHTML = 'Необходимо ввести 4 символа';
        labelYear.style.color = 'red';
        yearInput.classList.add('error_input');
        flag = false;
    }
    if ((2024 - yearInput.value) < 18) {
        yearError.innerHTML = 'Вам нет 18!';
        labelYear.style.color = 'red';
        yearInput.classList.add('error_input');
        flag = false;
    }

    if (flag) {
        labelYear.style.color = 'black';
        labelName.style.color = 'black';
        alert('Ошибок нет!');
    }
}