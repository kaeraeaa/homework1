
function debounce(func, delay) {
    let timeout;
    return function(...args) {
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(this, args), delay);
    };
}

const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

const resizeImage = debounce((event) => {
    const value = event.target.value;
    sliderImage.style.width = `${value}%`;
    sliderImage.style.height = 'auto';
}, 10);

sliderInput.addEventListener('input', resizeImage);


const box = document.getElementById('box');

const moveBox = debounce((event) => {
    const x = event.clientX;
    const y = event.clientY;
    box.style.transform = `translate(${x - 25}px, ${y - 25}px)`; 
}, 10);

document.addEventListener('mousemove', moveBox);
