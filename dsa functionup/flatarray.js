//bubble sort (kth largest element)

let arr = [1,7,3,0,6]

function a (arr,k){
for(let i=1;i<=k;i++){
    for(j=0;j<arr.length-1;j++){
        if(arr[j]>arr[j+1]){
            // let temp = arr[j]
            // arr[j] = arr[j+1]
            // arr[j+1] = temp
            [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
        }
    }
}
return arr[arr.length-k]
}

console.log(a(arr,1))