

let header = document.querySelector(".menu-icon");
let nav = document.querySelector('ul.navbar');

function menuClick() {
    header.addEventListener('click', () => {
        nav.classList.toggle('active');
    });
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

