import { Fibonacci } from "./fibonacci.js";

const fibonacci = new Fibonacci(10);

fibonacci.interfacee();

const shooters = (n) => {
  // const shooters = [...Array(n).keys()];
  const shooters = Array.from(Array(n), (v, k) => (v = k + 1));
  console.log("array", shooters);

  let index = 2 % shooters.length;
  while (shooters.length !== 2) {
    shooters.splice(index, 1);

    index = (index + 1) % shooters.length;
  }

  return shooters;
};
