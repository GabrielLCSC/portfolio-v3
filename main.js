const menuBtn = document.querySelector('.burger-menu');
const menuList = document.querySelector('.menu-list');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('active');
});

const checkboxGreen = document.getElementById('green-check');
const checkboxYellow = document.getElementById('yellow-check');
const blocDivs = document.querySelectorAll('.bloc');

checkboxGreen.addEventListener('change', function() {
    if (this.checked) {
    blocDivs.forEach((div) => {
        div.classList.add('green');
    });
    } else {
    blocDivs.forEach((div) => {
        div.classList.remove('green');
    });
    }
});

checkboxYellow.addEventListener('change', function() {
    if (this.checked) {
    blocDivs.forEach((div) => {
        div.classList.add('yellow');
    });
    } else {
    blocDivs.forEach((div) => {
        div.classList.remove('yellow');
    });
    }
});