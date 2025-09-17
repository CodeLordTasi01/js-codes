// Singleton

// const mySym = Symbol("key1")
// const JsUser = {
//     name : 'Tasleem Shah',
//     age : 26,
//     [mySym] : "mykey1",
//     location : 'Kanpur',
//     email : 'tasleem@gmail.com',
//     isLoggedIn : false,
//     LastLoginDays : ["Monday",'Tuesday']
// }

// console.log(JsUser.email) // Value access krne ka trika
// console.log(JsUser["email"]) // Value access krne ka trika
// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])



// JsUser.email = 'tasleems021@gmail.com'
// Object.freeze(JsUser)
// JsUser.email = 'tasleemshah@gmail.com'
// console.log(JsUser)



// JsUser.greeting = function(){
//     console.log("Hello Js User")
// }
// console.log(JsUser.greeting())


// JsUser.greeting2 = function(){
//     console.log(`Hello Js User : ${this.name}`)
// }
// console.log(JsUser.greeting2())



// const tinderUser = new Object() // singleton objects
// const tinderUser = {} // Non singleton objects
// tinderUser.id = "123abc"
// tinderUser.name = "tasleem"
// tinderUser.isLoggedIn = false
// // console.log(tinderUser)
// console.log(Object.keys(tinderUser)) // iska output array ke form me aayega
// console.log(Object.values(tinderUser)) // iska output array ke form me aayega
// console.log(Object.entries(tinderUser)) // isme key value alag alag array ke form mein output aayega
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))






// const regularUser = {
//     email : "tasleems012@gmail.com",
//     fullname : {
//         userfullname : {
//             firstname : "Tasleem",
//             lastname : "Shah"
//         }
//     }
// }
// console.log(regularUser.fullname.userfullname)


// const obj1= {1: 'a', 2:'b'}
// const obj2= {3: 'c', 4:'d'}
// const obj3= {obj1, obj2}
// const obj4=Object.assign({}, obj1, obj2)
// const obj5 = {...obj1, ...obj2}
// console.log(obj4)
// console.log(obj1)
// console.log(obj4 == obj1)



// const users = [
//     { // Array ka objectz
//         id : 1,
//         email : 'tasleem@gmail.com'
//     },
//     { // Array ka objectz
//         id : 2,
//         email : 'tasleem1@gmail.com'
//     },
//     { // Array ka objectz
//         id : 3,
//         email : 'tasleem2@gmail.com'
//     }
// ]

// console.log(users[1].email)
// // console.log(users)



// const course = {
//     coursename : "code with tasleem",
//     price : "1999",
//     courseInstructor : "Tasleem"
// }
// const {courseInstructor : inst} = course // destructuring method
// console.log(inst)





// -------------------------API's-------------------------------

// {
//     "name" : "Tasleem",            // API's JSON format
//     "course" : "code with tasleem",
//     "price" : "free"
// }


// [           // API's JSON format
//     {},
//     {},
//     {}
// ]















