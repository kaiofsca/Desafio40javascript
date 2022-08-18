const colors = [ 'Red', 'Green', 'Blue', 'Yellow', 'Brown', 'Pink', 'Black', 'White', 'Purple', 'Gray', 'Orange', 'Violet', 'Amber', 'Lilac', 'Teal', 'Olive', 'Magenta', 'Orange-red', 'Blue-green', 'Lime']
const botao = document.getElementById('button')
const color = document.getElementById('color')

function pegaNumAleatorio() {
    return Math.floor(Math.random() * colors.length)
}

botao.addEventListener('click', () => {
    
    const numAleatorio = pegaNumAleatorio()
    document.body.style.backgroundColor = colors[numAleatorio]
    color.textContent = colors[numAleatorio]

})