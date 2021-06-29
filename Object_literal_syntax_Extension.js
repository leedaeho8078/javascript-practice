///Object Literal Syntax Extension

var firstName = "john";
var lastName = "Doe";

var person = {
  firstName: firstName,
  lastName: lastName,
};

var type = "student";
var score = {
  [type]: "john doe",
  // student : john doe
  score: 95,
};

//score[type]
//score.student
//score["student"]

var type = "lastName";
var person = {
  firstName: firstName,
  [type]: lastNmae,
};
