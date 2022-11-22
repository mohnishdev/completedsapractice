// // Understand recursion by making fibonacci numbers

// const fiboNumbers = (n) => {
//     // base condition
//     if (n < 2) {
//         return n
//     }
//     // Recurrence relation of this => bo(n-1)+fibo(n-2)
//     return fiboNumbers(n - 1) + fiboNumbers(n - 2)
// }

// fiboNumbers(4)

// List of questions to clear recursion concepts:-

// 1. Understand recursion by print something N times	

// let printNo = (n)=>{
//     // base condition 

//     if(n===0){
//         return
//     }
//     console.log("hello mohnish")
//     printNo(n-1)
// }

// printNo(5)

// ******************************2. Print 1 to N using recursion	

// let print1ton = (n, m) => {
//     // base condition
//     if (n > 5) {
//         return
//     }
//     console.log(n)
//     print1ton(n + 1)

// }

// print1ton(1, 5)
// 3- Print N to 1 using recursion	

// let printNto1 = (n, m) => {
//     if (m === n) {
//         console.log(m)
//         return
//     }
//     console.log(m)
//     printNto1(1, m - 1)
// }

// printNto1(1,5)

// ************************************Sum of first N numbers

// let acc = 0

// let sumOfNumbers = (start , n)=>{

//     // base condition
//     if(start === n){
//         acc = acc + start
//         return
//     }
//     debugger
//     acc = acc+ start
//     sumOfNumbers(start+1,5)
// }

// sumOfNumbers(1,5)

// console.log(acc , "this is acc");


// *****************************************Factorial of N numbers	

// let fac = 1;

// const calculateFactorial = (n)=>{
//     if(n === 1){
//         fac = fac*n
//         return
//     }
//     fac = fac*n
//     calculateFactorial(n-1)
// }

// calculateFactorial(5)

// console.log(fac , "this is fac");


// ************************************Reverse an array 

// First way of doing it 

// let arr = [3,4,5,6,7]

// let newArr = []

// let n = arr.length-1


// let reverseArray = (n)=>{
//     if(n===0){
//         newArr.push(arr[n])
//         return
//     }
//     newArr.push(arr[n])
//     n = n-1
//     reverseArray(n)
// }

// reverseArray(n)

// console.log(newArr , "this is newArr..,")

// ********2nd way of doing it 

// let data = [2,3,5,6]
// let temp;

// const reverseArray = (data, start , end)=>{
//     console.log(data , "this is data");
//     if(start <=end){
//         temp = data[start];
//         data[start] = data[end] 
//         data[end] = temp
//         reverseArray(data, start+1 , end-1)
//     }else{
//         return
//     }
// }

// reverseArray(data , 0, data.length-1)

// Check if a string is palindrome or not**************************

// An string is a palindrome string only if the reverse of that string is same as the normal strig .

// let reversedArray = (arr, start , end)=>{
//     if(start <=end){
//         temp = arr[start];
//         arr[start]  = arr[end];
//         arr[end] = temp;
//         reversedArray(arr , start+1 , end-1);
//     }
// }

// let checkPalindrome = (str)=>{
//     let arr = str.split("");
//     let arrDup = arr;
//     let temp;

//     reversedArray(arr , 0 , arr.length-1)

//   console.log(arrDup, str.split(""));
// }

// checkPalindrome("1221")

// ***********************************Sum Of n Fibonacci Numbers

// Fibo Number = 0,1,1,2,3,5,8,13,21...................

// const fiboNumbers = (n)=>{
//     if(n<2){
//         return n
//     }
//     return fiboNumbers(n-1) + fiboNumbers(n-2)
// }

// console.log(fiboNumbers(14) , "this is fibo numbers result...........");