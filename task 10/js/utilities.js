function inputFieldGetValue(element) {
  const newInputElement = document.getElementById(element);
  const newInputElementStr = newInputElement.value;
  const newInputElementFloat = parseFloat(newInputElementStr)

  newInputElement.value = ''

  return newInputElementFloat;
}


function getTextElementById(element) {
  const getTextElementById = document.getElementById(element)
  const getTextElementStr = getTextElementById.innerText;
  const getTextElementFloat = parseFloat(getTextElementStr)

  return getTextElementFloat;
}

function balanceTotalElement(element, total) {

  const newBalance = document.getElementById(element).innerText = total

  return newBalance
}
