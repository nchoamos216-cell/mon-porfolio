/*=====================================
    EFFET MACHINE À ÉCRIRE
=====================================*/

const text = "Développeur Web Full Stack";
const typingElement = document.querySelector(".typing");

let index = 0;

function typeWriter() {

    if (typingElement && index < text.length) {

        typingElement.innerHTML += text.charAt(index);

        index++;

        setTimeout(typeWriter, 80);

    }

}

window.addEventListener("load", typeWriter);



/*=====================================
        MENU RESPONSIVE
=====================================*/

const menu = document.querySelector(".menu");
const toggle = document.querySelector(".menu-toggle");
const icon = document.querySelector(".menu-toggle i");

if (toggle && menu) {

    toggle.addEventListener("click", () => {

        menu.classList.toggle("active");

        if (menu.classList.contains("active")) {

            icon.classList.remove("fa-bars");
            icon.classList.add("fa-xmark");

        } else {

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        }

    });

}


// Fermer le menu après un clic sur un lien

document.querySelectorAll(".menu a").forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});



/*=====================================
        MODE SOMBRE / CLAIR
=====================================*/

const themeBtn = document.querySelector(".theme");

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        document.body.classList.toggle("light-mode");

        const themeIcon = themeBtn.querySelector("i");

        if (document.body.classList.contains("light-mode")) {

            themeIcon.classList.remove("fa-moon");
            themeIcon.classList.add("fa-sun");

        } else {

            themeIcon.classList.remove("fa-sun");
            themeIcon.classList.add("fa-moon");

        }

    });

}



/*=====================================
        AOS
=====================================*/

if (typeof AOS !== "undefined") {

    AOS.init({

        duration: 1000,

        once: true,

        offset: 100

    });

}



/*================ NAVBAR SCROLL =================*/

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        navbar.classList.add("scrolled");

    }else{

        navbar.classList.remove("scrolled");

    }

});


/*================ ACTIVE MENU =================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const sectionTop=section.offsetTop-150;

        const sectionHeight=section.clientHeight;

        if(scrollY>=sectionTop){

            current=section.getAttribute("id");
        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});



/*================ SKILLS =================*/

const progressBars=document.querySelectorAll(".progress span");

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width=entry.target.dataset.width;

entry.target.style.width=width;

}

});

});

progressBars.forEach(bar=>{

observer.observe(bar);

});


window.addEventListener("load",()=>{

const preloader=document.getElementById("preloader");

preloader.style.opacity="0";

setTimeout(()=>{

preloader.style.display="none";

},500);

});