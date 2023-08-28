const maxSubArray = (Array) => {
   
    let maxSum = -Infinity
    let currentSum = 0
   
    for(let i = 0; i < Array.length; i++){ 
     currentSum = Math.max(Array[i], currentSum + Array[i])
        maxSum = Math.max(currentSum, maxSum)
        
    }
    return maxSum
}


//
// const maxSubArray = (array) => {
//     let maxSum = -Infinity;
//     let currentSum = 0;

//     array.forEach((num) => {
//         currentSum = Math.max(num, currentSum + num);
//         maxSum = Math.max(currentSum, maxSum);
//     });

//     return maxSum;
// };

// const maxSubArray = (array) => {
//     let maxSum = -Infinity;
//     let currentSum = 0;

//     for (let index in array) {
//         const num = array[index];
//         currentSum = Math.max(num, currentSum + num);
//         maxSum = Math.max(currentSum, maxSum);
//     }

//     return maxSum;
// };


// const maxSubArray = (array) => {
//     let maxSum = -Infinity;
//     let currentSum = 0;

//     for (const num of array) {
//         currentSum = Math.max(num, currentSum + num);
//         maxSum = Math.max(currentSum, maxSum);
//     }

//     return maxSum;
// };

console.log(maxSubArray([-1, 2, 3, 4, 5, 6]));


console.log(maxSubArray([-1, 2, 3, 4, 5, 6]));


console.log(maxSubArray([-1, 2, 3, 4, 5, 6]));


console.log(maxSubArray([-1,2,3,4,5,6]))


///
const func = () => {
    let arr = [1,2,3,4,5,5,6,7];
    let target = 5;
    let low = 0;
    let high = arr.length -1;
    let mid;
    
     while(low<=high){
            mid = Math.floor(low+(high-low)/2);
            
            if(arr[mid] == target)
             { 
                 return mid;
             }
               
            else if(arr[mid] < target)
            {
                low = mid+1;
            }
            else {
                high = mid -1;
            }
        }
    }
   

console.log(func())