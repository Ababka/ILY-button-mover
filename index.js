const container = document.querySelector('.container')
const yButton = document.querySelector('.yes')
const nButton = document.querySelector('.no')

yButton.addEventListener('click', () => {
    container.innerHTML = `<h1 class="yay"> AAWWWW! <br>You're so sweet!<br> 😊🥰</h1>`
})

nButton.addEventListener('click', () => {
    nButton.style.position = 'absolute';

    const random_left = Math.floor(Math.random() * container.clientWidth);
    const random_top = Math.floor(Math.random() * container.clientHeight);

    if (random_left >= container.clientWidth / 5)
        nButton.style.left = `${random_left - nButton.clientWidth}px`;
    
    if (random_top >= container.clientHeight / 5)
    nButton.style.top = `${random_top - nButton.clientHeight}px`;

})