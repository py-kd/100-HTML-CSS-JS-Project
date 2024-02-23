let arrow=document.getElementById("arrow");
console.log(arrow);

window.addEventListener("scroll", () => {
      let position = window.scrollY;
      console.log(position);
      if (position <= 3){
            arrow.classList.toggle('fade-in');
            arrow.classList.toggle('fade-out');
      }
});