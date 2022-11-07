//let target_child = document.querySelectorAll("[id^='m']"); //mから始まるID属性を持つ要素を返す
let target_child = document.querySelectorAll("div");
const Type = "mouse";
console.log(target_child);
console.log(target_child.length);
console.log(target_child[1]);

let main1 = document.getElementById("main1");

let test = target_child;

for (const elem of test) {
  elem.addEventListener(
    "mouseover",
    function (event) {
      event.target.style.backgroundColor = "orange";
    },
    false
  );

  elem.addEventListener(
    "mouseleave",
    function (event) {
      event.target.style.backgroundColor = "white";
    },
    false
  );
}
