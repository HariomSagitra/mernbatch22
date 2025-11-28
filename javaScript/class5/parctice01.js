// function - set of lines or block of code which is used to perform some specific task
// -----------------------------------------------------------------------------------------
/*Advantage of functions - 
readability - easy to understand
reusability - write once and use anytime anywhere
better performance - due to less number of lines our code will be fast */
// -------------------------------------------------------------------------------------------
/* syntax of function -

normal function/simple function

js supports function declaration along with definition
function functionName(parameter list - make variable without using let, var, const){
   write your logic here...
}

if you want to execute the function we must have to call it */
// -------------------------------------------------------------------------------------------
/*types of function --

1. normal function/simple function
2. arrow function
3. callback function
4. Higher order function
5. anonymous function
6. pure function
7. impure function
8. IIFE

function expression- not a type of function*/
// -------------------------------------------------------------------------------------------

// example of simple function -- 

// function add(x,y){
//     z = x +y;
//  console.log(z) 
// }
// add(5,10);
// add(78,22);


// -------------------------------------------------------------------------------------------
// edge cases-1
/*1. agar function ke logic se jo o/p aaya hai use agar aap function ke bahar use karna chahte hai
us case me function ke andar keaye gaye logic ka jo o/p use return karna padega or function ki calling ko ek variable me store karna padega*/

function incrementByBonus(salary, bonus) {
    return salary + bonus;
}

let incrementAmount = incrementByBonus(10000, 1000);
let initialSalary = 10000;
let finalSalary = initialSalary + incrementAmount;
console.log(finalSalary, "after promotion")
// -------------------------------------------------------------------------------------------
/*2. agar function ke logic se jo o/p aaya hai use agar aap function ke bahar print karna chahte hai
us case me aap function ki calling ko ek consloe.log() ke andar likh do */
console.log(incrementByBonus(10000, 1000));

// -------------------------------------------------------------------------------------------
/*3. agar function ke andar return keyword ka use nhi keaya hai or agar aap function ko ek 
variable me store karte hai to us case me us variable me undefined store ho jayega  */

function demoChaha() {
    console.log("chacha")
}
let ans = demoChaha();
console.log(ans)

// -------------------------------------------------------------------------------------------

/*4. agar function ke andar return keyword ka use nhi keaya hai or agar aap function ko ek 
console.log() ke andar likhte to us case me us console.log()  undefined print   */

function demoFufa() {
    console.log("ham to na jayega")
}

console.log(demoFufa())

// -------------------------------------------------------------------------------------------

/5. agar function ka name bhar aap console.*log() ke andar karte hai code me khi par bhi us case me function kee puri body print hoti hai/
console.log(demoChaha)
// ----------------------------------------------------------------------------------------------