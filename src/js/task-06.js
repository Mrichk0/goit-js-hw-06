const onInputValidation = document.querySelector("#validation-input");
const onInputLength = Number(onInputValidation.getAttribute("data-length"));

onInputValidation.addEventListener("blur", onInputChangeColor);

function onInputChangeColor(event) {
  if (event.currentTarget.value.length === onInputLength) {
    onInputValidation.classList.add("valid");
    onInputValidation.classList.remove("invalid");
  } else {
    onInputValidation.classList.add("invalid");
    onInputValidation.classList.remove("valid");
  }
}
