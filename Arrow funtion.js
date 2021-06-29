// 함수 선언식

function add() {}

// 함수 표현식
var add = function (x1, x2) {
  return x1 + x2;
};

// Arrow function - 화살표함수
var add = (x1, x2) => x1 + x2; //var add= (x1,x2) => {x1+X2}; // 리턴이 한줄이면 괄호생략

var add2 = function (x1, x2) {
  var sum = x1 + x2;
  return sum;
};

var add2 = (x1, x2) => {
  var sum = x1 + x2;
  return sum;
};

// parameter 하나
function say(message) {}

var say = (message) => {};

function myfunction() {}

var myfunction = () => {};
