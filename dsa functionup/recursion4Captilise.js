//capitalize first element in an array using for loop


// let arr = ["abc", "pqr", "xyz", "jkl"]
// let arr2 = []
// let len = arr.length
// for (let i = 0; i < len; i++) {
//   let s = arr[i][0].toUpperCase() +arr[i].slice(1)
//   arr2.push(s)
// }
// console.log(arr2)


//second method using recursion method

// let arr = ["abc", "pqr", "xyz", "jkl"]

// function capitalisefn(arr) {
//   let result = []
//   //base case
//   if (arr.length == 0) return []
//   //pull out arr[0] and capitalisefn 1st char 0f arr[0] 
//   //recursive 
//   let s = arr[0][0].toUpperCase() + arr[0].slice(1)

//   result.push(s)
//   return result.concat(capitalisefn(arr.slice(1)))
// }

// console.log(capitalisefn(arr))



//second question reverse each string in a given manner example game = emag

// reverese all the element in there place 
// let str = "hello this is me ok"
// //str = str.split("")
// function reverse(str) {
//   if (str.length == 0) return ""
//   return reverse(str.slice(1)) + str[0]
// }
// function revSentWords(sent) {
//   let words = sent.split(" ")
//   for (let i = 0; i < words.length; i++) {
//     words[i] = reverse(words[i])
//   }
//   words = words.join(" ")
//   return words
// }
// console.log(revSentWords(str))


// object map diffrece
// object keys are stirngs "name" , "1" both are stirng 
// map me keys is anything numbers, array, object etc
// map ka size/length easy to get
// object me hamesa order maintan nahi hota he 
//object ka koi order nahi he unorder me save hota he 
//while map me order of keys fixed hota he 
//map me order of kesy manintan hota he to easy to iterat hota he
//

//question 3 print the number of duplicate in the array 

// //create hash map 
// let arr3 = [23, 3, 2, 1, 3, 1]
// function duplicates(arr3) {
//   let frequencies = new Map()
//   for (let i = 0; i < arr3.length; i++) {
//     if (frequencies.get(arr3[i]) == undefined) frequencies.set(arr3[i], 1)
//     else frequencies.set(arr3[i], frequencies.get(arr3[i]) + 1)
//   }
//   console.log(frequencies)

//   let res = []
//   for (let pairs of frequencies) {
//     if (pairs[1] > 1) res.push(pairs[0])
//   }
//   console.log(res)
// }
// duplicates(arr3)


//==========
let str=["abc","def","ghi","xyz"]
function capital(str) {
  let result=[]
  //base case
  if(str.length==0) return []

  //recursive
  let s=str[0][0].toUpperCase() + str[0].slice(1)
  result.push(s)
  // console.log(s);
  return result.concat(capital(str.slice(1)))
}
console.log(capital(str))


//======================
// function reverse(str){
//   //base case 
//   if(str.length==0) return []
//   //recursive
//   return reverse(str.slice(1)) + str[0]
// }
// // console.log(reverse("my name is mohit"))
// function atPosition(item) {
//   let words=item.split(" ")
//   // console.log(words);
// for (let i = 0; i < words.length; i++) {
//    words[i] = reverse(words[i]);
  
// }
// return words.join(" ")
// }
// console.log(atPosition("my name is mohit"))


//========================
