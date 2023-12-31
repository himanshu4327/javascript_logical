// space complexity 
// the space complexity of an algorithm or a computer program is the amount of memory space required to solve an 
// instance of the computational problem as a function of characteristics of the input .

// the amount of memory space required to solve an 
// instance of the computational problem

// it gives us the information about the variation (increase or decrease )in execution time when the number of operations
// (increase or decrease )in an algorithm

// how time complexity measured ?
// answer
// By counting the number of primitive operations 
// performed by the algorithm on a given input size


// for example ek song store karne me 5 mb lagi to 2 song store karne me 10 mab lagega

// let a = 9
// let b = 5
// let sum = a+b //order O(1)

// const arr =[];
// let n;
// for(let i = 0; i<n; i++){
//     arr[i] = i;
// } // space complexity order of  O(n)

// let n = 2; 
// console.log(n); //only one time run this console.log that why order of one O(1) time complexity

// for(let i = 0; i<n; i++){ // it depend on n isliye iska time complexity big o of n hoga O(n)
//   console.log(i);
// }

// for example let find first n natural number

// let n= 7;
// for(let i = 0; i<n; i++){  //order of n 
//    sum = sum+i;
// }
// console.log(sum)


// formula
// this is other example of print n natural number
// let sum = n*(n+1)/2; // order of O(1) time complexity 
// console.log(sum);
// yaha ek line me natural no nikal gaya to ye upar wale code ka optimise version he

// example 2

// let arr = [12,7,39,28,51];
// function funsum(arr){
//    let total = 0; 
//    for(let i = 0; i<arr.length; i++){  // iska space or time complexity dono O(n) huaa
//     total += arr[i];
//   }
// return total;
// }
// let result = fun(arr)
// console.log(result)


// example 3
// binary search

// let arr = [1,2,3,4,7,8,9]
// let val = 8; 
// function binarySearch(arr,val){
//    let start = 0; 
//    let end = arr.length - 1;
//     while(start <= end){
//       let middle = Math.floor((start + end )/2); // time complexity is O(log n)
//    if(arr[middle] === val){
//        return middle; 
//      }else if(arr[middle] < val){
//         start = middle + 1;
//       }else{
//         end = middle -1;
//      }
//    }
//        return -1; 
//  }

// let result = binarySearch(arr,val)
// console.log(result)

// example 4
// let n= 6;
// let sum =0;
// for(let i= 1; i<=n; i+=2){  //time complexity O(log2n) O(log n)
//     sum = sum+i;
//   }
// console.log(sum)

// time complexity is the total information which give us the number of operation is performed


// // kal wala mcq me glat huaa uska bi cover kar diya 
// let n = 5
// let k= 3;
// for(var i=0;i<n;i++){
//     i*=k
//     console.log(i)
// }
// // time complexity O(log_kn)

// let n = 3
// for(let i = 0; i<n*n; i++){   // time complexity O(n*n) O(n^2)
//     console.log(i)
//  }


// for(let i = 0; i<3; i++){ // time complexity O(1) constant
//   console.log(i)
// }
