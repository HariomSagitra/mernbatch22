// wap to tell enter no is prime or not.
// let n = prompt("enter no.");
// // propt se hamesa aap kuch bhi input doge vo string type ka hoga or me number ke sath kaam kar rha hu
// n = Number(n);
// // console.log("enter no is",n);
// // console.log(typeof(n))

// function isPrime(x) {
//     for (let i = 2; i < x; i++) {
//         if (x % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }
// // function calling
// let res=isPrime(n);
// if(res){
//     console.log(n,"No is prime ")
// }
// else{
//     console.log(n,"No is not prime")
// }

// Q.2  Wap to print all the prime no from 1 to n

// let n = prompt("enter range till you want to print the prime no.");
// n = Number(n);


// function isPrime(x) {

//     if(x===1 || x===2){
//         return false;
//     }
//     for (let i = 2; i < x; i++) {
//         if (x % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }
// // function calling
// for (let i = 1; i <= n; i++) {
//     let res = isPrime(i);
//     if (res) {
//         console.log(i, "is prime")
//     }
// }



// WAP TO SWAP 2 NO.
// function swapTwoNo(x, y) {

//     console.log("Before swapping x", x, " and y is", y);
//     let temp = x;
//     x = y;
//     y = temp;
//     console.log("After swap swapping x", x, " and y is", y);
// }

// swapTwoNo(3,5)

// Wap to print the digit of A NO.
// function printDigit(num) {

//     while (num != 0) {
//         let digit = num % 10;
//         console.log(digit)
//         num=Math.floor(num/10);
//     }
// }

// printDigit(154);

// Wap to reverse a no of A NO.

// function reverseNumber(num) {
//     console.log("Original No. is ",num)
//     let makeReverseNo = 0;
//     while (num != 0) {
//         let digit = num % 10;
//         makeReverseNo = makeReverseNo * 10 + digit;
//         num = Math.floor(num / 10);
//     }

//     console.log("Reverse no is ",makeReverseNo)
// }

// reverseNumber(154);


// Wap to reverse a no of A NO.

// function armStrongNumber(num) {
//     let armStrongNumber = 0;
//     let OriginalNo=num;
//     while (num != 0) {
//         let digit = num % 10;
//         armStrongNumber = armStrongNumber + digit * digit * digit;
//         num = Math.floor(num / 10);
//     }

//     if (armStrongNumber === OriginalNo) {
//         console.log("enter num ber is armstrong no ")
//     }
//     else {
//         console.log("enter num ber is not a armstrong no")

//     }


// }

// armStrongNumber(154);


// Wap to print enter no is palindrome or not

// function palindromNumberPrint(num) {
//     let palindrome = 0;
//     let OriginalNo=num;
//     while (num != 0) {
//         let digit = num % 10;
//         palindrome=palindrome*10+digit;
//         num = Math.floor(num / 10);
//     }
//     if (palindrome === OriginalNo) {
//         console.log("enter num ber is palindrome no ")
//     }
//     else {
//         console.log("enter num ber is not a palindrome no")

//     }
// }
// palindromNumberPrint(111);


// Wap to print enter no is perfect no or not

function tellPerfectNoOrNot(num) {

    let divisorSum = 0;

    for (let i = 1; i < num; i++) {

        if (num % i === 0) {
            divisorSum += i;
        }
    }

    if (divisorSum === num) {
        console.log("Enter no is perfect no")
    }
    else {
        console.log("Enter no is not a perfect no")

    }
}
tellPerfectNoOrNot(9)