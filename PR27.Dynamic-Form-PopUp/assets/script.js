const closeBtn = document.getElementById("close");
// console.log(closeBtn);

const openBtn = document.getElementById("open");
// console.log(openBtn);

const model = document.getElementById("model");
// console.log(model);

openBtn.addEventListener("click", () => model.classList.add("show-model"));
closeBtn.addEventListener("click", () => model.classList.remove("show-model"));

window.addEventListener("click", e => {
      e.target === model ? model.classList.remove("show-model") : false;
});