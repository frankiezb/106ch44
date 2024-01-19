function sayHello(name, lastName) {
    console.log("Hello " + name + " " + lastName); // Child
}

function init() {
    console.log('Hello world');
    sayHello("Donald", "Francois");
    sayHello("John", "Doe"); // Child/parent
    const result = sum(21, 21);
    console.log(result);
    printNumbers();
}

window.onload = init;// parent becuase disreputor

function sum(num1, num2) {
    const res = num1 + num2;
    return res;
}

function printNumbers() {
    // Print numbers from 1 to 20 except 7 and 13
    let sum = 0;
    let count = 0;

    let numbers = [
        12, 4, 123, 4567, 234, 56, 12, 87, 124, 865, 233, 788, 43, 91, 544, 782, 653, 845,
    ];

    for (let i = 1; i < 21; i++) {
        if (i !== 7 && i !== 13) { // Changed != to !== for strict equality
            console.log(i);
        }
    }

    // Create a function that sums two numbers and execute it in the init
    for (let i = 0; i < numbers.length; i++) {
        let num = numbers[i];
        console.log(num);
        // Sum numbers
        sum += num;
        // Count only greater numbers
        if (num > 500) {
            count += 1;
        }
    }
    console.log("The sum of the numbers is: " + sum);
    console.log("There are " + count + " numbers bigger than 500");
}
