const choice = document.querySelectorAll('.ch');
const txt = document.querySelectorAll('.txt3');

const X = document.querySelector('.X');
const choser = document.querySelector('.choice');

const criarConta = document.querySelector('.bt2');

const criar = document.getElementById('criar');
const ch1 = document.querySelector('.ch1');
const ch2 = document.querySelector('.ch2');

criarConta.addEventListener('click', () => {
    choser.style.display = 'block';
});

X.addEventListener('click', () => {
    choser.style.display = 'none';
});

choice.forEach((all, index) => {
    all.addEventListener('click', () => {
        choice.forEach(el => {
            el.style.borderColor = 'white';
            el.classList.remove('ativo');
    });
        all.style.borderColor = '#4d0a64';
        all.classList.add('ativo');

        
    });

});

criar.addEventListener('click', () => {
    if (choice[0].classList.contains('ativo')) {
        alert ('Em breve');
    } else if (choice[1].classList.contains('ativo')) {
        window.location.href = 'Contas/cliente/Cliente.html';
    }

});

