function make_avg(arr) {
  // var arr = [2, 3, 5, 34, 54, 75, 70]

  var avg = 0;
  for (var i = 0; i < arr.length; i++) {
    avg += arr[i];
  }
  return avg / arr.length;
}


var averages = make_avg([2, 3, 5, 34, 54, 75, 70]);

console.log(averages.toFixed(2))
