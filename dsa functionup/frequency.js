// =======================================
// let A = [1, 2, 3, 4]
// let B = [9, 16, 1, 4]
// let obj1 = {}
// let obj2 = {}
// function fr(A, B) {
//     if (A.length != B.length)
//         return false
//     for ( i of A) {
//         if (!obj1[i])
//             obj1[i] = 1
//         else
//             obj1[i]++
//     }
//     for ( i of B) {
//         if (!obj2[i])
//             obj2[i] = 1
//         else
//             obj2[i]++
//     }

//     // console.log(obj1)
//     // console.log(obj2)

//     for ( i in obj1) {
//         if (!obj2[i * i])  //check key 
//             return false
//         else {
//             if (obj2[i * i] != obj1[i])  //check count
//                 return false
//         }
//     }
//     return true
// }
// console.log(fr(A, B))

// =====================================
// function checkFrequency(A, B) {
//     let objA = {}
//     let objB = {}
//     for (let i = 0; i < A.length; i++) {
//         if (objA[A[i]] == undefined)
//             objA[A[i]] = 1;
//         else
//             objA[A[i]] += 1;
//     }
//     for (let i = 0; i < B.length; i++) {
//         if (objB[B[i]] == undefined)
//             objB[B[i]] = 1;
//         else
//             objB[B[i]] += 1;
//     }
//     let objAKeys = Object.keys(objA)
//     for (let key of objAKeys) {
//         if (objB[key * key] != objA[key]) {
//             return false
//         }
//     }
//     return true
// }
// // // Program for Frequency Count of Square Number
// let A = [3, 4, 3, 6]
// let B = [16, 36, 9, 9]
// let res = checkFrequency(A, B)
// console.log(res)

// ==========================================
// let arr = [3, 4, 3,6];
// let arr1 = [16, 36];
// let obj1 = {}
// let obj2 = {}
// let flag = true
// for (let i = 0; i < arr.length; i++) {
//     if (obj1[`${arr[i]}`]) {
//         obj1[`${arr[i]}`]++
//     }
//     else obj1[`${arr[i]}`] = 1

// }


// for (let i = 0; i < arr1.length; i++) {
//     if (obj2[`${arr1[i]}`]) {
//         obj2[`${arr1[i]}`]++
//     }
//     else obj2[`${arr1[i]}`] = 1

// }

// for (let i = 0; i < arr.length; i++) {
//     if (obj2[`${arr[i] * arr[i]}`] != obj1[`${arr[i]}`]) {
//         flag = false
//         break
//     }
// }
// console.log(flag);

// //////////////////////////////////////////////
// Traverse through array elements and
// count frequency
// let arr[] ={1,3,2,1,1,2,3}
// for (let i = 0; i < n; i++) {
//     if (visited[i] == true)
//         continue
//     //count frequency
//     let count = 1
//     for (let j = i + 1; j < n; j++) {
//         if (arr[i] == arr[j]) {
//             visited[j] = true;
//             count++
//         }
//     }
//     console.log(arr[i] + " " + count)
// }