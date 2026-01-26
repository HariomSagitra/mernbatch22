const wrapperBox = document.getElementById("wrapper");

let painterList = [];
// add painter 

const input1 = document.getElementById("in1");
const input2 = document.getElementById("in2");
const input3 = document.getElementById("in3");
let pName = "";
let expPainter = "";
let category = "";

const addBtn = document.getElementById("add")
function printValueofPainter(e) {
    pName = input1.value;
    expPainter = input2.value;
    category = input3.value
    console.log(pName, expPainter, category)
}
addBtn.addEventListener("click", printValueofPainter);


// view info box
let viewinfoBtn = document.getElementById("view-all");
viewinfoBtn.addEventListener("click", () => {
    console.log("btn hit")
  
element.style.display = "block";



})