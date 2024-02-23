const copyText = document.querySelector("textarea[name='copytxt']");
const finalText = document.querySelector("textarea[name='finaltxt']");

const moveBtn = document.querySelector(".moverbtn");
const copyBtn = document.querySelector(".copybtn");

const output = document.querySelector(".output");

copyBtn.addEventListener("click", () => {
      let temp = copyText.value;
      CopyToClipBoard(temp);      
});

moveBtn.addEventListener("click", () => {
      let temp = copyText.value;
      finalText.value = temp;
});

copyText.addEventListener("   click", () => this.select());
finalText.addEventListener("   click", () => this.select());

function CopyToClipBoard(str) {
      const outputContainer = document.querySelector(".output-container");
      const textarea = document.createElement("textarea");

      textarea.value=str;
      outputContainer.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      outputContainer.removeChild(textarea);
      output.innerHTML=`<h3> content copied </h3>`;
      output.classList.add('added');
      setTimeout(() => {
            output.classList.toggle('added');
            output.textContent = "";
      }, 2000);
}