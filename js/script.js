const requestConsultBtn = document.getElementById("requestConsultBtn");
const cancelBtn = document.getElementById("cancelBtn");
const modal = document.getElementById("modal");

requestConsultBtn.addEventListener("click", function (){
    modal.classList.remove("hidden");
});

cancelBtn.addEventListener("click", function (){
    modal.classList.add("hidden");
});