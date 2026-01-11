const startDate = new Date("2025-05-11");

function updateTime() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    document.getElementById("time").innerText =
        days + "cumartesi" + hours + " 14:15🥰";
}

setInterval(updateTime, 1000);
updateTime();

function showLove() {
    document.getElementById("loveMessage").innerText =
        "SENİ ÇOK SEVİYORUM İYİ Kİ VARSIN İYİ Kİ HAYATIMDASIN BANA YAŞATTIĞIN HER HAYALİM İÇİN SANA ÇOK TEŞEKKÜR EDERİM VE ÇOK MİNNETTARIM🥰🥰🥰💕💖";
}
function createHeart() {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 400);
let slideIndex = 0;
const slides = document.querySelectorAll(".slider img");

setInterval(() => {
    slides[slideIndex].classList.remove("active");
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add("active");
}, 3000);
const text = "seninle gecirdigim her gün dünyanın en güzel günü seninle aslında 7 ay degil kocaman bi ömür yasamak istiyorum bitaneeeemmmm🥰🥰";
let index = 0;

function typingEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typingEffect, 60);
    }
}

typingEffect();