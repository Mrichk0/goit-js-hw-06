const inputFontSize = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

inputFontSize.addEventListener('input', onInputChangeFontSize);

function onInputChangeFontSize(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
};
