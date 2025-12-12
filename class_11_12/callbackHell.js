//first way of calling the api

// const obj = new XMLHttpRequest();
// obj.response = "json";
// obj.open("GET","https://jsonplaceholder.typicode.com/posts");
// obj.send();
// obj.onload = () => {
//     console.log(obj.response);
// }
// console.log(obj);
// console.log("api")

//function way of calling

// function calling(method, url){
//     const obj = new XMLHttpRequest();
//     obj.response = "json";
//     obj.open(method, url);
//     obj.send();
//     obj.onload = () => {
//         console.log(obj.response);
//     }
//     console.log(obj);
//     console.log("api")
//     return obj.response;
// }

// let ans = calling("GET", "https://jsonplaceholder.typicode.com/posts");
// console.log(ans);

// 2nd way of calling

// function apiCalling(method, url, printApiData) {
//   const ob1 = new XMLHttpRequest();
//   ob1.open(method, url);
//   ob1.send();
//   ob1.onload = () => {
//     console.log(ob1.response);
//     printApiData(ob1.response);
//   };
// }
// apiCalling("GET", "https://jsonplaceholder.typicode.com/posts/1", (data) => {
//   console.log("data of api", data);
// });

//callback hell -> when you make a multiple function call inside a multiple callback function i.e callback hell.
// it is also know as paramid of dom.
// due to this code become difficult to read or undrestnad.

function NarakKaDwar(method, url, printApiData) {
  const obj = new XMLHttpRequest();
  obj.responseType = "json";
  obj.open(method, url);
  obj.send();
  obj.addEventListener("load", () => {
    printApiData(obj.response);
  });
}

NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
  console.log("Ye meri all posts hai", data);

  NarakKaDwar(
    "GET",
    `https://jsonplaceholder.typicode.com/posts/${data[5].id}`,
    (data) => {
      console.log("Ye meri all posts hai", data);

      NarakKaDwar(
        "GET",
        `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
        (data) => {
          console.log("third level ", data);

          NarakKaDwar("GET",`https://jsonplaceholder.typicode.com/posts/${data[0].id}`,(data) => {
            console.log("four level",data);

          })
        }
      );
    }
  );
});


