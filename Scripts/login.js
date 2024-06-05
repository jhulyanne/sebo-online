document.addEventListener('DOMContentLoaded', function () {
    const inputUsuario = document.querySelector('#usuario');
    const inputSenha = document.querySelector('#senha');
    const botaoSubmit = document.querySelector('#botaoSubmit');
    const msgErro = document.querySelector('.msg');

    botaoSubmit.addEventListener('click', function (e) {
        e.preventDefault();

        const usuario = inputUsuario.value;
        const senha = inputSenha.value;

        if (usuario === '' || senha === '') {
            msgErro.textContent = 'Por favor, preencha todos os campos corretamente!';

            setTimeout(() => {
                msgErro.textContent = '';
            }, 3000);
        } else {
            msgErro.textContent = ''; 
            window.location.href = 'home.html';
        }
    });
});