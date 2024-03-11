const allLabels = document.querySelectorAll(".form-control label");
console.log(allLabels);

allLabels.forEach( (label) => {
      label.innerHTML = label.innerHTML
      .split("")
      .map((letter, index) => {
            return `<span style="transition-delay: ${index * 50}ms "> ${letter}</span>`;
      })
      .join("");
});

// map() method must return something