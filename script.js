const randomNumberElement = document.getElementById("randomNumber");

window.addEventListener("load", () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Change 100 to your desired range
    randomNumberElement.textContent = randomNumber;
});
