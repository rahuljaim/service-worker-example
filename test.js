let val = document.getElementById("value");
let digit = document.getElementById("digit");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");

btn1.addEventListener("click", function () {
  val.innerHTML = "Hi This is value";
});

btn2.addEventListener("click", function () {
  const myWorker = new Worker("worker1.js");
  myWorker.postMessage("Hi this is message");
  myWorker.onmessage = function (e) {
    // debugger;
    digit.innerHTML = e.data;
  };
});
