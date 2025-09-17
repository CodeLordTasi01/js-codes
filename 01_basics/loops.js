// const array = [5, 6, 2, 8, 10, 15]
// for (let i = 0; i < array.length; i++) {
//     element = array[i]
//     console.log(element)
// }
// console.log(element)



// // Example of for of loops
// const array = [1,2,3,4,5,6,7]
// for (const i of array) {
//     console.log(i);
// }
 


// Map in javascript
// const map = new Map()
// map.set ('IN','India')
// map.set ('USA','United States of America')
// map.set ('FR','France')
// console.log(map.keys())
// console.log(map.values())
// for(const [key, value] of map){
//     console.log(key,':',value);
// }
// for(const key in map){
//     console.log(key)
// }





// const myObject={
//     'IN' : 'India',
//     'USA' : 'United States of America',
//     'FR' : 'France'
// }
// for(const [key, value] of Object.entries(myObject)){
//     console.log(key, ':', value);
      
// }




// const myObject={
//     'IN' : 'India',
//     'USA' : 'United States of America',
//     'FR' : 'France'
// }
// for(const key in myObject){
//     console.log(key, ':',myObject[key]);
// }




// const programming = ['c++','py','js','rb']
// for(const key in programming){
//     console.log(key, programming[key])
// }




// const coding = ['c++','py','js','rb','java']
// coding.forEach(function (i) {
//     console.log(i)
// });




// const coding = ['c++','py','js','rb','java']
// coding.forEach(element => {
//     console.log(element)
// });




// const coding = ['c++','py','js','rb','java']
// coding.forEach((value, index, arr) => {
//     console.log(index, value, arr)
// });




// const coding = ['c++','py','js','rb','java']
// function printMe(val){
//     console.log(val);
// }
// coding.forEach(printMe)




// const myCoding = [
//     {
//         languageName : 'c++',
//         languageFileName : 'cpp'
//     },

//     {
//         languageName : 'python',
//         languageFileName : 'py'
//     },

//     {
//         languageName : 'javascript',
//         languageFileName : 'js'
//     },
// ]
// myCoding.forEach((value, index) => {
//     console.log(index, value.languageName )
// });




// Note - 1.Object ke liye for in loops use hota hai
// 2.Array ke liye for of loops use hota hai
// 3.Map mein for of loops use hota hai for in use nhi hota hai




// const coding = ['js','ruby','java','python','cpp']
// coding.forEach((element) =>{
//     console.log(element);
// })




// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const item = myNums.filter((num) => num > 4)
// console.log(item)





// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const item = myNums.filter((num) => { // agar {} lagana hai to return keyword lagana padega
//     return num > 4
// })
// console.log(myNums)




// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNum = []
// myNums.forEach((num) => {
//     if(num > 4){
//     }
// })
// console.log(newNum)





// const books = [
//     { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004},
//     { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008},
//     { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007},
//     { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010},
//     { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014},
//     { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010},
//     { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996},
//     { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016},
//     { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989},
// ];

// // const userBooks = books.filter((bk) => bk.genre === 'Non-Fiction')
// // console.log(userBooks)
// const userBooks = books.filter((bk) => bk.publish >= 1995 && bk.genre === 'History')
// console.log(userBooks)






// const myNums = [1,2,3,4,5,6,7,8,9,10]
// const newNums = myNums.map( (num) => num + 10)
// const newNums = myNums
//                 .map( (num) => num * 10)
//                 .map( (num) => num + 1)
//                 .filter( (num) => num >= 50)
// console.log(newNums)





// const array1 = [1,2,3,4]
// const initialValue = 0
// const sumWithInitial = array1.reduce((accumulator, currentValue) =>
//     accumulator + currentValue, initialValue
// );
// console.log(sumWithInitial)





// const array1 = [1,2,3,4]
// const initialValue = 0
// const sumWithInitial = array1.reduce((accumulator, currentValue) =>{
//     console.log(`acc : ${accumulator} and currValue : ${currentValue}`)
//     return accumulator + currentValue
// }, initialValue)
// console.log(sumWithInitial)





// const arr = [1,2,3,4,5,6,7,8,9,10]
// const totalValue =  arr.reduce((acc, currVal) => {
//     return acc + currVal
// }, 0);
// console.log(totalValue)





const shoppingCart = [
    {
        itemName : 'Js Course',
        price : 2999
    },
    {
        itemName : 'Python Course',
        price : 999
    },
    {
        itemName : 'Mobie Dev Course',
        price : 5999
    },
    {
        itemName : 'Data Science Course',
        price : 10999
    }, 
]

const priceTopay = shoppingCart.reduce((acc, item) => acc + item.price,0)
console.log(priceTopay)