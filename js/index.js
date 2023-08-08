document.querySelector('.hamburger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-active');
    document.querySelector('.nav-bar-mobile').classList.toggle('show');
});