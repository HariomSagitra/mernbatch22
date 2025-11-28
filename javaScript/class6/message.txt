// console.log('class 6 ')

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //pure function-> esa function jisko bar bar same argument(optional) ke sath call karne par same o/p aata hai use pure function bolte hai.
// function pureFunction(){
//     console.log('its a pure function')
// }
// pureFunction()// same op
// pureFunction()// same op
// pureFunction()// same op

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// impure function->esa function jisko bar bar same argument(optional) ke sath call karne par har bar alag alag  o/p aata hai use impure function bolte hai.

// let age = 10;
// function impureFunction() {
//     console.log(age++, ' = its a impure Function');

// }
// impureFunction()//10
// impureFunction()//11
// impureFunction()//12
// impureFunction()//13
// impureFunction()//14

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/* IIFI Function -> agar mujhe koi simple sa task karana hai to uske leaye iffe
 ka use karte hai


syntax
1.1
console.log((function () {
    return console.log('hey its a IIFI function');

})())

// 1.2
console.log(function () {
    console.log("Hello Ram")
}
())*/


// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
/*callback function->
esa function jo kisi dusri function kee calling par as an argument pass hota hai to us argument vale function ko callback function bola jata hai*/

//Noob
// function callback(){
//     console.log("this is callback function ")
// }

// function higherOrderFunction(de){
//     console.log(de)
//     de()
//     console.log("This is higher order function bcs its taking other function as a parameter")
// }
// // console.log(callback)
// higherOrderFunction(callback)



// pro
// let ans = () => {
//     console.log("this is callback function ")
// }

// function higherOrderFunction(de) {
//     console.log(de)
//     de()
//     console.log("This is higher order function bcs its taking other function as a parameter")
// }
// // console.log(callback)
// higherOrderFunction(ans)


// // pro ultra


// function higherOrderFunction(de) {
//     console.log(de)
//     de()
//     console.log("This is higher order function bcs its taking other function as a parameter")
// }
// // console.log(callback)
// higherOrderFunction( () => {
//     console.log("this is callback function ")
// })


function ladkiVala() {
    return "madhu";
}

function ladkeVala(ladki) {
    let ladkiName = ladki();
    let ladkeKaNaam = "Jagmohan"
    console.log(`byah sampnn hua ladka${ladkeKaNaam} ke sath ladki ${ladkiName}`)
}


ladkeVala(ladkiVala)