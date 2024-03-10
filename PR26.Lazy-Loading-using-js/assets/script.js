const loadText = document.querySelector(".loading-text");
// console.log(loadText);

const backGround = document.querySelector(".background");
// console.log(backGround);

let load = 0;
let int = setInterval(blurring,  30);

function blurring() {
      load++;
      // load += 10;
      if (load > 99){
            clearInterval(int);
      }

      loadText.innerText = `${load}%`;
      loadText.style.opacity = scale(load, 0, 100, 1, 0);
      backGround.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
      return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}