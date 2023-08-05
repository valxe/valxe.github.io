document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});

document.addEventListener("touchstart", function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
}, { passive: false });

const randomNumberElement = document.getElementById("randomNumber");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 101) + 1;
    randomNumberElement.textContent = randomNumber;
});
