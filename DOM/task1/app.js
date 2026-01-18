let ele = document.querySelector("textarea");
// let eleh1 = document.querySelector("p");
let charSpan = document.getElementById("char");
let elep2 = document.getElementById("cws");
let word = document.getElementById("word");
ele.addEventListener("input", count);

function count(e) {
  let ele = e.target;
  let value = ele.value;

  countChar(value);
  countCharWithoutSpace(value);
  countTotalWords(value);
}

function countChar(val) {
  const data = val.length;

  charSpan.innerText = data;
}

function countCharWithoutSpace(val) {
  let count = 0;
  for (let i = 0; i < val.length; i++) {
    if (val[i] !== " ") {
      count++;
    }
  }
  elep2.innerText = count;
  //   console.log(count);
}
console.log("check1 ");

function countTotalWords(val) {
  let str = val;
  let arr = str.split(" ");
  let words = arr.filter((word) => {
    return word.length > 0;
  });
  // console.log(words.length);
  let count = words.length;
  word.innerText = count;
}
