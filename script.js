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

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1, input.length);
}

function checkRequired(inputArr) {
    inputArr.forEach(function validateInputElement(input) {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required Field.`)
        }
        else {
            showSuccess(input);
        }
    });
}

form.addEventListener('submit', function submitForm(e) {
    e.preventDefault();
    checkRequired([username, email, password, confirmpassword]);
})