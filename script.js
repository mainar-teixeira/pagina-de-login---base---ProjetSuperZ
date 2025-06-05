window.addEventListener("orientationchange", function() {
    if(window.orientation === 90 || window.orientation === -90){
        alert("Este site funciona melhor no modo retrato.");
    }
});


const screen = document.querySelector('.stylos');
const screen1 = document.querySelector('.stylo');
const dark = document.querySelectorAll('.dark');
const art = document.querySelectorAll('.stylo img');

function show() {
    art.forEach(arts => arts.style.display = 'none')
    dark.forEach(all => all.style.display = 'block');
}

function hide() {
    art.forEach(arts => arts.style.display = 'block')
    dark.forEach(all => all.style.display = 'none');
}

dark[0].addEventListener('mouseenter', () => {
    screen1[0].style.display = 'block';
});


