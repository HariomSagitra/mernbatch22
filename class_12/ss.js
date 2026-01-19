
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



let hariom;
 function apiCalling(method,url,printData){
  const obj = new XMLHttpRequest();
  obj.responseType = "json";
  obj.onload = () => {
      console.log(obj.response)
        hariom=printData(obj.response)
        hari()
  }

  obj.open(method,url);
  obj.send()
}

apiCalling("GET","https://jsonplaceholder.typicode.com/posts", (data)=>{
  console.log(data)
  return data;
} )  

function hari(){
  console.log(hariom)
}
