//Rest Parameter
//파라미터 개수가 불분명 할때

function add(...nums) {
  var sum = 0;
  for (var n of nums) {
    sum += n;
  }
  return sum;
}

console.log(add(1, 2, 3, 5, 5, 6));
