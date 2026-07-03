// ==========================
// Smooth Button Click
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// ==========================
// Contact Form Validation
// ==========================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    const name = form.querySelector("input[type='text']").value.trim();

    const email = form.querySelector("input[type='email']").value.trim();

    const message = form.querySelector("textarea").value.trim();

    if(name === "" || email === "" || message === ""){

        alert("Please fill all fields!");

        return;

    }

    alert("Message Sent Successfully!");

    form.reset();

});


// ==========================
// Scroll Reveal Animation
// ==========================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

const hiddenElements = document.querySelectorAll(".card,.about,.gallery,.contact,.stat");

hiddenElements.forEach((el)=>observer.observe(el));


// ==========================
// Animated Counter
// ==========================

const counters = document.querySelectorAll(".stat h2");

counters.forEach(counter=>{

const updateCounter = ()=>{

const target = parseInt(counter.innerText);

const count = +counter.getAttribute("data-count") || 0;

const increment = target / 80;

if(count < target){

counter.setAttribute("data-count", Math.ceil(count + increment));

counter.innerText = Math.ceil(count + increment);

setTimeout(updateCounter,20);

}
else{

counter.innerText = target;

}

}

updateCounter();

});


// ==========================
// Navbar Background Change
// ==========================

window.addEventListener("scroll",()=>{

const header=document.querySelector("header");

if(window.scrollY>100){

header.style.background="#08111f";

}

else{

header.style.background="rgba(0,0,0,.6)";

}

});


// ==========================
// Typing Effect
// ==========================

const title=document.querySelector(".hero h1");

const text="WELCOME TO THE FUTURE";

let i=0;

title.innerHTML="";

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();


// ==========================
// Hero Button Animation
// ==========================

const buttons=document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn=>{

btn.addEventListener("mouseover",()=>{

btn.style.transform="scale(1.08)";

});

btn.addEventListener("mouseout",()=>{

btn.style.transform="scale(1)";

});

});


// ==========================
// Back To Top Button
// ==========================

const topBtn=document.createElement("button");

topBtn.innerHTML="⬆";

topBtn.style.position="fixed";
topBtn.style.bottom="20px";
topBtn.style.right="20px";
topBtn.style.padding="12px 18px";
topBtn.style.border="none";
topBtn.style.borderRadius="50%";
topBtn.style.background="cyan";
topBtn.style.cursor="pointer";
topBtn.style.display="none";
topBtn.style.fontSize="18px";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topBtn.style.display="block";

}

else{

topBtn.style.display="none";

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});