//using promise chaining we resolve the problem of callback Hell 

let p1 = new promise((resolve, reject) => {
  // settimeout is given for the time taken to exexute the javascript  
  setTimeout(() => {
    console.log("resolved in 2 seconds")
    resolved(56)
  }, 2000)
})

p1.then((value) => {
  console.log(value)
  let p2 = new promise((resolve, reject) => {
    setTimeout(() => { resolve("promise 2 ") }, 2000)
    })
     return p2
}).then((value) => {
  comsole.log("we are done")
   return 2
}).then(( value) =>{
  console.log("now we are definitly done")
})
