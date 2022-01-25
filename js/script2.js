const modalEl = document.getElementById("modal");
const myModal = document.querySelector('dialog');
const requestConsultButtons = Array.from(document.getElementsByClassName("requestConsultBtn"));
const cancelBtn = document.getElementById("cancelBtn");

requestConsultButtons.forEach(btn => {
    btn.addEventListener('click', function(){
        modalEl.classList.remove('hidden');
    });
});

cancelBtn.addEventListener("click", function (){
    modalEl.classList.add('hidden');
});

