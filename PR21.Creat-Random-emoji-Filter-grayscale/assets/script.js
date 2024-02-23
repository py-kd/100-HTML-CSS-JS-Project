const target= document.querySelector("#emoji");
// console.log(target)

const emojiArr=[
      "😂",
      "😊",
      "🤣",
      "❤️",
      "😍",
      "😒",
      "😘",
      "😁",
      "👍",
      "🤦‍♀️",
      "😎",
      "😉",
      "😢",
      "😜",
      "🤞",
      "🤫",
      "🥸",
      "🙊",
      "🐎",
];

target.addEventListener("mouseover",function(e) {
      target.innerHTML = emojiArr[Math.floor(Math.random() * emojiArr.length)]
});