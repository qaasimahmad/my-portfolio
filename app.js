const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLinks = document.querySelectorAll("#hLink");
const body = document.querySelector("body")
const refLinks = document.querySelectorAll("#refLinks");
const mode = document.querySelector("#mode");
const submit = document.querySelector("#submit");


hamburger.addEventListener("click", ()=>{
    menu.classList.toggle("hidden");
    hamburger.classList.toggle("bg-white");
});

hLinks.forEach(link=>{
    link.addEventListener("click", ()=>{
        menu.classList.toggle("hidden");
        hamburger.classList.toggle("bg-white");
    })
});

refLinks.forEach(link=>{
    link.addEventListener("mouseover", ()=>{
        link.style.color = 'white'
    })
});

refLinks.forEach(link=>{
    link.addEventListener("mouseout", ()=>{
        link.style.color = 'rgb(79 70 229)'
    })
});

mode.addEventListener("click", ()=>{
    body.classList.toggle("dark")
});

submit.addEventListener("click", ()=>{
    const username = document.getElementById("username").value;
    const email = document.getElementById("email");
    const isVaildEmail = checkEmail(email);
    if(isVaildEmail){
        //Send mail to Users Later
        //const msgBody = document.getElementById("msg-body");
        alert(`Welcome ${username}, I have received your message and I'll reply ASAP 😊`);
    }
});

function checkEmail(email) {

    const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!filter.test(email.value)) {
    alert('Please provide a valid email address');
    email.focus;
    return false;
 }
 return true;
}