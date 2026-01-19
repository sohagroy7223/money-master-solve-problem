// destructuring array variable don't matter, it matter index***

const friends = ["akash", "ripon", "sagor", "sumon", "maha"];

const [item1, item2, item3, item4, item5] = friends;

// console.log(item5);

// destructuring object it matter matter property name *****

const person = {
  name: "sohag",
  age: 20,
  brother: ["sobuj", "samor"],
  country: "Bangladesh",
};

const { name, country, brother, age } = person;
console.log(brother);
