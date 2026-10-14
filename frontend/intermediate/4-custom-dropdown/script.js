const btn = document.getElementById("btn");
const innerbtn = document.getElementById("inner-btn");
const optionDispaly = document.getElementById("options");
const icon = document.getElementById("icon");
console.log(icon.classList.contains("fa-chevron-down"));

const isoptionopen = optionDispaly.classList.contains("hidden");

function toggleOptions() {
  optionDispaly.classList.toggle("hidden");
  if (icon.classList.contains("fa-chevron-down")) {
    icon.classList.replace("fa-chevron-down", "fa-chevron-up");
  } else {
    icon.classList.replace("fa-chevron-up", "fa-chevron-down");
  }
}

btn.addEventListener("click", toggleOptions);

document.querySelectorAll(".option").forEach((divbtn) => {
  divbtn.addEventListener("click", () => {
    const text = divbtn.querySelector(".option-text").textContent.trim();
    innerbtn.innerText = text;
    optionDispaly.classList.add("hidden");
  });
});
