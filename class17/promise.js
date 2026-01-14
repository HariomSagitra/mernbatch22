
// promise java Script ke andar object hota hai is liye ise variable m store karte hai

// promise ke teen stages hote hai  (1)pending [default] (2)reslove[fulfilled] (3) reject[error]

//phle parametter ka namm kuch bhi do to bhi wah resolve hi rahega

//resole ki value -: than  handle karta hai 
//reject ki value -: catch handle karta hai (catch promise ke sath karte hai to ise methad khate hai)



const pro = new Promise( (a,b) =>{
});
console.log(pro)

const pro1 = new Promise((resoleve,reject) => {
  resoleve("Promise fulfield");
    reject("Prromise rejected");

});
console.log(pro1)

const pro3 = new promise ((resolve,reject) => {
        reject("promise reject");
        resolve("Promise fulfiled")
});
pro3.then((op) => {console.log(op);}).catch()