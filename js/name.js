const nameForm = document.querySelector("#name-form");
const inputName = nameForm.querySelector("#name");
const result = nameForm.querySelector("#result");

const HIDDEN = "hidden";
const NAME = "name";

function addName(event) {
    event.preventDefault();
    result.innerText = `Hi ${inputName.value}! Welocme!`;
    result.classList.remove(HIDDEN);
    inputName.classList.add(HIDDEN);
    localStorage.setItem(NAME, inputName.value);
}

const localName = localStorage.getItem(NAME);

if(localName !== null) {
    result.innerText = `Hi ${localName}! Welocme!`;
    result.classList.remove(HIDDEN);
    inputName.classList.add(HIDDEN);
} else {
    nameForm.addEventListener("submit", addName);
}