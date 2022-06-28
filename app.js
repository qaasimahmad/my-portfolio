const hamburger = document.querySelector('#hamburger');
const menu = document.querySelector('#menu');
const hLinks = document.querySelectorAll("#hLink");
const body = document.querySelector("body")
const refLinks = document.querySelectorAll("#refLinks");
const mode = document.querySelector("#mode");

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
})

refLinks.forEach(link=>{
    link.addEventListener("mouseout", ()=>{
        link.style.color = 'rgb(79 70 229)'
    })
})

mode.addEventListener("click", ()=>{
    body.classList.toggle("dark")
})