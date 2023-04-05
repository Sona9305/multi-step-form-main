const btn = document.querySelector(".btn-next");
const btn2 = document.querySelector(".btn-next2")

const step1 = document.querySelector(".main-container");
const step2 = document.querySelector(".display2");
const step3 = document.querySelector(".display3");

btn.addEventListener("click", () => {
    step1.style.display = "none";
    step2.style.display = "flex";
}) 

btn2.addEventListener("click", () => {
    step2.style.display = "none"
    step3.style.display = "flex"
})

// btn3.addEventListener("click", () => {

// })