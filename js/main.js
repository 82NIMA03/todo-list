const input = document.querySelector("#input-box");
const list = document.querySelector("#list-container");
list.addEventListener(
  "click",
  (event) => {
    console.log(event);
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
      saveData();
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
      saveData();
    }
  },
  false
);
input.addEventListener("keypress", (e) => {
  if (e.charCode === 13) {
    addTodo();
  }
});
function addTodo() {
  if (input.value === "") {
    alert("please enter yor text");
  } else {
    const li = document.createElement("li");
    li.innerHTML = input.value;
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    list.appendChild(li);
  }
  input.value = "";
  saveData();
}
function saveData() {
  localStorage.setItem("data", list.innerHTML);
}
function show() {
  list.innerHTML = localStorage.getItem("data");
}
show();
