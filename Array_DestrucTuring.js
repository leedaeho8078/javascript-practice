// Array_DestrucTuring

function getScores() {
  return [70, 21, 100, 5, 12];
}

// 위 아래 같은거
var [x, y, ...args] = getScores();
console.log(x);
console.log(y);
console.log(args);
// console.log(scores[0]);
// console.log(scores[1]);
// console.log(scores[2]);

function GetCordinate() {
  return [12.123, 123.44];
}
//[경도,위도];
var cordinate = GetCordinate(); // [경도, 위도]
cordinate[0]; //경도
cordinate[1]; //위도

var [longitude, latitude] = GetCordinate();

function getPerson() {
  return ["john", "Doe", ["RED", "green", "Blue"]];
}

var [firstName, lastName, [color1, color2, color3]] = getPerson();
console.log(firstName);
console.log(lastName);
console.log(color1);
console.log(color2);
console.log(color3);

function getPerson() {
  return ["jone", "doe", ["yellow", "Red", "green"]];
}

var [firstName, lastName, [color1, color2, color3]] = getPerson();
console.log(firstName);
console.log(lastName);
console.log(color); // yellow red.gren
