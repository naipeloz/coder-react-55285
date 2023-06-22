const inputName = document.getElementById('name');
const inputEmail = document.getElementById('email');
const inputMessage = document.getElementById('message');
const buttonSend = document.getElementById('send');

buttonSend.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(`Este es el mensaje enviado por ${inputName.value}-${inputEmail.value}: ${inputMessage.value}`)
})