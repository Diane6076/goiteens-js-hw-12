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

const applyCallbackToElements = (arr, callback) => {
    const resultArray = [];
  
    for (let i = 0; i < arr.length; i++) {
      const result = callback(arr[i]);
      resultArray.push(result);
    }
    return resultArray;
};

const arr = [1, 2, 3, 4, 5];
const squareCallback = (x) => x * x; 

const results = applyCallbackToElements(arr,squareCallback);
console.log(results); //[1, 4, 9, 16, 25]
  
//5
