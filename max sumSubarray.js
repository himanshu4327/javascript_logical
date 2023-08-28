//=======Brute Force=====
// function sumslidingWindow(arr,K){
//     let maxSum=0

//     for(let i=0;i<arr.length;i++){
//         let currSum=0
//         for(let j=0;j<K;j++){
//             currSum+=arr[i+j]
//         }
//         if(currSum>maxSum)
//         maxSum=currSum
//     }
//     return maxSum
// }
// console.log(sumslidingWindow([100, 200, 111, 300, 400, 500, 600, 700, 100], 4))


//========optimise=========
// function sumslidingWindow(arr,K){
//     let currSum=0
//     let maxSum=0
//     for(let i=0;i<K;i++){
//         currSum+=arr[i]
//     }
//     maxSum=currSum

//     for(let i=K;i<arr.length;i++){
//         currSum+=arr[i]
//         currSum-=arr[i-K]

//         maxSum=Math.max(maxSum,currSum)
//     }
//    return maxSum
// }
// console.log(sumslidingWindow([100, 200, 111, 300, 400, 500, 600, 700, 100], 4))

// ==============while loop===========================
// function sumslidingWindow(a, k) {
//     let i = 0, j = 0;
//     let sum = 0;
//     let max = 0;

//     while (j < a.length) {
//         sum += a[j];

//         if (j - i + 1 < k) {
//             j++;
//             continue;
//         } else if (j - i + 1 == k) {
//             max = Math.max(max, sum);
//         }

//         sum -= a[i];
//         i++;
//         j++;
//     }
//     return max;
// }
// console.log(sumslidingWindow([100, 200, 111, 300, 400, 500, 600, 700, 100], 4));

//===========First Negative Number in every Window of Size K===========================
// function negativeNum(a, k) {
//     let i = 0;
//     let j = 0;
//     let arr = [];
//     let mar = [];
//     while (j < a.length) {
//         if (a[j] < 0) {
//             arr.push(a[j]);
//         }
//         if (j - i + 1 < k) {
//             j++;
//             continue;
//         } else if (j - i + 1 == k) {
//             if (arr.length == 0) {
//                 mar.push(0);
//             } else {
//                 mar.push(arr[0]);

//                 if (a[i] < 0) {
//                     arr.shift();
//                 }
//             }
//             i++;
//             j++;
//         }
//     }
//     return mar;
// }
// console.log(negativeNum([12, -1, -7, 8, -15, 30, 16, 28], 3));

//==================largestNum=================================
// function largestNum(s, k) {
//     let i = 0, j = 0
//     let largest = []
//     let num = 0

//     while (j + i - 1 < s.length) {
//         if (j == k) {
//             largest.push(num)
//             j = 0
//             i++
//             num = 0
//             continue
//         }
//         if (s[j + i] > num) {
//             num = s[j + i]
//         }
//         j++
//     }
//     return largest

// }
// console.log(largestNum([1, 55, 8, 6, 3, 22, 5, 6, 9], 3))

//=====================max length======================================
// function akhi(s) {
//     let i = 0, j = 0
//     let map = {}
//     let max = 0
//     while (j < s.length) {
//         let nww = s[j]
//         if (!map[nww]) {
//             map[nww] = 0
//         } map[nww]++

//         if (Object.keys(map).length == (j - i + 1)) {
//             if (j - i + 1 > max) {
//                 max = j - i + 1
//             }
//         }

//         if (Object.keys(map).length < j - i + 1) {
//             while (Object.keys(map).length < j - i + 1) {
//                 map[s[i]]--

//                 if (map[s[i]] == 0) {
//                     delete map[s[i]]
//                 }
//                 i++
//             }
//         }
//         j++
//     } return max
// }
// console.log(akhi("bwwew"))