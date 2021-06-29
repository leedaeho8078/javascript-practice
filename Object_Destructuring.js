//Object Destructuring

function getPerson() {
  return {
    firstName: "john",
    lastName: "Doe",
    age: 37,
    email: "dooho199234@nate.com",
    city: "jeju-si",
    country: "korea",
  };
}

var person = getPerson();

console.log(person.firstName);
console.log(person.lastName);

var { firstName, lastName, age } = getPerson();

console.log(firstName);
console.log(lastName);
console.log(age);

function getPerson() {
  return {
    firstName: "john",
    lastName: "Doe",
    age: 37,
    email: "dooho199234@nate.com",
    city: "jeju-si",
    country: "korea",
  };
}

var { firstName, lastName, city } = getPerson();
