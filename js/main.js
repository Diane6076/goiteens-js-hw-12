//1
const showMessage = () => {
    alert('Hello World!');
};
const helloBtn = document.getElementById('helloBtn');
helloBtn.addEventListener('click', showMessage);
//2

//3
const clickCountElement = document.getElementById('clickCount');

let clickCount = 0;

document.addEventListener('click', () => {
    clickCount++;
    clickCountElement.textContent = clickCount.toString();
});
//4

//5
