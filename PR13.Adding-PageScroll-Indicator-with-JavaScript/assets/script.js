// alert("adf");

let indicator = document.querySelector('.scroll-indicator .progress')
let scroollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', scroll)

function scroll() {
    let scrollTop = document.documentElement.scrollTop;
    let scrolled = (scrollTop / scroollHeight) * 100;

    indicator.style.width = `${scrolled}%`
}

