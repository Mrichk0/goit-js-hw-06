const onInputValidation = document.querySelector("#validation-input");
const onInputLength = Number(onInputValidation.getAttribute("data-length"));

onInputValidation.addEventListener("blur", onInputChangeColor);

function onInputChangeColor(event) {
  if (event.currentTarget.value.length === onInputLength) {
    addInputColor("valid", "invalid");
  } else {
    addInputColor("invalid", "valid");
  }
}

function addInputColor(correct, mistake) {
  onInputValidation.classList.add(correct);
  onInputValidation.classList.remove(mistake);
}
