// const ankit = new XMLHttpRequest();
//   ankit.responseType = "json";

//   ankit.open("GET","https://jsonplaceholder.typicode.com/posts");
//   ankit.send();

//   ankit.onload = () => {
//     console.log(ankit.response)
//   }

// function apiCalling(method, url){
//   const obj = new XMLHttpRequest();
//   obj.responseType="json";
//   obj.open(method,url);
//   obj.send();
//   obj.onload = () => {
//     console.log(obj.response)
//   }
//   console.log(obj);
//   //return obj.response;
// }

// let ans = apiCalling("GET","https://jsonplaceholder.typicode.com/posts");
// //console.log(ans)

// let hariom;
//  function apiCalling(method,url,printData){
//   const obj = new XMLHttpRequest();
//   obj.responseType = "json";
//   obj.onload = () => {
//       console.log(obj.response)
//         hariom=printData(obj.response)
//         hari()
//   }

//   obj.open(method,url);
//   obj.send()
// }


// jab callbask ka return khi use karte ho ya kise variable m store karte hai tab callback m return hona jaruri hai


// apiCalling("GET","https://jsonplaceholder.typicode.com/posts", (data)=>{
//   console.log(data)
//   return data;
// } )

// function hari(){
//   console.log(hariom)

// }


// hum asa bhi kar sakte hai
// let hariom;

// function apiCalling(method, url, printData){
//   const obj = new XMLHttpRequest();
//   obj.responseType = "json";

//   obj.onload = () => {
//     console.log(obj.response);
//     printData(obj.response); // 👈 return ki need nahi
//     hari();
//   };

//   obj.open(method, url);
//   obj.send();
// }

// apiCalling(
//   "GET",
//   "https://jsonplaceholder.typicode.com/posts",
//   (data) => {
//     hariom = data; // 👈 direct assign
//   }
// );

// function hari(){
//   console.log("hariom:", hariom);
// }


//🟢 2️⃣ fetch() – MODERN & MOST USED 🔥xhr consept

// let hariom;

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((res) => res.json())
//   .then((data) => {
//     hariom = data;
//     hari();
//   });

// function hari() {
//   console.log(hariom);
// }

//🔵 fetch POST request (FULL EXAMPLE)

// fetch("https://jsonplaceholder.typicode.com/posts",{

//  method: "POST",
//  headers:{
//   "Content-Type" : "application/json"
//  },
//  body:JSON.stringify({
//   title:"hariom",
//   body:"dahakd",
//   userId:1
//  })
// })
// .then(res=>res.json())
// .then((data)=>{
//   console.log(data)
// })


const obj = new XMLHttpRequest();
    obj.open("POST","https://jsonplaceholder.typicode.com/posts")
    obj.setRequestHeader("content-Type","application/json")
    obj.send(
        JSON.stringify({
        hariom:"dhakad",
        cillage:"dhodar",
      })
    )
    obj.onload = () =>{
      let data = JSON.parse(obj.responseText)
      console.log(data)
    }