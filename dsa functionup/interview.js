// let Array = [1, 2, 5, -1, 77, 21 , 2]
// let arr1= Array.sort()
// console.log(arr1)
// let K=3
// let maxSum=0
// let currSum =0
// function maximumSum(){
//   for(let i=0;i<K;i++){
//     currSum+=arr1[i]
//   }
//   maxSum=currSum
// }
// maximum()
// let arr1=[1, 2, 5, -1, 77, 21 , 2]
// function sumslidingWindow(arr1,K){
//     let arr= arr1.sort()
//         let currSum=0
//         let maxSum=0
//         for(let i=0;i<K;i++){
//             currSum+=arr[i]
//         }
//         maxSum=currSum
    
//         for(let i=K;i<arr.length;i++){
//             currSum+=arr[i]
//             currSum-=arr[i-K]
    
//             maxSum=Math.max(maxSum,currSum)
//         }
//        return maxSum
//     }
//     console.log(sumslidingWindow(arr1, 3))
    

//==============
let arr=[1,2,7,3,4,2,1,2,1]
function frequency(arr){
    let mp=new Map()
    for(let i=0;i<arr.length;i++){
        let x=arr[i]
        if(mp.has(x)){
            mp.set(x,mp.get(x)+1)
        }else {
            mp.set(x,1)
        }
    }
    let maxFreq=0
    let ans=0
    mp.forEach((value,key)=>{
        if(value>maxFreq){
            maxFreq=value
            ans=key
        }else if(value==maxFreq){
            if(key < ans)
            ans=key
        }
    })
    return ans
}
console.log(frequency(arr));