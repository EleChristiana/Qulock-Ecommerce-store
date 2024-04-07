const header = document.querySelector(".menu-icon");
const nav = document.querySelector('.navbar');
 
function menuClick(){
   header.addEventListener('click', ()=>{
    // header.innerHTML = "menu-icon" ? "X" : "menu-icon";
   nav.classList.toggle('navbar');
 } )
}
 menuClick();


function sendMessage(){
    let button = document.querySelector('.btn');
    button.addEventListener('click', (event)=> {
        location.href ="https://wa.link/2ntwgl"
    })
}

sendMessage();



function sendMessageAgain(){
    let button = document.querySelector('.btns');
    button.addEventListener('click', (event)=> {
        location.href ="https://wa.link/2ntwgl"
    })
}

sendMessageAgain();

