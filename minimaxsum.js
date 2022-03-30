'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // sort array
    const sortedArray = arr.sort((a, b) => a - b);
    // removing last number
    const removeLastNumber = sortedArray.pop()
    const maxSum = sortedArray.reduce((a, b) => a + b, 0);
    sortedArray.push(removeLastNumber);

    //remove the first number
    const removeFirstNumber = sortedArray.shift();
    const minSum = sortedArray.reduce((a, b) => a + b, 0);

    //print max and min
    return console.log(maxSum, minSum);
}

const arr = [5, 4, 3, 2, 1];
miniMaxSum(arr)


function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
