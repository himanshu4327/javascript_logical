// time and space complexity

// it gives us the information about the variation (increase or decrease)in execution time when the number of operations
// (increase or decrease)in an algorithm

// time complexity hamko batata he ki ek particular task ke liye usko kitna time lagega kita operation krega
// for example
// let n = 8
// for(let i = 0; i<n; i++){
//  console.log("hello world)
// }
//  big O(n) time complexity
// in this code time complexity is depend on the varaible n 

// time complexity is defined as 
// the amount of time taken  by an algorithm to run 
// as a function of the length of the input 

// best case big omega
// we are searching in array and number found at index 0 is best case we found in first case

// average case big theta
// we are searching in arry we found element at mid index
// worst case big O 
// we found data in the last of the array


// Any notation can be used to 
// describe the best case, worst case, or average case. 
// The notations are not tied to any of the cases.

// time type 
// 1 constant time O(1) time complexity
// for(let i =0 ; i<5 ; i++){
// console.log("hello")
// }

// 2 Linear time  n it depends on the variable O(n) time complexitiy
// for(let i = 0 ; i<n ; i++){
//  console.log("hello")
// }

// 3 Logarithmic O(log n) time complaxity
// for(let i = 0 ; i<=n ; i=i+4){
//  console.log("hello")
// }

// 4 Quadritic time  O(n^2)
// for(let i = 0; i<n; i++){
//    for(let j= 0; j<n; j++){
//    console.log("nested for loop")
//   }
// }

// 5 cubic time O(n^3)

//  for(let i = 0; i<n; i++){
//    for(let j= 0; j<n; j++){
//       for(let k = 0; k<n; k++){
//         console.log("nested in nested")   
//     }
//   }
// }
