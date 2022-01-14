let inputRangeRed = null
let inputRangeGreen = null
let inputRangeBlue = null

let inputTextRed = null
let inputTextGreen = null
let inputTextBlue = null

let divSquare = null

let code = null

let r = '0'
let g = '0'
let b = '0'

window.addEventListener('load', () => {
    mapElements()
    sync()
    render()
})

function mapElements() {
    inputRangeRed = document.querySelector('#inputRangeRed')
    inputRangeGreen = document.querySelector('#inputRangeGreen')
    inputRangeBlue = document.querySelector('#inputRangeBlue')
    
    inputTextRed = document.querySelector('#inputTextRed')
    inputTextGreen = document.querySelector('#inputTextGreen')
    inputTextBlue = document.querySelector('#inputTextBlue')

    divSquare = document.querySelector('#divSquare')

    code = document.querySelector('#code')

    inputRangeRed.addEventListener('change', handleInputRangeChange)
    inputRangeGreen.addEventListener('change', handleInputRangeChange)
    inputRangeBlue.addEventListener('change', handleInputRangeChange)
    
    inputTextRed.addEventListener('change', handleInputRangeChange)
    inputTextGreen.addEventListener('change', handleInputRangeChange)
    inputTextBlue.addEventListener('change', handleInputRangeChange)
}

function handleInputRangeChange(event) {
    const value = event.target.value
    const id = event.target.id

    switch (id) {
        case 'inputRangeRed': r = value; break
        case 'inputRangeGreen': g = value; break
        case 'inputRangeBlue': b = value; break
        
        case 'inputTextRed': r = value; break
        case 'inputTextGreen': g = value; break
        case 'inputTextBlue': b = value; break
    }

    sync()
}

function sync() {
    divSquare.style.backgroundColor = `rgb(${r}, ${g}, ${b})`

    inputTextRed.value = r
    inputTextGreen.value = g
    inputTextBlue.value = b
    
    inputRangeRed.value = r
    inputRangeGreen.value = g
    inputRangeBlue.value = b

    render()
}

function render() {
    code.innerHTML = ''

    const h3 = document.createElement('h3')
        h3.textContent = `RGB (${r}, ${g}, ${b})`

    code.appendChild(h3)
}