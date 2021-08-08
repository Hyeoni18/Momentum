const itemForm = document.getElementById("item-form");
const itemInput = itemForm.querySelector("input");
const itemList = document.getElementById("item-list");

const ITEM_KEY = "item";

let addItem = []; //[{id:1, text:"세면도구"}, {id:2, text:"잠옷"}, {id:3, text:"충전기"}, {id:4, text:"우비"}, {id:5, text:"카메라"}];

function saveItems() {
    localStorage.setItem(ITEM_KEY, JSON.stringify(addItem));
}

function deleteItem(event) {
    const li = event.target.parentElement;
    li.remove();
    addItem = addItem.filter(item => item.id !== parseInt(li.id));
    saveItems();
}

function printItem(newItemObj) {
    const li = document.createElement("li");
    li.id = newItemObj.id;
    const span = document.createElement("span");
    span.innerText = newItemObj.text;
    const button = document.createElement("button");
    button.innerText = "삭제";
    button.addEventListener("click", deleteItem);
    li.appendChild(span);
    li.appendChild(button);
    itemList.appendChild(li);
}

function handleItemSubmit(event) {
    event.preventDefault();
    const newItem = itemInput.value; 
    itemInput.value = "";
    const newItemObj = {
        text: newItem,
        id: Date.now(),
    };
    addItem.push(newItemObj);
    printItem(newItemObj);
    saveItems();
}

itemForm.addEventListener("submit", handleItemSubmit);

const savedItem = localStorage.getItem(ITEM_KEY);

if(savedItem !== null) {
    const parsedItem = JSON.parse(savedItem);
    addItem = parsedItem;
    addItem.forEach(printItem);
} else {
    saveItems();
}

