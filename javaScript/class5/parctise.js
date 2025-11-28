// normal function

function addTowNo(x, y) {
  console.log(x + y);
}
addTowNo(3, 6);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function without return !!!!!!!!!
//a)arrow function

let add = (x, y) => {
  console.log(x + y);
};
add(40, 90);

// b)arrow function 2nd syntex

let arr = (x, y) => console.log(x + y);
arr(4, 6);

// !!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with return !!!!!!!!!

// simple function with return
function sumOfTwoNo(x, y) {
  return x + y;
}
let ans = sumOfTwoNo(8, 9); 
console.log(ans);// 1st way jab aap function ke op ko function ke bahar use karte hai

 console.log(sumOfTwoNo(8,8));// 2nd way jab aap function ke op ko function ke bahar print karte hai


 // arrow function 

 let sumOfThree=(x,y,z)=>x+y+z
 let ans1=sumOfThree(1,2,3);
 console.log(ans1);
 console.log(sumOfThree(1,2,3));


 let sumOfFour=(a,b,c,d)=>{
    return (a+b+c+d);
}

 let ans2=sumOfFour(1,2,3,4);
 console.log(ans2);
 console.log(sumOfFour(1,2,3,4));


// //!!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with no return but store in
//  variable and call inside console.log() !!!!!!!!!

  let multiply=(s,t)=>console.log(s*t)
  let ans4=multiply(5,6);
  console.log(ans4);
  console.log(multiply(5,6));


   //!!!!!!!!!!!!!!!!!!!!!!!!!!!! arrow function with multiple liens
let complexCalculation=(x,y)=>{
    console.log(x+y);
    console.log(x-y);
    console.log(x*y);
    return x**y;
}



 let output=complexCalculation(10,2);
 console.log(output);

 console.log(complexCalculation(10,2))
