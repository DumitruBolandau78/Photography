const scheduleNowBtn = document.querySelectorAll('.schedule-now button');
const popup = document.querySelector('.popup');
const closePopupIcon = document.querySelector('.popup-icon-close');

scheduleNowBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popup.classList.add('active');
    });
});

closePopupIcon.addEventListener('click', () => {
    popup.classList.remove('active');
});