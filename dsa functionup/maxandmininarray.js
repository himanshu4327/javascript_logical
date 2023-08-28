//max and min of an array

let arr = [1,7,3,9,78,-9,6]

function a (arr){
for(let i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]>arr[j]){
            // let temp = arr[j]
            // arr[j] = arr[j+1]
            // arr[j+1] = temp
            [arr[i],arr[j]] = [arr[j],arr[i]]
        }
    }
}
// console.log(arr) 
console.log(arr[0])
console.log(arr[arr.length-1])
}

a(arr)
