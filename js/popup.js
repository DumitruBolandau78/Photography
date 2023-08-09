const scheduleNowBtn = document.querySelectorAll('.schedule-now button');
const popupWrapper = document.querySelector('.popup-wrapper');
const popup = document.querySelector('.popup'); 
const closePopupIcon = document.querySelector('.popup-icon-close');
const formInputs = document.querySelectorAll('.popup input');
const popupBtn = document.querySelector('.popup button');
const popupTextArea = document.querySelector('.popup textarea');

popupBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const isComplete = Array.from(formInputs).every(input => input.value !== '');

    if(isComplete && popupTextArea.value !== ''){
        formInputs.forEach(input => input.value = '');
        popupTextArea.value = '';

        alert('Thank you for the message, we will announce you as soon as posible.');
        
        popup.classList.remove('active');
        popupWrapper.classList.remove('active-popup');
    } else {
        alert('Please fill all the fields! Thank you.');
    }
});

scheduleNowBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        popup.classList.add('active');
        popupWrapper.classList.add('active-popup');
    });
});

closePopupIcon.addEventListener('click', () => {
    popup.classList.remove('active');
    popupWrapper.classList.remove('active-popup');
});

popupWrapper.addEventListener('click', (e) => {
    const target = e.target.closest('.popup');
    if(target) return;

    popup.classList.remove('active');
    popupWrapper.classList.remove('active-popup');
});