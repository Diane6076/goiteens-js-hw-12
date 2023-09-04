//1
const showMessage = () => {
    alert('Hello World!');
};
const helloBtn = document.getElementById('helloBtn');
helloBtn.addEventListener('click', showMessage);
//2

const p = document.querySelector('guessResult');
let inp ;
let randomNumber;

const checkGuess = () => {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    inp = Number(document.querySelector('guessField').value);
  if (inp < 1 || inp > 100) {
     return p.textContent = 'u enter vrong num';
  } else if (inp === randomNumber) {
    return p.textContent = 'congradulation';
  } else {
    p.textContent = 'wrong!';
  }
}


//3
const clickCountElement = document.getElementById('clickCount');

let clickCount = 0;

document.addEventListener('click', () => {
    clickCount++;
    clickCountElement.textContent = clickCount.toString();
});
//4

//5
