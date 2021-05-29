const container = document.querySelector(".container");

const close = document.getElementById("close");
const open = document.getElementById("open");

open.addEventListener("click", function(){
    container.classList.add("show-nav");
    })

close.addEventListener("click", function(){
    container.classList.remove("show-nav");
})