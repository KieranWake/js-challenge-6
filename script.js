function largestSwap(num) {
    const reversedNum = parseInt(num.toString().split("").reverse().join(""));
    return num >= reversedNum;
}

// Test cases
console.log(largestSwap(43)); // Output: false
console.log(largestSwap(43)); // Output: true



 