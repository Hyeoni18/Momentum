const planForm = document.getElementById("plan-form");
const planInput = planForm.querySelector("input");
const planList = document.getElementById("plan-list");

const PLAN_KEY = "plan";

let addplan = [];

function savePlans() {
    localStorage.setItem(PLAN_KEY, JSON.stringify(addplan));
}

function deletePlan(event) {
    const li = event.target.parentElement;
    li.remove();
    addplan = addplan.filter(plan => plan.id !== parseInt(li.id));
    savePlans();
}

function printPlan(newPlanObj) {
    const li = document.createElement("li");
    li.id = newPlanObj.id;
    const span = document.createElement("span");
    span.innerText = newPlanObj.text;
    const button = document.createElement("button");
    button.innerText = "삭제";
    button.addEventListener("click", deletePlan);
    li.appendChild(span);
    li.appendChild(button);
    planList.appendChild(li);
}

function handlePlanSubmit(event) {
    event.preventDefault();
    const newPlan = planInput.value; 
    planInput.value = "";
    const newPlanObj = {
        text: newPlan,
        id: Date.now(),
    };
    addplan.push(newPlanObj);
    printPlan(newPlanObj);
    savePlans();
}

planForm.addEventListener("submit", handlePlanSubmit);

const savedPlan = localStorage.getItem(PLAN_KEY);

if(savedPlan !== null) {
    const parsedPlan = JSON.parse(savedPlan);
    addplan = parsedPlan;
    addplan.forEach(printPlan);
} else {
    savePlans();
}

