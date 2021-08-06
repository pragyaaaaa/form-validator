const form = document.getElementById('formID');
const email= document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');
const username = document.getElementById('username');


function showError(input, msg) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = msg;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

form.addEventListener('submit', function submitForm(e) {
    e.preventDefault();
    if (username.value === '') {
        showError(username, 'Username is required.');
    }
    else {
        showSuccess(username);
    }
})