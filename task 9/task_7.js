function findLeapYear(year) {
  var LeapYear = []
  for (var i = 0; i < year.length; i++) {
    if (year[i] % 4 === 0 || year[i] % 400 === 0) {
      LeapYear.push(year[i]);
    }
  }
  return LeapYear
}

var arr = [2023, 2024, 2025, 2026, 2027, 2028, 2030]
var LeapYears = findLeapYear(arr)

console.log(LeapYears)
