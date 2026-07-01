// ===========================
// MOBILE MENU
// ===========================

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("show");

});

// ===========================
// STICKY NAVBAR EFFECT
// ===========================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background="#08223f";
        navbar.style.padding="14px 8%";

    }

    else{

        navbar.style.background="#0b2d52";
        navbar.style.padding="18px 8%";

    }

});

// ===========================
// SCROLL REVEAL
// ===========================

const observer = new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("visible");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".campus-card,.service,.price-card,.contact-box")
.forEach(card=>{

    card.classList.add("hidden");

    observer.observe(card);

});

// ===========================
// ACTIVE NAVIGATION
// ===========================

const sections=document.querySelectorAll("section");
const navItems=document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(scrollY>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")=="#"+current){

            link.classList.add("active");

        }

    });

});

// ===========================
// SMOOTH BUTTON ANIMATION
// ===========================

document.querySelectorAll(".btn,.btn2,.card-btn")
.forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-5px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0px)";

    });

});

// ===========================
// FLOATING WHATSAPP
// ===========================

const whatsapp=document.querySelector(".whatsapp");

setInterval(()=>{

    whatsapp.animate([

        {transform:"scale(1)"},
        {transform:"scale(1.12)"},
        {transform:"scale(1)"}

    ],{

        duration:1200

    });

},4000);