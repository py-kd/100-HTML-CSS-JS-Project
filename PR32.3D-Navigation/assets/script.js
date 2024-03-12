// container
const container = document.querySelector('.page-container');
console.log(container);

// pages
const pages = document.querySelectorAll('.page');
console.log(pages);

// toggleBtn
const toggleBtn = document.querySelector('.toggle-btn');
console.log(toggleBtn);

// ul
const ul = document.querySelector('.nav-list');
console.log(ul);

// overly
const overly = document.querySelector('.overlay');
console.log(overly);

// links
const links = document.querySelectorAll('.link');
console.log(links);

let pageIndex = 0;

toggleBtn.addEventListener('click', () =>{
      toggleBtn.classList.toggle('active');
      container.classList.toggle('active');
      ul.classList.toggle('show');
});

links.forEach((item, i) =>{
      item.addEventListener('click', () =>{
            nextPage(i);
      });
});

function nextPage(index) {
      overly.style.animation = `slide 1s linear 1`

      setTimeout(() => {
            pages[pageIndex].classList.remove('active');
            pages[index].classList.add('active');
            pageIndex = index
      }, 500);

      setTimeout(() => {
            overly.style.animation = null;
      }, 1000);
}