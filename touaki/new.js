document.getElementById('btnHam').addEventListener('click', function () {
    var menu = document.getElementById('menu');
    menu.classList.toggle('show');
    });

const ribbon = document.getElementById('imgBoard');
const ribbons = document.getElementById('imgBoards');

ribbon.addEventListener('mouseover', () => {
    ribbon.style.right = '0px';
});

ribbon.addEventListener('mouseout', () => {
    ribbon.style.right = '-100px';
});

ribbons.addEventListener('mouseover', () => {
    ribbons.style.right = '0px';
});

ribbons.addEventListener('mouseout', () => {
    ribbons.style.right = '-100px';
});