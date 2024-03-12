// menu
const menu = document.querySelector('.menu');
// console.log(menu);

// link
const links = document.querySelectorAll('li');
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

links.forEach(link => {
      link.addEventListener("pointerover", function(){
          const w = this.offsetWidth,
              h = this.offsetHeight,
              t = this.offsetTop;
  
          highlight.forEach(hl => {
            hl.style.cssText = `transform: translateY(${t}px); width: ${w + 50}px; height: ${h + 5}px `;
          });
      });
});