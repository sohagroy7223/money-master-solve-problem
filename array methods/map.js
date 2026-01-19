const products = [
  { id: 1, name: "redmi", brand: "xiaomi", price: 200, color: "black" },
  { id: 2, name: "samsung", brand: "samsung", price: 1000, color: "gray" },
  { id: 3, name: "Iphone", brand: "apple", price: 1200, color: "gold" },
  { id: 4, name: "redmi2", brand: "xiaomi", price: 900, color: "blue" },
  {
    id: 5,
    name: "samsung26Ultra",
    brand: "samsung",
    price: 1100,
    color: "silver",
  },
];
// array map methods******
const result = products.map((product) => product.name);
console.log(result);
