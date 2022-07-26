const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')

const showImg = () => {
    img.classList.toggle('hide')
}

arrowBtn.addEventListener('click', showImg)