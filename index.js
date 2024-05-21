const func = (n) => {
  if (n === 1 || n === 2) {
    return 1;
  }

  let prev = 1;
  let curr = 1;

  for (let i = 0; i < n - 2; i++) {
    let temp = prev;
    prev = curr;
    curr = curr + temp * 2;

    // console.log(temp, prev, curr)
  }

  return curr;
};

console.log(func(4));
// 1 1 3 5
console.log(func(6));
// 1 1 3 5 11 21

const shooters = (n) => {
  const shooters = [];

  for (let i = 0; i < n; i++) {
    shooters[i] = i + 1;
  }

  let index = 2 % shooters.length;
  while (shooters.length !== 2) {
    shooters.splice(index, 1);

    index = (index + 1) % shooters.length;
  }

  return shooters;
};

console.log(shooters(4));
//1 2 3 4
//1 2 4
//2 4

console.log(shooters(5));
//1 2 3 4 5
//1 2 4 5
//1 2 4
//1 4
console.log(shooters(6));
//1 2 3 4 5 6
//1 2 4 5 6
//1 2 4 6
//2 4 6
//2 6
console.log(shooters(8));
//1 2 3 4 5 6 7 8
//1 2 4 5 6 7 8
//1 2 4 6 7 8
//1 2 4 6 8
//2 4 6 8
//2 6 8
//2 6
