function validateEmail(email) {
    const re = /\S+@\S+\.com/;
    return re.test(email);
}


document.getElementById('email').addEventListener('input', function() {
    const emailInput = this.value;
    const emailField = document.getElementById('email');
    const emailError = document.getElementById('emailError');

    if (!validateEmail(emailInput)) {
        emailField.classList.add('invalid');
        emailError.innerText = 'O e-mail deve ser válido e conter "@" e ".com"';
    } else {
        emailField.classList.remove('invalid');
        emailError.innerText = '';
    }
});

function validatePassword(password) {
    return password.length >= 8;
}


document.getElementById('senha').addEventListener('input', function() {
    const passwordInput = this.value;
    const passwordField = document.getElementById('senha');
    const passwordError = document.getElementById('passwordError');

    if (!validatePassword(passwordInput)) {
        passwordField.classList.add('invalid');
        passwordError.innerText = 'A senha deve ter pelo menos 8 caracteres';
    } else {
        passwordField.classList.remove('invalid');
        passwordError.innerText = '';
    }
});