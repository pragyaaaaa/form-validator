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

function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(input.value.trim())) {
        showError(input, `${getFieldName(input)} must be valid.`);
    }
    else {
        showSuccess(input);
    }
}

function getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1, input.length);
}
function checkLength(input, min, max) {
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be atleast ${min} characters.`);
    }
    else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} must be less than ${max} characters.`);
    }
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

function chcekConfirmPassword(input1, input2) {
    if (input1.value !== input2.value) {
        showError(input1, `Passwords don't match.`);
        showError(input2, `Passwords don't match.`)
    }
}

form.addEventListener('submit', function submitForm(e) {
    e.preventDefault();
    checkRequired([username, email, password, confirmpassword]);
    checkLength(username, 3, 30);
    checkLength(password, 3, 30);
    checkEmail(email);
    chcekConfirmPassword(password, confirmpassword);
})