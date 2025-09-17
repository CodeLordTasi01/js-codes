// function one(){
//     const username = "Tasleem Shah"
//     function two(){
//         const website = "youtube"
//         console.log(username)
//     }
//     console.log(website)
//     two()
// }
// one()




// if (true) {
//   const username = "talseem";
//   if (username === "tasleem") {
//     const website = "youtube"
//     console.log(username + website); // bas ye print hoga
//   }
//   console.log(username)
// }
// console.log(username)




// function addOne(num){ // function declaration
//     return num + 1
// }
// console.log(addOne(5))




// const addTwo = function(num){ // function declaration
//     return num + 2
// }
// console.log(addTwo(5))




// const user = {
//     username : "Tasleem",
//     price : 999,
    
//     welcomeMessage : function(){
//         console.log(`${this.username}, Welcome to website`)
//     }

// }
// console.log(user.username, user.price)
// user.welcomeMessage() 
// user.username = "Tasleem Shah"
// user.welcomeMessage()




// function my(){
//     let username = "Tasleem"
//     console.log(this.username)
// }
// my()




// const my = function (){
//     let username = "Tasleem"
//     console.log(this.username)
// }
// my()




// const my = () => {  // Arrow function declaration
//     let username = "Tasleem"
//     console.log(this.username)
// }
// my()




// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(6, 5))




// const addTwo = (num1, num2) => num1 + num2 //Implicit return function
// console.log(addTwo(6, 5))




// const addTwo = (num1, num2) => (num1 + num2) //Implicit return function
// console.log(addTwo(6, 5))



// const addTwo = (num1, num2) => [num1 + num2, num1 - num2]
// console.log(addTwo(6, 5))



// const user = () => ({
//     username : "Tasleem Shah"
// })
// console.log(user())



// const myArray = [2,9,4,10,8,9]
// myArray.forEach((value) => {
//   console.log(value);
// });



// const myArray = [2,9,4,10,8,9]
// myArray.forEach((value, index) => {
//   console.log(`Index: ${index}, Value: ${value}`);
// });




// // Example of Immediately Invoked Function Expressions (IIFE)
// (function connectiion(){ // named IIFE
//   console.log(`DB CONNECTED`)
// })();

// // Example of IIFE
// (() => {
//   console.log(`DB CONNECTED`)
// })();

// // Example of IIFE
// ((name) => {
//   console.log(`DB CONNECTED ${name}`)
// })('Tasleem');



let val1 = 10
let val2 = 5
function addNum(num1, num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val1, val2)
let result2= addNum(10, 2)







