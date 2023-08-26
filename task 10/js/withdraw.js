document.getElementById('btn-withdraw').addEventListener('click', function () {
  const newWithdrawAmount = inputFieldGetValue('withdraw-field')
  const previousWithdrawAmount = getTextElementById('withdraw-total')
  const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount

  balanceTotalElement('withdraw-total', newWithdrawTotal)

  const previousBalanceAmount = getTextElementById('total-balance')
  const newBalanceAmount = previousBalanceAmount - newWithdrawAmount

  balanceTotalElement('total-balance', newBalanceAmount)
  // document.getElementById('total-balance').innerText = newBalanceAmount
})
