/* =========================
   BEGIN THEIR STORY BUTTON
========================= */

function startJourney() {
    const story = document.getElementById("story");

    if (story) {
        story.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}


/* =========================
   FLOATING HEARTS
========================= */

const heartsContainer = document.querySelector(".hearts");

function createHeart() {

    if (!heartsContainer) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";
    heart.innerHTML = "♥";

    // Random horizontal position
    heart.style.left = Math.random() * 100 + "vw";

    // Random size
    heart.style.fontSize =
        Math.random() * 15 + 10 + "px";

    // Random animation duration
    const duration =
        Math.random() * 3 + 5;

    heart.style.animationDuration =
        duration + "s";

    // Slightly random opacity
    heart.style.opacity =
        Math.random() * 0.4 + 0.2;

    heartsContainer.appendChild(heart);

    // Remove after animation
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}


/* Create a heart every 900ms */

setInterval(createHeart, 900);


/* Create a few immediately when page opens */

for (let i = 0; i < 5; i++) {
    setTimeout(createHeart, i * 400);
}
