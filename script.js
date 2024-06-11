// let header = document.querySelector(".menu-icon");
// let nav = document.querySelector('.navbar');
 
// function menuClick(){
//    header.addEventListener('click', ()=>{
//     if(nav = 'active'){
//         nav.classList.toggle('menu-icon');
   
//     }
   
//  } )
// }
//  menuClick();
// let header = document.querySelector(".menu-icon");
// let nav = document.querySelector('.navbar');

// function menuClick() {
//     header.addEventListener('click', () => {
//         nav.classList.toggle('active');
//     });
// }

// menuClick();

// let header = document.querySelector(".menu-icon");
// let nav = document.querySelector('.navbar');

// function menuClick() {
//     header.addEventListener('click', () => {
//         nav.classList.contains('active') ? nav.classList.remove('active') : nav.classList.add('active');
//     });
// }

// menuClick();

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

