function calling(method, url, next) {
  const hari = new XMLHttpRequest();
  hari.responseType = "json";
  hari.open(method, url);
  hari.send();
  hari.onload = () => {
    console.log(hari.response);
    next(hari.response);
  };
}

calling("GET", "https://fakestoreapi.com/products", (d) => {
  console.log("first", d[0].category);

  calling(
    "GET",
    `https://fakestoreapi.com/products/category/${d[0].category}`,
    (d) => {
      console.log("Second", d);

      calling(
        "GET",
        `https://fakestoreapi.com/products/${d[1].id}`,
        (d) => {
          console.log("third", d);
        }
      );
    }
  );
});
