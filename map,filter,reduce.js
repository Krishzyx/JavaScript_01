//using map method to print new array

let arr = [45,34,56]
let a = arr.map((value,index)=>{
  console.log(value,index)
  return value +1
})
console.log(a)

//array filter method 
let arr2 = [34 , 56, 23 ,0 ,3, 5]
let a2 = arr2.filter((a)=>{
  return a<10
})
console.log(a2)

//array reduce method
 let arr3 =[1,2,3,4,5]
let a3=arr3.reduce((h1,h2)=>{
  return h1+h2
})
console.log(a3)
//it can take first two numbers then add it and after adding it take add value and third number and add them and so on......
