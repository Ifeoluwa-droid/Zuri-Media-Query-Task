const submitBtn = document.querySelector(".submit-btn");
const inputs = document.querySelectorAll("input");
const warningTexts = document.querySelectorAll(".warning-text");

const placeholders = ['First Name', 'Last Name', 'Email Address', 'Password'];

submitBtn.addEventListener("click", (event) => {

    allInputsFilled = true;
    event.preventDefault();

    inputs.forEach((input, i) => {
        if (!input.value) {
            allInputsFilled = false;
            if (input.name === "email") {
                input.classList.add("email-required");
                input.placeholder = 'email@example.com';
            } else {
                input.classList.add("required");
                input.placeholder = '';
            }  
            warningTexts[i].classList.add("visible");      
        }
    });

    if (allInputsFilled) {
        inputs.forEach((input, i) => {
            input.value = "";
            input.placeholder = placeholders[i];
        })}
});

inputs.forEach((input, i) => {
    input.addEventListener("change", () => {
        if (input.value) {
            if (input.name === "email") {
                input.classList.remove("email-required");
                input.placeholder = '';
            } else {
                input.classList.remove("required");
                input.placeholder = '';
            } 
            warningTexts[i].classList.remove("visible");
        }
    });
});