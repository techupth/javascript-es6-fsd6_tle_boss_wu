const employee1 = {
  name: "John",
  age: 20,
};

let result1 = employee1.scores?.english ?? undefined;

const employee2 = {
  name: "A",
  age: 50,
  scores: {
    math: 40,
  },
};

let result2 = employee2.scores?.english ?? "English score is not defined";

console.log(result1);
console.log(result2);
