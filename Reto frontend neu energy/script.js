// botones de dia, mes, año//

const dayButton = document.getElementById("dayButton");
const monthButton = document.getElementById("monthButton");
const yearButton = document.getElementById("yearButton");


dayButton.addEventListener("click", function () {
    dayButton.classList.add("active");
    monthButton.classList.remove("active");
    yearButton.classList.remove("active");
});


monthButton.addEventListener("click", function () {
    monthButton.classList.add("active");
    dayButton.classList.remove("active");
    yearButton.classList.remove("active");
});


yearButton.addEventListener("click", function () {
    yearButton.classList.add("active");
    dayButton.classList.remove("active");
    monthButton.classList.remove("active");
});
