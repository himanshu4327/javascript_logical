// //===========
// let a = "mohit"
// let b = "tihom"
// let obj1 = {}
// let obj2 = {}
// function fre(a, b) {
//     if (a.length != b.length)
//         return false
//     for (i of a) {
//         if (!obj1[i])
//             obj1[i] = 1
//         else
//             obj1[i]++
//     }
//     for (i of b) {
//         if (!obj2[i])
//             obj2[i] = 1
//         else
//             obj2[i]++
//     }
//     // console.log(obj1, obj2)
//     for (i in obj1) {
//         if (!obj2[i])
//             return false   //check key
//         else {
//             if (obj2[i] != obj1[i]) //check count
//                 return false
//         }
//     }
//     return true
// }
// console.log(fre(a, b))
// // console.log(obj1,obj2)

//=========================
function chetan(a, b) {
    let obj1 = {}
    let obj2 = {}
    for (let i = 0; i < a.length; i++) {
        let nww = a[i]
        if (!obj1[nww]) {
            obj1[nww] = 0
        } obj1[nww]++

        let nw1 = b[i]
        if (!obj2[nw1]) {
            obj2[nw1] = 0
        } obj2[nw1]++
    }

    // for(let i=0; i<a.length; i++){
    //    let str=a[i]
    //    if(obj1[str]!=obj2[str]){
    //       return false
    //    }
    // }
    for (let val in obj2) {
        if (obj1[val] != obj2[val]) {
            return false
        }
    }
    return true
}

console.log(chetan("hello", "elloh"))