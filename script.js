function startJourney() {
    document.getElementById("story").scrollIntoView({
        behavior: "smooth"
    });
}


/* Create floating hearts */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "♥";

    heart.style.position = "fixed";
    heart.style.bottom = "-30px";
    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    heart.style.opacity =
        Math.random() * 0.5 + 0.2;

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "999";

    heart.style.animation =
        "floatHeart 6s linear forwards";

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 900);


/* Add heart animation */

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatHeart {

    0% {
        transform: translateY(0) rotate(0deg);
        opacity: 0;
    }

    20% {
        opacity: 0.6;
    }

    100% {
        transform:
            translateY(-110vh)
            rotate(360deg);

        opacity: 0;
    }

}

`;

document.head.appendChild(style);