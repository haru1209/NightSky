const inputElement = document.getElementById("input");
const body = document.querySelector("body");
const discriptionContainerElement = document.querySelector(
  ".discription-container",
);
let inputValue;

inputElement.addEventListener("input", (e) => {
  inputValue = e.target.value;
  // console.log("input:", inputValue);
});

inputElement.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    discriptionContainerElement.classList.add("transparent");
    createStars(inputValue);
    // console.log("enter:", inputValue);
  }
});

const createStars = (count) => {
  console.log(count);
  for (let i = 0; i < count; i++) {
    let starElement = document.createElement("span");
    starElement.className = "star";
    starElement.textContent = "*";
    starElement.style.left = Math.random() * window.innerWidth + "px";
    starElement.style.top = Math.random() * window.innerHeight + "px";

    setTimeout(() => {
      body.appendChild(starElement);
    }, 100 * i);
  }
};
