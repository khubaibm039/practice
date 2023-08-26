document.getElementById('btn-depsite').addEventListener('click', function () {
  const newDepsiteAmount = inputFieldGetValue('depsite-field')
  const previousDepsiteAmount = getTextElementById('deposite-total')
  const newDepsiteTotal = newDepsiteAmount + previousDepsiteAmount

  balanceTotalElement('deposite-total', newDepsiteTotal)

  const previousBalanceAmount = getTextElementById('total-balance')
  const newBalanceAmount = previousBalanceAmount + newDepsiteAmount

  balanceTotalElement('total-balance', newBalanceAmount)
  // document.getElementById('total-balance').innerText = newBalanceAmount
})
