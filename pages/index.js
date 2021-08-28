const userDisplay = document.querySelector('.calculator__input');

let input = '';

const press = (num) => {
  input += num;
  userDisplay.value = input;
}

const erase = () => {
  userDisplay.value = ''
  input = ''
}

const equal = () => {
  userDisplay.value = eval(input)
  input = ''
}
