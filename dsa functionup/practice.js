// function merge() {
//     let data = [12, 34, 56, 8, 89]
//     let data2 = [98, 87, 67, 99, 77]
//     // let data3=[]
//     for (let i = 0; i < data.length - 1 + data2.length - 1; i++) {
//         // data3[data3.length]=data[i]
//         // if(i=){
//         // }

//     }
//     // for(let j=0;j<data2.length;j++){
//     //     data3[data3.length]=data2[j]
//     // }
//     return data
// }
// console.log(merge())

// ===================
// setTimeout(function() {
//     console.log("timer")
// },5000);

// function x(y){
//     console.log("x");
//     y()
// }
// x(function y(){
//     console.log("y");
// });


// let arr=[12,2,4,21,67,88,90]
// let arr2=arr.slice(1)
// console.log(arr2)

// =====================

// function isPalindrome(x) {
//     if (x < 0) return false

//     let rev = 0
//     for (let i = x; i >= 1; i = Math.floor(i / 10))
//         rev = rev * 10 + i % 10
//     return rev === x
// };
// console.log(isPalindrome("level"))
// // ===========
// let a=10
// const b=11
// a=12
// b=13
// console.log(a)
// console.log(b)

// ========shallow copy===========
// let obj={
//     name:"Mohit"
// };
// // let user = {...obj};
// let user=Object.assign({},obj)
// user.name="Kanwaria"
// console.log("object is :-",obj)
// console.log("user is :-",user)

// =========deep copy=========
// let obj ={
//     name: "Mohit",
//     address:{
//         city:"Sirsa",
//         state:"Haryana"
//     },
// };
// let user=JSON.parse(JSON.stringify(obj))
// user.address.city="Mandi Dabwali"
// console.log("Object is:-",obj)
// console.log("user is:-",user)



// =============================
// for(var i=0;i<5;i++){
//     console.log(i) //0,1,2,3,4
// }
// console.log(i)//5

// ==========(.at)==============
// let array = [4,43,23,89]
// let index=2
// console.log(array.at(index))

// output=23

// =======(.concat)===========
// let array1 = [4,43,23,89]
// let array2= [12,34,2,1,23]
// let array3=array1.concat(array2)
// console.log(array3)

//key=4

//=====binary search======
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // 0                arr.lenght-1=8/2=4
// function binary(arr, key) {
//     let left = 0
//     let right = arr.length - 1
//     let mid
//     while (right >= left) {
//         mid = Math.floor((left + right) / 2)
//         if (arr[mid] == key) {
//             return mid
//         } else if (arr[mid] > key) {
//             right = mid - 1

//         } else {
//             left = mid + 1
//         }

//     }
//     return mid
// }
// console.log(binary(arr, 3));

//====unsorted======
// let a = [7, 8, 9, 1, 2, 3, 4, 5, 6]  //3
// function binary(a, k) {


//     let i = 0, j = a.length - 1
//     let mid

//     while (i <= j) {
//         mid = Math.floor((i + j) / 2)
//         if (a[mid] == k) {
//             return mid
//         } else if (a[i] <= a[mid]) {          // i target se chotta hota hota tho iss side ka arraysorted hota
//             if (k < a[mid] && k >= a[i]) {      // target midd se chotta or i se bdda h (check krne k lie)
//                 j = mid - 1
//             } else {
//                 i = mid + 1
//             }
//         }
//         else if (a[mid] <= a[j]) {       // agr midd last element j se chotta hota tho iss side ka aaray sorted hota    
//             if (k > a[mid] && k <= a[j]) {  // // target midd se bdda or j se choota h
//                 i = mid + 1
//             } else {
//                 j = mid - 1
//             }
//         }
//     } return mid
// }
// console.log(binary(a, 5))

//==========================

// function nwww(a, k) {
//     let array = [1, 4, 5, 6, 7, 7, 7, 8, 9, 9];
//     let target = 7
//     let i = 0, j = a.length - 1
//     let leftOcc = -1, rightOcc = -1
//     let midd
//     while (i <= j) {
//         midd = Math.floor((i + j) / 2)
//         if (a[midd] == k) {
//             leftOcc = midd
//             j = midd - 1
//         } else if (a[midd] < k) {
//             i = midd + 1
//         } else {
//             j = midd - 1
//         }
//     }
//     i = 0, j = a.length - 1
//     while (i <= j) {
//         midd = Math.floor((i + j) / 2)
//         if (a[midd] == k) {
//             rightOcc = midd
//             i = midd + 1
//         } else if (a[midd] < k) {
//             i = midd + 1
//         } else {
//             j = midd - 1
//         }
//     }
//     console.log(leftOcc, rightOcc)
// }
// nwww(array, target)

//=====================
// let aar=[1,0,2,0,0,2,1,1,2,3]
// function yyy(a){
// let i=0
// let j=aar.length-1
// let midd=0
// let temp
// while(midd<=j){
//     if(a[midd]==0){
//         temp=a[midd]
//         a[midd]=a[i]
//         a[i]=temp
//         i++
//         midd++
//     } else if(a[midd]==2){
//         temp=a[midd]
//         a[midd]=a[j]
//         a[j]=temp
//         j--
//     } else{
//         midd++
//     }
// } return a
// }
// console.log(yyy(aar))

//==============foobar============
//3% =>foo
//5%=>bar
//5 And 7 %=>foobar

// function foobar(a) {
//     if (a % 3 == 0) return "foo"
//      else if(a % 5 == 0){
//         if(a%7==0) return "foobar"
//         return "bar"
//      }

//     // else if (a % 5 == 0) return "Bar"

// }
// console.log(foobar(40))

//=======max 2sum==============
// let arr1=[1,23,3,4,5,3,95,46,7,8,9]
// function sum2(arr1) {
//     // let sum=0
//    let s= arr1.sort(function(a,b){return a-b})
//     console.log(s);
//    let sum = arr1[arr1.length-1]+ arr1[arr1.length-2]
//     return sum
// }
// console.log(sum2(arr1));

//=====================
// let arr=[8,3,4,3,9,4,6,3,2,8,9]
// function sum2(arr){
// let sum =0,max=0,Smax=0
// for(let i=0;i<arr.length;i++){
//     if(arr[i]>max){
//        Smax =max
//        max= arr[i]
//     }else if(arr[i]>Smax){
//         Smax=arr[i]
//     }
// }
// // sum=max+Smax
// return sum=max+Smax
// }
// console.log(sum2(arr));

// //========3sum=====
// let arr = [8, 3, 4, 3, 9, 4, 6, 3, 2, 8, 9]
// function sum2(arr) {
//     let sum = 0, max = 0, Smax = 0, tmax = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > max) {
//             tmax = Smax
//             Smax = max
//             max = arr[i]
//         } else if (arr[i] > Smax) {
//             tmax = Smax
//             Smax = arr[i]
//         } else if (arr[i] > tmax) {
//             tmax = arr[i]
//         }
//     }
//     // sum=max+Smax
//     return sum = max + Smax + tmax
// }
// console.log(sum2(arr));

//=======================

// function merge(arr1, arr2) {
//     let res = []
//     let i = 0, j = 0
//     while (i < arr1.length && j < arr2.length) {  // compare 
//         if (arr1[i] < arr2[j]) {
//             res.push(arr1[i])
//             i++
//         } else {
//             res.push(arr2[j])
//             j++
//         }
//     }
//     while (i < arr1.length) {  //remaing
//         res.push(arr1[i])
//         i++
//     }
//     while (j < arr2.length) { ///remaing
//         res.push(arr2[j])
//         j++

//     }
//     return res
// }          //       i               j
// // console.log(merge([100, 2, 3, 40], [50, 963]))
// // console.log(merge([100], [50, 963]))


// function sort(arr) {                          // m
//     if (arr.length <= 1) return arr          //[10,6,6,9,8,7,5,1,3,0]
//     //[10,6,9]   [8,7,5,1,3,0]
//     let mid = Math.floor(arr.length / 2)        //[10,6] [6,9,8]  [7,5,1,3,0]
//     //  [6] [9] [8][7]
//     let left = sort(arr.slice(0, mid))
//     let right = sort(arr.slice(mid))
//     return merge(left, right)
// }
// console.log(sort([10, 6, 6, 9, 8, 7, 5, 1, 3, 0]))

//================
// Merge function from earlier
// function merge(arr1, arr2) {
//     let results = [];
//     let i = 0;k=0
//     let j = 0;
//     while (i < arr1.length && j < arr2.length) {
//         if (arr2[j] > arr1[i]) {
//             results[k]=arr1[i]
//             i++;
//             k++
//         } else {
//             results[k]=arr2[j]
//             j++;
//             k++
//         }
//     }
//     while (i < arr1.length) {
//         results[k]=arr1[i]
//         i++;
//         k++
//     }
//     while (j < arr2.length) {
//         results[k]=arr2[j]
//         j++;
//         k++
//     }
//     return results;
// }

// Recrusive Merge Sort
// function mergeSort(arr) {
//     if (arr.length <= 1) return arr;
//     let mid = Math.floor(arr.length / 2);
//     let left = mergeSort(arr.slice(0, mid));
//     let right = mergeSort(arr.slice(mid));
//     return merge(left, right);
// }
// // let x = mergeSort([3, 9, 7, 8, 60,40, 90, 36, 21, 16])
// // console.log(x)
// // console.log(merge())

// console.log(mergeSort(merge([3, 9, 7, 8, 60, 40], [90, 36, 21, 16])))

//===================
// function binarySearch(arr, target) {
//     let min = 0
//     let max = arr.length - 1
//     while (min <= max) {
//         let mid = Math.floor((min + max) / 2)
//         if (arr[mid] === target) {
//             return mid
//         } else if (arr[mid] < target) {
//             min = mid
//         } else if (arr[mid] > target) {
//             max = mid
//         }
//     }
//     return false
// }
// const result = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 12)
// console.log(result)

//====================
// function sumSubArray(arr, k) {
//     let maxSum = 0;
//     let sum = 0;

//     for (let i = 0; i < k; i++) {
//         sum += arr[i];
//         maxSum = Math.max(maxSum, sum);
//     }
//     for (let i = k; i < arr.length; i++) {
//         sum = sum + arr[i] - arr[i - k];
//         maxSum = Math.max(maxSum, sum);
//     }
//     return maxSum;
// }
// // function mergeSort(arr1) {
// //     if (arr1.length <= 1) return arr1;
// //     let mid = Math.floor(arr1.length / 2);
// //     let left = mergeSort(arr1.slice(0, mid));
// //     let right = mergeSort(arr1.slice(mid));
// //     return sumSubArray(left, right);
// // }
// console.log(sumSubArray([1,2,5,-1,77,21,2], 3));


//========max freq key===
// let arr = [1, 2, 7, 3, 4, 2, 1, 2, 1]
// function frequency(arr) {
//     var mp = new Map()

//     for (let i = 0; i < arr.length; i++) {
//         let x = arr[i]
//         if (mp.has(x)) {  //already present
//             mp.set(x, mp.get(x) + 1)
//         } else { mp.set(x, 1) }  //not present
//     }
//     let maxFreq = 0
//     let ans = 0
//     mp.forEach((value, key) => {
//         // console.log("key=",key,"and value",value);
//         if (value > maxFreq) {
//             maxFreq = value
//             ans = key
//         } else if (value == maxFreq) {
//             if (key < ans) {
//                 ans = key
//             }
//         }
//     })
//     return ans
// }
// console.log(frequency(arr));

//========segregate==1============
// let arr=[1,0,1,0,1,0,0]
// function segregate(arr){
// let zeroes=0       //zeroes=4
// let ones=0          //ones=3
// let arr1=[]
// for(let i=0;i<arr.length;i++){
//     if(arr[i]==0){
//         zeroes++
//     }
//     else{
//         ones++
//     }
// }
// for(let i=0;i<zeroes;i++){
//     arr[i]=0
//     arr1.push(arr[i])
// }
// for(let i=zeroes;i<arr.length;i++){
//     arr[i]=1
//     arr1.push(arr[i])
// }
// return arr1
// }
// console.log(segregate(arr))

//========================
// let arr=[0,1,0,1,0,1,0]
// function segregate(arr) {
//     let left=0
//     let right=arr.length-1
//     while(right>left){
//         if(arr[left]==0){
//             left++
//             continue
//         }else{
//             right--
//             continue
//         }
//     }
//     // if(right>left){
//         //swap
//         arr[left]=arr[left]+arr[right]
//         arr[right]=arr[left]-arr[right]
//         arr[left]=arr[left]-arr[right]
//     // }
//     left++
//     right--
//     return arr
// }
// console.log(segregate(arr));

//==========3sum=========
let arr=[11,4,3,10,5,6,4]
function max(arr){
    let currsum=arr[0]+arr[1]+arr[2]
    let maxSum=currsum
    for(let i=3;i<arr.length;i++){
        currsum+=arr[i]-arr[i-3]

        if(currsum>maxSum)
        maxSum=currsum
    }
    return maxSum
}
console.log(max(arr));