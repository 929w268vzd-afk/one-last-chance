function showLetter() {

    document.querySelector(".hero").style.display = "none";
    document.getElementById("letter").style.display = "block";

    startHearts();

}

function startHearts() {

    setInterval(() => {

        const heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.top = "-20px";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.pointerEvents = "none";
        heart.style.animation = "fall 5s linear";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 5000);

    }, 300);

}

const style = document.createElement("style");

style.innerHTML = `
@keyframes fall{
0%{
transform:translateY(-10vh);
opacity:1;
}
100%{
transform:translateY(110vh);
opacity:0;
}
}
`;

document.head.appendChild(style);
window.addEventListener("load",()=>{

const loader=document.getElementById("loader");

setTimeout(()=>{
loader.style.display="none";
},2000);

});

const button=document.querySelector(".loveBtn");

if(button){

button.addEventListener("click",()=>{

alert(
"❤️ Thank you for visiting this website.\n\nNo matter what your decision is,\nI will always respect you.\n\n- Pradeep ❤️"
);

});

}

const images=document.querySelectorAll(".gallery img");

images.forEach(img=>{

img.addEventListener("click",()=>{

const overlay=document.createElement("div");

overlay.style.position="fixed";
overlay.style.left="0";
overlay.style.top="0";
overlay.style.width="100%";
overlay.style.height="100%";
overlay.style.background="rgba(0,0,0,.95)";
overlay.style.display="flex";
overlay.style.justifyContent="center";
overlay.style.alignItems="center";
overlay.style.zIndex="9999";

const photo=document.createElement("img");

photo.src=img.src;
photo.style.maxWidth="90%";
photo.style.maxHeight="90%";
photo.style.borderRadius="20px";

overlay.appendChild(photo);

overlay.onclick=()=>overlay.remove();

document.body.appendChild(overlay);

});

});

function createHeart(){

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(20+Math.random()*20)+"px";
heart.style.pointerEvents="none";
heart.style.zIndex="999";

heart.animate(

[
{transform:"translateY(0)",opacity:1},
{transform:"translateY(-120vh)",opacity:0}
],

{
duration:5000+Math.random()*3000
}

);

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

}

setInterval(createHeart,700);
const music=document.getElementById("bgMusic");
const musicBtn=document.getElementById("musicBtn");

musicBtn.onclick=()=>{

if(music.paused){

music.play();
musicBtn.innerHTML="⏸ Pause Music";

}else{

music.pause();
musicBtn.innerHTML="🎵 Play Music";

}

};
const slides=document.querySelectorAll(".slide");

let current=0;

function showSlide(){

slides[current].classList.remove("active");

current++;

if(current>=slides.length){

current=0;

}

slides[current].classList.add("active");

}

setInterval(showSlide,4000);
const text =
"Every beautiful story deserves one last chance. This website is not made to force you. It is simply made from my heart. ❤️";

const typing = document.getElementById("typing");

let i = 0;

function typeWriter(){

if(i < text.length){

typing.innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

typeWriter();
