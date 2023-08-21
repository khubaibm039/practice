// function findOddSum() {
//   var arr = [5, 7, 8, 10, 45, 30]
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {

//     if (arr[i] % 2 != 0) {

//       sum = sum + arr[i]

//     }

//   } console.log(sum)
// }
// findOddSum()


function findOddSum(array) {
  var sum = 0;
  for (var i = 0; i < array.length; i++) {

    if (array[i] % 2 != 0) {

      sum = sum + array[i]

    }

  } return sum
}

var arr = [5, 7, 8, 10, 45, 30]

var sumOfArrays = findOddSum(arr)

console.log(sumOfArrays)

