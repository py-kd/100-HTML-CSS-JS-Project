const input = document.querySelector('#input-box');
console.log(input);

const eye = document.querySelector('#eye-icon');
console.log(eye);

eye.addEventListener('click', () =>{      
      // if (input.type === 'password'){
      //       input.type = 'text';
      // }      else{
      //       input.type = 'password';
      // }

      // REFECTOR 
      // input.type = input.type === 'password' ? 'text' : 'password';
      input.type === "password" ? (input.type = 'text') : (input.type = 'password');
})