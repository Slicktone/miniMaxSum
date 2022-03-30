
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