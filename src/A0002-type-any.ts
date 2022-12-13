// Utilizar any em último caso
function showMessage(msg: any) {
  return msg;
}

console.log(showMessage([1, 2]));
console.log(showMessage('olá'));
console.log(showMessage(1));
