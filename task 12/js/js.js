function addRemove(getId) {
    const getElementById = document.getElementById(getId)
    const bgColor = getElementById.style.backgroundColor;
    getElementById.style.backgroundColor = bgColor === 'blue' ? 'transparent' : 'blue'
}


document.getElementById('text-bold').addEventListener('click', function () {
    const inputTextArea = document.getElementById('text-field')
    const textArea = inputTextArea.style.fontWeight;
    inputTextArea.style.fontWeight = textArea === 'bold' ? 'normal' : 'bold'

    // inputTextArea.style.fontWeight = 'bold';
    addRemove('text-bold')
})


document.getElementById('text-italic').addEventListener('click', function () {
    const inputTextArea = document.getElementById('text-field')
    const textArea = inputTextArea.style.fontStyle;
    inputTextArea.style.fontStyle = textArea === 'italic' ? "normal" : 'italic'


    // inputTextArea.style.fontStyle = 'italic';


    addRemove('text-italic')
})
document.getElementById('text-underline').addEventListener('click', function () {
    const inputTextArea = document.getElementById('text-field')

    const textArea = inputTextArea.style.textDecoration;
    inputTextArea.style.textDecoration = textArea === 'underline' ? "none" : 'underline'


    // inputTextArea.style.textDecoration = 'underline';


    addRemove('text-underline')
})

// text alignment //

document.getElementById('align-left').addEventListener('click', function () {
    const inputTextArea = document.getElementById('text-field')

    const textArea = inputTextArea.style.textAlign;
    inputTextArea.style.textAlign = textArea === 'left' ? "none" : 'left'


    // inputTextArea.style.textAlign = 'left';


    addRemove('align-left')
})

document.getElementById('align-center').addEventListener('click', function () {
    const inputTextArea = document.getElementById('text-field')

    const textArea = inputTextArea.style.textAlign;
    inputTextArea.style.textAlign = textArea === 'center' ? "left" : 'center'


    // inputTextArea.style.textAlign = 'center';


    addRemove('align-center')
})

document.getElementById('align-right').addEventListener('click', function () {
    const inputTextArea = document.getElementById('text-field')

    const textArea = inputTextArea.style.textAlign;
    inputTextArea.style.textAlign = textArea === 'right' ? "left" : 'right'


    // inputTextArea.style.textAlign = 'right';


    addRemove('align-right')
})

// color picker
document.getElementById('color-picker').addEventListener('input', function () {
    const coloPicker = document.getElementById('color-picker');
    const selectColor = coloPicker.value
    const inputTextArea = document.getElementById('text-field')


    inputTextArea.style.color = selectColor;

})

document.getElementById('font-size').addEventListener('input', function () {
    const fontSizeStr = document.getElementById('font-size').value
    const fontSize = Number(fontSizeStr)
    const inputTextArea = document.getElementById('text-field')

    inputTextArea.style.fontSize = fontSize + 'px';

})
document.getElementById('text-transform').addEventListener('click', function () {
    const inputTextArea = document.getElementById('text-field')

    const transform = inputTextArea.style.textTransform;
    inputTextArea.style.textTransform = transform === 'uppercase' ? 'lowercase' : 'uppercase'

    // inputTextArea.style.textTransform = 'uppercase';


    addRemove('text-transform')
})
