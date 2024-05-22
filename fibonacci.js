import readline from "node:readline";
import { stdin as input, stdout as output } from "node:process";

const rl = readline.createInterface({ input, output });

export class Fibonacci {
  constructor(time) {
    this.numbers = {};
    this.timer = setInterval(() => this.callback(time), time * 1000);
  }

  callback = (time) => {
    console.log("time to delete");
    console.log(this.numbers);

    const timeToCompare = Date.now();
    for (const [key, obj] of Object.entries(this.numbers)) {
      if (obj.time + time * 1000 < timeToCompare) {
        delete this.numbers[key];
      }
    }
    console.log(this.numbers);
  };

  calculate = (n) => {
    if (n === 1 || n === 2) {
      return 1;
    }

    if (this.numbers[n]) {
      console.log("cached");
      return this.numbers[n].value;
    }

    let prev = 1;
    let curr = 1;

    for (let i = 0; i < n - 2; i++) {
      let temp = prev;
      prev = curr;
      curr = curr + temp * 2;
      if (!this.numbers[i + 3]) {
        this.numbers[i + 3] = { value: curr, time: Date.now() };
      }
    }
    return curr;
  };

  request = async (answer) => {
    return new Promise((resolve, reject) => {
      resolve(this.calculate(parseInt(answer)));
    });
  };

  interfacee = () => {
    rl.question("Enter number \n", async (answer) => {
      await this.request(answer);
      this.interfacee();
    });
  };
}
