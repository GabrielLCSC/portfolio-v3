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

// Création de la traînée
var trail = document.getElementById('trail');

// Gestion du mouvement de la souris
document.addEventListener('mousemove', function(event) {
  var dot = document.createElement('div');
  dot.className = 'trail-dot';
  dot.style.left = (event.clientX - 5) + 'px';
  dot.style.top = (event.clientY - 5) + 'px';
  trail.appendChild(dot);

  // Suppression des points précédents après un certain nombre
  if (trail.children.length > 20) {
    trail.removeChild(trail.firstChild);
  }
});
