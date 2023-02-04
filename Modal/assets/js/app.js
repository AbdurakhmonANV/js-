const modalBtnEl = document.querySelector("#open-modal");
const modalWrapperEl = document.querySelector(".modal_wrapper");
const closeBtnEl = document.querySelector(".close__button")
console.log();



function openModal(){
    modalWrapperEl.style.display ="flex"
}
function closeModal(){
    modalWrapperEl.style.display =  "none"
}
closeBtnEl.addEventListener("click",  closeModal);
modalBtnEl.addEventListener("click",  openModal);