let mobileNav = document.querySelector(".mobile-nav");
let header = document.querySelector(".header");
let toggleNavbar = () => {
    header.classList.toggle("active");
}
mobileNav.addEventListener("click", () => toggleNavbar());

let username = document.getElementById("username");
let email = document.getElementById("email")
let flag = 1;
function validateForm() {
    if (username.value == "") {
        document.getElementById("usererror").innerHTML = "**Username is Empty";
        flag = 0;
    } else if (username.value.length < 3) {
        document.getElementById("usererror").innerHTML = "**Username requird min 3 char";
        flag = 0;
    } else {
        document.getElementById("usererror").innerHTML = "";
        flag = 1;
    }
    if (email.value == "") {
        document.getElementById("emailerror").innerHTML = "**Email Is Empty";
        flag = 0;
    }
    if (flag) {
        return true;
    } else {
        return false
     }
    
}