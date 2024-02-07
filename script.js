function largestSwap(num) {
    let numStr = num.toString().split(""); // Convert to string and split into array of digits
    let numRev = numStr.slice().reverse(); // Create a copy of the array and reverse it
    let numJoin = numRev.join(""); // Join the reversed array back into a string
    
    // Convert the strings back to integers for comparison
    let originalNum = parseInt(numStr.join(""));
    let swappedNum = parseInt(numJoin);
    
    // Compare the original number with the swapped number
    if (originalNum >= swappedNum) {
        return true; // Return true if original number is greater or equal to the swapped number
    } else {
        return false; // Return false if the swapped number is greater
    }
}

// Test cases
console.log(largestSwap(48)); // Output: false
console.log(largestSwap(43)); // Output: true


 