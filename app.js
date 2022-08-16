const menuIcon = document.querySelector('.hamburger');
const navList = document.querySelector('.nav-list');
let navLink = document.querySelectorAll('.nav-link');

menuIcon.addEventListener('click', function(){
  navList.classList.toggle('open')
})

navLink.forEach(e => {
    e.addEventListener('click', function(){
        navList.classList.remove('open')
    })
});