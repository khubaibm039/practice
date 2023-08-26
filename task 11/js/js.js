document.getElementById('apply-btn').addEventListener('click', function () {

  // console.log('apply-btn clicked');

  const coupon = document.getElementById('coupon-text')
  const couponText = coupon.value;

  coupon.value = ''
  // console.log(couponText)
  const discounts = document.getElementById('discount')
  const innerTextDiscountStr = discounts.innerText;
  const innerTextDiscountfloat = parseFloat(innerTextDiscountStr)
  if (couponText === 'DISC') {
    discounts.innerText = (innerTextDiscountfloat - (innerTextDiscountfloat * 30 / 100))
    return
  }
  else if (couponText === '') {
    return
  }
  else {
    alert('coupon please')
    return
  }
})
