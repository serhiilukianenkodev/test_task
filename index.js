const formEl = document.querySelector(".inputForm");
const buttonEl = document.querySelector(".startBtn");
const outputEl = document.querySelector(".output");
// console.log("🚀 ~ inputEl:", inputEl);
// console.log("🚀 ~ buttonEl:", buttonEl);

formEl.addEventListener("submit", handleBtnClick);

outputEl.addEventListener("click", handleBoxClick);

function handleBtnClick(e) {
  e.preventDefault();
  const text = e.currentTarget.text.value;
  e.currentTarget.reset();
  console.log("🚀 ~ hadleBtnClick ~ text:", text);
  createfields(text);
}

function handleBoxClick({ target }) {
  if (!target.classList.contains("box")) return;
  target.classList.toggle("selected");
  target.addEventListener("drag", handleBoxDrag);

  console.dir(target.className);
}

function handleBoxDrag(e) {
  console.log(e);
}

function createfields(text) {
  const markup = text
    .split("")
    .map((i) => `<div class="box">${i}</div>`)
    .join("");
  outputEl.innerHTML = markup;
}
