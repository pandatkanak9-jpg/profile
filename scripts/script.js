const toggle = document.getElementById('menu-toggle');

if(toggle){
    toggle.addEventListener("change",()=> {
        document.body.classList.toggle("no-scroll", toggle.checked);
    });
}

const words = [
    "Creative Thinker", "Growth Mindset", "Passionate Developer", "Problem Solver", "Student", "Tech Enthusiast"
];

const typingText = document.getElementById("typing-span");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingDelay = 100;
let erasingDelay = 100;
let nextWordDelay = 1000;

const type = () =>{
    const currentWord = words[wordIndex];

if(!isDeleting){
    typingText.textContent = currentWord.substring(0, charIndex+1);
    charIndex++;

if(charIndex === currentWord.length){
    isDeleting = true;
    setTimeout(type, nextWordDelay);
}else{
    setTimeout(type, typingDelay);
}
}else{
    typingText.textContent = currentWord.substring(0, charIndex -1);
    charIndex--;

    if (charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex+1) % words.length;
        setTimeout(type, 500);
    }else{
        setTimeout(type, erasingDelay);
    }
}
};

document.addEventListener("DOMContentLoaded", () =>{
    if(words?.length) type();
});   

const navlinks = document.querySelectorAll(".navlink");
const tabs = document.querySelectorAll(".content");
                        
navlinks.forEach((link) => {
    link.addEventListener("click", (e) => {
    
        e.preventDefault();
        
        const tabName = link.dataset.tab;

        navlinks.forEach(l => l.classList.toggle("active", l === link));
        tabs.forEach(tab => tab.classList.toggle("active", tab.id === tabName));

       
        if (toggle) {
            toggle.checked = false; 
            document.body.classList.remove("no-scroll"); 
        }
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});