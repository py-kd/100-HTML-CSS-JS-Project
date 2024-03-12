// countEle
let countEle = document.getElementById('count');
console.log(countEle);

// saveEl
let saveEl = document.getElementById('save');
console.log(saveEl);

// incrementBtn
let incrementBtn = document.querySelector('.increment-btn');
console.log(incrementBtn);

// saveBtn
let saveBtn = document.querySelector('.save-btn');
console.log(saveBtn);

let count = 0;
incrementBtn.addEventListener('click', () => {
      count+=1;
      countEle.textContent = count;
});

saveBtn.addEventListener('click', () =>{
      let countStr = count +", "
      saveEl.textContent += countStr
      countEle.textContent = 0
      count = 0
});