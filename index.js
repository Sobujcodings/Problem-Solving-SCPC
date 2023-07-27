// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. Example Input: "hello world" Example Output: "dlrow olleh" 

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello world"));




// Task 3: Write a JavaScript program to find the most frequent element in an array and return it.  Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3 

function mostFrequentElement(arr) {
    let counts = {};
    let maxCount = 0;
    let mostFrequent;

    for (let num of arr) {
        counts[num] = (counts[num] || 0) + 1;
        if (counts[num] > maxCount) {
            maxCount = counts[num];
            mostFrequent = num;
        }
    }

    return mostFrequent;
}

console.log("most Frequent Element is",mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));




// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation. 

function calculator(num1, operator, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Invalid operator";
    }
}

console.log(calculator(10, "+", 5));
console.log(calculator(10, "*", 2));
console.log(calculator(10, "/", 2));




// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters. 

function generateRandomPassword(length) {
    const charset =
        "ASDFHDFHJDFZNADFNDNlmnopqrstuvwxyz0123456789!@#$%^&*";
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        // randomIndex is the random integer number here
        password += charset[randomIndex];
        // charset will give you charser[indexnumber] = a/a/i/j any string with this index
    }
    return password;
}

console.log(generateRandomPassword(12));





// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. Example Input: [2, -5, 10, -3, 7] Example Output: 19 

function sumOfPositiveNumbers(arr) {
    let sum = 0;
    for (let num of arr) {
        if (num > 0) {
            sum += num;
        }
    }
    return sum;
}

console.log("sum Of Positive Numbers",sumOfPositiveNumbers([2, -5, 16, -5, 8]));




// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value. 

function romanToInt(roman) {
    const romanNumeralMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        const current = romanNumeralMap[roman[i]];
        const next = romanNumeralMap[roman[i + 1]];

        if (next && current < next) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }

    return result;
}

console.log(romanToInt("II"));
console.log(romanToInt("IX"));





// Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number. 

function secondSmallestElement(arr) {
    let smallest = Infinity;
    let secondSmallest = Infinity;

    for (let num of arr) {
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    return secondSmallest;
}

console.log("second Smallest Element is",secondSmallestElement([6, 8, 4, 7, 5, 1, 4, 9]));
