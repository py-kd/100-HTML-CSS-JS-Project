// selectField
let selectField = document.getElementById('selectField');
// console.log(selectField);

// selectText
let selectText = document.getElementById('selectText');
// console.log(selectText);

// list
let list = document.getElementById('list');
// console.log(list);

// arrowIcon
let arrowIcon = document.getElementById('arrowIcon');
// console.log(arrowIcon);

// options
let options = document.getElementsByClassName("options");
// console.log(options);

selectField.addEventListener("click",  () => {
      list.classList.toggle("hide");
      arrowIcon.classList.toggle("rotate");
})

for (option of options) {      
      option.onclick = function(){
            selectText.innerHTML = this.textContent
            list.classList.toggle("hide");
            arrowIcon.classList.toggle("rotate");
      }
}