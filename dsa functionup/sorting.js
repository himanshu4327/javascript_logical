//=============merging 2 shorted array==========
// let arr1=[2,5,12,18,20]
// let arr2=[7,9,11,15,25,28,30,35]
// function merge(arr1,arr2){
//  let arr=[]
//  let i=0,j=0,k=0
//  while(i<arr1.length && j<arr2.length){
//   if(arr1[i]<arr2[j]){
//    arr[k]=arr1[i]
//    i++
//    k++
//   }else{
//    arr[k]=arr2[j]
//    j++
//    k++  
//   }
//  }
//   while (arr1.length>i) {
//    arr[k]=arr1[i]
//    i++
//    k++
//   }
//   while(arr2.length>j){
//    arr[k]=arr2[j]
//    j++
//    k++
//   }

//  return arr
// }
// console.log(merge(arr1,arr2))


//====merge two unsorted into one sorted array=====

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

// // Recrusive Merge Sort
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

//=========================
//=======================
// function bubbleSort(arr){
// for(let i=0;i<=arr.length-1;i++){
//   for(let j=0;j<=arr.length-i-1;j++){
//     if(arr[j] > arr[j + 1]){
//       [arr[j],arr[j+1]]= [arr[j+1],arr[j]]
//     }
//   }
// }
// return arr
// }
// console.log([1,2,3,4,55,23,34,443,334,32,34,33])

//==================================
// let arr=[3,5,1,4,2]
// function bubbleSort(arr){
//    let swapped
//    for(let i=0;i<arr.length;i++){
//     swapped = false;
//     for(let j=1;j<arr.length-i;j++){
//         if(arr[j]<arr[j-1]){
//             let temp=arr[j]
//             arr[j]=arr[j-1]
//             arr[j-1]=temp
//             swapped=true
//         }
//     }
//     if(swapped==false){
//     break;
//     }
//    }
// return arr
// }
// console.log(bubbleSort(arr))

//============================================
// function bubbleSort(arr){
//     // var i, j, temp;
//     let n = arr.length
//     let swapped;
//     for (let i = 0; i < n - 1; i++) {
//        swapped = false;
//         for (let j = 0; j < n - i - 1; j++) {
//             if (arr[j] > arr[j + 1]) {
//                 // swap arr[j] and arr[j+1]
//                 temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp;
//                 swapped = true;
//             }
//         }
//             // IF no two elements were 
//             // swapped by inner loop, then break
//         if (swapped == false)
//             break;
//     }
//     return arr
// }

// console.log(bubbleSort([-3,-7,-9,1,0,34,2,1,8,9,6,7,3,4]))

//======================
// function partition(arr,start=0,end=arr.length-1){
//     var pivot=arr[start]
//     let swapIdx=start
//     for(let i=start+1;i<=end;i++){
//       if(arr[i]<pivot){
//         swap(arr,swapIdx,i)
//       }
//     }
//     swap(arr,start,swapIdx)
//     return swapIdx
//     }
    
//     function quickSort(arr,left=0,right=arr.length-1){
//     if(left<right){
//       let pivotIndex=partition(arr,left,right)
//       quickSort(arr,left,pivotIndex-1)
//       quickSort(arr,pivotIndex+1,right)
//     }
//     return arr
//     }
//     console.log(quickSort([2,8,9,6,3,0,1,4,7]))

//=========================