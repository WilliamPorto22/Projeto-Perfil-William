const modal = document.querySelector('.modal-container')
const modal2 = document.querySelector('.modal-container-2')

function openModal(){
    modal.classList.add ('active')
}
function openModal2(){
    modal2.classList.add ('active')
}

function closeModal(){
    modal.classList.remove ('active')
}
function closeModal2(){
    modal2.classList.remove ('active')
}