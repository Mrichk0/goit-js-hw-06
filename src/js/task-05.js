const inputTarget = document.querySelector('#name-input');
const titleOutput = document.querySelector('#name-output');

inputTarget.addEventListener('input', onInputChange);
    
function onInputChange(event) {
    event.currentTarget.value
    ? titleOutput.textContent = event.currentTarget.value
    : titleOutput.textContent = 'Anonymous';     
}