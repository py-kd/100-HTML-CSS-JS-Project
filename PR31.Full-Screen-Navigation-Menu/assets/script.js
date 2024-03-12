// menu
const menu = document.querySelector('.menu');
// console.log(menu);

// link
const link = document.querySelectorAll('li');
// console.log(link);

// highlight
const highlight = document.querySelectorAll('.highligit');
// console.log(highlight);

// btn
const btn = document.querySelector('.btn');
// console.log(btn);

btn.addEventListener('click', function() {
      if (this.dataset.open === "close") {
            menu.style.clipPath = "circle(100% at 50% 50%)";
            this.dataset.open = 'open';
      }else{
            menu.style.clipPath = "";
            this.dataset.open = 'close';
            highlight
      }
});