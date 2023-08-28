// Given an array of positive and negative numbers, 
// arrange them in an alternate fashion such that every positive number is followed by a negative and 
// vice-versa maintaining the order of appearance. 
// The number of positive and negative numbers need not be equal. 
// If there are more positive numbers they appear at the end of the array. 
// If there are more negative numbers, they too appear at the end of the array.



function Arrange(arr) {
    let result = [];
    let temp1 = [];
    let temp2 = [];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0)
            temp1.push(arr[i]);
        else
            temp2.push(arr[i]);
    }
    
    let l = Math.max(temp1.length, temp2.length);
    
    for (let i = 0; i < l; i++) {
        if (i < temp1.length)
            result.push(temp1[i]);
        if (i < temp2.length)
            result.push(temp2[i]);
    }
    
    return result;
}

console.log(Arrange([1, 2, 3, -4, -1, 4]));



function rearrangeAlternate(arr) {
    const positive = [];
    const negative = [];
    
    // Separate positive and negative numbers into two arrays
    for (let num of arr) {
        if (num >= 0) {
            positive.push(num);
        } else {
            negative.push(num);
        }
    }
    
    const result = [];
    let pIndex = 0;
    let nIndex = 0;
    
    // Merge positive and negative numbers alternately
    while (pIndex < positive.length || nIndex < negative.length) {
        if (pIndex < positive.length) {
            result.push(positive[pIndex]);
            pIndex++;
        }
        
        if (nIndex < negative.length) {
            result.push(negative[nIndex]);
            nIndex++;
        }
    }
    
    return result;
}

const inputArray = [1, -2, 3, -4, 5, -6];
const rearrangedArray = rearrangeAlternate(inputArray);
console.log(rearrangedArray); // Output: [1, -2, 3, -4, 5, -6]
