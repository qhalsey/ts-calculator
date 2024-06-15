import { Calculator } from "./Calculator";
import * as readline from "readline";

const main = () => {
    const calculator = new Calculator();

    // Let's prompt the user for input and capture 3 values: a, the operation, and b
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question("Enter the first number: ", (a) => {
        rl.question("Enter the second number: ", (b) => {
            rl.question("Enter the operation (+, -, *, /): ", (operation) => {
                rl.close();

                let result = 0;
                switch (operation) {
                    case "+":
                        result = calculator.add(parseInt(a), parseInt(b));
                        break;
                    case "-":
                        result = calculator.subtract(parseInt(a), parseInt(b));
                        break;
                    case "*":
                        result = calculator.multiply(parseInt(a), parseInt(b));
                        break;
                    case "/":
                        result = calculator.divide(parseInt(a), parseInt(b));
                        break;
                    default:
                        console.log("Invalid operation");
                        return;
                }

                console.log(`Result: ${result}`);
            });
        });
    });
};

main();