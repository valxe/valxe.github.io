const randomNumberElement = document.getElementById("randomNumber");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
    const randomNumber = Math.floor(Math.random() * 101) + 1;
    randomNumberElement.textContent = randomNumber;
});
