// !!!!!!!!!!!!!!!!!!!!!!!!Synchronous Js!!!!!!!!!!!!!!!!
// agar mera code line by line excute hota hai to use synchronous bolte hai

// console.log("This is java script class 4");

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// keywords-> predife reserved word is known as keyword
//ex-> let const var function for while do if so on!!!!!

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// identfiers-> name of the variable/function/class is known as identifiers
// let x=10 here x is identifiers

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// token-> smallest unit of the program is known as token.
// ex-> console.log("hey")
//token syntex
// console.
//     log
//     (`
//     hello`
// );


// variables-> variables is a container which is used to store values.

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// way of creating variable->

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*let-> it is  used for creating block scope variable.
let variable ko banate time value de bhi sakte or nhi bhi de sakte hai
agar value nhi deta hu to us case me variable ke andar undefined
store ho jata hai. let se banaye variable ko dubara same nhi se
nhi banaya ja sakta hai same block ke andar ya same
function ke andar.*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// const->
/*it is  used for creating block scope variable.
const variable ko banate time value ko dena most imp hai
agar value nhi deta hai to us case me error aa jati hai
const se banye gaye variable ko update nhi keaya ja sakta hai

const se banaye variable ko dubara same scope me
nhi banaya ja sakta hai" same block ke andar ya same
function ke andar".*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// var
/*it is  used for creating function scope variable.
var variable ko banate time value de bhi sakte or nhi bhi de sakte hai
agar value nhi deta hu to us case me variable ke andar undefined
store ho jata hai. var se banaye variable ko dubara same scope ke andar
create keaya ja sakta hai but hame nhi karna chaheaye.
*/


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// Rules of creating variables/functions/classes

/*
1. varaible ka name hamesa alphabet, underscore and doller se hee start hoga.
2. varible ke name ke beech me space nhi hona chaheaye.
3. variable ka name kabhi bhi js ke keyword ke name par nhi hona chaheaye.
4. variable ka name meaning ful hona chaheaye.
5. functio ka name hamesa camel case me hona chaheaya and class ka name pascal case me
*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// syntex of creating variable
// let x;// ye bhi kar sakte hai
// let x1 = 10;// ye bhi kar sakte hai
// x1 = 5875;// ye bhi kar sakte hai
// var y = 20;// ye bhi kar sakte hai
// var y;// ye bhi kar sakte hai
// y = 8907;// ye bhi kar sakte hai

// const z = 10;//app ye hee kar sakte hai
// z = 100;
// //  const z1;// error dega
// let x2=10;
// let x2=20;same name variable cant exist in the same scope
// const y1=3748;
// const y1=24734; same name variable cant exist in the same scope
// var x=1089;
// var x=4767


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//scoping -> life time of a vriable is known as scoping.
/*block scope-> jo bhi variable let const ka use karke block ke andar bante hai
unko bahar access nhi keaya ja sakta hai bcs let and const varible ka scope
 block hota hai
 */
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!Block Scope!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// ex->
// {
//     let a = 10;
//     const b = 100;
//     console.log(a, b)

// }
// console.log(a,b)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// local scope/function scope -> var se banaye gaye varible ka scope function scope hota hai
//function -> function is a set of lines which is used to perform a
// specific task.addEventListener('type', listener, options)

// function kee syntex
// function sayHey() {
// console.log("hey")
// }
// function ka o/p dekhne ke leaye function ko call karna padta hai
//sayHey();// parenthesis lagana most imp hai.

//  example of function scope
// function sayHey() {
//    var x=10;
// x ko aap only function ke andar hee use kar payenge
// }
// console.log(x);// yha par error aa jayegi


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// global scope-> es scope me banaye gaye variable ko aap khi par bhi use kar sakte hai
// jahe function ke andar ya block ke andar but yad rhe jis block ke andfar
// agar global variable ke jaise name hoga to us block ke andar us varible kee priority jyada hogi
// let x = 10;
// const y = 20;
// var z = 674;

// {
//     console.log(x, y, z)
// }

// function sayHey() {
//     console.log(x, y, z)

// }

// sayHey()
// console.log(x, y, z)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->1
/*agar kisi variable ko var kee help se kisi block ke andar banaya jata hai
to us varible ko block ke bahar bhi access kar sakte hai.*/

// {
//     let h=87;
//     var k=871223;
// }
// console.log(k)
/* you can access variable outside scope but that varible must be
 created via var*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->2
/*
agar aapne same name ke variable multiple scope me banaye hai
to hamesa us scope ke andar un variable kee priority alag scope 
me banaye gaye variable jyada hoti hai
*/

// let x=10;
// console.log(x)//10
// {
//     let x=20;
//     var z=90;
//     console.log(x)//20
// }
// console.log(z)// 90
// function Demo(){
//     console.log(x);//10
//     var z=197;
//     console.log(z)//197
// }
// Demo();
// console.log(z)//90


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->3

//(3.1) global variable ko khi se bhi change keya ja sakta hai 
// var x = 90;
// console.log(x)
// {
//     x = 8724;
//     console.log(x)
// }

// function changeValue() {
//     x = 485466546;
// }
//  changeValue()
// console.log(x)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->3.2

//(3.2) global variable  agar me bina kisi let const ya var ke banata hu tab
// x = 19;
// {
//     x = 8724;

// }

// function changeValue() {
//     x = 485466546;
// }
// changeValue()
// console.log(x)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//Exordinary case ->3.3

//(3.3) Harkate 
// x = 19;
// {
//    var x = 8724;

// }

// function changeValue() {
//     x = 485466546;
// }
// changeValue()
// console.log(x)

// // 
// //(3.4) Harkate 
// var x = 19;
// {
//     x = 8724;

// }

// function changeValue() {
//     x = 485466546;
// }
// changeValue()
// console.log(x)


// lets see on the dev tools about view the scope

// var x=90;
// console.log(x)
// {
//     debugger;
//     let yt=908;
//     console.log(yt)
//     const x1=3785;
//     console.log(x1)
// }

// function sayHehfdf()
// {
//     debugger;
//     var x=90;
// }
// sayHehfdf()

// debugger
// let x=10;
// console.log(x)

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Data Types-> Ye bta hai ki aapki value ka type kaisa hai 
// it is used to tell the type of value
// 1.primitive Data Type->
/*
jo kisi bhi langyage ke sath me aaate hai unhe primitive data typeof.
inka use karke aap kisi variable me ek time me ek hee value store kar payenge
ye immutable hote hai.
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

Example-> 
number-> koi bhi variable ke andar agar numeric value hai
 to us variable ka data number hoga
 ex-> let x=90 // x ka type number bcs x me numeric value rakhi hai


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 string-> koi bhi variable kee value agar aap
 doble quote(""), single quote ('') ya backtics(``) ke andar likhte hai
 to vah string data type kee category me aata hai. bhale hee aap koi
 numeric value hee likhe.
 ex-> let x1="90" // type string
 let namr='mohan'
  
 // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

boolean-> koi bhi variable kee value agar aap
 true ya false dete hai to use variable ka data type boolean hoga

 ex-> let x1= true // type boolean
 let namr=false// boolean
 
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


 null-> koi bhi variable jiski value present me nhi hai
 us variable ko null se initialize keaya jata hai but ye sureity 
 hai kee future  me us variable me kuch na kuch  value store ho saktihai


 ex-> let x1= null // object
 // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


 NaN->H.w

*/
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


/* 2.Non primitive Data Type-> inko complex data type ya user define data type kahte hai. 
inka use ek variable me ek time me multiple value store karne ke leaye karte hai.

ex-> array, object, function, IIFE, Date so on.
*/

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// typeof()-> eska use kisi bhi varible ka data type batane ke leaye karte hai.
// let x=-10.35;
// console.log(typeof(x))// number
// const name1="MOhan"
// console.log(typeof(name1))// string
// const name2='MOhan'
// console.log(typeof(name2))// string

// const name3=`MOhan`
// console.log(typeof(name3))// string

// const areYouAdult=true;
// console.log(typeof(areYouAdult))//boolean

// let areYouStuding=false
// console.log(typeof(areYouStuding))// boolean


// let sadiHoGai=null;
// console.log(typeof(sadiHoGai))// object

// let complexCalculation="mohit"/10;
// console.log(complexCalculation)
// console.log(typeof(NaN))


// Operators->
// Arithmetic-> +,-,/,*,%,**
// console.log("Addition",3+4)//7
// console.log("Subtraction",13-4)//9
// console.log("Divition",23/4)//5.75 // 5
// console.log("Multification",23*4)//92
// console.log("Modulas",23%4)//3
// console.log("Power",2**4)//16

// Comparition Operator-> <,>,<=,>=,==,===,!=
// console.log("Greater than", 3 > 4)//false
// console.log("less than", 13 < 4)//false
// console.log("Greater than eqal to", 23 >= 4)//true
// console.log("less than eqal to", 23 <= 4)//false
// console.log("double equal to", 24 == "24")//true
// console.log("tripple equal to", 24 === "24")//false
// console.log("not equal to", 23 != 45)//true
// console.log("edge cases=>");
// console.log("not equal to ye hota hai correct one", "23" != 23)

// console.log("not equal to ye kam use karte hai", "23" !== 23)//H.w


// Logical Operator->

// AND
// console.log(true && true)// true
// console.log(false && false)// false
// console.log(false && true)// false
// console.log(true && false)// false

// OR
// console.log(true || true)// true
// console.log(false || true)// true
// console.log(true || false)// true 
// console.log(false || false)// false

// Not
// console.log(!true)//false



//