document.getElementById("btn").addEventListener("click", function() {
      let num1 = document.querySelector('.num1').value;
      // console.log(num1)
      let num2 = document.querySelector('.num2').value;
      // console.log(num2)
      let result = document.querySelector('.result');
      // console.log(result)

      let operator = document.getElementById('selectOperation').value;
      console.log(operator)

      switch (operator) {
            case "plus":
                  result.innerHTML =` ${Number(num1)} + ${Number(num2)} => Ans : ${Number(num1) + Number(num2)}`;
                  break;
            case "min":
                  result.innerHTML = ` ${Number(num1)} - ${Number(num2)} => Ans : ${Number(num1) - Number(num2)}`;
                  break;
            case "multi":
                  result.innerHTML = ` ${Number(num1)} * ${Number(num2)} => Ans : ${Number(num1) * Number(num2)}`;
                  break;
            case "div":
                  result.innerHTML = ` ${Number(num1)} / ${Number(num2)} => Ans : ${Number(num1) / Number(num2)}`;
                  break;
            case "mod":
                  result.innerHTML = ` ${Number(num1)} % ${Number(num2)} => Ans : ${Number(num1) % Number(num2)}`;
                  break;
            default:
                  result.innerHTML ="Result";
                  break;
      }
});