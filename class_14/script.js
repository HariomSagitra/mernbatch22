// first way of calling the api
/*const obj = new XMLHttpRequest();
obj.response = "json";
obj.open("GET", "https://jsonplaceholder.typicode.com/posts");
obj.send();
console.log(obj);
console.log("api")*/

// function apiCalling(method, url) {
//     const obj = new XMLHttpRequest();
//     // obj.response = "json";
//     obj.responseType = "json";
//     obj.open(method, url);
//     obj.send();
//     obj.onload = () => {
//         console.log(obj.response);

//     }
//     console.log(obj);
//     // console.log(obj.response);
//     console.log("api")
//     return obj.response;
// }
// let ans=apiCalling("GET", "https://jsonplaceholder.typicode.com/posts");
// // console.log(ans)



// 2nd way 
// function apiCalling(method, url, printApiData) {
//     const obj = new XMLHttpRequest();
//     obj.open(method, url);
//     obj.send();
//     obj.onload = () => {
//         console.log(obj.response);
//         printApiData(obj.response)
//     }

// }
// apiCalling("GET", "https://jsonplaceholder.typicode.com/posts/1", (data) => {
//     console.log("data of api", data)
// });


// callback hell-> when you make a multiple function call inside a multiple callback function i.e callback hell.
// it is also known as pyramid of Doom.
// due to this code become difficult to read or understand.


function NarakKaDwar(method, url, printApiData) {
    const obj = new XMLHttpRequest();
    obj.responseType = "json";
    obj.open(method, url);
    obj.send();
    obj.addEventListener("load", () => {
        printApiData(obj.response)
    })
}

NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
    console.log("Ye meri all posts hai", data);


    NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
        (data) => {
            console.log("Ye meri Single Post hai", data)
            NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
                (data) => {
                    console.log("Ye meri Single Post ke andar je sare comments hai", data)
                    NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
                        (data) => {
                            console.log("Ye meri Single Post ke andar ek comments hai", data)
                            NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
                                console.log("Ye meri all posts hai", data);


                                NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
                                    (data) => {
                                        console.log("Ye meri Single Post hai", data)
                                        NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
                                            (data) => {
                                                console.log("Ye meri Single Post ke andar je sare comments hai", data)
                                                NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
                                                    (data) => {
                                                        console.log("Ye meri Single Post ke andar ek comments hai", data)
                                                        NarakKaDwar("GET", "https://jsonplaceholder.typicode.com/posts", (data) => {
                                                            console.log("Ye meri all posts hai", data);


                                                            NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data[0].userId}`,
                                                                (data) => {
                                                                    console.log("Ye meri Single Post hai", data)
                                                                    NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/posts/${data.userId}/comments`,
                                                                        (data) => {
                                                                            console.log("Ye meri Single Post ke andar je sare comments hai", data)
                                                                            NarakKaDwar("GET", `https://jsonplaceholder.typicode.com/comments?postId=${data[0].postId}`,
                                                                                (data) => {
                                                                                    console.log("Ye meri Single Post ke andar ek comments hai", data)

                                                                                });
                                                                        });
                                                                });

                                                        });
                                                    });
                                            });
                                    });

                            });
                        });
                });
        });

});
