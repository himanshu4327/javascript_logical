
function s(arr,k){
    for (let i=0;i<arr.length-1;i++){
        for (let j=i+1;j<arr.length;j++){
            if (arr[i]>arr[j]){
                let temp = arr[i]
                arr[i]=arr[j]
                arr[j]= temp;
            }
        }
    }
    return arr[k-1]
}
console.log(s([1,6,4,9,23,90],3))



// function a (arr,k){
//     for (let i=1;i<=k;i++){
//         for (let j=0;j<arr.length-1;j++){
//             if (arr[j]>arr[j+1]){
//                 [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
//             }
//         }
//     }
//     return arr[arr.length-k]
// }

// console.log(a([1,7,3,0,6],1))



// function merge(arr,s,e){
//     let mid=Math.floor(s+(e-s)/2)
//     let l1=mid-s+1,l2=e-mid
//     let a=[],b=[]
//     let k=s
//     for(let i=0;i<l1;i++)
//       a[i]=arr[k++]
//     for(let j=0;j<l2;j++)
//       b[j]=arr[k++]
//     let i=0,j=0,m=s;
//     while(i<l1 && j<l2){
//       if(a[i]<b[j])
//         arr[m++]=a[i++]
//       else
//         arr[m++]=b[j++]
//     }
//     while(i<l1)
//       arr[m++]=a[i++]
//     while(j<l2)
//       arr[m++]=b[j++]
  
//     return arr
//   }
  
  
//   function mS(arr,s,e){
//     if(s>=e)
//       return
//     let mid=Math.floor(s+(e-s)/2)
//     mS(arr,s,mid)
//     mS(arr,mid+1,e)
//     return merge(arr,s,e)
//   }
//   let a=[4,5,3,7,2,0,1,8,4,89,76,90,123,890,231,78,987,567,45]
//   console.log(mS(a,0,a.length-1))