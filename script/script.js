const app = document.querySelector('.app');
const allCardsEl = document.querySelector('.cards');
const cardsEl = document.querySelector('.card');
const spinBtn = document.querySelector('.spin-btn');

const spinSound = new Audio('../sounds/spin.mp3')
const winSound = new Audio('../sounds/win.mp3')


function spinKarusel() {
    //сброс анимаций
    removeProps()
    //запуск вращения на следубщем кадре
    requestAnimationFrame(() => {
        spinSound.play()

        const index = Math.floor(Math.random() * cardsEl, length)
        const angle = 6 * 360 - index * 60


        cardsEl.classList.add('spin')
        cardsEl.style.transform = `rotateY(${angle}deg`

        setTimeout(() => {
            cardsEl[index].classList.add('spin')
            spinBtn.disabled = false
            showInModal(cardsEl[index])
        }, 8000);






    })



























}












spinBtn.addEventListener('click', () => {

})