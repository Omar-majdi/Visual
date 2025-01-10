const movingButton = document.getElementById("moving-button");
const fixedButton = document.getElementById("fixed-button");
const textBoxContainer = document.getElementById("text-box-container");

// Make the moving button jump to a random position when hovered
movingButton.addEventListener("mouseover", () => {
    const x = Math.random() * (window.innerWidth - movingButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - movingButton.offsetHeight);
    movingButton.style.left = `${x}px`;
    movingButton.style.top = `${y}px`;
});

// Show the animated text when the fixed button is clicked
fixedButton.addEventListener("click", () => {
    textBoxContainer.style.display = "block";
});
