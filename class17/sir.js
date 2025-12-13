const pro = new Promise( (a,b) => {
});
console.log(pro)

// const pro = new Promise( (resolve,reject) => {
//     resolve("promise fulfield");
//     reject("promise reject");
// });
// console.log(pro)

// const pro = new Promise( (resolve,reject) => {
//     reject("promise reject");
//     resolve("promise fulfield");

// });
// pro.then( (op) => {console.log(op);}).catch( (err) => {console.log("promise has faild",err)})

//we are doing API calling by fetch
// const apifetch = fetch(`https://fakestoreapi.com/products/`)
// console.log(apifetch)
// apifetch.then( (op) => {console.log(op);}).catch( (err) => {console.log("promise has faild",err)})

//Now we are converting body data into json formate
// fetch(`https://fakestoreapi.com/products/`).then((op) => {
//     op.json().then((op) => { console.log("API response", op); }
//     ).catch((err) => { console.log("API faild", err) })
// }
// ).catch((err) => { console.log("promise has faild", err) })
// console.log(apifetch)
// apifetch.then( (op) => {
//     op.json().then( (op) => {console.log("API response",op);}
// ).catch( (err) => {console.log("API faild",err)})
// }
// ).catch( (err) => {console.log("promise has faild",err)})

//Calling API Using XHR
//function FetchProducts(method, url, callback) {
//   const data = new XMLHttpRequest();
//   data.responseType = "json";
//   data.open(method, url);
//   data.send();
//   data.onload = () => {
//     callback(data.response);

// };
//}

//Calling APi using fetch
// function FetchProducts(url) {
//     const res = fetch(url);
//     return res;
// }

// console.log(p)
// p.then((data) => {
//     data.json().then((data1) => {
//         console.log("firstApi calling", data1);

//         FetchProducts(`https://fakestoreapi.com/products/category/${data1[0].category}`).then((data1) => {
//             data1.json().then((data2) => {
//                 console.log("second Api calling", data2);
//                 FetchProducts(`https://fakestoreapi.com/products/${data2[0].id}/`).then((data3) => {
//                     data3.json().then((data3) => {
//                         console.log("third Api calling", data3);
//                         FetchProducts(`https://fakestoreapi.com/products/category/${data3.category}`).then((data3) => {
//                             data3.json().then((data3) => {
//                                 console.log("fourth Api calling", data3);

//                             }).catch(data => console.log("forth api me error", data))
//                         })
//                     }).catch(data => console.log("third api me error", data))
//                 })


//             }).catch(data => console.log("second api me error", data))
//         })

//     }).catch(data => console.log(data))
// }).catch(err => console.log("first api me error", err))

// const p = FetchProducts("https://fakestoreapi.com/products");

// p.then(d => d.json())
//     .then(d1 => (console.log("firstApi calling", d1), FetchProducts(`https://fakestoreapi.com/products/category/${d1[0].category}`)))
//     .then(r => r.json())
//     .then(d2 => (console.log("second Api calling", d2), FetchProducts(`https://fakestoreapi.com/products/${d2[0].id}/`)))
//     .then(r => r.json())
//     .then(d3 => (console.log("third Api calling", d3), FetchProducts(`https://fakestoreapi.com/products/category/${d3.category}`)))
//     .then(r => r.json())
//     .then(d4 => console.log("fourth Api calling", d4))
//     .catch(err => console.log("error", err));

// p.then(d => d.json()).then(d1 => (console.log("firstApi calling", d1), FetchProducts(`https://fakestoreapi.com/products/category/${d1[0].category}`))).then(r => r.json()).then(d2 => (console.log("second Api calling", d2), FetchProducts(`https://fakestoreapi.com/products/${d2[0].id}/`))).then(r => r.json()).then(d3 => (console.log("third Api calling", d3), FetchProducts(`https://fakestoreapi.com/products/category/${d3.category}`))).then(r => r.json()).then(d4 => console.log("fourth Api calling", d4)).catch(err => console.log("error", err));


//async await use to perform sideeffects and also solve the chaining problem.

// async function FetchProducts(url) {
//     const res1 = await fetch(url);
//     const ans1 = await res1.json();
//      console.log("first api calling ", ans1)
//     const res2 = await fetch(`${url}/category/${ans1[0].category}`);
//     const ans2 = await res2.json();
//     console.log("second api calling ", ans2)

//     const res3 = await fetch(`${url}/${ans2[0].id}`);
//     const ans3 = await res3.json();
//      console.log("third api calling ", ans3)
//     const res4 = await fetch(`${url}/category/${ans3.category}`);
//     const ans4 = await res4.json();
//     console.log("first api calling ", ans4)
// }

// FetchProducts("https://fakestoreapi.com/products");