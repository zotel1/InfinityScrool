const container = document.querySelector('.container')

window.addEventListener('scroll', () => {
    const {scrollHeight, clientHeight, scrollTop} =  document.documentElement

    console.log(`scrollTop + clientHeight = ${scrollTop + clientHeight} | Altura personalizada = ${scrollHeight - 3}`)
    scrollTop + clientHeight > scrollHeight - 5 && setTimeout(newContainer, 500)
})

const newContainer = () => {
    const box = document.createElement('div')
    box.className = 'box d'
    container.appendChild(box)
}