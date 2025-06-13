const app = document.querySelector('.app');
const cardsContainer = document.querySelector('.cards');
const cards = document.querySelectorAll('.card');
const spinBtn = document.querySelector('#spin-btn');
const closeBtn = document.querySelector('#close-btn')
const dialog = document.querySelector('.wheel_result');
const dialogImg = document.querySelector('.wheel_result-item img');
const dialogName = document.querySelector('.wheel_result-item h3')

const spinSound = new Audio('../sounds/spin.mp3')
const winSound = new Audio('../sounds/win.mp3')


function spinKarusel() {
    //сброс анимаций
    removeProps()
    //запуск вращения на следубщем кадре
    requestAnimationFrame(() => {
        spinSound.play()

        const index = Math.floor(Math.random() * cards.length)
        const angle = 6 * 360 - index * 60

        console.log(index);



        cardsContainer.classList.add('spin')
        cardsContainer.style.transform = `rotateY(${angle}deg`

        setTimeout(() => {
            cards[index].classList.add('spin')
            spinBtn.disabled = false
            shouWinModal(cards[index])
        }, 8000);
    })
}




function removeProps() {

    spinBtn.disabled = true
    cardsContainer.classList.remove('spin')
    cardsContainer.style.transform = 'rotateY(0deg)'
}

//функция для показа рещультатов в модальном окне
function shouWinModal(el) {
    dialogImg.src = el.querySelector('img').src
    dialogName.textContent = el.querySelector('.gun-name').textContent
    winSound.play()
    dialog.classList.add('active')
}


function init() {
    spinBtn.addEventListener('click', spinKarusel)
    closeBtn.addEventListener('click', () => dialog.classList.remove('active'))
    document.addEventListener('keydown', e => {
        if ((e.key === 'Enter' || e.code === 'Space') && !dialog.classList.contains('active')) {
            spinKarusel()
        }

        if ((e.key === 'Escape' || e.key === 'Enter' || e.code === 'Space') && dialog.classList.contains('active')) {
            dialog.classList.remove('active')
        }
    })
}

init();