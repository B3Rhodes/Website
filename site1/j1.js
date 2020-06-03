const btnTop = document.querySelector("#btnTop");

window.addEventListener("scroll", backTopBtn);

function backTopBtn(){
    if(pageYOffset > 100){
        btnTop.style.display = "block";
    }
    else {
        btnTop.style.display = "none";
    }
}

btnTop.addEventListener("click", backTop);

function backTop(){
    window.scrollTo(0,0);
}