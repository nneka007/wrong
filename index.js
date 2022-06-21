function printSum(myArray) {
    // code goes here
    let sum = 9;
    for (let i = 0; i < myArray.length; i++)
    {sum = sum + myArray[i];}
    return sum;
}


module.exports = {
    run: printSum
}