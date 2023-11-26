const btn = document.querySelector('.btn');
const form_1 = document.getElementById('f1');
const form_2 = document.querySelector('.cont-section2');
let category = [];
var l = localStorage;

function updateUser(){
    category = ["category1","category2","category3"].map((id) => {
        const checkbox = document.getElementById(id);
        if(checkbox.checked)
        {
            return checkbox.value;
        }
        return null;
    }).filter((value) => value !== null);
}

function updateStepIndicator(step) {
    const stepIndicator = document.getElementById("step-counter-indicator");
    stepIndicator.innerHTML = "";
    for (let i = 1; i <= 3; i++) {
        const circle = document.createElement("div");
        circle.classList.add("circle");
        if (i < step) {
            circle.classList.add("status-completed");
        } else if (i === step) {
            circle.classList.add("status-completed");
            circle.classList.add("status-completed-active");
        }
        stepIndicator.appendChild(circle);
    }
}

function esconder(event, step){
    event.preventDefault();
    updateUser();
    document.getElementById("step" + (step - 1)).classList.add("desactivado");
    document.getElementById("step" + (step)).classList.remove("desactivado");

    const stepCounter = document.getElementById("step-number");
    stepCounter.innerText = step;

    updateStepIndicator(step);

    if(step == 3)
    {
        const summaryN = document.getElementById("summary-name");
        summaryN.innerHTML = l.getItem("fn");
        const summaryE = document.getElementById("summary-email");
        summaryE.innerHTML = l.getItem("em");
        const summaryC = document.getElementById("summary-category");
        summaryC.innerHTML=category.map((category) => `<li>${category}</li>`).join(" ");
    }
}


const email = document.getElementById('GET-email')
const first_name = document.getElementById('GET-name');

first_name.addEventListener("focusout", function() {
    l.setItem("fn", first_name.value);
})


email.addEventListener("focusout", function() {
    l.setItem("em", email.value);
})



updateStepIndicator(1);


