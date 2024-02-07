function largestSwap(num) {
    const numStr = num.toString(); 

    const digit1 = parseInt(numStr[0]);
    const digit2 = parseInt(numStr[1]);

    if (digit1 > digit2) {
        return true;
    } else if (digit2 > digit1) {
        return false;
    } else {
        return true; 
    }
}