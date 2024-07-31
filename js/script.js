const container = document.querySelector('.container')

window.addEventListener('scroll', () => {
    const {scroolHeight, clientHeight, scrollTop} =  document.documentElement

    console.log(clientHeight)
    scrollTop + clientHeight > scroolHeight - 3 && setTimeout(newContainer, 1000)
})

const newContainer = () => {
    const box = document.createElement('div')
    box.className = 'box d'
    container.appendChild(box)
}