let people = [
  { name: "A", age: 25 },
  { name: "C", age: 30 },
  { name: "D", age: 21 },
];

function filterByAge(people, minAGE) {
  let result = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age >= minAGE) {
      result.push(people[i]);
    }
  }

  return result;
}

const filter = filterByAge(people, 21);
console.log(filter);
