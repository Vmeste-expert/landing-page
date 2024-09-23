const header = document.querySelector('.header_inner');
const logo = document.querySelector('.header__logo');
window.addEventListener('scroll', () => {
    header.classList.toggle('header_inner-scrolled', window.scrollY > 50),
    logo.classList.toggle('header__logo-scrolled', window.scrollY > 50)
})