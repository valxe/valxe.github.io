const randomNumberElement = document.getElementById("randomNumber");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1; // Change 100 to your desired range
    randomNumberElement.textContent = randomNumber;
});
